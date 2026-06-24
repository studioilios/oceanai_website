import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page not found · OceanAI",
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)",
      padding: "24px",
      paddingTop: 68,
    }}>
      {/* Subtle grid */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: `linear-gradient(rgba(26,107,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26,107,255,0.025) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
        pointerEvents: "none",
      }} />

      <div style={{ textAlign: "center", position: "relative", maxWidth: 520 }}>
        {/* Sonar rings decoration */}
        <div style={{ position: "relative", width: 120, height: 120, margin: "0 auto 36px" }}>
          {[1, 1.6, 2.2].map((scale, i) => (
            <div key={i} style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1px solid rgba(26,107,255,0.15)",
              transform: `scale(${scale})`,
              top: "50%", left: "50%",
              marginTop: -60, marginLeft: -60,
              width: 120, height: 120,
            }} />
          ))}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: 18,
              background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white" opacity="0.4"/>
                <circle cx="12" cy="12" r="4" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        <div style={{
          fontFamily: "var(--font-mono)", fontSize: "0.875rem",
          fontWeight: 600, color: "var(--accent)",
          letterSpacing: "0.08em", marginBottom: 16,
        }}>
          ERROR 404
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "var(--text-primary)", letterSpacing: "-0.03em",
          lineHeight: 1.1, marginBottom: 16,
        }}>
          Signal lost.
        </h1>

        <p style={{
          fontSize: "1.0625rem", color: "var(--text-secondary)",
          lineHeight: 1.65, marginBottom: 36,
        }}>
          This page doesn&apos;t exist — or it moved. Let&apos;s get you back on course.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/playground" className="btn-secondary">
            Try the Playground
          </Link>
        </div>

        {/* Quick links */}
        <div style={{
          marginTop: 48, paddingTop: 32,
          borderTop: "1px solid var(--border)",
        }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: 16, fontWeight: 500 }}>
            Popular pages
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Features", href: "/features" },
              { label: "Insurance AI", href: "/features/insurance-ai" },
              { label: "Subscription", href: "/subscription" },
              { label: "Contact Us", href: "/contact-us" },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{
                padding: "6px 14px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 100,
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.15s ease",
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
