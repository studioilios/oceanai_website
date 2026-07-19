import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Nearest Blood Donor — OceanAI",
  description: "Find compatible blood donors near you in an emergency. OceanAI's real-time proximity matching across your network.",
};

const COLOR = "#FB7185";

const CAPS = [
  { icon: "🩸", title: "Blood group matching", desc: "Enter your blood type or pull it from an uploaded lab report. OceanAI finds compatible donors automatically." },
  { icon: "📍", title: "Real-time proximity", desc: "Donors within your city, sorted by distance. Live availability status so you know who can respond." },
  { icon: "📲", title: "One-tap contact", desc: "Reach a donor directly from within OceanAI. No intermediary, no delay." },
  { icon: "🤝", title: "Register as a donor", desc: "Add your blood type to the network. Get notified when someone nearby needs your blood group." },
];

const FAQS = [
  { q: "Is my blood type shared publicly?", a: "No. It's only visible to someone actively searching for a compatible match nearby, and only once you've opted in as a registered donor." },
  { q: "How is compatibility determined?", a: "Standard ABO/Rh compatibility rules — OceanAI shows only donors who are actually a safe match for the requested blood group." },
  { q: "Does this replace a hospital blood bank?", a: "No — it's built to supplement one in urgent situations where a hospital's own supply is short, not to replace clinical blood bank protocols." },
];

export default function BloodDonorPage() {
  return (
    <FeatureShell variant="blood-donor">
      <Hero
        eyebrow="Emergency · Blood Donor"
        color={COLOR}
        title="Find a donor"
        gradientWord="when it counts most."
        body="OceanAI's blood donor network matches you with compatible, nearby donors in real time. In an emergency, every minute matters — OceanAI surfaces the nearest match in seconds."
        primaryCta={{ label: "Download OceanAI →", href: "https://apps.apple.com", external: true }}
        secondaryCta={{ label: "All features", href: "/features" }}
      />

      <SectionShell eyebrow="What's included" color={COLOR} title="Built for the minutes that matter">
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

      <SectionShell eyebrow="Why it matters" color={COLOR} title="The gap this closes">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "63M", label: "Indians pushed into poverty yearly by medical bills" },
            { value: "87%", label: "Of India's insurance market still uncaptured" },
            { value: "70%", label: "Of India's population lives in rural areas" },
            { value: "1:853", label: "Doctor-to-patient ratio vs WHO's 1:1000" },
          ]}
        />
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="blood-donor" />

      <ClosingCta
        title="Register as a donor today."
        body="One entry in the network could be the match someone needs tomorrow."
        cta={{ label: "Download OceanAI →", href: "https://apps.apple.com", external: true }}
        color={COLOR}
      />
    </FeatureShell>
  );
}