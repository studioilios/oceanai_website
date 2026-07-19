import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

// Uses the Node runtime (not edge) — the Anthropic SDK and base64 file
// handling below both expect it.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-sonnet-5";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

type ChatMessage = { role: "user" | "assistant"; content: string };

type ChatBody = { mode: "insurance" | "voice"; messages: ChatMessage[] };

type FileExtractBody = {
  mode: "file-extract";
  fileData: string; // base64 for images/PDFs, raw text for the sample prompts
  fileType: string;
  fileName: string;
};

type RequestBody = ChatBody | FileExtractBody;

const SYSTEM_PROMPTS: Record<"insurance" | "voice", string> = {
  insurance: `You are AxisMapper, Ocean AI's insurance-and-medical-coding assistant.
You explain ICD-10-CM, CPT, and MS-DRG codes in plain English for people who
are not medical billers. When a code is given, state what it means, note the
code family it belongs to, and mention what it typically implies for
insurance coverage in India. When a condition or symptom is described
instead of a code, suggest the most likely applicable code(s) and flag that
a certified medical coder or the treating physician should confirm the
final code used for billing. Keep answers under ~180 words, use **bold**
only for code numbers, and never state a code with more confidence than is
warranted — say "typically" or "often" rather than presenting it as
definitive medical or legal advice.`,
  voice: `You are Ocean AI's voice health assistant. You are being read aloud by
text-to-speech, so write in short, plain spoken sentences with no markdown,
no bullet points, and no headers. Answer general health questions clearly
and factually. For anything that sounds like a personal symptom, an
emergency, or a request for a diagnosis, give brief general information and
clearly recommend they consult a doctor or, for anything urgent, seek
immediate medical care — do not attempt to diagnose. Keep responses to 2-4
sentences.`,
};

const FILE_EXTRACT_SYSTEM = `You extract structured data from health documents (lab reports,
prescriptions, insurance cards, and similar) for Ocean AI. Respond with ONLY
a single JSON object — no markdown fences, no commentary before or after —
matching exactly this shape:

{
  "documentType": string,
  "patientInfo": { "name": string | null, "dob": string | null, "id": string | null },
  "date": string | null,
  "provider": string | null,
  "summary": string,
  "keyFindings": [{ "label": string, "value": string, "status": "normal" | "abnormal" | "critical" | "unknown" }],
  "medications": string[],
  "diagnoses": [{ "code": string, "description": string }],
  "followUp": string | null,
  "flags": string[]
}

Use null for any field you cannot determine — never invent patient details,
dates, or codes that are not present in the document. "flags" is for
anything urgent or out-of-range that a person should notice immediately;
leave it as an empty array if nothing qualifies. Keep "summary" to 1-2
sentences.`;

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"] as const;
type AllowedImageType = (typeof ALLOWED_IMAGE_TYPES)[number];

function isAllowedImageType(t: string): t is AllowedImageType {
  return (ALLOWED_IMAGE_TYPES as readonly string[]).includes(t);
}

function extractText(content: Anthropic.Messages.ContentBlock[]): string {
  return content
    .filter((block): block is Anthropic.Messages.TextBlock => block.type === "text")
    .map((block) => block.text)
    .join("\n")
    .trim();
}

function stripJsonFences(raw: string): string {
  return raw
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "Server is missing ANTHROPIC_API_KEY. Add it to your environment and redeploy." },
      { status: 500 }
    );
  }

  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  try {
    if (body.mode === "insurance" || body.mode === "voice") {
      const { messages } = body;
      if (!Array.isArray(messages) || messages.length === 0) {
        return NextResponse.json({ error: "No messages provided." }, { status: 400 });
      }

      const response = await anthropic.messages.create({
        model: MODEL,
        max_tokens: body.mode === "voice" ? 350 : 700,
        system: SYSTEM_PROMPTS[body.mode],
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      });

      return NextResponse.json({ result: extractText(response.content) });
    }

    if (body.mode === "file-extract") {
      const { fileData, fileType, fileName } = body;
      if (!fileData) {
        return NextResponse.json({ error: "No file data provided." }, { status: 400 });
      }

      const content: Anthropic.Messages.MessageParam["content"] = [];

      if (fileType?.startsWith("image/")) {
        if (!isAllowedImageType(fileType)) {
          return NextResponse.json({ error: `Unsupported image type: ${fileType}` }, { status: 400 });
        }
        content.push({ type: "image", source: { type: "base64", media_type: fileType, data: fileData } });
      } else if (fileType === "application/pdf") {
        content.push({
          type: "document",
          source: { type: "base64", media_type: "application/pdf", data: fileData },
        });
      } else {
        // Sample prompts and unrecognized types arrive as plain text, not base64.
        content.push({ type: "text", text: `Document contents:\n${fileData}` });
      }

      content.push({
        type: "text",
        text: `File name: ${fileName || "unknown"}. Extract the structured JSON as instructed.`,
      });

      const response = await anthropic.messages.create({
        model: MODEL,
        max_tokens: 1200,
        system: FILE_EXTRACT_SYSTEM,
        messages: [{ role: "user", content }],
      });

      const raw = extractText(response.content);
      return NextResponse.json({ result: stripJsonFences(raw) });
    }

    return NextResponse.json({ error: `Unknown mode: ${(body as { mode?: string }).mode}` }, { status: 400 });
  } catch (err) {
    console.error("Claude API error:", err);
    const message = err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}