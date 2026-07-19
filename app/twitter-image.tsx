import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OceanAI — Personal Health Intelligence";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#0A1628",
          fontFamily: "system-ui, -apple-system, sans-serif",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(rgba(26,107,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,107,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: 500,
            background: "radial-gradient(ellipse at 80% 50%, rgba(26,107,255,0.1) 0%, transparent 65%)",
          }}
        />
        {/* Rings */}
        {[180, 320, 460].map((s, i) => (
          <div key={i} style={{
            position: "absolute", right: -s / 2, top: "50%", marginTop: -s / 2,
            width: s, height: s, borderRadius: "50%",
            border: `1px solid rgba(26,107,255,${0.15 - i * 0.04})`,
          }} />
        ))}

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", padding: "56px 72px", gap: 20, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, color: "white",
            }}>◎</div>
            <span style={{ fontSize: 24, fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>
              Ocean<span style={{ color: "#1A6BFF" }}>AI</span>
            </span>
          </div>
          <div style={{ fontSize: 48, fontWeight: 800, color: "white", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Health intelligence<br />
            <span style={{ background: "linear-gradient(135deg, #1A6BFF, #0DB87A)", WebkitBackgroundClip: "text", color: "transparent" }}>
              that lives on your device.
            </span>
          </div>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", maxWidth: 520 }}>
            On-device LLM · ICD-10 AI · Organ health · Voice · Family connect
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "5px 14px", background: "rgba(13,184,122,0.1)",
            border: "1px solid rgba(13,184,122,0.2)", borderRadius: 100, width: "fit-content",
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0DB87A" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#4ADE80" }}>iOS & Android</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
