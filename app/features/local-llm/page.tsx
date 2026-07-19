import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary, textMuted, glassPanelSoft, glassChip, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "On-Device Local LLM — OceanAI",
  description: "OceanAI runs a full LLM on your phone via MediaPipe — no internet, no cloud, zero data leaves your device.",
};

const COLOR = "#8B5CF6";

const REASONS = [
  { title: "100% private", desc: "Your health data never touches a server. Conversations, diagnoses, and lab results stay on your phone." },
  { title: "Works anywhere", desc: "No Wi-Fi, no mobile data, no problem. Full AI capability in a hospital, on a mountain, mid-flight." },
  { title: "Zero latency", desc: "Responses come from your own CPU/GPU — no round trip to a server. Instant." },
  { title: "No subscription risk", desc: "On-device AI doesn't go offline when a cloud provider has an outage." },
];

const SPECS = [
  { label: "Inference engine", val: "MediaPipe C++ native bridge" },
  { label: "Model", val: "Gemma-2B quantized (INT4)" },
  { label: "Platform", val: "Android 12+ · iOS 16+" },
  { label: "Memory footprint", val: "~1.2 GB RAM" },
  { label: "Fallback", val: "Cloud LLM when device limits reached" },
];

const FAQS = [
  { q: "Why not always use the cloud model?", a: "The cloud model (claude-sonnet-5, via OceanAI's own API route) is more capable for complex clinical reasoning — the on-device model handles routine questions instantly and privately, then hands off automatically when a query needs deeper reasoning." },
  { q: "Does offline mode work for file uploads too?", a: "Simple text documents can be extracted fully on-device. Image and PDF extraction currently requires the cloud model, since vision inference isn't yet part of the on-device pipeline." },
  { q: "Will older phones support this?", a: "The on-device model requires roughly 1.2GB of free RAM to load — supported on Android 12+ and iOS 16+ devices from the last several years. Older or lower-memory devices fall back to cloud inference automatically." },
];

export default function LocalLLMPage() {
  return (
    <FeatureShell variant="local-llm">
      <Hero
        eyebrow="Edge AI · On-Device LLM"
        color={COLOR}
        title="The AI that runs"
        gradientWord="without the internet."
        body="OceanAI's on-device LLM runs fully offline on your Android or iPhone. No server. No cloud. Your conversations with your health AI never leave your device unless you choose to escalate."
        primaryCta={{ label: "Download OceanAI", href: "https://apps.apple.com", external: true }}
        secondaryCta={{ label: "All features", href: "/features" }}
      />

      <SectionShell eyebrow="Why it matters" color={COLOR} title="Why on-device matters">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="feature-2col">
          {REASONS.map((r) => (
            <Panel key={r.title}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ ...glassChip(COLOR, 0.18), width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: COLOR }} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: textPrimary, marginBottom: 4 }}>{r.title}</div>
                  <div style={{ fontSize: "0.875rem", color: textSecondary, lineHeight: 1.55 }}>{r.desc}</div>
                </div>
              </div>
            </Panel>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Technical stack" color={COLOR} title="What's actually running on your phone">
        <Panel style={{ padding: "26px 28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {SPECS.map((r) => (
              <div key={r.label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 12, borderBottom: `1px solid ${borderColor}` }}>
                <span style={{ fontSize: "0.8125rem", color: textMuted }}>{r.label}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: "#C4B5FD", fontWeight: 600 }}>{r.val}</span>
              </div>
            ))}
          </div>
        </Panel>
      </SectionShell>

      <SectionShell eyebrow="Architecture" color={COLOR} title="Hybrid edge + cloud, by design">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "0ms", label: "Network round-trip for on-device replies" },
            { value: "2", label: "Inference tiers — device, then cloud" },
            { value: "INT4", label: "Quantization for phone-class memory" },
            { value: "100%", label: "Health conversations private by default" },
          ]}
        />
        <div style={{ ...glassPanelSoft, borderRadius: 16, padding: "22px 24px", marginTop: 24 }}>
          <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75 }}>
            Ocean AI dynamically escalates from the on-device model to a cloud endpoint only when a query needs complex clinical logic — full symptom analysis, insurance code mapping, or multi-document reasoning. Everyday questions, reminders, and quick lookups never leave the phone.
          </p>
        </div>
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="local-llm" />

      <ClosingCta
        title="Your AI, running in your pocket."
        body="On-device inference ships in every build of OceanAI."
        cta={{ label: "Download OceanAI", href: "https://apps.apple.com", external: true }}
        color={COLOR}
      />
    </FeatureShell>
  );
}