import Reveal from "@/components/ui/Reveal";
import { crisisStats, everySecond } from "@/lib/content";
import { Badge } from "./primitives";

export default function StatsSection() {
  return (
    <section id="crisis" className="oc-section oc-dark">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="oc-blob -left-20 top-0 h-96 w-96 bg-aqua/15" />
        <div className="oc-dots absolute -right-10 bottom-0 h-64 w-64 opacity-30" />
        <div className="oc-ring -left-40 top-1/2 h-[30rem] w-[30rem] opacity-40" />
      </div>

      <div className="oc-container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Reveal>
            <Badge>India&apos;s silent health emergency</Badge>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="oc-h2">{everySecond.headline}</h2>
          </Reveal>
          <Reveal delayMs={160}>
            <p className="oc-muted text-base leading-relaxed md:text-lg">{everySecond.support}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {crisisStats.map((s, i) => (
            <Reveal key={s.value} delayMs={i * 70}>
              <div className="oc-card-dark h-full p-6 md:p-7">
                <div className="text-4xl font-extrabold tracking-tight text-aqua md:text-5xl">{s.value}</div>
                <p className="mt-3 text-sm leading-snug text-white/85 md:text-base">{s.label}</p>
                <p className="mt-4 text-[0.72rem] font-medium uppercase tracking-wider text-white/40">{s.source}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-aqua/30 bg-aqua/10 px-6 py-6 text-center md:mt-14 md:px-10 md:py-8">
            <p className="text-lg font-semibold leading-snug text-white md:text-2xl">
              <span className="text-aqua">“</span>
              {everySecond.preventable}
              <span className="text-aqua">”</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
