import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { Badge, CTAButton, DecorativeBackground, Icon } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "About — OceanAI by Studio ILLIOS",
  description:
    "OceanAI is built by Studio ILLIOS — a product studio from India building AI-native health infrastructure.",
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
    <div className="oc-home min-h-screen flex flex-col bg-white">
      <SiteNav />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40">
          <DecorativeBackground />
          <div className="oc-container relative">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="oc-rise">
                <Badge>Studio ILLIOS</Badge>
              </div>

              <h1 className="oc-h1 oc-rise mt-6" style={{ animationDelay: "100ms" }}>
                We&apos;re building the
                <br />
                <span className="oc-accent">health OS for humans.</span>
              </h1>

              <p
                className="oc-muted oc-rise mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ animationDelay: "200ms" }}
              >
                OceanAI is the flagship product from Studio ILLIOS — a product studio from India building AI-native
                infrastructure at the intersection of health, edge computing, and open-source AI.
              </p>

              <div
                className="oc-rise mt-8 flex flex-wrap items-center justify-center gap-3"
                style={{ animationDelay: "300ms" }}
              >
                <CTAButton href="https://github.com/studioilios" external>
                  TrueNorth on GitHub
                </CTAButton>
                <CTAButton href="https://huggingface.co/AmareshHebbar" external variant="secondary">
                  HuggingFace Models
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Mission + Beliefs Section */}
        <section className="oc-section oc-tint pt-12 pb-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="oc-dots absolute -left-10 top-10 h-64 w-64 opacity-50" />
            <div className="oc-blob -right-24 bottom-10 h-72 w-72 bg-aqua/20" />
          </div>

          <div className="oc-container relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* Why we built this */}
              <div className="oc-card p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="oc-badge">Our Mission</span>
                  <h2 className="oc-h2 mt-4 text-ink text-2xl md:text-3xl">Why we built this</h2>
                  <p className="oc-muted mt-4 text-base leading-relaxed">
                    Health data is fragmented, cloud-dependent, and opaque. Patients don&apos;t understand their own lab
                    reports. Insurance coding is a black box. Your health AI shouldn&apos;t need an internet connection
                    to know who you are.
                  </p>
                  <p className="oc-muted mt-4 text-base leading-relaxed">
                    OceanAI puts the intelligence at the edge — on your phone, offline, private — and wraps it in the
                    clearest health experience we could build.
                  </p>
                </div>
              </div>

              {/* What we believe */}
              <div className="oc-card p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="oc-badge">Core Principles</span>
                  <h2 className="oc-h2 mt-4 text-ink text-2xl md:text-3xl">What we believe</h2>
                  <div className="mt-6 flex flex-col gap-4">
                    {BELIEFS.map((belief) => (
                      <div key={belief} className="flex items-start gap-3.5">
                        <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-aqua text-ink">
                          <Icon name="check" size={14} />
                        </span>
                        <p className="text-base font-medium text-ink/90 leading-snug">{belief}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Work Section */}
        <section className="oc-section bg-white py-20">
          <div className="oc-container relative">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge>Ecosystem</Badge>
              <h2 className="oc-h2 mt-3 text-ink">
                Our <span className="oc-accent">open-source work</span>
              </h2>
              <p className="oc-muted mt-3 text-base">
                We develop and open-source models, mappers, and autonomous agents for the global medical community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {PROJECTS.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group oc-card p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg no-underline"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-aqua-deep">
                        {project.name}
                      </h3>
                      <Icon name="arrowUp" size={16} className="text-aqua-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="oc-muted text-sm leading-relaxed">{project.desc}</p>
                  </div>
                  <div className="mt-4 text-xs font-bold text-aqua-deep uppercase tracking-wider">
                    View on {project.link.includes("github") ? "GitHub" : "HuggingFace"} →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & CTA Section */}
        <section className="oc-section pb-24 pt-8">
          <div className="oc-container">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-center text-white shadow-[0_30px_70px_-20px_rgba(0,35,33,0.45)] md:rounded-[2.5rem] md:px-12 md:py-16">
              <div className="oc-blob -right-10 -top-10 h-64 w-64 bg-aqua/30" />
              <div className="oc-dots absolute -bottom-10 -left-10 h-56 w-56 opacity-30" />

              <div className="relative z-10 mx-auto max-w-2xl">
                <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-aqua backdrop-blur">
                  Get in touch
                </span>
                <h2 className="mt-5 text-2xl font-extrabold leading-tight text-white md:text-4xl">
                  Let&apos;s build the future of <span className="text-aqua">health intelligence.</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                  For investor inquiries, partnerships, or technical discussions — we&apos;d love to connect.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <CTAButton href="mailto:design@studioilios.com" external>
                    hello@illios.studio
                  </CTAButton>
                  <CTAButton href="/playground" variant="secondary" arrow={false}>
                    Try the Playground
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}