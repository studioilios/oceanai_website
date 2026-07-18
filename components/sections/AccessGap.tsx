import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import StatCard from "@/components/ui/StatCard";
import { accessGaps, insuranceGap } from "@/lib/content";

export default function AccessGap() {
  return (
    <Section id="access" align="right" maxWidth="max-w-3xl">
      <Reveal>
        <span className="eyebrow text-alarm">One hospital bill from losing everything</span>
      </Reveal>
      <Reveal delayMs={100}>
        <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight mt-4">
          Care exists. It just never reaches most of India.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {insuranceGap.map((s, i) => (
          <Reveal key={s.value} delayMs={i * 70}>
            <StatCard value={s.value} label={s.label} source={s.source} tone="alarm" />
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={340} className="mt-12 space-y-5">
        {accessGaps.map((g) => (
          <div key={g.title} className="border-b border-haze pb-4">
            <h3 className="font-display font-medium text-lg text-foam">{g.title}</h3>
            <p className="text-mist text-sm mt-1 leading-relaxed">{g.body}</p>
          </div>
        ))}
      </Reveal>

      <Reveal delayMs={480}>
        <p className="font-display italic text-foam/80 mt-8 max-w-md ml-auto text-right">
          “It is not that they don't want to be protected. They simply were never told they could be.”
        </p>
      </Reveal>
    </Section>
  );
}