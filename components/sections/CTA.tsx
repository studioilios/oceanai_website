import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { demoAccess } from "@/lib/content";

export default function CTA() {
  return (
    <Section id="cta">
      <div className="text-center mx-auto">
        <Reveal>
          <span className="eyebrow">Available now on iOS & Android</span>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-tight mt-4">
            Your health deserves
            <br />
            better intelligence.
          </h2>
        </Reveal>
        <Reveal delayMs={220}>
          <p className="text-mist mt-5 max-w-md mx-auto leading-relaxed">
            Download Ocean AI and experience health intelligence that works
            offline, respects your privacy, and speaks your language.
          </p>
        </Reveal>

        <Reveal delayMs={340} className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <a
            href={demoAccess.ios}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foam text-abyss px-6 py-3 text-sm font-medium"
          >
            Download on the App Store
          </a>
          <a
            href={demoAccess.android}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-haze px-6 py-3 text-sm font-medium text-foam"
          >
            Get it on Google Play
          </a>
        </Reveal>

        <Reveal delayMs={460} className="panel rounded-2xl p-6 mt-14 max-w-md mx-auto text-left">
          <span className="eyebrow">Demo credentials</span>
          <div className="mt-3 space-y-1 text-sm">
            <p className="text-foam">
              Email <span className="text-mist font-mono">{demoAccess.email}</span>
            </p>
            <p className="text-foam">
              Password <span className="text-mist font-mono">{demoAccess.password}</span>
            </p>
          </div>
          <a href={demoAccess.website} target="_blank" rel="noopener noreferrer" className="text-current text-sm mt-4 inline-block">
            {demoAccess.website} ↗
          </a>
        </Reveal>

        <Reveal delayMs={560}>
          <p className="text-mist text-xs mt-16">Ocean AI — Dive into a healthier future.</p>
        </Reveal>
      </div>
    </Section>
  );
}