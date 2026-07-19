"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 200,
      background: "linear-gradient(90deg, #0D1B2E 0%, #1a2a44 50%, #0D1B2E 100%)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 48px",
    }}>
      {/* Shimmer effect */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, transparent 0%, rgba(26,107,255,0.06) 50%, transparent 100%)",
        pointerEvents: "none",
      }} />

      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        fontSize: "0.8125rem", color: "rgba(255,255,255,0.75)",
        fontFamily: "var(--font-body)",
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 6, height: 6, background: "#0DB87A", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
          OceanAI is now live on
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              padding: "3px 10px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 100,
              color: "white", textDecoration: "none",
              fontSize: "0.75rem", fontWeight: 600,
              transition: "all 0.15s ease",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="white"/>
            </svg>
            App Store
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              padding: "3px 10px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 100,
              color: "white", textDecoration: "none",
              fontSize: "0.75rem", fontWeight: 600,
              transition: "all 0.15s ease",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M3.18 23.76A1.97 1.97 0 012 22V2c0-.73.42-1.37 1.04-1.68L13.5 12 3.18 23.76z" fill="white"/>
            </svg>
            Google Play
          </a>
        </div>
        <Link href="/subscription" style={{ color: "#60A5FA", textDecoration: "none", fontSize: "0.75rem", fontWeight: 600 }}>
          See pricing →
        </Link>
      </div>

      {/* Dismiss */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        style={{
          position: "absolute", right: 16,
          background: "none", border: "none",
          cursor: "pointer", color: "rgba(255,255,255,0.35)",
          padding: 6, display: "flex", alignItems: "center",
          transition: "color 0.15s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "white")}
        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <style>{`
        @media (max-width: 640px) {
          /* Hide pricing link on small screens */
          a[href="/subscription"] { display: none !important; }
        }
      `}</style>
    </div>
  );
}
