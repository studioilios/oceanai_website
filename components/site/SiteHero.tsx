import { Badge, CTAButton, DecorativeBackground, FloatingCard, Icon, IconDot } from "./primitives";
import { featureGroups } from "@/lib/content";

// Visual: a layered "app" panel built from real product content — no stock imagery.
const preview = [
  featureGroups[2].items[0], // Agentic AI diagnosis
  featureGroups[2].items[1], // Voice commands
  featureGroups[0].items[0], // Online doctor consultations
] as const;
const previewIcons = ["brain", "mic", "video"] as const;

export default function SiteHero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40">
      <DecorativeBackground />
      <div className="oc-container relative">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="oc-rise">
            <Badge>Introducing Ocean AI</Badge>
          </div>
          <h1 className="oc-h1 oc-rise mt-6" style={{ animationDelay: "100ms" }}>
            <span className="md:whitespace-nowrap">Your health. Your language.</span>
            <br />
            <span className="oc-accent">Your AI.</span>
          </h1>
          <p
            className="oc-muted oc-rise mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            A health intelligence platform that lives on your device — organ-level diagnosis, insurance mapped in plain
            language, and a doctor&apos;s second opinion, private by default and offline when it has to be.
          </p>
          <div
            className="oc-rise mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
            style={{ animationDelay: "300ms" }}
          >
            <CTAButton href="#cta">Get access</CTAButton>
            <CTAButton href="#crisis" variant="secondary" arrow={false}>
              See why we exist
            </CTAButton>
          </div>
        </div>

        {/* Layered visual */}
        <div className="oc-pop relative mx-auto mt-14 max-w-4xl md:mt-20" style={{ animationDelay: "420ms" }}>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-5 pb-10 pt-12 shadow-[0_40px_80px_-30px_rgba(0,35,33,0.55)] md:rounded-[2.5rem] md:px-10 md:pb-16 md:pt-16">
            <div className="oc-blob -right-10 -top-10 h-60 w-60 bg-aqua/40" />
            <div className="oc-dots absolute -bottom-10 -left-10 h-56 w-56 opacity-40" />

            <div className="relative grid grid-cols-[minmax(0,1fr)] items-center gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-aqua">On-device health intelligence</p>
                <p className="mt-3 text-2xl font-extrabold leading-tight text-white md:text-3xl">
                  Diagnosis, insurance and care — in your own language.
                </p>
                {/* ECG line */}
                <svg viewBox="0 0 400 80" className="mt-6 h-16 w-full text-aqua" fill="none" aria-hidden>
                  <path
                    d="M0 40h90l14-30 22 60 20-46 12 16h242"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <ul className="flex flex-col gap-3">
                {preview.map((p, i) => (
                  <li
                    key={p.title}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 backdrop-blur"
                  >
                    <IconDot name={previewIcons[i]} size={17} />
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white">{p.title}</p>
                      <p className="truncate text-xs text-white/60">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <FloatingCard icon="mic" title="Voice commands" value="12+ languages" className="-top-5 left-4 md:left-10" delay={700} />
          <FloatingCard icon="wallet" title="Insurance plans" value="From ₹99/month" className="-bottom-5 right-4 md:right-10" delay={900} />
          <FloatingCard icon="shield" title="Private by default" value="Works offline" className="hidden md:block md:-bottom-5 md:left-10" delay={1100} />
        </div>

        <p className="mt-16 flex items-center justify-center gap-2 text-xs font-semibold text-ink/50 md:mt-20">
          <Icon name="chevron" size={14} /> Scroll to explore
        </p>
      </div>
    </section>
  );
}
