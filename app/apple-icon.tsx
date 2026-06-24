import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #1A6BFF 0%, #0DB87A 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle ring decoration */}
        <div style={{
          position: "absolute",
          width: 140, height: 140, borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.15)",
        }} />
        <div style={{
          position: "absolute",
          width: 100, height: 100, borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.2)",
        }} />
        {/* Center */}
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20,
        }}>
          ◎
        </div>
      </div>
    ),
    { ...size }
  );
}
