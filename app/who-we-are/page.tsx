import type { Metadata } from "next";
import Link from "next/link";
import CompanyShell from "@/components/company/CompanyShell";
import WhoWeAreScene from "@/components/canvas/scenes/WhoWeAreScene";
import { glassPanel, glassChip, textPrimary, textSecondary, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Who We Are — Studio ILLIOS",
  description: "Studio ILLIOS is a product studio from India building AI-native health infrastructure. Founders, mission, and story.",
};

const VALUES = [
  { icon: "🔒", title: "Privacy is non-negotiable", desc: "Health data is the most personal data there is. We build on-device first — not because it's trendy, but because it's right." },
  { icon: "🌍", title: "Built in India, for the world", desc: "India has 1.4 billion people who deserve world-class health AI. We build there first — then everywhere." },
  { icon: "🔬", title: "Open source by default", desc: "Our models are public. Our frameworks are public. We believe transparency builds trust in AI systems, especially in healthcare." },
  { icon: "⚡", title: "Ship fast, stay serious", desc: "Small team, high ownership, production discipline. We ship features weekly — without compromising on technical depth." },
];

const PROJECTS = [
  { name: "OceanAI", desc: "Personal health intelligence platform. iOS + Android.", status: "Live", color: "#38BDF8" },
  { name: "TrueNorth", desc: "Open-source multi-agent LLM framework. PyPI + NPM.", status: "Live", color: "#A78BFA" },
  { name: "AxisMapper", desc: "Fine-tuned ICD-10 insurance intelligence model. HuggingFace.", status: "Live", color: "#34D399" },
  { name: "PocketLLM", desc: "Fully offline Android AI via MediaPipe C++ bridge.", status: "Live", color: "#FB7185" },
  { name: "ShiftLeft", desc: "5-agent autonomous GitLab bug-fixing pipeline.", status: "Live", color: "#FBBF24" },
  { name: "FuelPilot", desc: "AI fitness app with Go backend and Gemini integration.", status: "Beta", color: "#818CF8" },
];

export default function WhoWeArePage() {
  return (
    <CompanyShell scene={<WhoWeAreScene />}>
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 72, borderBottom: `1px solid ${borderColor}` }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", ...glassChip("#60A5FA"), padding: "5px 14px", borderRadius: 100, color: "#93C5FD", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 24 }}>Studio ILLIOS</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>
            A product studio that
            <br />
            <span style={{ background: "linear-gradient(135deg, #38BDF8, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>ships serious software.</span>
          </h1>
          <p style={{ fontSize: "1.0625rem", color: textSecondary, maxWidth: 560, lineHeight: 1.7 }}>
            Studio ILLIOS is a small product studio from India. We build AI-native software at the intersection of health, edge computing, and open-source AI — and we keep everything in production.
          </p>
        </div>
      </section>

      {/* Story + values */}
      <section className="relative z-10" style={{ padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="feature-2col">
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 20, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>The story</h2>
              <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75, marginBottom: 16 }}>
                Studio ILLIOS was founded with a single thesis: the most important AI problems aren&apos;t in chatbots or content generation — they&apos;re in healthcare, where better information saves lives.
              </p>
              <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75, marginBottom: 16 }}>
                We started with a question: why does an average person in India have no idea what their own lab report says, or what ICD-10 code their insurance claim is coded under? The answer wasn&apos;t that the technology didn&apos;t exist — it&apos;s that no one had built it into something accessible.
              </p>
              <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75 }}>
                OceanAI is our answer to that. Along the way, we built TrueNorth (a multi-agent framework), AxisMapper (an open insurance model), PocketLLM (on-device Android AI), and ShiftLeft (an autonomous code repair system). All open source, all in production.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 20, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>The values</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {VALUES.map((v) => (
                  <div key={v.title} style={{ display: "flex", gap: 14 }}>
                    <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: 1 }}>{v.icon}</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: textPrimary, marginBottom: 4 }}>{v.title}</div>
                      <div style={{ fontSize: "0.875rem", color: textSecondary, lineHeight: 1.55 }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative z-10" style={{ padding: "56px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 32, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>What we&apos;ve shipped</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="feature-related-grid">
            {PROJECTS.map((p) => (
              <div key={p.name} style={{ ...glassPanel, padding: "20px 18px", borderRadius: 14 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: textPrimary }}>{p.name}</div>
                  <span style={{ ...glassChip(p.status === "Live" ? "#34D399" : "#FBBF24", 0.16), padding: "2px 8px", borderRadius: 100, fontSize: "0.625rem", fontWeight: 700, color: p.status === "Live" ? "#6EE7B7" : "#FCD34D" }}>{p.status}</span>
                </div>
                <p style={{ fontSize: "0.8125rem", color: textSecondary, lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10" style={{ padding: "20px 0 100px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 16, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>Talk to us.</h2>
          <p style={{ fontSize: "0.9375rem", color: textSecondary, maxWidth: 400, margin: "0 auto 28px" }}>Investors, partners, hiring, press, or just to say hello.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:nextlife@studioilios.org" style={{ display: "inline-flex", padding: "13px 26px", borderRadius: 100, background: "linear-gradient(135deg, rgba(56,189,248,0.55), rgba(52,211,153,0.55))", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.18)", color: "#F5F9FF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none" }}>nextlife@studioilios.org</a>
            <Link href="/contact-us" style={{ display: "inline-flex", padding: "13px 26px", borderRadius: 100, background: "rgba(255,255,255,0.06)", border: `1px solid ${borderColor}`, color: textPrimary, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none" }}>Contact form →</Link>
          </div>
        </div>
      </section>
    </CompanyShell>
  );
}