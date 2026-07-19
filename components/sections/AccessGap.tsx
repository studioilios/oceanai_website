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
        <h2 className="font-display font-semibold text-2xl md:text-4xl leading-tight mt-3">
          Care exists. It just never reaches most of India.
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 mt-6">
        {insuranceGap.map((s, i) => (
          <Reveal key={s.value} delayMs={i * 60}>
            <StatCard value={s.value} label={s.label} source={s.source} tone="alarm" />
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={280} className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6">
        {accessGaps.map((g) => (
          <div key={g.title}>
            <h3 className="font-display font-medium text-sm text-foam">{g.title}</h3>
            <p className="text-mist text-xs mt-0.5 leading-snug">{g.body}</p>
          </div>
        ))}
      </Reveal>

      <Reveal delayMs={380}>
        <p className="font-display italic text-foam/80 text-sm mt-5 max-w-md ml-auto text-right">
          “They simply were never told they could be protected.”
        </p>
      </Reveal>
    </Section>
  );
}