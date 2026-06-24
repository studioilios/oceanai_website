export default function TechStack() {
  return (
    <section style={{
      background: "var(--bg-deep)",
      padding: "80px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background accent */}
      <div style={{
        position: "absolute",
        top: "-50%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 800,
        height: 400,
        background: "radial-gradient(ellipse, rgba(26, 107, 255, 0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            background: "rgba(26, 107, 255, 0.12)",
            border: "1px solid rgba(26, 107, 255, 0.2)",
            borderRadius: 100,
            color: "#60A5FA",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}>
            Under the hood
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            color: "white",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            maxWidth: 520,
          }}>
            Built on a serious technical foundation.
          </h2>
        </div>

        {/* Tech grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          marginBottom: 48,
        }}>
          {TECH_ITEMS.map((item, i) => (
            <div key={item.label} style={{
              padding: "28px 32px",
              background: i % 2 === 0
                ? "rgba(255,255,255,0.035)"
                : "rgba(255,255,255,0.02)",
              borderRadius: i === 0 ? "16px 0 0 0"
                : i === 1 ? "0 16px 0 0"
                : i === TECH_ITEMS.length - 2 ? "0 0 0 16px"
                : i === TECH_ITEMS.length - 1 ? "0 0 16px 0"
                : "0",
              border: "1px solid rgba(255,255,255,0.055)",
              transition: "background 0.15s ease",
              cursor: "default",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: item.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.125rem",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "white",
                    marginBottom: 5,
                    letterSpacing: "-0.01em",
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "#60A5FA",
                    marginBottom: 6,
                    opacity: 0.85,
                  }}>
                    {item.tech}
                  </div>
                  <div style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.55,
                  }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Model callout */}
        <div style={{
          padding: "28px 32px",
          background: "rgba(26, 107, 255, 0.08)",
          border: "1px solid rgba(26, 107, 255, 0.2)",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "#60A5FA",
              marginBottom: 6,
              letterSpacing: "0.05em",
            }}>
              OPEN SOURCE MODEL
            </div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.1875rem",
              color: "white",
              marginBottom: 4,
            }}>
              AxisMapper — Fine-tuned ICD-10 & Insurance Intelligence
            </div>
            <div style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.45)",
            }}>
              Published on HuggingFace · Built by Studio ILLIOS · Apache 2.0 License
            </div>
          </div>
          <a
            href="https://huggingface.co/AmareshHebbar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: "rgba(26, 107, 255, 0.2)",
              border: "1px solid rgba(26, 107, 255, 0.35)",
              borderRadius: 100,
              color: "#93C5FD",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "all 0.15s ease",
              flexShrink: 0,
            }}
          >
            View on HuggingFace ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const TECH_ITEMS = [
  {
    icon: "📱",
    iconBg: "rgba(26, 107, 255, 0.15)",
    label: "Mobile App",
    tech: "React Native · Expo · TypeScript",
    desc: "Cross-platform iOS and Android app with a single codebase.",
  },
  {
    icon: "⚡",
    iconBg: "rgba(13, 184, 122, 0.15)",
    label: "Backend API",
    tech: "Go · Node.js · Supabase",
    desc: "High-throughput Go services with Supabase for real-time health data.",
  },
  {
    icon: "🤖",
    iconBg: "rgba(139, 92, 246, 0.15)",
    label: "On-Device AI",
    tech: "MediaPipe C++ · Local LLM",
    desc: "Full LLM inference on-device via MediaPipe native bridge. No network required.",
  },
  {
    icon: "🔬",
    iconBg: "rgba(245, 158, 11, 0.15)",
    label: "Insurance AI Model",
    tech: "AxisMapper · Qwen2.5 · ORPO Fine-tuning",
    desc: "Fine-tuned model trained on ICD-10-CM 2026, MS-DRG, and CPT datasets.",
  },
  {
    icon: "🎙️",
    iconBg: "rgba(244, 63, 94, 0.15)",
    label: "Voice AI",
    tech: "Native wake word · STT · TTS",
    desc: "Always-on wake word detection with natural language health conversation.",
  },
  {
    icon: "🔗",
    iconBg: "rgba(26, 107, 255, 0.15)",
    label: "Multi-Agent Orchestration",
    tech: "TrueNorth Framework · A2A Pipeline",
    desc: "Built on TrueNorth — Studio ILLIOS open-source LLM agent framework.",
  },
];
