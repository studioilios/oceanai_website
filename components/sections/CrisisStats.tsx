import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import StatCard from "@/components/ui/StatCard";
import { crisisStats, everySecond } from "@/lib/content";

export default function CrisisStats() {
  return (
    <Section id="crisis" align="left" maxWidth="max-w-5xl">
      <Reveal>
        <span className="eyebrow text-alarm">India's silent health emergency</span>
      </Reveal>
      <Reveal delayMs={100}>
        <h2 className="font-display font-semibold text-4xl md:text-6xl leading-tight mt-4 max-w-2xl">
          {everySecond.headline}
        </h2>
      </Reveal>
      <Reveal delayMs={200}>
        <p className="text-mist mt-5 max-w-xl leading-relaxed">{everySecond.support}</p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {crisisStats.map((s, i) => (
          <Reveal key={s.value} delayMs={i * 70}>
            <StatCard value={s.value} label={s.label} source={s.source} tone="alarm" />
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={500} className="mt-10 max-w-xl border-l-2 border-pulse pl-5">
        <p className="font-display italic text-lg text-foam/90">“{everySecond.preventable}”</p>
      </Reveal>
    </Section>
  );
}