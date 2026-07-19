import type { Metadata } from "next";
import Link from "next/link";
import CompanyShell from "@/components/company/CompanyShell";
import AboutScene from "@/components/canvas/scenes/AboutScene";
import { glassPanel, glassPanelSoft, glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "About — OceanAI by Studio ILLIOS",
  description: "OceanAI is built by Studio ILLIOS — a product studio from India building AI-native health infrastructure.",
};

const BELIEFS = [
  "Privacy is a feature, not a footnote.",
  "On-device AI will replace cloud AI for personal data.",
  "Health intelligence should be accessible to everyone.",
  "Open-source models accelerate trust.",
];

const PROJECTS = [
  { name: "TrueNorth", desc: "Multi-agent LLM framework. Published on PyPI & NPM.", link: "https://github.com/studioilios" },
  { name: "ICD-10 Coder", desc: "Qwen2.5-7B — maps clinical text to ICD-10 diagnosis codes.", link: "https://huggingface.co/AmareshHebbar/icd10-coder-qwen25-7b" },
  { name: "SNOMED Mapper", desc: "Qwen2.5-7B — maps clinical terms to SNOMED CT concepts.", link: "https://huggingface.co/AmareshHebbar/snomed-mapper-qwen25-7b" },
  { name: "Clinical Summarizer", desc: "Qwen2.5-7B — condenses clinical notes into structured summaries.", link: "https://huggingface.co/AmareshHebbar/clinical-summarizer-qwen25-7b" },
  { name: "Discharge Q&A", desc: "Qwen2.5-3B — answers patient questions from discharge summaries.", link: "https://huggingface.co/AmareshHebbar/discharge-qa-qwen25-3b" },
  { name: "Radiology Coder", desc: "Qwen2.5-3B — codes radiology reports for billing and records.", link: "https://huggingface.co/AmareshHebbar/radiology-coder-qwen25-3b" },
  { name: "CPT Coder", desc: "Qwen2.5-3B — maps procedures to CPT billing codes.", link: "https://huggingface.co/AmareshHebbar/cpt-coder-qwen25-3b" },
  { name: "Medical Billing", desc: "Qwen2.5-3B — general medical billing and claims assistant.", link: "https://huggingface.co/AmareshHebbar/medical-billing-qwen25-3b" },
  { name: "PMJAY Classifier", desc: "Qwen2.5-3B — classifies cases under India's PM-JAY scheme.", link: "https://huggingface.co/AmareshHebbar/pmjay-classifier-qwen25-3b" },
  { name: "Pharmacy NER", desc: "Qwen2.5-1B — extracts drug names and dosages from text.", link: "https://huggingface.co/AmareshHebbar/pharmacy-ner-qwen25-1b" },
  { name: "Ayurveda ICD", desc: "Qwen2.5-1B — maps Ayurvedic terms to ICD codes.", link: "https://huggingface.co/AmareshHebbar/ayurveda-icd-qwen25-1b" },
  { name: "Insurance Classifier", desc: "Qwen2.5-1B — classifies insurance claim types and coverage.", link: "https://huggingface.co/AmareshHebbar/insurance-classifier-qwen25-1b" },
  { name: "ICD-10 to DRG", desc: "Qwen2.5-1B — maps ICD-10 diagnoses to DRG groupings.", link: "https://huggingface.co/AmareshHebbar/icd10-to-drg-qwen25-1b" },
];

export default function AboutPage() {
  return (
    <CompanyShell scene={<AboutScene />}>
      {/* Hero */}
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 72, borderBottom: `1px solid ${borderColor}` }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", ...glassChip("#34D399"), padding: "5px 14px", borderRadius: 100, color: "#6EE7B7", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 24 }}>
            Studio ILLIOS
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 24, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>
            We&apos;re building the
            <br />
            <span style={{ background: "linear-gradient(135deg, #38BDF8, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              health OS for humans.
            </span>
          </h1>
          <p style={{ fontSize: "1.0625rem", color: textSecondary, maxWidth: 600, lineHeight: 1.7, marginBottom: 28 }}>
            OceanAI is the flagship product from Studio ILLIOS — a product studio from India building AI-native infrastructure at the intersection of health, edge computing, and open-source AI.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="https://github.com/studioilios" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, ...glassPanelSoft, padding: "9px 16px", borderRadius: 100, color: "#7DD3FC", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.8125rem", textDecoration: "none" }}>
              TrueNorth ↗
            </a>
            <a href="https://huggingface.co/AmareshHebbar" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, ...glassPanelSoft, padding: "9px 16px", borderRadius: 100, color: "#7DD3FC", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.8125rem", textDecoration: "none" }}>
              HuggingFace Models ↗
            </a>
          </div>
        </div>
      </section>

      {/* Mission + beliefs */}
      <section className="relative z-10" style={{ padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 56 }} className="feature-2col">
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 16, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>Why we built this</h2>
              <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75, marginBottom: 16 }}>
                Health data is fragmented, cloud-dependent, and opaque. Patients don&apos;t understand their own lab reports. Insurance coding is a black box. Your health AI shouldn&apos;t need an internet connection to know who you are.
              </p>
              <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75 }}>
                OceanAI puts the intelligence at the edge — on your phone, offline, private — and wraps it in the clearest health experience we could build.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 16, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>What we believe</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {BELIEFS.map((belief) => (
                  <div key={belief} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ ...glassChip("#34D399", 0.18), width: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.55 }}>{belief}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Open source work */}
          <div style={{ ...glassPanel, padding: "36px 40px", borderRadius: 20, marginBottom: 48 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: textPrimary, marginBottom: 20 }}>Our open-source work</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="feature-related-grid">
              {PROJECTS.map((project) => (
                <a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", ...glassPanelSoft, padding: "16px 18px", borderRadius: 12, textDecoration: "none", transition: "all 0.15s ease" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: "#7DD3FC", marginBottom: 5 }}>{project.name} ↗</div>
                  <div style={{ fontSize: "0.8125rem", color: textMuted, lineHeight: 1.45 }}>{project.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: textPrimary, marginBottom: 16, textShadow: "0 2px 20px rgba(5,11,20,0.8)" }}>Get in touch</h2>
            <p style={{ fontSize: "0.9375rem", color: textMuted, maxWidth: 400, margin: "0 auto 28px" }}>
              For investor inquiries, partnerships, or anything else — we&apos;d love to hear from you.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:hello@illios.studio" style={{ display: "inline-flex", padding: "13px 26px", borderRadius: 100, background: "linear-gradient(135deg, rgba(56,189,248,0.55), rgba(52,211,153,0.55))", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.18)", color: "#F5F9FF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none" }}>
                hello@illios.studio
              </a>
              <Link href="/playground" style={{ display: "inline-flex", ...glassPanelSoft, padding: "13px 26px", borderRadius: 100, color: textSecondary, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none" }}>
                Try the Playground
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CompanyShell>
  );
}