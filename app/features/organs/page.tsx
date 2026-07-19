import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Organ Health Categories — OceanAI",
  description: "OceanAI monitors every major organ system and visualizes your health at an organ level — not just symptoms.",
};

const COLOR = "#10B981";

const ORGANS = [
  { emoji: "🧠", name: "Brain", tracks: ["Cognitive health signals", "Sleep quality", "Stress markers"] },
  { emoji: "❤️", name: "Heart", tracks: ["Heart rate & HRV", "ECG via watch", "BP trends"] },
  { emoji: "🫁", name: "Lungs", tracks: ["SpO2 levels", "Respiratory rate", "Breath patterns"] },
  { emoji: "🫀", name: "Liver", tracks: ["Enzyme levels from labs", "Medication interactions"] },
  { emoji: "🫘", name: "Kidneys", tracks: ["eGFR & creatinine", "Hydration markers"] },
  { emoji: "🦴", name: "Musculoskeletal", tracks: ["Activity data", "Vitamin D from labs"] },
];

const FAQS = [
  { q: "Where does the organ-level data come from?", a: "Wearable sensors, uploaded lab reports, and patterns noticed across your AI conversations — combined into one view per organ system." },
  { q: "Is this a diagnostic tool?", a: "No — it's a monitoring and awareness layer. Any flagged pattern is paired with a clear recommendation to consult a doctor, never a standalone diagnosis." },
  { q: "How many organ systems are tracked?", a: "Seven in the current build — brain, heart, lungs, liver, kidneys, stomach & gut, and musculoskeletal — with more planned as the sensor and lab-upload pipeline expands." },
];

export default function OrgansPage() {
  return (
    <FeatureShell variant="organs">
      <Hero
        eyebrow="Organ Health"
        color={COLOR}
        title="Your body, understood"
        gradientWord="organ by organ."
        body="OceanAI doesn't just track symptoms. It monitors each major organ system — pulling data from your wearable, lab uploads, and AI conversations to build a complete picture of your internal health."
        primaryCta={{ label: "Explore Organ Map →", href: "/playground/organs" }}
        secondaryCta={{ label: "All features", href: "/features" }}
      />

      <SectionShell eyebrow="Coverage" color={COLOR} title="Seven systems, one map">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="feature-related-grid">
          {ORGANS.map((o) => (
            <Panel key={o.name}>
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>{o.emoji}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: textPrimary, marginBottom: 10 }}>{o.name}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {o.tracks.map((t) => (
                  <div key={t} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: COLOR, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.8125rem", color: textSecondary }}>{t}</span>
                  </div>
                ))}
              </div>
            </Panel>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Why it matters" color={COLOR} title="Early detection changes outcomes">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "30–70%", label: "Cost reduction from early detection" },
            { value: "80%", label: "Of premature heart disease & diabetes is preventable" },
            { value: "128M", label: "Indians living with chronic kidney disease" },
            { value: "7", label: "Organ systems tracked in the current build" },
          ]}
        />
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="organs" />

      <ClosingCta
        title="Click on your organs."
        body="The interactive body map shows exactly what OceanAI watches for each system."
        cta={{ label: "Open Organ Explorer →", href: "/playground/organs" }}
        color={COLOR}
      />
    </FeatureShell>
  );
}