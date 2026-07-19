"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 28, right: 24,
        zIndex: 50,
        width: 44, height: 44,
        borderRadius: "50%",
        background: "var(--bg-deep)",
        border: "1px solid rgba(255,255,255,0.1)",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 16px rgba(13,27,46,0.25)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.9)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
