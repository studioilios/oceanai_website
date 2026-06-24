import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — OceanAI",
  description: "Every capability inside OceanAI — from on-device AI to ICD-10 insurance coding, organ health, voice AI, and family connect.",
};

const ALL_FEATURES = [
  { icon: "📎", title: "Universal File Upload", slug: "file-intelligence", tag: "Core", desc: "Any format. Any file. Structured health data extracted instantly via AI." },
  { icon: "🔬", title: "Insurance AI (ICD-10 / CPT / DRG)", slug: "insurance-ai", tag: "AI", desc: "AxisMapper — fine-tuned insurance code intelligence with condition-to-code mapping." },
  { icon: "🩺", title: "Doctor Appointments", slug: "appointments", tag: "Core", desc: "Book and manage doctor-patient appointments inside the app." },
  { icon: "🫀", title: "Organ Health Categories", slug: "organs", tag: "Core", desc: "Visual organ-by-organ health tracking and monitoring." },
  { icon: "⌚", title: "Watch Integration", slug: "watch", tag: "Sensor", desc: "Real-time vitals from your wearable — heart rate, SpO2, steps, and more." },
  { icon: "🤖", title: "On-Device Local LLM", slug: "local-llm", tag: "Edge AI", desc: "Full LLM inference offline. No cloud. No data leaving your device." },
  { icon: "🎙️", title: "Voice Wake + AI Talk", slug: "voice", tag: "AI", desc: "Always-on wake word and natural voice health conversation." },
  { icon: "📚", title: "AI Health History", slug: "ai-history", tag: "Core", desc: "Every AI conversation stored, searchable, and contextual." },
  { icon: "👨‍👩‍👧", title: "Family Connect", slug: "family", tag: "Social", desc: "Link family accounts. View health files and AI history across your household." },
  { icon: "🩸", title: "Nearest Blood Donor", slug: "blood-donor", tag: "Emergency", desc: "Real-time proximity matching for compatible blood donors." },
  { icon: "💬", title: "Full AI Chat", slug: "", tag: "Core", desc: "Complete health AI chat with context from all your data." },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 140,
        paddingBottom: 80,
        background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ display: "inline-flex", marginBottom: 20 }}>
            Everything OceanAI does
          </div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            11 features.<br />
            <span className="gradient-text">One health platform.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 520, margin: "0 auto 36px" }}>
            OceanAI is not a single-feature app. It&apos;s a complete health intelligence layer — from emergency blood donor lookup to on-device AI that works offline.
          </p>
          <Link href="/playground" className="btn-primary">
            Try them live →
          </Link>
        </div>
      </section>

      {/* Features grid */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}>
            {ALL_FEATURES.map((f) => (
              <Link
                key={f.title}
                href={f.slug ? `/features/${f.slug}` : "/playground"}
                style={{ textDecoration: "none" }}
              >
                <div className="card" style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 14 }}>{f.icon}</div>
                  <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    color: "var(--text-primary)",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}>
                    {f.title}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, flex: 1 }}>
                    {f.desc}
                  </p>
                  <div style={{
                    marginTop: 18,
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    fontFamily: "var(--font-display)",
                  }}>
                    Explore →
                  </div>
                </div>
              </Link>
            ))}
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
    </>
  );
}
