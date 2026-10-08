import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { Badge, CTAButton, DecorativeBackground, Icon } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Playground — Try OceanAI",
  description:
    "Try OceanAI features interactively. Upload health files, look up insurance codes, explore organ health. No login needed.",
};

const DEMOS = [
  {
    icon: "📎",
    title: "Smart File Upload",
    desc: "Drop any health file — PDF, image, lab report, prescription. AI extracts structured data in real time.",
    href: "/playground/upload",
    cta: "Try Upload",
    tag: "AI Powered",
  },
  {
    icon: "🔬",
    title: "Insurance AI",
    desc: "Ask about ICD-10 codes, CPT codes, or DRG mappings in plain English. Powered by AxisMapper.",
    href: "/playground/insurance",
    cta: "Try Insurance AI",
    tag: "AI Powered",
  },
  {
    icon: "🫀",
    title: "Organ Explorer",
    desc: "Click on organs in an interactive body map. See what OceanAI monitors for each system.",
    href: "/playground/organs",
    cta: "Explore Organs",
    tag: "Interactive",
  },
  {
    icon: "🎙️",
    title: "Voice AI Demo",
    desc: "Tap the mic, speak your health question, and hear the AI respond. Simulates the in-app voice experience.",
    href: "/playground/voice",
    cta: "Try Voice",
    tag: "AI Powered",
  },
  {
    icon: "🩺",
    title: "Appointment Flow",
    desc: "Walk through the doctor booking experience. See how OceanAI handles scheduling.",
    href: "/playground/appointment",
    cta: "See Booking",
    tag: "Demo UI",
  },
];

export default function PlaygroundPage() {
  return (
    <div className="oc-home min-h-screen flex flex-col bg-white">
      <SiteNav />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-14 pt-28 md:pb-20 md:pt-40">
          <DecorativeBackground />
          <div className="oc-container relative">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="oc-rise">
                <Badge>No login · No account · Just try it</Badge>
              </div>

              <h1 className="oc-h1 oc-rise mt-6" style={{ animationDelay: "100ms" }}>
                The OceanAI <span className="oc-accent">Playground.</span>
              </h1>

              <p
                className="oc-muted oc-rise mt-5 max-w-xl text-base leading-relaxed md:text-lg"
                style={{ animationDelay: "200ms" }}
              >
                Interact with the core features of OceanAI directly in your browser. Real AI. Real results.
              </p>

              <div
                className="oc-rise mt-8 flex flex-wrap items-center justify-center gap-3"
                style={{ animationDelay: "300ms" }}
              >
                <CTAButton href="#demos">Explore demos</CTAButton>
                <CTAButton href="/features" variant="secondary" arrow={false}>
                  View all features
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Demos Grid Section */}
        <section id="demos" className="oc-section oc-tint pt-12 pb-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="oc-dots absolute -left-10 top-10 h-64 w-64 opacity-50" />
            <div className="oc-blob -right-24 bottom-10 h-72 w-72 bg-aqua/20" />
          </div>

          <div className="oc-container relative">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="oc-badge">Interactive simulations</span>
              <h2 className="oc-h2 mt-3 text-ink">
                Test the engine <span className="oc-accent">live</span>
              </h2>
              <p className="oc-muted mt-3 text-base">
                Select a module below to launch the sandbox environment with live inference and mock patient contexts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {DEMOS.map((demo) => (
                <Link
                  key={demo.href}
                  href={demo.href}
                  className="group oc-card p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,35,33,0.15)] no-underline"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aqua-soft text-2xl transition-transform duration-300 group-hover:scale-110 shadow-sm border border-aqua/20">
                        {demo.icon}
                      </span>
                      <span className="inline-block rounded-full bg-ink px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-aqua">
                        {demo.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-aqua-deep">
                      {demo.title}
                    </h3>

                    <p className="oc-muted mt-2.5 text-sm leading-relaxed">{demo.desc}</p>
                  </div>

                  <div className="mt-8 flex items-center gap-1.5 text-sm font-bold text-aqua-deep transition-colors group-hover:text-ink">
                    <span>{demo.cta}</span>
                    <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}

              {/* Companion App Teaser Card */}
              <div className="oc-card p-7 md:p-8 flex flex-col justify-between bg-gradient-to-br from-white to-aqua-soft/50 border border-aqua/30">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-aqua text-ink text-2xl shadow-sm">
                      📱
                    </span>
                    <span className="inline-block rounded-full bg-aqua-soft px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-aqua-deep border border-aqua/30">
                      Mobile App
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-ink">
                    Full Mobile Suite
                  </h3>

                  <p className="oc-muted mt-2.5 text-sm leading-relaxed">
                    Offline on-device inference, Apple HealthKit sync, Android Health Connect, and full encrypted vault.
                  </p>
                </div>

                <div className="mt-8">
                  <CTAButton href="https://apps.apple.com" external>
                    Get the App
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="oc-section pb-24 pt-8 bg-white">
          <div className="oc-container">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-center text-white shadow-[0_30px_70px_-20px_rgba(0,35,33,0.45)] md:rounded-[2.5rem] md:px-12 md:py-16">
              <div className="oc-blob -right-10 -top-10 h-64 w-64 bg-aqua/30" />
              <div className="oc-dots absolute -bottom-10 -left-10 h-56 w-56 opacity-30" />

              <div className="relative z-10 mx-auto max-w-2xl">
                <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-aqua backdrop-blur">
                  On-device Intelligence
                </span>
                <h2 className="mt-5 text-2xl font-extrabold leading-tight text-white md:text-4xl">
                  Private by default. <span className="text-aqua">Fast by design.</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                  Every demo here is powered by lightweight, quantized models built by Studio ILLIOS.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <CTAButton href="/subscription">View Plans</CTAButton>
                  <CTAButton href="/features" variant="secondary" arrow={false}>
                    Explore Features
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