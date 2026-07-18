import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { revenueStreams, unitEconomics, gtmPhases } from "@/lib/content";

export default function BusinessModel() {
  return (
    <Section id="business" align="right" maxWidth="max-w-5xl">
      <Reveal>
        <span className="eyebrow">How Ocean AI makes money</span>
      </Reveal>
      <Reveal delayMs={100}>
        <h2 className="font-display font-semibold text-4xl md:text-6xl leading-tight mt-4 max-w-2xl ml-auto text-right">
          Multiple streams. One mission.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {revenueStreams.map((r, i) => (
          <Reveal key={r.num} delayMs={i * 80}>
            <div className="panel rounded-2xl p-5 h-full">
              <span className="font-mono text-xs text-current">{r.num}</span>
              <h3 className="font-display font-medium text-foam mt-2">{r.title}</h3>
              <p className="text-mist text-xs mt-2 leading-relaxed">{r.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={360} className="mt-8 panel rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {unitEconomics.map((u) => (
          <div key={u.label} className="text-center">
            <div className="font-display font-bold text-xl md:text-2xl text-pulse">{u.value}</div>
            <div className="text-mist text-[0.7rem] mt-1 uppercase tracking-wide">{u.label}</div>
          </div>
        ))}
      </Reveal>

      <Reveal delayMs={480} className="mt-14">
        <span className="eyebrow">Go to market — India first, global by design</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          {gtmPhases.map((p) => (
            <div key={p.phase} className="border-l-2 border-haze pl-4">
              <div className="font-mono text-[0.7rem] text-current">{p.phase}</div>
              <h4 className="font-display font-medium text-foam mt-1">{p.title}</h4>
              <ul className="text-mist text-xs mt-2 space-y-1 leading-relaxed">
                {p.items.map((it) => (
                  <li key={it}>— {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}