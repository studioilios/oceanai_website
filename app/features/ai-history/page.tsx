import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "AI Health History — OceanAI",
  description: "Every OceanAI conversation stored, searchable, and contextual — your AI remembers everything so you don't have to.",
};

const COLOR = "#818CF8";

const CAPS = [
  { icon: "📚", title: "Full conversation history", desc: "Every exchange with your health AI is stored chronologically. Scroll back any time." },
  { icon: "🔍", title: "Searchable records", desc: "Search by date, condition, medication, or keyword. Find any insight instantly." },
  { icon: "🧵", title: "Context threads", desc: "AI conversations are linked to the documents and lab reports they referenced — full traceability." },
  { icon: "📤", title: "Export to PDF", desc: "Export your AI health history as a structured PDF to share with a doctor or specialist." },
];

const FAQS = [
  { q: "How far back does history go?", a: "Every conversation since account creation — there's no rolling deletion window unless you remove entries yourself." },
  { q: "Can family members see my history?", a: "Only if you've explicitly linked accounts through Family Connect and granted access. Nothing is shared by default." },
  { q: "Does history improve future answers?", a: "Yes — when you ask a follow-up months later, the AI pulls relevant prior context automatically, the same way a doctor would refer back to your chart." },
];

export default function AIHistoryPage() {
  return (
    <FeatureShell variant="ai-history">
      <Hero
        eyebrow="AI History"
        color={COLOR}
        title="Your AI remembers"
        gradientWord="everything about your health."
        body="Every conversation, diagnosis insight, uploaded report, and AI recommendation is stored and searchable. When you ask a follow-up question six months later, your AI already has the full context."
        primaryCta={{ label: "Download OceanAI →", href: "https://apps.apple.com", external: true }}
        secondaryCta={{ label: "All features", href: "/features" }}
      />

      <SectionShell eyebrow="What's included" color={COLOR} title="A full, searchable medical memory">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="feature-2col">
          {CAPS.map((f) => (
            <Panel key={f.title}>
              <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: textPrimary, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: "0.875rem", color: textSecondary, lineHeight: 1.55 }}>{f.desc}</p>
            </Panel>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Why it matters" color={COLOR} title="Continuity most apps can't offer">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "∞", label: "Conversation retention window" },
            { value: "1", label: "Unified timeline across every feature" },
            { value: "PDF", label: "Exportable for any specialist visit" },
            { value: "0", label: "Repeated intake forms needed" },
          ]}
        />
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="ai-history" />

      <ClosingCta
        title="Never repeat yourself to a doctor again."
        body="Your full history travels with you, exportable in one tap."
        cta={{ label: "Download OceanAI →", href: "https://apps.apple.com", external: true }}
        color={COLOR}
      />
    </FeatureShell>
  );
}