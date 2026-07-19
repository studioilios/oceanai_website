import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary, glassPanelSoft, glassChip } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Insurance AI — OceanAI",
  description: "AxisMapper — OceanAI's fine-tuned insurance intelligence model for ICD-10, CPT, and DRG codes.",
};

const COLOR = "#A78BFA";

const CAPABILITIES = [
  { code: "ICD-10-CM", label: "Diagnosis Codes", desc: "Over 70,000 codes covering every diagnosis. Ask in plain English and get the exact code plus coverage notes.", eg: "E11.9 — Type 2 diabetes without complications" },
  { code: "CPT", label: "Procedure Codes", desc: "Current Procedural Terminology codes for every medical procedure, from office visits to complex surgeries.", eg: "99213 — Office visit, established patient" },
  { code: "MS-DRG", label: "Hospital Reimbursement", desc: "Medicare Severity Diagnosis Related Groups — how hospitals get paid for inpatient stays.", eg: "DRG 470 — Major joint replacement" },
];

const USE_CASES = [
  { who: "Patients", desc: "Understand what diagnosis codes appear on your bills and what they actually mean for your coverage." },
  { who: "Caregivers", desc: "Navigate insurance paperwork for elderly parents or family members with complex conditions." },
  { who: "Healthcare workers", desc: "Quick reference for coding questions during documentation without switching tools." },
  { who: "Investors & analysts", desc: "Understand the complexity of medical billing that OceanAI is automating." },
];

const FAQS = [
  { q: "Is AxisMapper's output official for billing?", a: "No — it's a reference and explanation tool, not a certified coding system. Final billing codes should always be confirmed by a certified medical coder or the treating provider." },
  { q: "Which languages does it work in?", a: "The model responds in English today; regional-language support follows the same 12+ language roadmap as the rest of OceanAI's voice and chat features." },
  { q: "Can I use it without the app?", a: "Yes — the playground demo runs the same model with no login required." },
];

export default function InsuranceAIPage() {
  return (
    <FeatureShell variant="insurance-ai">
      <Hero
        eyebrow="Insurance AI · AxisMapper"
        color={COLOR}
        title="Medical billing intelligence,"
        gradientWord="built into your pocket."
        body="AxisMapper is OceanAI's fine-tuned insurance model — trained on ICD-10-CM 2026, CPT codes, and MS-DRG mappings. Ask about any code in plain English. Understand what your insurance actually covers."
        primaryCta={{ label: "Try Insurance AI →", href: "/playground/insurance" }}
        secondaryCta={{ label: "View model on HuggingFace ↗", href: "https://huggingface.co/AmareshHebbar", external: true }}
      />

      <SectionShell eyebrow="What AxisMapper covers" color={COLOR} title="Three code systems. One AI.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="feature-2col">
          {CAPABILITIES.map((c) => (
            <Panel key={c.code}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: COLOR, letterSpacing: "0.06em", marginBottom: 10 }}>{c.code}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem", color: textPrimary, marginBottom: 10 }}>{c.label}</h3>
              <p style={{ fontSize: "0.875rem", color: textSecondary, lineHeight: 1.6, marginBottom: 16 }}>{c.desc}</p>
              <div style={{ ...glassPanelSoft, padding: "9px 12px", borderRadius: 8, fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: textSecondary }}>
                e.g. {c.eg}
              </div>
            </Panel>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Impact" color={COLOR} title="Why coding intelligence matters at scale">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "13%", label: "True insurance penetration in India today" },
            { value: "70K+", label: "ICD-10-CM diagnosis codes covered" },
            { value: "400M", label: "Indians with zero health coverage" },
            { value: "Apache 2.0", label: "Fully open-source model license" },
          ]}
        />
      </SectionShell>

      <SectionShell eyebrow="Who uses this" color={COLOR} title="Built for more than just billing departments">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="feature-2col">
          {USE_CASES.map((u) => (
            <Panel key={u.who}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: textPrimary, marginBottom: 8 }}>{u.who}</h3>
              <p style={{ fontSize: "0.875rem", color: textSecondary, lineHeight: 1.6 }}>{u.desc}</p>
            </Panel>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Model details" color={COLOR} title="AxisMapper — open source, Apache 2.0" subtitle="For the technically curious.">
        <div style={{ ...glassPanelSoft, borderRadius: 16, padding: "24px 26px" }}>
          <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75, marginBottom: 20 }}>
            Fine-tuned on a Qwen2.5 base using ORPO training. Training data sourced from ICD-10-CM 2026 tabular listings, CMS CPT crosswalks, and MS-DRG v41 grouper documentation. The model maps natural-language medical descriptions to precise billing codes and explains coverage implications in plain English — the same model backing the <code style={{ color: textPrimary }}>insurance</code> mode of OceanAI&apos;s own API route.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Qwen2.5 base", "ORPO fine-tuning", "ICD-10-CM 2026", "Apache 2.0", "Published on HuggingFace"].map((tag) => (
              <span key={tag} style={{ ...glassChip(COLOR, 0.12), padding: "4px 12px", borderRadius: 100, fontSize: "0.8125rem", color: "#C4B5FD", fontFamily: "var(--font-mono)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="insurance-ai" />

      <ClosingCta
        title="Ask AxisMapper anything."
        body="Free to use in the Playground. No account needed."
        cta={{ label: "Open Insurance AI →", href: "/playground/insurance" }}
        color={COLOR}
      />
    </FeatureShell>
  );
}