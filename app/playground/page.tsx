import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Playground — Try OceanAI",
  description: "Try OceanAI features interactively. Upload health files, look up insurance codes, explore organ health. No login needed.",
};

const DEMOS = [
  {
    icon: "📎",
    title: "Smart File Upload",
    desc: "Drop any health file — PDF, image, lab report, prescription. AI extracts structured data in real time.",
    href: "/playground/upload",
    cta: "Try Upload →",
    tag: "AI Powered",
    tagColor: "blue",
  },
  {
    icon: "🔬",
    title: "Insurance AI",
    desc: "Ask about ICD-10 codes, CPT codes, or DRG mappings in plain English. Powered by AxisMapper.",
    href: "/playground/insurance",
    cta: "Try Insurance AI →",
    tag: "AI Powered",
    tagColor: "blue",
  },
  {
    icon: "🫀",
    title: "Organ Explorer",
    desc: "Click on organs in an interactive body map. See what OceanAI monitors for each system.",
    href: "/playground/organs",
    cta: "Explore Organs →",
    tag: "Interactive",
    tagColor: "emerald",
  },
  {
    icon: "🎙️",
    title: "Voice AI Demo",
    desc: "Tap the mic, speak your health question, and hear the AI respond. Simulates the in-app voice experience.",
    href: "/playground/voice",
    cta: "Try Voice →",
    tag: "AI Powered",
    tagColor: "blue",
  },
  {
    icon: "🩺",
    title: "Appointment Flow",
    desc: "Walk through the doctor booking experience. See how OceanAI handles scheduling.",
    href: "/playground/appointment",
    cta: "See Booking →",
    tag: "Demo UI",
    tagColor: "amber",
  },
];

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  blue: { bg: "var(--accent-light)", color: "var(--accent)" },
  emerald: { bg: "rgba(13, 184, 122, 0.1)", color: "#0DB87A" },
  amber: { bg: "rgba(245, 158, 11, 0.1)", color: "#B45309" },
};

export default function PlaygroundPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 140,
        paddingBottom: 80,
        background: "linear-gradient(160deg, #0A1628 0%, #1a2a44 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Sonar rings */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 400,
          pointerEvents: "none",
        }}>
          {[200, 350, 500, 650].map((size) => (
            <div key={size} style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: size,
              height: size,
              borderRadius: "50%",
              border: "1px solid rgba(26, 107, 255, 0.12)",
            }} />
          ))}
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "5px 14px",
            background: "rgba(26, 107, 255, 0.12)",
            border: "1px solid rgba(26, 107, 255, 0.25)",
            borderRadius: 100,
            color: "#60A5FA",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            marginBottom: 24,
          }}>
            No login · No account · Just try it
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            The OceanAI Playground
          </h1>
          <p style={{
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.5)",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Interact with the core features of OceanAI directly in your browser. Real AI. Real results.
          </p>
        </div>
      </section>

      {/* Demo cards */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}>
            {DEMOS.map((demo) => {
              const tc = TAG_COLORS[demo.tagColor] || TAG_COLORS.blue;
              return (
                <Link key={demo.href} href={demo.href} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                      <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: "var(--bg-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.75rem",
                      }}>
                        {demo.icon}
                      </div>
                      <span style={{
                        ...tc,
                        display: "inline-flex",
                        padding: "3px 10px",
                        borderRadius: 100,
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}>
                        {demo.tag}
                      </span>
                    </div>

                    <h2 style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.125rem",
                      color: "var(--text-primary)",
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                    }}>
                      {demo.title}
                    </h2>
                    <p style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      flex: 1,
                      marginBottom: 20,
                    }}>
                      {demo.desc}
                    </p>

                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "10px 18px",
                      background: "var(--accent-light)",
                      color: "var(--accent)",
                      borderRadius: 100,
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      width: "fit-content",
                    }}>
                      {demo.cta}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
