import type { Metadata } from "next";
import CompanyShell from "@/components/company/CompanyShell";
import CareersScene from "@/components/canvas/scenes/CareersScene";
import { glassPanel, glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Careers — OceanAI · Studio ILLIOS",
  description: "Join Studio ILLIOS. We're building AI-native health infrastructure. Small team, high ownership, serious technical problems.",
};

const OPEN_ROLES = [
  {
    title: "React Native Engineer",
    type: "Full-time · Remote",
    team: "Mobile",
    desc: "Build and own core product features in our Expo/React Native app. Experience with native modules (C++/JNI bridge) is a strong plus.",
    skills: ["React Native", "Expo", "TypeScript", "Performance optimization"],
  },
  {
    title: "ML Engineer — Health Models",
    type: "Full-time · Remote",
    team: "AI",
    desc: "Fine-tune and evaluate models on medical datasets. Work directly on AxisMapper (ICD-10/CPT) and our next-generation health intelligence layer.",
    skills: ["PyTorch", "ORPO / DPO fine-tuning", "Hugging Face", "Medical NLP"],
  },
  {
    title: "Backend Engineer — Go",
    type: "Full-time · Remote",
    team: "Backend",
    desc: "Own the Go microservices layer, Supabase integration, and real-time health data pipeline. High autonomy, production responsibility from day one.",
    skills: ["Go", "Supabase", "PostgreSQL", "REST / gRPC"],
  },
  {
    title: "Product Designer",
    type: "Full-time · Remote",
    team: "Design",
    desc: "Define the visual and interaction language of OceanAI across mobile, web, and playground. Own the design system end to end.",
    skills: ["Figma", "Mobile UI", "Design systems", "User research"],
  },
];

const TEAM_COLOR: Record<string, string> = {
  Mobile: "#38BDF8",
  AI: "#A78BFA",
  Backend: "#34D399",
  Design: "#FBBF24",
};

export default function CareersPage() {
  return (
    <CompanyShell scene={<CareersScene />}>
      {/* Hero */}
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 72, borderBottom: `1px solid ${borderColor}` }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", ...glassChip("#34D399"), padding: "5px 14px", borderRadius: 100, color: "#6EE7B7", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>
            We&apos;re hiring
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>
            Build the future of
            <br />
            <span style={{ background: "linear-gradient(135deg, #38BDF8, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>personal health AI.</span>
          </h1>
          <p style={{ fontSize: "1.0625rem", color: textSecondary, maxWidth: 560, lineHeight: 1.7, marginBottom: 36 }}>
            Studio ILLIOS is a small, focused team building AI-native health infrastructure. We ship fast, own what we build, and work on problems that actually matter. India-based, globally distributed.
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { num: "Small team", label: "High ownership, no bureaucracy" },
              { num: "Remote-first", label: "Work from anywhere in India" },
              { num: "Real AI", label: "Not wrappers — actual models" },
            ].map((s) => (
              <div key={s.num}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: textPrimary, marginBottom: 3 }}>{s.num}</div>
                <div style={{ fontSize: "0.8125rem", color: textMuted }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="relative z-10" style={{ padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "inline-flex", ...glassChip("#38BDF8"), padding: "5px 14px", borderRadius: 100, color: "#7DD3FC", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 16 }}>Open roles</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.8rem", color: textPrimary, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>We&apos;re looking for builders.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {OPEN_ROLES.map((role) => (
              <div key={role.title} style={{ ...glassPanel, padding: "28px 28px", borderRadius: 18 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                      <span style={{ ...glassChip(TEAM_COLOR[role.team] || "#38BDF8", 0.16), padding: "2px 10px", borderRadius: 100, fontSize: "0.6875rem", fontWeight: 700, color: TEAM_COLOR[role.team] || "#38BDF8" }}>{role.team}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: textPrimary }}>{role.title}</h3>
                    <div style={{ fontSize: "0.8125rem", color: textMuted, marginTop: 3 }}>{role.type}</div>
                  </div>
                  <a
                    href={`mailto:nextlife@studioilios.org?subject=Application: ${role.title}`}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 7,
                      padding: "10px 22px",
                      background: "linear-gradient(135deg, rgba(56,189,248,0.55), rgba(52,211,153,0.55))",
                      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      color: "#F5F9FF", borderRadius: 100, textDecoration: "none",
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem",
                      flexShrink: 0,
                    }}
                  >
                    Apply now
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
                <p style={{ fontSize: "0.9rem", color: textSecondary, lineHeight: 1.6, marginBottom: 14 }}>{role.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {role.skills.map((skill) => (
                    <span key={skill} style={{ padding: "3px 10px", background: "rgba(255,255,255,0.05)", border: `1px solid ${borderColor}`, borderRadius: 100, fontSize: "0.75rem", fontWeight: 600, color: textMuted, fontFamily: "var(--font-mono)" }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* General application */}
          <div style={{ ...glassPanel, marginTop: 32, padding: "28px 32px", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem", color: textPrimary, marginBottom: 5 }}>Don&apos;t see your role?</h3>
              <p style={{ fontSize: "0.875rem", color: textSecondary }}>Send us what you build. If it&apos;s impressive, we&apos;ll make room.</p>
            </div>
            <a
              href="mailto:nextlife@studioilios.org?subject=General Application — OceanAI"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 24px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.16)", color: textPrimary, borderRadius: 100, textDecoration: "none", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem", flexShrink: 0 }}
            >
              Send a general application →
            </a>
          </div>
        </div>
      </section>
    </CompanyShell>
  );
}