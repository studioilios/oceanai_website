import Link from "next/link";

const FEATURES = [
  {
    icon: "📎",
    title: "Universal File Upload",
    description: "One button. Any format — PDF, DICOM, image, lab report, prescription. AI extracts and structures your health data instantly.",
    href: "/features/file-intelligence",
    tag: "Core",
    tagColor: "blue",
  },
  {
    icon: "🔬",
    title: "Insurance AI",
    description: "AxisMapper — a fine-tuned model that understands ICD-10, CPT, and DRG codes. Ask about a condition, get the exact insurance mapping.",
    href: "/features/insurance-ai",
    tag: "AI",
    tagColor: "blue",
  },
  {
    icon: "🩺",
    title: "Doctor Appointments",
    description: "Book, manage, and track doctor-patient appointments from inside the app. Your full medical schedule in one place.",
    href: "/features/appointments",
    tag: "Core",
    tagColor: "blue",
  },
  {
    icon: "🫀",
    title: "Organ Health Categories",
    description: "Every major organ system tracked and visualized. Understand your health at an organ level, not just symptoms.",
    href: "/features/organs",
    tag: "Core",
    tagColor: "blue",
  },
  {
    icon: "⌚",
    title: "Watch Integration",
    description: "Syncs with your wearable to pull real-time vitals directly into your health timeline. Heart rate, SpO2, steps, and more.",
    href: "/features/watch",
    tag: "Sensor",
    tagColor: "emerald",
  },
  {
    icon: "🤖",
    title: "On-Device Local LLM",
    description: "AI that runs fully offline on your phone via MediaPipe C++ bridge. No internet. No server. Zero data leaves your device.",
    href: "/features/local-llm",
    tag: "Edge AI",
    tagColor: "purple",
  },
  {
    icon: "🎙️",
    title: "Voice AI",
    description: "Wake word activation and natural voice conversation with your health AI. Just speak — no typing required.",
    href: "/features/voice",
    tag: "AI",
    tagColor: "blue",
  },
  {
    icon: "📚",
    title: "AI Health History",
    description: "Every conversation, diagnosis, and insight stored and searchable. Your AI remembers so you don't have to.",
    href: "/features/ai-history",
    tag: "Core",
    tagColor: "blue",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Connect",
    description: "Link accounts with family members. View their health files and AI history — ideal for parents, caregivers, and elderly care.",
    href: "/features/family",
    tag: "Social",
    tagColor: "emerald",
  },
  {
    icon: "🩸",
    title: "Nearest Blood Donor",
    description: "Locate compatible blood donors near you in an emergency. Real-time proximity matching across your network.",
    href: "/features/blood-donor",
    tag: "Emergency",
    tagColor: "rose",
  },
  {
    icon: "💬",
    title: "Full AI Chat",
    description: "A complete health AI conversation experience with context from your files, history, and organ data — all in one thread.",
    href: "/playground",
    tag: "Core",
    tagColor: "blue",
  },
];

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  blue: { bg: "var(--accent-light)", color: "var(--accent)" },
  emerald: { bg: "rgba(13, 184, 122, 0.1)", color: "#0DB87A" },
  purple: { bg: "rgba(139, 92, 246, 0.1)", color: "#7C3AED" },
  rose: { bg: "rgba(244, 63, 94, 0.1)", color: "#E11D48" },
};

export default function FeaturesGrid() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ display: "inline-flex", marginBottom: 20 }}>
            What OceanAI does
          </div>
          <h2 className="display-lg" style={{ marginBottom: 16, maxWidth: 640, margin: "0 auto 16px" }}>
            11 features. One health platform.
          </h2>
          <p className="body-lg" style={{ maxWidth: 520, margin: "0 auto" }}>
            From insurance code lookup to on-device AI, OceanAI handles the full spectrum of personal health intelligence.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}>
          {FEATURES.map((feature) => {
            const tagStyle = TAG_STYLES[feature.tagColor] || TAG_STYLES.blue;
            return (
              <Link
                key={feature.href + feature.title}
                href={feature.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div className="card" style={{ padding: "28px 28px 24px", height: "100%", display: "flex", flexDirection: "column" }}>
                  {/* Icon + tag row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                    <div className="feature-icon" style={{ fontSize: "1.375rem" }}>
                      {feature.icon}
                    </div>
                    <span style={{
                      ...tagStyle,
                      display: "inline-flex",
                      padding: "3px 10px",
                      borderRadius: 100,
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}>
                      {feature.tag}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    color: "var(--text-primary)",
                    marginBottom: 10,
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    flex: 1,
                  }}>
                    {feature.description}
                  </p>

                  {/* Arrow */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 18,
                    color: "var(--accent)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    fontFamily: "var(--font-display)",
                  }}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <Link href="/playground" className="btn-primary" style={{ padding: "15px 36px", fontSize: "1rem" }}>
            Try them live in the Playground
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
