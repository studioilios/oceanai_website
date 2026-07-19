import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Watch Integration — OceanAI",
  description: "Real-time vitals from your smartwatch sync directly into OceanAI's health timeline.",
};

const COLOR = "#FBBF24";

const METRICS = [
  { icon: "❤️", metric: "Heart Rate", detail: "Resting, active, and recovery — tracked continuously and surfaced in your health timeline." },
  { icon: "🩸", metric: "SpO2", detail: "Blood oxygen levels logged throughout the day. Alerts on sustained drops below threshold." },
  { icon: "👣", metric: "Steps & Activity", detail: "Daily movement tracked and correlated with organ health metrics." },
  { icon: "💤", metric: "Sleep Quality", detail: "Sleep stages and recovery scores fed into your brain health and cognitive wellness tracking." },
  { icon: "📊", metric: "HRV", detail: "Heart rate variability — one of the strongest indicators of overall health and stress recovery." },
  { icon: "🌡️", metric: "Body Temperature", detail: "Skin temperature trends correlated with illness detection and recovery tracking." },
];

const FAQS = [
  { q: "Which watches are supported?", a: "Apple Watch, Fitbit, and Xiaomi smart devices are supported today, syncing through each platform's native health API." },
  { q: "How often does data sync?", a: "Continuously in the background where the platform allows it — heart rate and SpO2 typically update within minutes of a new reading." },
  { q: "Can I see raw sensor data, not just summaries?", a: "Yes — every metric has a detail view with the underlying readings, not just a daily average." },
];

export default function WatchPage() {
  return (
    <FeatureShell variant="watch">
      <Hero
        eyebrow="Watch Integration"
        color={COLOR}
        title="Your wearable just became"
        gradientWord="a health sensor."
        body="OceanAI syncs with your smartwatch to pull real-time vitals — heart rate, SpO2, steps, and more — directly into your health timeline. Your AI understands your body at the sensor level."
        primaryCta={{ label: "Download OceanAI →", href: "https://apps.apple.com", external: true }}
        secondaryCta={{ label: "All features", href: "/features" }}
      />

      <SectionShell eyebrow="Metrics tracked" color={COLOR} title="Six vitals, one timeline">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="feature-related-grid">
          {METRICS.map((m) => (
            <Panel key={m.metric}>
              <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{m.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: textPrimary, marginBottom: 8 }}>{m.metric}</h3>
              <p style={{ fontSize: "0.8125rem", color: textSecondary, lineHeight: 1.55 }}>{m.detail}</p>
            </Panel>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Why it matters" color={COLOR} title="Sensor data your AI can actually act on">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "6", label: "Vital signs synced continuously" },
            { value: "3", label: "Wearable platforms supported today" },
            { value: "1.6M", label: "Annual Indian deaths linked to hypertension" },
            { value: "Real-time", label: "Sync cadence for heart rate & SpO2" },
          ]}
        />
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="watch" />

      <ClosingCta
        title="Connect your watch."
        body="Vitals start flowing into your health timeline the moment you pair it."
        cta={{ label: "Download OceanAI →", href: "https://apps.apple.com", external: true }}
        color={COLOR}
      />
    </FeatureShell>
  );
}