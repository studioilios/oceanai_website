import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StepRow, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary, glassPanelSoft } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Smart File Upload — OceanAI",
  description: "Upload any health document — PDF, image, lab report, DICOM — and OceanAI extracts structured health data using Claude AI.",
};

const COLOR = "#38BDF8";

const STEPS = [
  { title: "Tap the upload button", body: "One button. No format selection, no configuration. Tap upload from anywhere inside OceanAI, or drag a file straight in." },
  { title: "AI reads the document", body: "Claude identifies the document type and extracts every health-relevant field — diagnoses, medications, lab values, reference ranges, and follow-up instructions." },
  { title: "Results come back as structured JSON", body: "Not freeform text. A typed schema — key findings, flags, diagnoses, medications — so the rest of the app can act on it deterministically." },
  { title: "Data goes where it belongs", body: "Extracted data is automatically filed into the right section — lab results under organs, prescriptions under medications, appointments in your calendar." },
];

const SUPPORTED = [
  { fmt: "PDF", desc: "Lab reports, discharge summaries, insurance documents" },
  { fmt: "JPG / PNG", desc: "Prescription photos, doctor notes, imaging snapshots" },
  { fmt: "DICOM", desc: "Medical imaging files exported from hospital systems" },
  { fmt: "CSV", desc: "Exported health data from wearables or patient portals" },
  { fmt: "TXT", desc: "Plain-text health records and clinical notes" },
];

const FAQS = [
  { q: "What happens if the AI misreads a value?", a: "Every extracted field is shown to you before it's filed — nothing is written into your health record silently. Flagged or low-confidence fields are marked so you know to double-check them." },
  { q: "Does the file leave my device?", a: "For files processed by the cloud model, yes — securely, over an encrypted connection, and never stored beyond what's needed to extract the data. Simple text-based documents can also route through the on-device model with nothing leaving your phone at all." },
  { q: "Can I correct a wrong extraction?", a: "Yes. Every field is editable after extraction, and corrections help OceanAI's models improve over time." },
];

export default function FileIntelligencePage() {
  return (
    <FeatureShell variant="file-intelligence">
      <Hero
        eyebrow="File Intelligence"
        color={COLOR}
        title="Upload anything."
        gradientWord="Understand everything."
        body="One button that accepts any health document format. OceanAI reads it, extracts structured data, and files it automatically — no manual entry, ever."
        primaryCta={{ label: "Try it live →", href: "/playground/upload" }}
        secondaryCta={{ label: "All features", href: "/features" }}
      />

      <SectionShell eyebrow="How it works" color={COLOR} title="From upload to insight in seconds.">
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {STEPS.map((s, i) => (
            <StepRow key={s.title} index={i + 1} title={s.title} body={s.body} color={COLOR} />
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="At a glance" color={COLOR} title="Built for real medical documents, not just clean text.">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "6+", label: "File formats supported" },
            { value: "<10s", label: "Typical extraction time" },
            { value: "0", label: "Manual data-entry fields" },
            { value: "100%", label: "Fields shown for review before filing" },
          ]}
        />
      </SectionShell>

      <SectionShell eyebrow="Formats" color={COLOR} title="Supported formats">
        <Panel style={{ padding: "8px 22px" }}>
          {SUPPORTED.map((s, i) => (
            <div key={s.fmt} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: i < SUPPORTED.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.9rem", color: COLOR, width: 100 }}>{s.fmt}</span>
              <span style={{ fontSize: "0.9rem", color: textSecondary, flex: 1 }}>{s.desc}</span>
            </div>
          ))}
        </Panel>
      </SectionShell>

      <SectionShell eyebrow="Technical" color={COLOR} title="How the extraction actually works" subtitle="For the technically curious.">
        <div style={{ ...glassPanelSoft, borderRadius: 16, padding: "24px 26px" }}>
          <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75 }}>
            Files are converted to base64 and sent to Claude via the Anthropic API using document and image content blocks. The model receives a structured extraction prompt tuned for ICD-10 codes, medication names, lab reference ranges, and follow-up instructions, and is instructed to respond with a strict JSON schema rather than freeform prose — the same contract OceanAI&apos;s own <code style={{ color: textPrimary }}>/api/claude</code> route enforces in the file-extract mode. Typed output makes downstream filing reliable and deterministic instead of relying on regex-scraping a paragraph of text.
          </p>
        </div>
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="file-intelligence" />

      <ClosingCta
        title="See it work on a real file."
        body="Drop any document in the playground. No login, no account."
        cta={{ label: "Open File Upload →", href: "/playground/upload" }}
        color={COLOR}
      />
    </FeatureShell>
  );
}