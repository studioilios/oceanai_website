import type { Metadata } from "next";
import Link from "next/link";
import PlaygroundScene from "@/components/canvas/PlaygroundScene";

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
  blue: { bg: "rgba(56, 189, 248, 0.16)", color: "#7DD3FC" },
  emerald: { bg: "rgba(52, 211, 153, 0.16)", color: "#6EE7B7" },
  amber: { bg: "rgba(251, 191, 36, 0.16)", color: "#FCD34D" },
};

export default function PlaygroundPage() {
  return (
    <div className="relative">
      {/* Fixed 3D backdrop — the "hub" variant borrows a ring color from
          each of the 5 demos below, since this page previews all of them.
          Same fixed/z-0 layer the detail pages use, so it shows through
          every non-opaque section on this page. */}
      <PlaygroundScene variant="hub" />

      {/* Hero */}
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 80 }}>
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
            textShadow: "0 2px 24px rgba(5, 11, 20, 0.85)",
          }}>
            The OceanAI Playground
          </h1>
          <p style={{
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.6)",
            maxWidth: 480,
            margin: "0 auto",
            lineHeight: 1.6,
            textShadow: "0 1px 12px rgba(5, 11, 20, 0.7)",
          }}>
            Interact with the core features of OceanAI directly in your browser. Real AI. Real results.
          </p>
        </div>
      </section>

      {/* Demo cards — transparent section, cards keep their own opaque
          --bg-card background so they read fine over the 3D scene, the
          same way the stat cards on every other page do. */}
      <section className="section-pad relative z-10">
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
                  <div
                    className="pg-card"
                    style={{
                      padding: "32px 28px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      // background: "rgba(6, 14, 26, 0.6)",
                      backdropFilter: "blur(2px)",
                      WebkitBackdropFilter: "blur(22px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: 20,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
                      <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
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
                      color: "#EAF2FB",
                      marginBottom: 10,
                      letterSpacing: "-0.01em",
                      textShadow: "0 1px 10px rgba(5, 11, 20, 0.6)",
                    }}>
                      {demo.title}
                    </h2>
                    <p style={{
                      fontSize: "0.9rem",
                      color: "rgba(234, 242, 251, 0.62)",
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
                      background: "rgba(26, 107, 255, 0.18)",
                      color: "#93C5FD",
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
          .pg-card {
            transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          }
          .pg-card:hover {
            transform: translateY(-3px);
            border-color: rgba(255, 255, 255, 0.22) !important;
            background: rgba(6, 14, 26, 0.74) !important;
          }
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
    </div>
  );
}