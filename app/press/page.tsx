import type { Metadata } from "next";
import Link from "next/link";
import CompanyShell from "@/components/company/CompanyShell";
import PressScene from "@/components/canvas/scenes/PressScene";
import { glassPanel, glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Press — OceanAI · Studio ILLIOS",
  description: "Press kit, brand assets, and media contact for OceanAI and Studio ILLIOS.",
};

const FACTS = [
  { label: "Founded", value: "2024" },
  { label: "Category", value: "Health AI · Edge Computing" },
  { label: "Platform", value: "iOS + Android" },
  { label: "Headquarters", value: "India 🇮🇳" },
  { label: "Team size", value: "Small, focused" },
  { label: "Open source", value: "TrueNorth, AxisMapper, PocketLLM, ShiftLeft" },
  { label: "AI model", value: "AxisMapper (HuggingFace, Apache 2.0)" },
  { label: "Status", value: "Live · Actively shipping" },
];

const BRAND_COLORS = [
  { name: "Ocean Blue", hex: "#1A6BFF" },
  { name: "Health Green", hex: "#0DB87A" },
  { name: "Deep Navy", hex: "#0A1628" },
  { name: "Off-White", hex: "#F7F9FC" },
];

const KEY_MESSAGES = [
  "OceanAI is the first personal health platform where the AI runs entirely on your device — no cloud required, no data leaves your phone.",
  "AxisMapper is an open-source fine-tuned model that makes medical insurance coding (ICD-10, CPT, DRG) accessible to anyone — patients, caregivers, and healthcare workers.",
  "Studio ILLIOS is a small product studio from India building AI-native health infrastructure. Everything we ship is in production.",
  "OceanAI's Family Connect feature lets caregivers and parents monitor health for elderly parents or children — one account for the whole household.",
];

const FONTS = [
  { name: "Fraunces", role: "Display / Headlines", sample: "Health intelligence." },
  { name: "Inter", role: "Body / UI", sample: "Accessible to everyone." },
  { name: "IBM Plex Mono", role: "Code / Data / ICD codes", sample: "E11.9 · CPT 99213" },
];

export default function PressPage() {
  return (
    <CompanyShell scene={<PressScene />}>
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 72, borderBottom: `1px solid ${borderColor}` }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", ...glassChip("#FBBF24"), padding: "5px 14px", borderRadius: 100, color: "#FCD34D", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Press &amp; Media</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, marginBottom: 20, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>Media kit &amp; brand resources.</h1>
          <p style={{ fontSize: "1.0625rem", color: textSecondary, maxWidth: 520, lineHeight: 1.7, marginBottom: 32 }}>
            Everything you need to write about OceanAI and Studio ILLIOS — facts, key messages, brand colors, and how to reach us.
          </p>
          <a href="mailto:nextlife@studioilios.org?subject=Press Inquiry — OceanAI" style={{ display: "inline-flex", padding: "13px 26px", borderRadius: 100, background: "linear-gradient(135deg, rgba(251,191,36,0.55), rgba(56,189,248,0.4))", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.18)", color: "#F5F9FF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none" }}>
            Press contact →
          </a>
        </div>
      </section>

      {/* Fast facts */}
      <section className="relative z-10" style={{ padding: "56px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 28, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>Fast facts</h2>
          <div style={{ ...glassPanel, borderRadius: 18, overflow: "hidden" }}>
            {FACTS.map((fact, i) => (
              <div key={fact.label} style={{ display: "flex", alignItems: "flex-start", padding: "16px 24px", borderBottom: i < FACTS.length - 1 ? `1px solid ${borderColor}` : "none" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: textMuted, width: 180, flexShrink: 0 }}>{fact.label}</span>
                <span style={{ fontSize: "0.9375rem", color: textPrimary, fontWeight: 500 }}>{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key messages */}
      <section className="relative z-10" style={{ padding: "56px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 8, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>Key messages</h2>
          <p style={{ fontSize: "0.9375rem", color: textMuted, marginBottom: 28 }}>Accurate language for describing OceanAI and Studio ILLIOS:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {KEY_MESSAGES.map((msg, i) => (
              <div key={i} style={{ ...glassPanel, display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 22px", borderRadius: 14 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "#FCD34D", width: 24, flexShrink: 0, marginTop: 1 }}>0{i + 1}</span>
                <p style={{ fontSize: "0.9375rem", color: textPrimary, lineHeight: 1.65 }}>{msg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand colors */}
      <section className="relative z-10" style={{ padding: "56px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 28, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>Brand colors</h2>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {BRAND_COLORS.map((color) => (
              <div key={color.hex} style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 160 }}>
                <div style={{ height: 80, borderRadius: 14, background: color.hex, border: `1px solid ${borderColor}` }} />
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: textPrimary, marginBottom: 3 }}>{color.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: textMuted, fontWeight: 600 }}>{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="relative z-10" style={{ padding: "56px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 24, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>Brand typography</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="press-font-grid">
            {FONTS.map((font) => (
              <div key={font.name} style={{ ...glassPanel, padding: "22px 22px", borderRadius: 16 }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>{font.role}</div>
                <div style={{ fontFamily: font.name.includes("Mono") ? "var(--font-mono)" : font.name === "Fraunces" ? "var(--font-display)" : "var(--font-body)", fontSize: "1.25rem", fontWeight: 700, color: textPrimary, marginBottom: 8 }}>{font.sample}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: textMuted }}>{font.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10" style={{ padding: "20px 0 100px" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ ...glassPanel, padding: "36px 40px", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: textPrimary, marginBottom: 8 }}>Press contact</div>
              <p style={{ fontSize: "0.9375rem", color: textSecondary, maxWidth: 400 }}>For interviews, quotes, product demos, or any media inquiry — email us directly. We respond same day.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="mailto:nextlife@studioilios.org?subject=Press Inquiry" style={{ padding: "13px 26px", borderRadius: 100, background: "linear-gradient(135deg, rgba(251,191,36,0.55), rgba(56,189,248,0.4))", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.18)", color: "#F5F9FF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none", textAlign: "center" }}>
                nextlife@studioilios.org
              </a>
              <Link href="/who-we-are" style={{ textAlign: "center", fontSize: "0.875rem", color: textMuted, textDecoration: "none" }}>About Studio ILLIOS →</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:640px){.press-font-grid{grid-template-columns:1fr!important}}`}</style>
    </CompanyShell>
  );
}