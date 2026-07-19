import Link from "next/link";

const PILLARS = [
  {
    num: "01",
    title: "The market",
    body: "The global AI in healthcare market is projected to exceed $45B by 2026. OceanAI targets the underserved personal health layer — individuals who want AI-grade health intelligence without surrendering their data to the cloud.",
  },
  {
    num: "02",
    title: "The moat",
    body: "On-device inference removes the cloud cost structure entirely. Our fine-tuned AxisMapper model handles insurance coding at accuracy levels that replace expensive manual coding workflows. Both are proprietary and difficult to replicate.",
  },
  {
    num: "03",
    title: "The traction",
    body: "Live on iOS and Android. Open-source models published on HuggingFace. Multiple AI agent frameworks (TrueNorth, ShiftLeft, PocketLLM) already in production. Built and shipped by a founding team of two.",
  },
  {
    num: "04",
    title: "The roadmap",
    body: "Family health graphs, blood donor network, wearable integrations, and insurance claim automation are all in active build. OceanAI is a platform — not a single-feature app.",
  },
];

export default function InvestorSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-subtle)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}>
          {/* Left — sticky header */}
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              background: "rgba(13, 184, 122, 0.1)",
              border: "1px solid rgba(13, 184, 122, 0.2)",
              borderRadius: 100,
              color: "#0DB87A",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}>
              For investors
            </div>
            <h2 className="display-lg" style={{ marginBottom: 20 }}>
              Why OceanAI is a platform, not a product.
            </h2>
            <p className="body-md" style={{ marginBottom: 36, maxWidth: 400 }}>
              We&apos;re building the infrastructure layer for personal health data — an operating system for how people understand, store, and act on their health across their lifetime.
            </p>

            {/* CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:hello@illios.studio"
                className="btn-primary"
                style={{ display: "inline-flex", width: "fit-content" }}
              >
                Talk to the founders
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <Link href="/about" className="btn-ghost" style={{ width: "fit-content" }}>
                About Studio ILLIOS →
              </Link>
            </div>

            {/* Built in India badge */}
            <div style={{
              marginTop: 48,
              padding: "18px 22px",
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: 14,
              boxShadow: "var(--shadow-card)",
              maxWidth: 320,
            }}>
              <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>🇮🇳</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text-primary)",
                marginBottom: 5,
              }}>
                Built in India, for the world.
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Studio ILLIOS is a product studio from India building AI-native health infrastructure.
              </div>
            </div>
          </div>

          {/* Right — pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.num}
                style={{
                  padding: "32px 0",
                  borderBottom: i < PILLARS.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  marginBottom: 10,
                }}>
                  {pillar.num}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1875rem",
                  color: "var(--text-primary)",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          div[style*="position: sticky"] {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
