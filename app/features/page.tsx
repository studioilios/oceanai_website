import Link from "next/link";
import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { Badge, CTAButton, DecorativeBackground, Icon } from "@/components/site/primitives";
import { ALL_FEATURES } from "@/lib/featureContent";

export const metadata: Metadata = {
  title: "Features — OceanAI",
  description:
    "Every capability inside OceanAI — from on-device AI to ICD-10 insurance coding, organ health, voice AI, and family connect.",
};

const CHAT_TILE = {
  icon: "💬",
  title: "Full AI Chat",
  tag: "Core",
  desc: "Complete health AI chat with context from all your data — files, organs, and history in one thread.",
};

const STATS = [
  { value: "11", label: "Core features" },
  { value: "2", label: "Platforms — iOS & Android" },
  { value: "7", label: "Organ systems tracked" },
  { value: "12+", label: "Regional languages on the roadmap" },
];

export default function FeaturesPage() {
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
                <Badge>Everything OceanAI does</Badge>
              </div>

              <h1 className="oc-h1 oc-rise mt-6" style={{ animationDelay: "100ms" }}>
                11 features.
                <br />
                <span className="oc-accent">One health platform.</span>
              </h1>

              <p
                className="oc-muted oc-rise mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ animationDelay: "200ms" }}
              >
                OceanAI is not a single-feature app. It&apos;s a complete health intelligence layer — from emergency
                blood donor lookup to on-device AI that works fully offline.
              </p>

              <div
                className="oc-rise mt-8 flex flex-wrap items-center justify-center gap-3"
                style={{ animationDelay: "300ms" }}
              >
                <CTAButton href="/playground">Try them live</CTAButton>
                <CTAButton href="#catalog" variant="secondary" arrow={false}>
                  Browse catalog
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Platform stats */}
        <section className="oc-section oc-tint pt-12 pb-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="oc-dots absolute -left-10 top-10 h-64 w-64 opacity-50" />
            <div className="oc-blob -right-24 bottom-10 h-72 w-72 bg-aqua/20" />
          </div>

          <div className="oc-container relative">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="oc-badge">Platform metrics</span>
              <h2 className="oc-h2 mt-3 text-ink">The platform in numbers</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="oc-card p-6 md:p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-3xl md:text-5xl font-extrabold tracking-tight text-aqua-deep">
                    {s.value}
                  </div>
                  <p className="mt-3 text-sm md:text-base font-semibold text-ink/80 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Catalog Grid */}
        <section id="catalog" className="oc-section bg-white">
          <div className="oc-container relative">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Badge>Full catalog</Badge>
              <h2 className="oc-h2 mt-3 text-ink">
                Every feature, in <span className="oc-accent">one place</span>
              </h2>
              <p className="oc-muted mt-3 text-base">
                Explore all 11 core capabilities designed to deliver proactive, private, and localized health intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ALL_FEATURES.map((f) => (
                <Link
                  key={f.title}
                  href={`/features/${f.slug}`}
                  className="group oc-card p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,35,33,0.15)] no-underline"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-soft text-2xl transition-transform duration-300 group-hover:scale-110 shadow-sm border border-aqua/20">
                        {f.icon}
                      </span>
                      <span className="inline-block rounded-full bg-ink px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-aqua">
                        {f.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-aqua-deep">
                      {f.title}
                    </h3>

                    <p className="oc-muted mt-2.5 text-sm leading-relaxed">{f.desc}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-aqua-deep transition-colors group-hover:text-ink">
                    <span>Explore</span>
                    <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}

              {/* Full AI Chat — points straight to the playground */}
              <Link
                href="/playground"
                className="group oc-card p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,35,33,0.15)] no-underline"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-soft text-2xl transition-transform duration-300 group-hover:scale-110 shadow-sm border border-aqua/20">
                      {CHAT_TILE.icon}
                    </span>
                    <span className="inline-block rounded-full bg-ink px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-aqua">
                      {CHAT_TILE.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-aqua-deep">
                    {CHAT_TILE.title}
                  </h3>

                  <p className="oc-muted mt-2.5 text-sm leading-relaxed">{CHAT_TILE.desc}</p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-aqua-deep transition-colors group-hover:text-ink">
                  <span>Explore in Playground</span>
                  <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="oc-section pb-24 pt-8">
          <div className="oc-container">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-center text-white shadow-[0_30px_70px_-20px_rgba(0,35,33,0.45)] md:rounded-[2.5rem] md:px-12 md:py-16">
              <div className="oc-blob -right-10 -top-10 h-64 w-64 bg-aqua/30" />
              <div className="oc-dots absolute -bottom-10 -left-10 h-56 w-56 opacity-30" />

              <div className="relative z-10 mx-auto max-w-2xl">
                <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-aqua backdrop-blur">
                  Interactive Demo
                </span>
                <h2 className="mt-5 text-2xl font-extrabold leading-tight text-white md:text-4xl">
                  Try every feature — <span className="text-aqua">no account needed.</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                  The playground runs real AI, live, right in your browser.
                </p>
                <div className="mt-8 flex justify-center">
                  <CTAButton href="/playground">Open the Playground</CTAButton>
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