import type { Metadata } from "next";
import Link from "next/link";

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
  { name: "Ocean Blue", hex: "#1A6BFF", dark: false },
  { name: "Health Green", hex: "#0DB87A", dark: false },
  { name: "Deep Navy", hex: "#0A1628", dark: true },
  { name: "Off-White", hex: "#F7F9FC", dark: false },
];

const KEY_MESSAGES = [
  "OceanAI is the first personal health platform where the AI runs entirely on your device — no cloud required, no data leaves your phone.",
  "AxisMapper is an open-source fine-tuned model that makes medical insurance coding (ICD-10, CPT, DRG) accessible to anyone — patients, caregivers, and healthcare workers.",
  "Studio ILLIOS is a small product studio from India building AI-native health infrastructure. Everything we ship is in production.",
  "OceanAI's Family Connect feature lets caregivers and parents monitor health for elderly parents or children — one account for the whole household.",
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 72,
        background: "linear-gradient(160deg, #0A1628 0%, #1a2a44 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(26,107,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,107,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px", pointerEvents: "none",
        }} />
        <div className="container" style={{ maxWidth: 820, position: "relative" }}>
          <div style={{
            display: "inline-flex", padding: "5px 14px", borderRadius: 100,
            background: "rgba(26,107,255,0.12)", border: "1px solid rgba(26,107,255,0.2)",
            color: "#60A5FA", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20,
          }}>
            Press & Media
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20,
          }}>
            Media kit &amp; brand resources.
          </h1>
          <p style={{
            fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)",
            maxWidth: 520, lineHeight: 1.7, marginBottom: 32,
          }}>
            Everything you need to write about OceanAI and Studio ILLIOS — facts, key messages, brand colors, and how to reach us.
          </p>
          <a
            href="mailto:nextlife@studioilios.org?subject=Press Inquiry — OceanAI"
            className="btn-primary"
          >
            Press contact →
          </a>
        </div>
      </section>

      {/* Fast facts */}
      <section className="section-pad-sm" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="display-md" style={{ marginBottom: 28 }}>Fast facts</h2>
          <div style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: 18, overflow: "hidden", boxShadow: "var(--shadow-card)",
          }}>
            {FACTS.map((fact, i) => (
              <div key={fact.label} style={{
                display: "flex", alignItems: "flex-start",
                padding: "16px 24px",
                borderBottom: i < FACTS.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{
                  fontSize: "0.875rem", fontWeight: 600, color: "var(--text-muted)",
                  width: 180, flexShrink: 0,
                }}>
                  {fact.label}
                </span>
                <span style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 500 }}>
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key messages */}
      <section className="section-pad-sm" style={{ background: "var(--bg-subtle)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="display-md" style={{ marginBottom: 8 }}>Key messages</h2>
          <p className="body-md" style={{ marginBottom: 28 }}>
            Accurate language for describing OceanAI and Studio ILLIOS:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {KEY_MESSAGES.map((msg, i) => (
              <div key={i} style={{
                display: "flex", gap: 16, alignItems: "flex-start",
                padding: "20px 22px",
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: 14, boxShadow: "var(--shadow-card)",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                  fontWeight: 700, color: "var(--accent)",
                  width: 24, flexShrink: 0, marginTop: 1,
                }}>
                  0{i + 1}
                </span>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-primary)", lineHeight: 1.65 }}>
                  {msg}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand colors */}
      <section className="section-pad-sm" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="display-md" style={{ marginBottom: 28 }}>Brand colors</h2>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {BRAND_COLORS.map((color) => (
              <div key={color.hex} style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 160 }}>
                <div style={{
                  height: 80, borderRadius: 14,
                  background: color.hex,
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-card)",
                }} />
                <div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 3,
                  }}>
                    {color.name}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.8125rem",
                    color: "var(--text-muted)", fontWeight: 600,
                  }}>
                    {color.hex}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section-pad-sm" style={{ background: "var(--bg-subtle)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="display-md" style={{ marginBottom: 24 }}>Brand typography</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { name: "Plus Jakarta Sans", role: "Display / Headlines", weight: "800", sample: "Health intelligence." },
              { name: "Inter", role: "Body / UI", weight: "400–600", sample: "Accessible to everyone." },
              { name: "JetBrains Mono", role: "Code / Data / ICD codes", weight: "400–600", sample: "E11.9 · CPT 99213" },
            ].map((font) => (
              <div key={font.name} className="card" style={{ padding: "22px 22px" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>{font.role}</div>
                <div style={{ fontFamily: font.name.includes("Mono") ? "var(--font-mono)" : font.name.includes("Jakarta") ? "var(--font-display)" : "var(--font-body)", fontSize: "1.25rem", fontWeight: Number(font.weight.split("–")[1] || font.weight), color: "var(--text-primary)", marginBottom: 8 }}>{font.sample}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: "var(--text-muted)" }}>{font.name} · {font.weight}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad-sm" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{
            padding: "36px 40px",
            background: "var(--bg-deep)",
            borderRadius: 20,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24,
          }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: "white", marginBottom: 8 }}>
                Press contact
              </div>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", maxWidth: 400 }}>
                For interviews, quotes, product demos, or any media inquiry — email us directly. We respond same day.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:nextlife@studioilios.org?subject=Press Inquiry"
                className="btn-primary"
              >
                nextlife@studioilios.org
              </a>
              <Link href="/who-we-are" style={{
                textAlign: "center", fontSize: "0.875rem",
                color: "rgba(255,255,255,0.4)", textDecoration: "none",
              }}>
                About Studio ILLIOS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:640px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
