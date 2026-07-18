import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <Section id="team" align="left" className="max-w-none">
      <div className="w-full max-w-4xl">
        <Reveal>
          <span className="eyebrow">Team Ocean AI</span>
        </Reveal>
        <Reveal delayMs={100}>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-tight mt-4 max-w-2xl">
            World-class healthcare, built by a founding team of two — and the
            specialists behind them.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {team.map((m, i) => (
            <Reveal key={m.name} delayMs={i * 70}>
              <div className="panel rounded-2xl p-5">
                <h3 className="font-display font-medium text-foam">{m.name}</h3>
                <p className="text-current text-xs mt-1">{m.role}</p>
                <p className="text-mist text-xs mt-2">{m.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}