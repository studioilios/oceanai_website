"use client";

import { useEffect } from "react";
import Link from "next/link";
import CompanyShell from "@/components/company/CompanyShell";
import ErrorScene from "@/components/canvas/scenes/ErrorScene";
import { glassPanelSoft, glassChip, textPrimary, textSecondary, textMuted } from "@/components/features/glass";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("OceanAI error:", error);
    }
  }, [error]);

  return (
    <CompanyShell scene={<ErrorScene />}>
      <div className="relative z-10" style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}>
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <div style={{
            ...glassChip("#FB7185", 0.14),
            width: 64, height: 64, borderRadius: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.75rem", margin: "0 auto 24px",
          }}>
            ⚠️
          </div>

          <div style={{
            fontFamily: "var(--font-mono)", fontSize: "0.8125rem",
            fontWeight: 600, color: "#FDA4AF",
            letterSpacing: "0.06em", marginBottom: 14,
          }}>
            SOMETHING WENT WRONG
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: textPrimary, letterSpacing: "-0.025em",
            lineHeight: 1.1, marginBottom: 14,
            textShadow: "0 2px 24px rgba(5,11,20,0.85)",
          }}>
            Unexpected error.
          </h1>

          <p style={{
            fontSize: "1rem", color: textSecondary,
            lineHeight: 1.65, marginBottom: 32,
          }}>
            Something went wrong on our end. Try refreshing — if the problem persists, let us know.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={reset} style={{
              padding: "13px 26px", borderRadius: 100,
              background: "linear-gradient(135deg, rgba(251,113,133,0.55), rgba(56,189,248,0.4))",
              backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#F5F9FF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem",
              cursor: "pointer",
            }}>
              Try again
            </button>
            <Link href="/" style={{ display: "inline-flex", ...glassPanelSoft, padding: "13px 26px", borderRadius: 100, color: textSecondary, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none" }}>
              Back to home
            </Link>
          </div>

          <div style={{ marginTop: 28 }}>
            <a
              href="mailto:nextlife@studioilios.org?subject=OceanAI Error Report"
              style={{
                fontSize: "0.875rem", color: textMuted,
                textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 5,
              }}
            >
              Report this issue →
            </a>
          </div>

          {error.digest && (
            <div style={{
              ...glassPanelSoft,
              marginTop: 20, padding: "8px 14px",
              borderRadius: 8,
              fontFamily: "var(--font-mono)", fontSize: "0.75rem",
              color: textMuted,
              display: "inline-block",
            }}>
              Error ID: {error.digest}
            </div>
          )}
        </div>
      </div>
    </CompanyShell>
  );
}