"use client";

export default function DownloadCTA() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0f2044 50%, #0A1628 100%)",
          borderRadius: 28,
          padding: "72px 64px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}>
          {/* Decorative rings */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            border: "1px solid rgba(26, 107, 255, 0.08)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: "1px solid rgba(26, 107, 255, 0.12)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "1px solid rgba(26, 107, 255, 0.18)",
            pointerEvents: "none",
          }} />

          {/* Gradient glow */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(ellipse at 50% 50%, rgba(26, 107, 255, 0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Live badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              background: "rgba(13, 184, 122, 0.12)",
              border: "1px solid rgba(13, 184, 122, 0.25)",
              borderRadius: 100,
              marginBottom: 28,
            }}>
              <span style={{ width: 7, height: 7, background: "#0DB87A", borderRadius: "50%", display: "inline-block" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#4ADE80", letterSpacing: "0.04em" }}>
                Available now on iOS & Android
              </span>
            </div>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Your health deserves
              <br />
              better intelligence.
            </h2>

            <p style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: 420,
              margin: "0 auto 40px",
              lineHeight: 1.6,
            }}>
              Download OceanAI and experience AI health intelligence that works offline, respects your privacy, and actually understands medicine.
            </p>

            {/* Store buttons */}
            <div style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 40,
            }}>
              <StoreButton type="ios" />
              <StoreButton type="android" />
            </div>

            {/* Fine print */}
            <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.25)" }}>
              Free to download. Available worldwide.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="padding: 72px 64px"] {
            padding: 48px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

function StoreButton({ type }: { type: "ios" | "android" }) {
  const isIos = type === "ios";
  return (
    <a
      href={isIos ? "https://apps.apple.com" : "https://play.google.com"}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 24px",
        background: "white",
        borderRadius: 14,
        textDecoration: "none",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        minWidth: 180,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        {isIos ? (
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#0D1B2E"/>
        ) : (
          <>
            <path d="M3.18 23.76A1.97 1.97 0 012 22V2c0-.73.42-1.37 1.04-1.68L13.5 12 3.18 23.76z" fill="#0D1B2E"/>
            <path d="M16.96 15.43l-3-1.73-3-1.7 3-1.71 3-1.73 1.9 1.09c.81.47.81 1.43 0 1.9l-1.9 1.09v.09z" fill="#0D1B2E" opacity="0.7"/>
          </>
        )}
      </svg>
      <div>
        <div style={{ fontSize: "0.6875rem", color: "#64748B", lineHeight: 1, fontFamily: "var(--font-body)" }}>
          {isIos ? "Download on the" : "Get it on"}
        </div>
        <div style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.0625rem",
          color: "#0D1B2E",
          lineHeight: 1.25,
          marginTop: 2,
        }}>
          {isIos ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}
