import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — OceanAI by Studio ILLIOS",
  description: "OceanAI is built by Studio ILLIOS — a product studio from India building AI-native health infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 140,
        paddingBottom: 80,
        background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="eyebrow eyebrow-emerald" style={{ display: "inline-flex", marginBottom: 24 }}>
            Studio ILLIOS
          </div>
          <h1 className="display-xl" style={{ marginBottom: 24 }}>
            We&apos;re building the
            <br />
            <span className="gradient-text">health OS for humans.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 600 }}>
            OceanAI is the flagship product from Studio ILLIOS — a product studio from India building AI-native infrastructure at the intersection of health, edge computing, and open-source AI.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            marginBottom: 64,
          }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 16 }}>Why we built this</h2>
              <p className="body-md">
                Health data is fragmented, cloud-dependent, and opaque. Patients don&apos;t understand their own lab reports. Insurance coding is a black box. Your health AI shouldn&apos;t need an internet connection to know who you are.
              </p>
              <br />
              <p className="body-md">
                OceanAI puts the intelligence at the edge — on your phone, offline, private — and wraps it in the clearest health experience we could build.
              </p>
            </div>
            <div>
              <h2 className="display-md" style={{ marginBottom: 16 }}>What we believe</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Privacy is a feature, not a footnote.",
                  "On-device AI will replace cloud AI for personal data.",
                  "Health intelligence should be accessible to everyone.",
                  "Open-source models accelerate trust.",
                ].map((belief) => (
                  <div key={belief} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "var(--accent-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>{belief}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div style={{
            padding: "36px 40px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            boxShadow: "var(--shadow-card)",
            marginBottom: 48,
          }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.125rem",
              color: "var(--text-primary)",
              marginBottom: 20,
            }}>
              Our open-source work
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { name: "TrueNorth", desc: "Multi-agent LLM framework. Published on PyPI & NPM.", link: "https://github.com/studioilios" },
                { name: "AxisMapper", desc: "Fine-tuned ICD-10 insurance intelligence model.", link: "https://huggingface.co/AmareshHebbar" },
                { name: "PocketLLM", desc: "Fully offline Android AI via MediaPipe C++ bridge.", link: "https://github.com/studioilios" },
                { name: "ShiftLeft", desc: "5-agent autonomous GitLab bug-fixing pipeline.", link: "https://github.com/studioilios" },
                { name: "QueryDecomp", desc: "Multi-hop question decomposition for RAG systems.", link: "https://github.com/studioilios" },
                { name: "Palimpsest", desc: "LLM pipeline for Rust code modernization.", link: "https://github.com/studioilios" },
              ].map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "16px 18px",
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "var(--accent)",
                    marginBottom: 5,
                  }}>
                    {project.name} ↗
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.45 }}>
                    {project.desc}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ textAlign: "center" }}>
            <h2 className="display-md" style={{ marginBottom: 16 }}>Get in touch</h2>
            <p className="body-md" style={{ maxWidth: 400, margin: "0 auto 28px" }}>
              For investor inquiries, partnerships, or anything else — we&apos;d love to hear from you.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:hello@illios.studio" className="btn-primary">
                hello@illios.studio
              </a>
              <Link href="/playground" className="btn-secondary">
                Try the Playground
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: 1fr 1fr !important;
            }
          }
          @media (max-width: 480px) {
            div[style*="grid-template-columns: repeat(3, 1fr)"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
