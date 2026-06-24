import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are — Studio ILLIOS",
  description: "Studio ILLIOS is a product studio from India building AI-native health infrastructure. Founders, mission, and story.",
};

const VALUES = [
  { icon: "🔒", title: "Privacy is non-negotiable", desc: "Health data is the most personal data there is. We build on-device first — not because it&apos;s trendy, but because it&apos;s right." },
  { icon: "🌍", title: "Built in India, for the world", desc: "India has 1.4 billion people who deserve world-class health AI. We build there first — then everywhere." },
  { icon: "🔬", title: "Open source by default", desc: "Our models are public. Our frameworks are public. We believe transparency builds trust in AI systems, especially in healthcare." },
  { icon: "⚡", title: "Ship fast, stay serious", desc: "Small team, high ownership, production discipline. We ship features weekly — without compromising on technical depth." },
];

const PROJECTS = [
  { name: "OceanAI", desc: "Personal health intelligence platform. iOS + Android.", status: "Live" },
  { name: "TrueNorth", desc: "Open-source multi-agent LLM framework. PyPI + NPM.", status: "Live" },
  { name: "AxisMapper", desc: "Fine-tuned ICD-10 insurance intelligence model. HuggingFace.", status: "Live" },
  { name: "PocketLLM", desc: "Fully offline Android AI via MediaPipe C++ bridge.", status: "Live" },
  { name: "ShiftLeft", desc: "5-agent autonomous GitLab bug-fixing pipeline.", status: "Live" },
  { name: "FuelPilot", desc: "AI fitness app with Go backend and Gemini integration.", status: "Beta" },
];

export default function WhoWeArePage() {
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 14px", borderRadius: 100, background: "rgba(26,107,255,0.12)", border: "1px solid rgba(26,107,255,0.2)", color: "#60A5FA", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 24 }}>
            Studio ILLIOS
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
            A product studio that
            <br />
            <span style={{ background: "linear-gradient(135deg, #1A6BFF, #0DB87A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>ships serious software.</span>
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.5)", maxWidth: 560, lineHeight: 1.7 }}>
            Studio ILLIOS is a small product studio from India. We build AI-native software at the intersection of health, edge computing, and open-source AI — and we keep everything in production.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 20 }}>The story</h2>
              <p className="body-md" style={{ marginBottom: 16 }}>
                Studio ILLIOS was founded with a single thesis: the most important AI problems aren&apos;t in chatbots or content generation — they&apos;re in healthcare, where better information saves lives.
              </p>
              <p className="body-md" style={{ marginBottom: 16 }}>
                We started with a question: why does an average person in India have no idea what their own lab report says, or what ICD-10 code their insurance claim is coded under? The answer wasn&apos;t that the technology didn&apos;t exist — it&apos;s that no one had built it into something accessible.
              </p>
              <p className="body-md">
                OceanAI is our answer to that. Along the way, we built TrueNorth (a multi-agent framework), AxisMapper (an open insurance model), PocketLLM (on-device Android AI), and ShiftLeft (an autonomous code repair system). All open source, all in production.
              </p>
            </div>
            <div>
              <h2 className="display-md" style={{ marginBottom: 20 }}>The values</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {VALUES.map((v) => (
                  <div key={v.title} style={{ display: "flex", gap: 14 }}>
                    <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: 1 }}>{v.icon}</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 4 }}>{v.title}</div>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: v.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-pad-sm" style={{ background: "var(--bg-subtle)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="display-md" style={{ marginBottom: 32 }}>What we&apos;ve shipped</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {PROJECTS.map((p) => (
              <div key={p.name} className="card" style={{ padding: "20px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)" }}>{p.name}</div>
                  <span style={{
                    padding: "2px 8px", borderRadius: 100,
                    fontSize: "0.625rem", fontWeight: 700,
                    background: p.status === "Live" ? "rgba(13,184,122,0.1)" : "rgba(245,158,11,0.1)",
                    color: p.status === "Live" ? "#0DB87A" : "#B45309",
                  }}>{p.status}</span>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad-sm" style={{ background: "var(--bg-primary)", textAlign: "center" }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: 16 }}>Talk to us.</h2>
          <p className="body-md" style={{ maxWidth: 400, margin: "0 auto 28px" }}>
            Investors, partners, hiring, press, or just to say hello.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:nextlife@studioilios.org" className="btn-primary">nextlife@studioilios.org</a>
            <Link href="/contact-us" className="btn-secondary">Contact form →</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}
          div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:480px){
          div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:1fr!important}
        }
      `}</style>
    </>
  );
}
