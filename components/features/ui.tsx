import Link from "next/link";
import { glassPanel, glassPanelSoft, glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";
import { relatedFeatures } from "@/lib/featureContent";

export function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div style={{ display: "inline-flex", ...glassChip(color), padding: "5px 14px", borderRadius: 100, color, fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>
      {children}
    </div>
  );
}

export function Hero({
  eyebrow,
  color,
  title,
  gradientWord,
  body,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  color: string;
  title: string;
  gradientWord: string;
  body: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 72, borderBottom: `1px solid ${borderColor}` }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <Eyebrow color={color}>{eyebrow}</Eyebrow>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            color: textPrimary,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 20,
            textShadow: "0 2px 24px rgba(5, 11, 20, 0.85)",
          }}
        >
          {title}
          <br />
          <span style={{ background: `linear-gradient(135deg, ${color}, #34D399)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {gradientWord}
          </span>
        </h1>
        <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: textSecondary, maxWidth: 580, marginBottom: 32 }}>
          {body}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <CtaButton {...primaryCta} color={color} primary />
          {secondaryCta && <CtaButton {...secondaryCta} color={color} />}
        </div>
      </div>
    </section>
  );
}

export function CtaButton({
  label,
  href,
  external,
  color,
  primary,
}: {
  label: string;
  href: string;
  external?: boolean;
  color: string;
  primary?: boolean;
}) {
  const style: React.CSSProperties = primary
    ? {
        background: `linear-gradient(135deg, ${color}88, #0DB87A88)`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.18)",
        color: "#F5F9FF",
      }
    : { ...glassPanelSoft, color: textSecondary };

  const common = {
    padding: "13px 26px",
    borderRadius: 100,
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "0.9375rem",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ ...common, ...style }}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} style={{ ...common, ...style }}>
      {label}
    </Link>
  );
}

export function Panel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ ...glassPanel, borderRadius: 18, padding: "24px 22px", ...style }}>{children}</div>;
}

export function SectionShell({
  eyebrow,
  color,
  title,
  subtitle,
  children,
  maxWidth = 900,
}: {
  eyebrow?: string;
  color?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: number;
}) {
  return (
    <section className="relative z-10" style={{ padding: "72px 0" }}>
      <div className="container" style={{ maxWidth }}>
        <div style={{ marginBottom: 40 }}>
          {eyebrow && color && <Eyebrow color={color}>{eyebrow}</Eyebrow>}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: textPrimary,
              letterSpacing: "-0.02em",
              textShadow: "0 2px 20px rgba(5, 11, 20, 0.8)",
              marginBottom: subtitle ? 10 : 0,
            }}
          >
            {title}
          </h2>
          {subtitle && <p style={{ color: textMuted, fontSize: "0.9375rem", maxWidth: 560 }}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function StepRow({ index, title, body, color }: { index: number; title: string; body: string; color: string }) {
  return (
    <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
      <div
        style={{
          ...glassChip(color, 0.16),
          width: 34,
          height: 34,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontFamily: "var(--font-mono)",
          fontWeight: 700,
          fontSize: "0.8125rem",
          color,
        }}
      >
        {String(index).padStart(2, "0")}
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: textPrimary, marginBottom: 4 }}>{title}</h3>
        <p style={{ fontSize: "0.9rem", color: textSecondary, lineHeight: 1.6 }}>{body}</p>
      </div>
    </div>
  );
}

export function StatStrip({ stats, color }: { stats: { value: string; label: string }[]; color: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)`, gap: 14 }} className="feature-stat-grid">
      {stats.map((s) => (
        <div key={s.label} style={{ ...glassPanelSoft, borderRadius: 14, padding: "16px 14px", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color }}>{s.value}</div>
          <div style={{ fontSize: "0.75rem", color: textMuted, marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {items.map((f, i) => (
        <div key={f.q} style={{ padding: "18px 0", borderBottom: i < items.length - 1 ? `1px solid ${borderColor}` : "none" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem", color: textPrimary, marginBottom: 6 }}>{f.q}</h3>
          <p style={{ fontSize: "0.875rem", color: textSecondary, lineHeight: 1.6 }}>{f.a}</p>
        </div>
      ))}
    </div>
  );
}

export function RelatedFeatures({ currentSlug }: { currentSlug: string }) {
  const related = relatedFeatures(currentSlug);
  return (
    <SectionShell title="Explore more of the platform" maxWidth={900}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="feature-related-grid">
        {related.map((f) => (
          <Link key={f.slug} href={`/features/${f.slug}`} style={{ textDecoration: "none" }}>
            <div style={{ ...glassPanelSoft, borderRadius: 16, padding: "20px 18px", height: "100%" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: textPrimary, marginBottom: 6 }}>{f.title}</h3>
              <p style={{ fontSize: "0.8125rem", color: textMuted, lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}

export function ClosingCta({ title, body, cta, color }: { title: string; body: string; cta: { label: string; href: string; external?: boolean }; color: string }) {
  return (
    <section className="relative z-10" style={{ padding: "60px 0 100px", textAlign: "center" }}>
      <div className="container">
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: textPrimary, marginBottom: 14, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>
          {title}
        </h2>
        <p style={{ color: textMuted, marginBottom: 26, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>{body}</p>
        <CtaButton {...cta} color={color} primary />
      </div>
    </section>
  );
}