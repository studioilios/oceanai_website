import type { Metadata } from "next";

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
  Mobile:  "#1A6BFF",
  AI:      "#7C3AED",
  Backend: "#0DB87A",
  Design:  "#F59E0B",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 80,
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
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "rgba(13,184,122,0.12)", border: "1px solid rgba(13,184,122,0.25)", color: "#4ADE80", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>
            We&apos;re hiring
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
            Build the future of<br />
            <span style={{ background: "linear-gradient(135deg, #1A6BFF, #0DB87A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>personal health AI.</span>
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", maxWidth: 560, lineHeight: 1.7, marginBottom: 36 }}>
            Studio ILLIOS is a small, focused team building AI-native health infrastructure. We ship fast, own what we build, and work on problems that actually matter. India-based, globally distributed.
          </p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { num: "Small team", label: "High ownership, no bureaucracy" },
              { num: "Remote-first", label: "Work from anywhere in India" },
              { num: "Real AI", label: "Not wrappers — actual models" },
            ].map(s => (
              <div key={s.num}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "white", marginBottom: 3 }}>{s.num}</div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ marginBottom: 40 }}>
            <div className="eyebrow" style={{ display: "inline-flex", marginBottom: 16 }}>Open roles</div>
            <h2 className="display-md">We&apos;re looking for builders.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {OPEN_ROLES.map((role) => (
              <div key={role.title} className="card" style={{ padding: "28px 28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 12 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                      <span style={{
                        padding: "2px 10px", borderRadius: 100,
                        fontSize: "0.6875rem", fontWeight: 700,
                        background: (TEAM_COLOR[role.team] || "#1A6BFF") + "15",
                        color: TEAM_COLOR[role.team] || "#1A6BFF",
                      }}>{role.team}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--text-primary)" }}>{role.title}</h3>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 3 }}>{role.type}</div>
                  </div>
                  <a
                    href={`mailto:nextlife@studioilios.org?subject=Application: ${role.title}`}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 7,
                      padding: "10px 22px",
                      background: "var(--accent)", color: "white",
                      borderRadius: 100, textDecoration: "none",
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem",
                      transition: "background 0.15s ease",
                      flexShrink: 0,
                    }}
                  >
                    Apply now
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 14 }}>{role.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {role.skills.map(skill => (
                    <span key={skill} style={{ padding: "3px 10px", background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 100, fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* General application */}
          <div style={{ marginTop: 32, padding: "28px 32px", background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--text-primary)", marginBottom: 5 }}>Don&apos;t see your role?</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Send us what you build. If it&apos;s impressive, we&apos;ll make room.</p>
            </div>
            <a
              href="mailto:nextlife@studioilios.org?subject=General Application — OceanAI"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "12px 24px",
                background: "var(--text-primary)", color: "white",
                borderRadius: 100, textDecoration: "none",
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem",
                flexShrink: 0,
              }}
            >
              Send a general application →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
