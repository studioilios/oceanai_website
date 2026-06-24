"use client";

import { useState, useRef, useCallback } from "react";
import PlaygroundShell from "@/components/playground/PlaygroundShell";

type ExtractedField = {
  label: string;
  value: string;
  status: "normal" | "abnormal" | "critical" | "unknown";
};

type ExtractionResult = {
  documentType: string;
  patientInfo: { name: string | null; dob: string | null; id: string | null };
  date: string | null;
  provider: string | null;
  summary: string;
  keyFindings: ExtractedField[];
  medications: string[];
  diagnoses: { code: string; description: string }[];
  followUp: string | null;
  flags: string[];
};

const STATUS_COLORS: Record<string, { bg: string; color: string; label: string }> = {
  normal:   { bg: "rgba(13, 184, 122, 0.1)",  color: "#0DB87A", label: "Normal" },
  abnormal: { bg: "rgba(245, 158, 11, 0.1)",  color: "#B45309", label: "Abnormal" },
  critical: { bg: "rgba(244, 63, 94, 0.1)",   color: "#E11D48", label: "Critical" },
  unknown:  { bg: "rgba(122, 143, 166, 0.1)", color: "#7A8FA6", label: "–" },
};

const SAMPLE_FILES = [
  { label: "Lab Report (Blood Panel)", icon: "🩸", prompt: "Sample CBC lab report showing hemoglobin 11.2 g/dL (low), WBC 9.8 K/uL (normal), platelets 210 K/uL (normal). Patient: John D., DOB 1975-03-14. Ordered by Dr. Sharma, City Hospital. Date: 2026-01-15." },
  { label: "Prescription", icon: "💊", prompt: "Prescription: Metformin 500mg twice daily, Lisinopril 10mg once daily. Patient: Sarah M., ID #4821. Prescriber: Dr. Patel, DM Clinic. ICD-10: E11.9 (Type 2 diabetes without complications). Date: 2026-05-20." },
  { label: "Insurance Card", icon: "🪪", prompt: "Insurance card for Blue Cross Blue Shield. Member: Ravi K., ID: XYZ998877, Group: 10293. Plan: PPO Plus. Copay: $25 primary, $50 specialist. Deductible: $1500 individual." },
];

export default function UploadPlayground() {
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [result, setResult] = useState<ExtractionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File) => {
    setResult(null);
    setError(null);
    setFileName(file.name);
    setFileType(file.type);
    setUploading(true);
    setProgress(10);

    // Read file as base64
    const base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]); // strip data:...;base64,
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    // Preview for images
    if (file.type.startsWith("image/")) {
      setFilePreview(URL.createObjectURL(file));
    } else {
      setFilePreview(null);
    }

    setProgress(40);

    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "file-extract",
          fileData: base64,
          fileType: file.type,
          fileName: file.name,
        }),
      });

      setProgress(80);
      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Extraction failed");
      }

      // Parse JSON result
      let parsed: ExtractionResult;
      try {
        parsed = JSON.parse(data.result);
      } catch {
        throw new Error("Could not parse AI response");
      }

      setProgress(100);
      setResult(parsed);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setUploading(false);
    }
  }, []);

  const processSample = useCallback(async (sample: typeof SAMPLE_FILES[0]) => {
    setResult(null);
    setError(null);
    setFileName(sample.label);
    setFileType("text/plain");
    setFilePreview(null);
    setUploading(true);
    setProgress(20);

    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "file-extract",
          fileData: sample.prompt,
          fileType: "text/plain",
          fileName: sample.label,
        }),
      });

      setProgress(75);
      const data = await res.json();

      if (!res.ok || data.error) throw new Error(data.error || "Extraction failed");

      let parsed: ExtractionResult;
      try {
        parsed = JSON.parse(data.result);
      } catch {
        throw new Error("Could not parse AI response");
      }

      setProgress(100);
      setResult(parsed);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setUploading(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  }, [processFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const reset = () => {
    setResult(null);
    setError(null);
    setFileName(null);
    setFilePreview(null);
    setFileType(null);
    setProgress(0);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <PlaygroundShell>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "var(--accent-light)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.25rem",
          }}>📎</div>
          <div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.375rem", color: "var(--text-primary)", letterSpacing: "-0.02em",
            }}>Smart File Upload</h1>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: 2 }}>
              Upload any health document. Claude extracts structured data in real time.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: result ? "1fr 1fr" : "1fr", gap: 24, alignItems: "start" }}>

        {/* Left panel — upload zone */}
        <div>
          {/* Drop zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => !uploading && inputRef.current?.click()}
            style={{
              border: `2px dashed ${dragOver ? "var(--accent)" : "var(--border-strong)"}`,
              borderRadius: 16,
              padding: "48px 32px",
              textAlign: "center",
              cursor: uploading ? "default" : "pointer",
              background: dragOver ? "var(--accent-light)" : "var(--bg-card)",
              transition: "all 0.2s ease",
              marginBottom: 20,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {uploading ? (
              <div>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>⏳</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 600,
                  fontSize: "1rem", color: "var(--text-primary)", marginBottom: 16,
                }}>
                  Extracting health data...
                </div>
                {/* Progress bar */}
                <div style={{
                  height: 4, background: "var(--border)", borderRadius: 2,
                  overflow: "hidden", maxWidth: 260, margin: "0 auto",
                }}>
                  <div style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, var(--accent), #0DB87A)",
                    borderRadius: 2,
                    transition: "width 0.4s ease",
                  }} />
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 10 }}>
                  Claude AI is reading your document...
                </p>
              </div>
            ) : fileName && result ? (
              <div>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>✅</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 600,
                  fontSize: "1rem", color: "var(--accent)", marginBottom: 8,
                }}>
                  {fileName}
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: 16 }}>
                  Extraction complete. See results →
                </p>
                <button onClick={(e) => { e.stopPropagation(); reset(); }} style={{
                  padding: "8px 18px",
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--border)",
                  borderRadius: 100,
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                }}>
                  Upload another
                </button>
              </div>
            ) : (
              <div>
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: "var(--bg-subtle)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", margin: "0 auto 16px",
                }}>
                  📎
                </div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "1.0625rem", color: "var(--text-primary)", marginBottom: 8,
                }}>
                  Drop any file here
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: 20 }}>
                  or click to browse
                </p>
                <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                  {["PDF", "JPG", "PNG", "DICOM", "CSV", "TXT"].map(fmt => (
                    <span key={fmt} style={{
                      padding: "3px 10px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: 100,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                    }}>{fmt}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.txt,.csv,.dcm"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {/* Error state */}
          {error && (
            <div style={{
              padding: "14px 16px",
              background: "rgba(244, 63, 94, 0.08)",
              border: "1px solid rgba(244, 63, 94, 0.2)",
              borderRadius: 12,
              marginBottom: 20,
              display: "flex", gap: 10, alignItems: "flex-start",
            }}>
              <span style={{ fontSize: "1rem", flexShrink: 0 }}>⚠️</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "#E11D48", marginBottom: 4 }}>
                  Extraction failed
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{error}</div>
              </div>
            </div>
          )}

          {/* Sample files */}
          {!result && !uploading && (
            <div>
              <p style={{
                fontSize: "0.75rem", fontWeight: 700,
                color: "var(--text-muted)", textTransform: "uppercase",
                letterSpacing: "0.07em", marginBottom: 10,
              }}>
                Or try a sample
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {SAMPLE_FILES.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => processSample(s)}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 16px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.15s ease",
                      fontFamily: "var(--font-body)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                    }}
                  >
                    <span style={{ fontSize: "1.25rem" }}>{s.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--text-primary)" }}>
                        {s.label}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 1 }}>
                        Click to run extraction
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Image preview */}
          {filePreview && (
            <div style={{ marginTop: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={filePreview}
                alt="Uploaded file preview"
                style={{ width: "100%", borderRadius: 12, border: "1px solid var(--border)" }}
              />
            </div>
          )}
        </div>

        {/* Right panel — results */}
        {result && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Doc type + summary */}
            <div style={{
              padding: "20px 22px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              boxShadow: "var(--shadow-card)",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{
                  padding: "4px 12px",
                  background: "var(--accent-light)",
                  color: "var(--accent)",
                  borderRadius: 100,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}>
                  {result.documentType}
                </span>
                {result.date && (
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{result.date}</span>
                )}
              </div>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.6 }}>
                {result.summary}
              </p>
              {result.provider && (
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 8 }}>
                  Provider: {result.provider}
                </p>
              )}
            </div>

            {/* Critical flags */}
            {result.flags.length > 0 && (
              <div style={{
                padding: "14px 18px",
                background: "rgba(244, 63, 94, 0.06)",
                border: "1px solid rgba(244, 63, 94, 0.2)",
                borderRadius: 12,
              }}>
                <div style={{ fontWeight: 700, fontSize: "0.8125rem", color: "#E11D48", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                  🚨 Flags
                </div>
                {result.flags.map((f, i) => (
                  <div key={i} style={{ fontSize: "0.875rem", color: "#E11D48", marginBottom: 4 }}>• {f}</div>
                ))}
              </div>
            )}

            {/* Key findings */}
            {result.keyFindings.length > 0 && (
              <div style={{
                padding: "18px 20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                boxShadow: "var(--shadow-card)",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 14,
                }}>Key Findings</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {result.keyFindings.map((f, i) => {
                    const sc = STATUS_COLORS[f.status] || STATUS_COLORS.unknown;
                    return (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "9px 0",
                        borderBottom: i < result.keyFindings.length - 1 ? "1px solid var(--border)" : "none",
                      }}>
                        <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                          {f.label}
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{
                            fontFamily: "var(--font-mono)", fontSize: "0.8125rem",
                            color: "var(--text-primary)", fontWeight: 600,
                          }}>
                            {f.value}
                          </span>
                          <span style={{
                            padding: "2px 8px", borderRadius: 100,
                            fontSize: "0.6875rem", fontWeight: 700,
                            background: sc.bg, color: sc.color,
                          }}>
                            {sc.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Diagnoses */}
            {result.diagnoses.length > 0 && (
              <div style={{
                padding: "18px 20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                boxShadow: "var(--shadow-card)",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 14,
                }}>
                  Diagnoses
                </h3>
                {result.diagnoses.map((d, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 12, alignItems: "flex-start",
                    padding: "8px 0",
                    borderBottom: i < result.diagnoses.length - 1 ? "1px solid var(--border)" : "none",
                  }}>
                    {d.code && (
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.8125rem",
                        padding: "3px 10px", borderRadius: 6,
                        background: "var(--accent-light)", color: "var(--accent)",
                        fontWeight: 600, flexShrink: 0,
                      }}>
                        {d.code}
                      </span>
                    )}
                    <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {d.description}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Medications */}
            {result.medications.length > 0 && (
              <div style={{
                padding: "18px 20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                boxShadow: "var(--shadow-card)",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 12,
                }}>
                  Medications
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {result.medications.map((m, i) => (
                    <span key={i} style={{
                      padding: "5px 12px",
                      background: "rgba(13, 184, 122, 0.08)",
                      border: "1px solid rgba(13, 184, 122, 0.18)",
                      borderRadius: 100,
                      fontSize: "0.8125rem",
                      color: "#0a8f5e",
                      fontWeight: 500,
                    }}>
                      💊 {m}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Follow-up */}
            {result.followUp && (
              <div style={{
                padding: "14px 18px",
                background: "rgba(245, 158, 11, 0.07)",
                border: "1px solid rgba(245, 158, 11, 0.2)",
                borderRadius: 12,
              }}>
                <div style={{ fontWeight: 700, fontSize: "0.8125rem", color: "#B45309", marginBottom: 6 }}>
                  📅 Follow-up
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{result.followUp}</div>
              </div>
            )}

            {/* Ask AI CTA */}
            <a
              href="/playground/insurance"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "14px 20px",
                background: "var(--accent)",
                color: "white",
                borderRadius: 12,
                textDecoration: "none",
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem",
                transition: "background 0.15s ease",
              }}
            >
              🔬 Ask Insurance AI about these codes
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </PlaygroundShell>
  );
}
