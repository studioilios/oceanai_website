import Link from "next/link";
import type { Metadata } from "next";
import FeatureShell from "@/components/features/FeatureShell";
import { SectionShell, StatStrip } from "@/components/features/ui";
import { ALL_FEATURES } from "@/lib/featureContent";
import { textPrimary, textSecondary, textMuted, glassPanel, glassChip, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Features — OceanAI",
  description: "Every capability inside OceanAI — from on-device AI to ICD-10 insurance coding, organ health, voice AI, and family connect.",
};

const CHAT_TILE = { icon: "💬", title: "Full AI Chat", tag: "Core", desc: "Complete health AI chat with context from all your data — files, organs, and history in one thread." };

export default function FeaturesPage() {
  return (
    <FeatureShell variant="hub">
      {/* Hero */}
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 72, textAlign: "center" }}>
        <div className="container">
          <div style={{ display: "inline-flex", ...glassChip("#60A5FA"), padding: "5px 14px", borderRadius: 100, color: "#93C5FD", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>
            Everything OceanAI does
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              color: textPrimary,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 20,
              textShadow: "0 2px 24px rgba(5, 11, 20, 0.85)",
            }}
          >
            11 features.
            <br />
            <span style={{ background: "linear-gradient(135deg, #38BDF8, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              One health platform.
            </span>
          </h1>
          <p style={{ fontSize: "1.0625rem", color: textSecondary, maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7 }}>
            OceanAI is not a single-feature app. It&apos;s a complete health intelligence layer — from emergency blood donor lookup to on-device AI that works fully offline.
          </p>
          <Link
            href="/playground"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "13px 28px",
              borderRadius: 100,
              background: "linear-gradient(135deg, rgba(26,107,255,0.55), rgba(13,184,122,0.55))",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "#F5F9FF",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "0.9375rem",
              textDecoration: "none",
            }}
          >
            Try them live →
          </Link>
        </div>
      </section>

      {/* Platform stats */}
      <SectionShell title="The platform in numbers" maxWidth={900}>
        <StatStrip
          color="#60A5FA"
          stats={[
            { value: "11", label: "Core features" },
            { value: "2", label: "Platforms — iOS & Android" },
            { value: "7", label: "Organ systems tracked" },
            { value: "12+", label: "Regional languages on the roadmap" },
          ]}
        />
      </SectionShell>

      {/* Features grid */}
      <SectionShell eyebrow="Full catalog" color="#60A5FA" title="Every feature, in one place" maxWidth={1080}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="feature-related-grid">
          {ALL_FEATURES.map((f) => (
            <Link key={f.title} href={`/features/${f.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ ...glassPanel, borderRadius: 18, padding: 26, height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: 14 }}>{f.icon}</div>
                <span style={{ ...glassChip("#60A5FA", 0.14), display: "inline-flex", padding: "3px 10px", borderRadius: 100, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#93C5FD", width: "fit-content", marginBottom: 12 }}>
                  {f.tag}
                </span>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem", color: textPrimary, marginBottom: 10, letterSpacing: "-0.01em" }}>
                  {f.title}
                </h2>
                <p style={{ fontSize: "0.9rem", color: textSecondary, lineHeight: 1.6, flex: 1 }}>{f.desc}</p>
                <div style={{ marginTop: 18, fontSize: "0.875rem", fontWeight: 600, color: "#7DD3FC", fontFamily: "var(--font-display)" }}>Explore →</div>
              </div>
            </Link>
          ))}

          {/* Full AI Chat — no dedicated subpage, points straight to the playground */}
          <Link href="/playground" style={{ textDecoration: "none" }}>
            <div style={{ ...glassPanel, borderRadius: 18, padding: 26, height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "1.75rem", marginBottom: 14 }}>{CHAT_TILE.icon}</div>
              <span style={{ ...glassChip("#60A5FA", 0.14), display: "inline-flex", padding: "3px 10px", borderRadius: 100, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#93C5FD", width: "fit-content", marginBottom: 12 }}>
                {CHAT_TILE.tag}
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem", color: textPrimary, marginBottom: 10, letterSpacing: "-0.01em" }}>
                {CHAT_TILE.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: textSecondary, lineHeight: 1.6, flex: 1 }}>{CHAT_TILE.desc}</p>
              <div style={{ marginTop: 18, fontSize: "0.875rem", fontWeight: 600, color: "#7DD3FC", fontFamily: "var(--font-display)" }}>Explore →</div>
            </div>
          </Link>
        </div>
      </SectionShell>

      <section className="relative z-10" style={{ padding: "20px 0 100px", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div style={{ ...glassPanel, borderRadius: 20, padding: "36px 32px", borderTop: `1px solid ${borderColor}` }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: textPrimary, marginBottom: 12 }}>
              Try every feature — no account needed.
            </h2>
            <p style={{ color: textMuted, marginBottom: 24 }}>The playground runs real AI, live, right in your browser.</p>
            <Link
              href="/playground"
              style={{
                display: "inline-flex",
                padding: "13px 28px",
                borderRadius: 100,
                background: "linear-gradient(135deg, rgba(26,107,255,0.55), rgba(13,184,122,0.55))",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#F5F9FF",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
              }}
            >
              Open the Playground →
            </Link>
          </div>
        </div>
      </section>
    </FeatureShell>
  );
}