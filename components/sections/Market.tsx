import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { marketFigures } from "@/lib/content";

export default function Market() {
  return (
    <Section id="market" align="left" maxWidth="max-w-4xl">
      <Reveal>
        <span className="eyebrow">Market size</span>
      </Reveal>
      <Reveal delayMs={100}>
        <h2 className="font-display font-semibold text-4xl md:text-6xl leading-tight mt-4 max-w-2xl">
          A scalable path to a massive market.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
        {marketFigures.map((m, i) => (
          <Reveal key={m.label} delayMs={i * 70}>
            <div className="panel rounded-2xl p-6">
              <div className="font-display font-bold text-2xl md:text-3xl gradient-current">{m.value}</div>
              <p className="text-mist text-sm mt-2 leading-snug">{m.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={420}>
        <p className="text-foam/85 mt-10 max-w-xl leading-relaxed font-display italic text-lg">
          Scaling preventive care via India Stack integration and ubiquitous
          connectivity.
        </p>
      </Reveal>
    </Section>
  );
}