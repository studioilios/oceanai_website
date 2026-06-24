"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("OceanAI error:", error);
    }
  }, [error]);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(160deg, #F7F9FC 0%, #FFF1F2 100%)",
      padding: "24px",
    }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{
          width: 64, height: 64, borderRadius: 18,
          background: "rgba(244,63,94,0.1)",
          border: "1px solid rgba(244,63,94,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.75rem", margin: "0 auto 24px",
        }}>
          ⚠️
        </div>

        <div style={{
          fontFamily: "var(--font-mono)", fontSize: "0.8125rem",
          fontWeight: 600, color: "#E11D48",
          letterSpacing: "0.06em", marginBottom: 14,
        }}>
          SOMETHING WENT WRONG
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          color: "var(--text-primary)", letterSpacing: "-0.025em",
          lineHeight: 1.1, marginBottom: 14,
        }}>
          Unexpected error.
        </h1>

        <p style={{
          fontSize: "1rem", color: "var(--text-secondary)",
          lineHeight: 1.65, marginBottom: 32,
        }}>
          Something went wrong on our end. Try refreshing — if the problem persists, let us know.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={reset} className="btn-primary">
            Try again
          </button>
          <Link href="/" className="btn-secondary">
            Back to home
          </Link>
        </div>

        <div style={{ marginTop: 28 }}>
          <a
            href="mailto:nextlife@studioilios.org?subject=OceanAI Error Report"
            style={{
              fontSize: "0.875rem", color: "var(--text-muted)",
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 5,
            }}
          >
            Report this issue →
          </a>
        </div>

        {error.digest && (
          <div style={{
            marginTop: 20, padding: "8px 14px",
            background: "var(--bg-subtle)", borderRadius: 8,
            fontFamily: "var(--font-mono)", fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}>
            Error ID: {error.digest}
          </div>
        )}
      </div>
    </div>
  );
}
