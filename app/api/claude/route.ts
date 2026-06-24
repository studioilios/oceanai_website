import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mode, messages, fileData, fileType, fileName } = body;

    // Build the messages array based on mode
    let apiMessages: { role: string; content: unknown }[] = [];
    let systemPrompt = "";

    if (mode === "file-extract") {
      // File extraction mode — given base64 file, extract health data
      systemPrompt = `You are OceanAI's health document extraction engine. 
Your job is to extract structured health data from any uploaded document.

Return ONLY valid JSON — no markdown fences, no preamble — in this exact shape:
{
  "documentType": "Lab Report | Prescription | Medical Record | Insurance Card | Imaging Report | Other",
  "patientInfo": { "name": "..." | null, "dob": "..." | null, "id": "..." | null },
  "date": "YYYY-MM-DD or descriptive string" | null,
  "provider": "Doctor or facility name" | null,
  "summary": "1-2 sentence plain English summary of the document",
  "keyFindings": [
    { "label": "Finding name", "value": "Value with units", "status": "normal | abnormal | critical | unknown" }
  ],
  "medications": ["med name + dose"] | [],
  "diagnoses": [{ "code": "ICD-10 if visible", "description": "plain English" }] | [],
  "followUp": "Any follow-up instructions mentioned" | null,
  "flags": ["Any critical values or urgent items"] | []
}

If a field is not present in the document, use null or [].
Never invent data. Only extract what is actually in the document.`;

      if (fileType?.startsWith("image/")) {
        apiMessages = [{
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: fileType,
                data: fileData,
              },
            },
            {
              type: "text",
              text: `Extract all health data from this document. File name: ${fileName || "uploaded file"}`,
            },
          ],
        }];
      } else if (fileType === "application/pdf") {
        apiMessages = [{
          role: "user",
          content: [
            {
              type: "document",
              source: {
                type: "base64",
                media_type: "application/pdf",
                data: fileData,
              },
            },
            {
              type: "text",
              text: `Extract all health data from this document. File name: ${fileName || "uploaded file"}`,
            },
          ],
        }];
      } else {
        // Text-based file — treat the content as text
        apiMessages = [{
          role: "user",
          content: `Extract all health data from this document content:\n\nFile: ${fileName}\n\n${fileData}`,
        }];
      }
    } else if (mode === "insurance") {
      // Insurance AI chat mode
      systemPrompt = `You are AxisMapper, OceanAI's insurance intelligence AI — fine-tuned on ICD-10-CM 2026, CPT codes, and MS-DRG mappings.

You help users understand:
- ICD-10-CM diagnosis codes (e.g. E11.9 = Type 2 diabetes without complications)
- CPT procedure codes (e.g. 99213 = Office visit, established patient, moderate complexity)
- MS-DRG codes for hospital reimbursement
- Insurance coverage implications
- Code relationships and common coding patterns

Response format — always structure your answer with these sections when relevant:
**Code:** [the code(s)]
**Description:** [clear plain English]
**Category:** [broad category]
**Coverage notes:** [typical insurance handling, brief]
**Related codes:** [2-3 related codes worth knowing]

Be accurate, clear, and practical. If you don't know a specific code, say so clearly rather than guessing.
Keep responses concise but complete. Use medical accuracy without being overly technical.`;

      apiMessages = messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      }));
    } else if (mode === "voice") {
      // Voice AI mode — general health Q&A
      systemPrompt = `You are OceanAI's voice health assistant. The user has spoken a health question to you.
Respond in a natural, conversational tone — as if speaking aloud.
Keep answers clear, accurate, and under 3 sentences unless more detail is genuinely needed.
Focus on being helpful, not on disclaimers. Always recommend professional consultation for diagnosis.`;

      apiMessages = messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      }));
    } else {
      return NextResponse.json({ error: "Unknown mode" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service is not configured. Set ANTHROPIC_API_KEY in your environment variables." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system: systemPrompt,
        messages: apiMessages,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      return NextResponse.json({ error: "AI service error" }, { status: 500 });
    }

    const data = await response.json();
    const text = data.content?.find((b: { type: string }) => b.type === "text")?.text ?? "";

    return NextResponse.json({ result: text });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
