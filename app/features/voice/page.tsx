import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Voice AI — OceanAI",
  description: "Wake word activation and natural voice conversation with your health AI in OceanAI.",
};

const COLOR = "#F472B6";

const CAPS = [
  { icon: "🎙️", title: "Wake word", desc: "Trigger the AI by voice without unlocking your phone. Always listening for the wake word, never storing raw audio." },
  { icon: "🗣️", title: "Natural language", desc: "Ask anything: \u201cWhat did my last blood test show?\u201d or \u201cWhen's my next appointment?\u201d" },
  { icon: "🔊", title: "Voice response", desc: "The AI speaks back with a concise, clear answer — optimized for spoken delivery, not a wall of text." },
  { icon: "🔒", title: "On-device processing", desc: "Voice wake detection happens locally. Audio is never sent to the cloud without your explicit action." },
];

const FAQS = [
  { q: "Which languages does voice support?", a: "12+ regional Indian languages and dialects are on the roadmap alongside English, matching OceanAI's broader vernacular-first design." },
  { q: "Is the wake word always listening?", a: "Wake-word detection runs on-device only, watching for the trigger phrase locally — no audio is streamed anywhere until it's detected and you've started a real conversation." },
  { q: "Can I use voice for the playground demo?", a: "Yes — the voice playground uses your browser's built-in speech recognition (Chrome or Edge) so you can try the full ask-and-respond loop with no app install." },
];

export default function VoicePage() {
  return (
    <FeatureShell variant="voice">
      <Hero
        eyebrow="Voice AI"
        color={COLOR}
        title="Just say it."
        gradientWord="Your AI listens."
        body="Wake word activation lets you start a health conversation without touching your phone. Natural voice answers from your AI, spoken back to you — hands-free health intelligence."
        primaryCta={{ label: "Try Voice Demo →", href: "/playground/voice" }}
        secondaryCta={{ label: "Download the App", href: "https://apps.apple.com", external: true }}
      />

      <SectionShell eyebrow="What's included" color={COLOR} title="Hands-free, start to finish">
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

      <SectionShell eyebrow="Why it matters" color={COLOR} title="Voice reaches where typing can't">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "12+", label: "Regional languages on the roadmap" },
            { value: "0", label: "Taps required to start listening" },
            { value: "73%", label: "Of Indian households below recommended protein intake — plain-language answers matter" },
            { value: "On-device", label: "Wake-word detection, always" },
          ]}
        />
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="voice" />

      <ClosingCta
        title="Try talking to your health AI."
        body="No install needed — the playground demo runs right in your browser."
        cta={{ label: "Open Voice Demo →", href: "/playground/voice" }}
        color={COLOR}
      />
    </FeatureShell>
  );
}