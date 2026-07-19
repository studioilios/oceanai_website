import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { Hero, SectionShell, StatStrip, Panel, FaqList, RelatedFeatures, ClosingCta } from "@/components/features/ui";
import { textPrimary, textSecondary } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Doctor Appointments — OceanAI",
  description: "Book and manage doctor-patient appointments directly inside OceanAI. Your full medical schedule in one place.",
};

const COLOR = "#2DD4BF";

const CAPS = [
  { icon: "🔍", title: "Find by specialty", desc: "Search across GP, cardiology, neurology, endocrinology, and more. Filter by availability, rating, and experience." },
  { icon: "📅", title: "Book in 3 taps", desc: "Select a doctor, pick a day, choose a time. Confirmation is instant. No phone calls, no wait music." },
  { icon: "📋", title: "Context-aware AI", desc: "Your health AI reads your appointment history and upcoming visits before answering any health question." },
  { icon: "🔔", title: "Reminders built in", desc: "OceanAI reminds you before appointments and follows up after — logging any notes or new prescriptions you add." },
];

const FAQS = [
  { q: "Can I book for a family member?", a: "Yes, once you've linked accounts via Family Connect — you can book, view, and manage their appointments from your own device." },
  { q: "What happens if a doctor cancels?", a: "You're notified immediately and shown the next available matching slots, sorted by specialty and rating." },
  { q: "Does the AI join the appointment?", a: "No — appointments happen with a real doctor. The AI's role is context: making sure you and the doctor both start from the same information." },
];

export default function AppointmentsPage() {
  return (
    <FeatureShell variant="appointments">
      <Hero
        eyebrow="Appointments"
        color={COLOR}
        title="Your medical schedule,"
        gradientWord="inside your health AI."
        body="Book, track, and manage doctor-patient appointments without leaving OceanAI. Every appointment is linked to your health timeline — so your AI has full context before you walk in."
        primaryCta={{ label: "See the booking demo →", href: "/playground/appointment" }}
        secondaryCta={{ label: "All features", href: "/features" }}
      />

      <SectionShell eyebrow="What's included" color={COLOR} title="Booking that doesn't feel like admin work">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="feature-2col">
          {CAPS.map((f) => (
            <Panel key={f.title}>
              <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: textPrimary, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: "0.875rem", color: textSecondary, lineHeight: 1.6 }}>{f.desc}</p>
            </Panel>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="At a glance" color={COLOR} title="Faster than a phone call">
        <StatStrip
          color={COLOR}
          stats={[
            { value: "3 taps", label: "From specialty search to confirmed booking" },
            { value: "6", label: "Specialties in the current demo" },
            { value: "0", label: "Hold-music minutes" },
            { value: "1", label: "Timeline shared across AI, doctor, and calendar" },
          ]}
        />
      </SectionShell>

      <SectionShell eyebrow="FAQ" color={COLOR} title="Common questions">
        <Panel>
          <FaqList items={FAQS} />
        </Panel>
      </SectionShell>

      <RelatedFeatures currentSlug="appointments" />

      <ClosingCta
        title="Try the booking flow."
        body="Walk through the full specialty → doctor → schedule flow in the playground."
        cta={{ label: "Open Appointment Demo →", href: "/playground/appointment" }}
        color={COLOR}
      />
    </FeatureShell>
  );
}