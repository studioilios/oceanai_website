import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OceanAI — Personal Health Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0A1628",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Grid lines background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(26,107,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,107,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Sonar rings — decorative */}
        {[200, 360, 520, 680].map((size, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              right: -size / 2,
              top: "50%",
              marginTop: -size / 2,
              width: size,
              height: size,
              borderRadius: "50%",
              border: `1px solid rgba(26,107,255,${0.18 - i * 0.03})`,
            }}
          />
        ))}

        {/* Gradient glow */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 600,
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(26,107,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "72px 80px",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* Top: logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
              }}
            >
              ◎
            </div>
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              Ocean<span style={{ color: "#1A6BFF" }}>AI</span>
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginLeft: 16,
                padding: "4px 12px",
                background: "rgba(13,184,122,0.12)",
                border: "1px solid rgba(13,184,122,0.25)",
                borderRadius: 100,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#0DB87A",
                }}
              />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#4ADE80" }}>
                Live on App Store & Google Play
              </span>
            </div>
          </div>

          {/* Middle: headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontSize: 58,
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.035em",
                lineHeight: 1.08,
              }}
            >
              Personal health
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #1A6BFF 0%, #0DB87A 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                intelligence.
              </span>
            </div>
            <div
              style={{
                fontSize: 20,
                color: "rgba(255,255,255,0.45)",
                maxWidth: 560,
                lineHeight: 1.55,
              }}
            >
              On-device AI · ICD-10 insurance coding · Organ health · Voice AI · Family connect
            </div>
          </div>

          {/* Bottom: feature pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              "📎 File Upload",
              "🔬 Insurance AI",
              "🫀 Organ Health",
              "🤖 On-Device LLM",
              "🎙️ Voice AI",
              "👨‍👩‍👧 Family Connect",
            ].map((pill) => (
              <div
                key={pill}
                style={{
                  padding: "6px 14px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 100,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500,
                }}
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
