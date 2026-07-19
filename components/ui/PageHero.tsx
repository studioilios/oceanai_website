import Link from "next/link";

interface PageHeroProps {
  eyebrow?: string;
  eyebrowColor?: "blue" | "emerald" | "purple" | "rose" | "amber";
  title: React.ReactNode;
  subtitle?: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badge?: string;
  align?: "left" | "center";
  bg?: "light" | "dark";
  maxWidth?: number;
}

const EYEBROW_COLORS = {
  blue:    { bg: "var(--accent-light)",              color: "var(--accent)" },
  emerald: { bg: "rgba(13, 184, 122, 0.1)",          color: "#0DB87A" },
  purple:  { bg: "rgba(139, 92, 246, 0.1)",          color: "#7C3AED" },
  rose:    { bg: "rgba(244, 63, 94, 0.1)",           color: "#E11D48" },
  amber:   { bg: "rgba(245, 158, 11, 0.1)",          color: "#B45309" },
};

export default function PageHero({
  eyebrow,
  eyebrowColor = "blue",
  title,
  subtitle,
  cta,
  ctaSecondary,
  badge,
  align = "left",
  bg = "light",
  maxWidth = 820,
}: PageHeroProps) {
  const ec = EYEBROW_COLORS[eyebrowColor];
  const isDark = bg === "dark";

  return (
    <section style={{
      paddingTop: 140,
      paddingBottom: 80,
      background: isDark
        ? "linear-gradient(160deg, #0A1628 0%, #1a2a44 100%)"
        : "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)",
      borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "var(--border)"}`,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: isDark
          ? `linear-gradient(rgba(26,107,255,0.04) 1px, transparent 1px),
             linear-gradient(90deg, rgba(26,107,255,0.04) 1px, transparent 1px)`
          : `linear-gradient(rgba(26,107,255,0.025) 1px, transparent 1px),
             linear-gradient(90deg, rgba(26,107,255,0.025) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ maxWidth, textAlign: align === "center" ? "center" : "left", position: "relative" }}>
        {badge && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            padding: "5px 12px 5px 8px",
            background: isDark ? "rgba(13,184,122,0.12)" : "rgba(13,184,122,0.08)",
            border: `1px solid ${isDark ? "rgba(13,184,122,0.25)" : "rgba(13,184,122,0.2)"}`,
            borderRadius: 100, marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, background: "#0DB87A", borderRadius: "50%", display: "inline-block" }} />
            <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#0DB87A" }}>{badge}</span>
          </div>
        )}

        {eyebrow && (
          <div style={{
            display: "inline-flex", alignItems: "center",
            padding: "5px 14px", borderRadius: 100,
            fontSize: "0.8125rem", fontWeight: 600,
            letterSpacing: "0.04em", marginBottom: 20,
            ...ec,
          }}>
            {eyebrow}
          </div>
        )}

        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
          color: isDark ? "white" : "var(--text-primary)",
          letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20,
        }}>
          {title}
        </h1>

        {subtitle && (
          <p style={{
            fontSize: "1.0625rem", lineHeight: 1.7,
            color: isDark ? "rgba(255,255,255,0.5)" : "var(--text-secondary)",
            maxWidth: align === "center" ? 540 : 560,
            margin: align === "center" ? "0 auto 32px" : "0 0 32px",
          }}>
            {subtitle}
          </p>
        )}

        {(cta || ctaSecondary) && (
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: align === "center" ? "center" : "flex-start" }}>
            {cta && <Link href={cta.href} className="btn-primary">{cta.label}</Link>}
            {ctaSecondary && <Link href={ctaSecondary.href} className="btn-secondary" style={isDark ? { borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" } : {}}>{ctaSecondary.label}</Link>}
          </div>
        )}
      </div>
    </section>
  );
}
