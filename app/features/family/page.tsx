import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Family Connect — OceanAI",
  description: "Link your OceanAI account with family members. View their health files and AI history — ideal for caregivers.",
};

const COLOR = "#34D399";

const CAPS = [
  { icon: "👨‍👩‍👧", title: "Multi-member profiles", desc: "Each family member has their own private health profile. You see theirs, they see yours — with permission." },
  { icon: "🏥", title: "Shared lab results", desc: "When a family member uploads a lab report, you can review it from your account without switching apps." },
  { icon: "🩺", title: "Appointment visibility", desc: "See upcoming appointments for elderly parents or children. Never miss a follow-up." },
  { icon: "🔒", title: "Consent-based access", desc: "Every family connection requires mutual consent. You control who sees what, always." },
];

const FAQS = [
  { q: "Can I manage my parent's account fully?", a: "With their consent, yes — you can view records, book appointments, and receive alerts on their behalf, similar to a caregiver role." },
  { q: "How many members can I link?", a: "There's no hard cap — Family Connect is designed for households, extended family, and caregiving networks of any size." },
  { q: "Can a member leave the connection later?", a: "Yes, at any time. Access is revoked immediately and past shared data stops syncing." },
];

export default function FamilyPage() {
  return (
    <FeatureShell variant="family">
      <Hero
        eyebrow="Family Connect"
        color={COLOR}
        title="One account for"
        gradientWord="the whole family."
        body="Link accounts with family members and view their health files, AI history, and upcoming appointments — all from your OceanAI account. Built for parents, caregivers, and families managing elderly health."
        primaryCta={{ label: "Download OceanAI →", href: "https://apps.apple.com", external: true }}
        secondaryCta={{ label: "All features", href: "/features" }}
      />

      <SectionShell eyebrow="What's included" color={COLOR} title="Health, coordinated as a household">
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

      <SectionShell eyebrow="Why it matters" color={COLOR} title="Built for India's caregiving reality">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "150M", label: "Adults with untreated mental disorders nationally" },
            { value: "56%", label: "Of rural deaths happen without a doctor ever being seen" },
            { value: "18%", label: "Of specialists serve the 70% rural population" },
            { value: "1", label: "Shared timeline across every linked member" },
          ]}
        />
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="family" />

      <ClosingCta
        title="Bring your family into one account."
        body="Consent-based, revocable any time — built for real caregiving."
        cta={{ label: "Download OceanAI →", href: "https://apps.apple.com", external: true }}
        color={COLOR}
      />
    </FeatureShell>
  );
}