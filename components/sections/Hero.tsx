import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <Section id="hero" align="left">
      <Reveal>
        <span className="eyebrow">Introducing</span>
      </Reveal>
      <Reveal delayMs={100}>
        <h1 className="font-display font-semibold text-[13vw] md:text-[6.4rem] leading-[0.94] tracking-tightest text-foam mt-4">
          Ocean AI
        </h1>
      </Reveal>
      <Reveal delayMs={220}>
        <p className="font-display italic text-2xl md:text-3xl mt-6 gradient-current">
          Your health. Your language. Your AI.
        </p>
      </Reveal>
      <Reveal delayMs={340}>
        <p className="text-mist text-base md:text-lg mt-6 max-w-md leading-relaxed">
          A health intelligence platform that lives on your device — organ-level
          diagnosis, insurance mapped in plain language, and a doctor's second
          opinion, private by default and offline when it has to be.
        </p>
      </Reveal>
      <Reveal delayMs={460} className="mt-10 flex items-center gap-6">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-current px-6 py-3 text-sm font-medium text-foam"
          >
            Get access
          </a>
          <button
            onClick={() => document.getElementById("crisis")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm text-mist hover:text-foam transition-colors"
          >
            See why we exist ↓
          </button>
        </div>
      </Reveal>
    </Section>
  );
}