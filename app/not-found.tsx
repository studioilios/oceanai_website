import Link from "next/link";
import type { Metadata } from "next";
import CompanyShell from "@/components/company/CompanyShell";
import NotFoundScene from "@/components/canvas/scenes/NotFoundScene";
import { glassPanelSoft, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "404 — Page not found · OceanAI",
};

const QUICK_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Insurance AI", href: "/features/insurance-ai" },
  { label: "Subscription", href: "/subscription" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function NotFound() {
  return (
    <CompanyShell scene={<NotFoundScene />}>
      <div className="relative z-10" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", paddingTop: 68 }}>
        <div style={{ textAlign: "center", maxWidth: 520 }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: "0.875rem",
            fontWeight: 600, color: "#7DD3FC",
            letterSpacing: "0.08em", marginBottom: 16,
          }}>
            ERROR 404
          </div>

          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: textPrimary, letterSpacing: "-0.03em",
            lineHeight: 1.1, marginBottom: 16,
            textShadow: "0 2px 24px rgba(5,11,20,0.85)",
          }}>
            Signal lost.
          </h1>

          <p style={{
            fontSize: "1.0625rem", color: textSecondary,
            lineHeight: 1.65, marginBottom: 36,
          }}>
            This page doesn&apos;t exist — or it moved. Let&apos;s get you back on course.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{
              display: "inline-flex", padding: "13px 26px", borderRadius: 100,
              background: "linear-gradient(135deg, rgba(56,189,248,0.55), rgba(52,211,153,0.55))",
              backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#F5F9FF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem",
              textDecoration: "none",
            }}>
              Back to home
            </Link>
            <Link href="/playground" style={{ display: "inline-flex", ...glassPanelSoft, padding: "13px 26px", borderRadius: 100, color: textSecondary, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none" }}>
              Try the Playground
            </Link>
          </div>

          {/* Quick links */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: `1px solid ${borderColor}` }}>
            <p style={{ fontSize: "0.8125rem", color: textMuted, marginBottom: 16, fontWeight: 500 }}>
              Popular pages
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              {QUICK_LINKS.map((link) => (
                <Link key={link.href} href={link.href} style={{
                  ...glassPanelSoft,
                  padding: "6px 14px",
                  borderRadius: 100,
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: textSecondary,
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
    </CompanyShell>
  );
}