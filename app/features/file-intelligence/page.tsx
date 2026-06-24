import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smart File Upload — OceanAI",
  description: "Upload any health document — PDF, image, lab report, DICOM — and OceanAI extracts structured health data using Claude AI.",
};

const STEPS = [
  { icon: "📎", title: "Tap the upload button", body: "One button. No format selection, no configuration. Tap upload from anywhere inside OceanAI." },
  { icon: "🧠", title: "AI reads the document", body: "Claude AI identifies the document type and extracts every health-relevant field — diagnoses, medications, lab values, follow-up instructions." },
  { icon: "🗂️", title: "Data goes where it belongs", body: "Extracted data is automatically filed into the right section — lab results under organs, prescriptions under medications, appointments in your calendar." },
];

const SUPPORTED = [
  { fmt: "PDF", desc: "Lab reports, discharge summaries, insurance docs" },
  { fmt: "JPG / PNG", desc: "Prescription photos, doctor notes, imaging snapshots" },
  { fmt: "DICOM", desc: "Medical imaging files from hospitals" },
  { fmt: "CSV", desc: "Exported health data from devices or portals" },
  { fmt: "TXT", desc: "Plain-text health records and notes" },
];

export default function FileIntelligencePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 80,
        background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", alignItems: "center", padding: "5px 14px", borderRadius: 100, background: "var(--accent-light)", color: "var(--accent)", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>
            File Intelligence
          </div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            Upload anything.<br />
            <span className="gradient-text">Understand everything.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 560, marginBottom: 32 }}>
            One button that accepts any health document format. OceanAI reads it, extracts structured data, and files it automatically — no manual entry ever.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/playground/upload" className="btn-primary">Try it live →</Link>
            <Link href="/features" className="btn-secondary">All features</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="eyebrow" style={{ display: "inline-flex", marginBottom: 16 }}>How it works</div>
            <h2 className="display-md">From upload to insight in seconds.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {STEPS.map((s, i) => (
              <div key={i} className="card" style={{ padding: "28px 24px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{s.icon}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", fontWeight: 700 }}>0{i + 1}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)" }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported formats */}
      <section className="section-pad-sm" style={{ background: "var(--bg-subtle)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="display-md" style={{ marginBottom: 32, textAlign: "center" }}>Supported formats</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {SUPPORTED.map((s, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 0", borderBottom: i < SUPPORTED.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.9rem", color: "var(--accent)", width: 80 }}>{s.fmt}</span>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", flex: 1 }}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="section-pad-sm" style={{ background: "var(--bg-deep)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "inline-flex", padding: "4px 12px", background: "rgba(26,107,255,0.12)", border: "1px solid rgba(26,107,255,0.2)", borderRadius: 100, color: "#60A5FA", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20 }}>Technical</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "white", marginBottom: 16 }}>How the extraction works</h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            Files are converted to base64 and sent to Claude via the Anthropic API using document and image content blocks. The model receives a structured extraction prompt tuned for ICD-10 codes, medication names, lab reference ranges, and follow-up instructions. Results are returned as typed JSON — never as freeform text — making downstream filing reliable and deterministic.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm" style={{ background: "var(--bg-primary)", textAlign: "center" }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: 16 }}>See it work on a real file.</h2>
          <p className="body-md" style={{ marginBottom: 28 }}>Drop any document in the playground. No login, no account.</p>
          <Link href="/playground/upload" className="btn-primary" style={{ padding: "15px 36px" }}>Open File Upload →</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
