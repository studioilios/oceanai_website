import type { Metadata } from "next";
import Link from "next/link";
import CompanyShell from "@/components/company/CompanyShell";
import ChangelogScene from "@/components/canvas/scenes/ChangelogScene";
import { glassPanel, glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Changelog — OceanAI",
  description: "OceanAI release history — every version, every feature, every fix. Built in public by Studio ILLIOS.",
};

const RELEASES = [
  {
    version: "2.0.0", date: "June 2026", type: "major", label: "Major release",
    headline: "Website v2 — full product site + interactive playground",
    changes: [
      { type: "new", text: "Complete website redesign — investor-grade, light mode, sonar animation" },
      { type: "new", text: "Interactive Playground with 5 live demos (File Upload, Insurance AI, Organs, Voice, Appointments)" },
      { type: "new", text: "Real Claude AI integration in playground — actual file extraction, ICD-10 chat" },
      { type: "new", text: "All 10 feature deep-dive pages built out" },
      { type: "new", text: "Careers, Subscription, Contact, Bug Report, Who We Are pages" },
      { type: "new", text: "OG image generation, sitemap, robots.txt, JSON-LD schema" },
      { type: "new", text: "PWA manifest, rate limiting middleware, security headers" },
    ],
  },
  {
    version: "1.5.0", date: "May 2026", type: "minor", label: "Feature release",
    headline: "Family Connect + Blood Donor network",
    changes: [
      { type: "new", text: "Family Connect — link family member accounts with consent-based access" },
      { type: "new", text: "Blood Donor Finder — real-time proximity matching for compatible donors" },
      { type: "new", text: "Shared appointment visibility for caregivers" },
      { type: "improved", text: "AI History search — keyword and date filtering" },
      { type: "fixed", text: "Watch sync reconnection after background app kill" },
    ],
  },
  {
    version: "1.4.0", date: "April 2026", type: "minor", label: "Feature release",
    headline: "On-device Local LLM — full offline mode",
    changes: [
      { type: "new", text: "MediaPipe C++ native bridge — Gemma-2B running fully on-device" },
      { type: "new", text: "Automatic cloud/local routing — falls back to cloud when device limits reached" },
      { type: "new", text: "Privacy indicator — shows user whether response came from on-device or cloud" },
      { type: "improved", text: "Voice AI response speed improved 40% with on-device processing" },
    ],
  },
  {
    version: "1.3.0", date: "March 2026", type: "minor", label: "Feature release",
    headline: "AxisMapper v1 — Insurance AI open-sourced",
    changes: [
      { type: "new", text: "AxisMapper fine-tuned model published on HuggingFace under Apache 2.0" },
      { type: "new", text: "ICD-10-CM 2026, CPT, and MS-DRG support in Insurance AI" },
      { type: "new", text: "Plain-English code lookup — describe a condition, get the exact code" },
      { type: "improved", text: "Insurance AI response accuracy improved with ORPO fine-tuning" },
    ],
  },
  {
    version: "1.2.0", date: "February 2026", type: "minor", label: "Feature release",
    headline: "Voice AI + Wake word",
    changes: [
      { type: "new", text: "Wake word activation — trigger AI without touching your phone" },
      { type: "new", text: "Natural voice conversation with health AI — STT + TTS pipeline" },
      { type: "new", text: "On-device wake word detection — no audio sent to cloud" },
      { type: "improved", text: "Voice response optimised for spoken delivery — shorter, clearer answers" },
    ],
  },
  {
    version: "1.1.0", date: "January 2026", type: "minor", label: "Feature release",
    headline: "Watch Integration + Organ Health",
    changes: [
      { type: "new", text: "Watch integration — real-time HR, SpO2, HRV, steps, sleep quality" },
      { type: "new", text: "Organ Health Categories — per-organ health tracking and visualization" },
      { type: "new", text: "Doctor Appointment booking — 3-step wizard with specialty and availability" },
      { type: "fixed", text: "Lab report extraction accuracy improved for Indian diagnostic formats" },
    ],
  },
  {
    version: "1.0.0", date: "December 2025", type: "major", label: "Launch",
    headline: "OceanAI launches on iOS and Android",
    changes: [
      { type: "new", text: "Initial release — iOS App Store + Google Play" },
      { type: "new", text: "Smart file upload — PDF, image, DICOM, CSV health document extraction" },
      { type: "new", text: "AI Health Chat — full conversation history with context" },
      { type: "new", text: "Basic organ health overview" },
      { type: "new", text: "Built on TrueNorth multi-agent framework" },
    ],
  },
];

const TYPE_COLOR: Record<string, string> = { major: "#38BDF8", minor: "#34D399", patch: "#94A3B8" };
const CHANGE_ICONS: Record<string, { icon: string; color: string }> = {
  new: { icon: "✦", color: "#7DD3FC" },
  improved: { icon: "↑", color: "#6EE7B7" },
  fixed: { icon: "✓", color: "#FCD34D" },
};

export default function ChangelogPage() {
  return (
    <CompanyShell scene={<ChangelogScene />}>
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 60, borderBottom: `1px solid ${borderColor}` }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "inline-flex", ...glassChip("#A78BFA"), padding: "5px 14px", borderRadius: 100, color: "#C4B5FD", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>
            Built in public
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, marginBottom: 20, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>Changelog</h1>
          <p style={{ fontSize: "1.0625rem", color: textSecondary, maxWidth: 520 }}>
            Every release, every feature, every fix. OceanAI ships continuously — this is the public record.
          </p>
        </div>
      </section>

      <section className="relative z-10" style={{ padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 8, bottom: 0, width: 1, background: borderColor }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {RELEASES.map((release, i) => {
                const tc = TYPE_COLOR[release.type] || TYPE_COLOR.minor;
                return (
                  <div key={release.version} style={{ paddingLeft: 36, paddingBottom: i < RELEASES.length - 1 ? 56 : 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: -6, top: 6, width: 13, height: 13, borderRadius: "50%", background: release.type === "major" ? tc : "#0f2038", border: `2px solid ${tc}` }} />
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "1.0625rem", color: textPrimary, letterSpacing: "-0.01em" }}>v{release.version}</span>
                      <span style={{ ...glassChip(tc, 0.16), padding: "2px 10px", borderRadius: 100, fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: tc }}>{release.label}</span>
                      <span style={{ fontSize: "0.8125rem", color: textMuted, fontWeight: 500 }}>{release.date}</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: textPrimary, letterSpacing: "-0.015em", marginBottom: 16 }}>{release.headline}</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {release.changes.map((change, j) => {
                        const ci = CHANGE_ICONS[change.type] || CHANGE_ICONS.new;
                        return (
                          <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", fontWeight: 700, color: ci.color, flexShrink: 0, marginTop: 1, width: 14, textAlign: "center" }}>{ci.icon}</span>
                            <span style={{ fontSize: "0.9rem", color: textSecondary, lineHeight: 1.55 }}>{change.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ ...glassPanel, marginTop: 64, padding: "28px 32px", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: textPrimary, marginBottom: 4 }}>Want to follow along?</div>
              <p style={{ fontSize: "0.875rem", color: textSecondary }}>We ship continuously. Star us on GitHub or follow Studio ILLIOS for updates.</p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="https://github.com/studioilios" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", fontSize: "0.875rem", background: "rgba(255,255,255,0.06)", border: `1px solid ${borderColor}`, color: textPrimary, borderRadius: 100, textDecoration: "none", fontFamily: "var(--font-display)", fontWeight: 600 }}>GitHub ↗</a>
              <Link href="/contact-us" style={{ padding: "10px 20px", fontSize: "0.875rem", background: "linear-gradient(135deg, rgba(56,189,248,0.55), rgba(52,211,153,0.55))", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.18)", color: "#F5F9FF", borderRadius: 100, textDecoration: "none", fontFamily: "var(--font-display)", fontWeight: 600 }}>Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </CompanyShell>
  );
}