import Reveal from "@/components/ui/Reveal";
import { gtmPhases, revenueStreams, unitEconomics } from "@/lib/content";
import { Icon, SectionHeading } from "./primitives";

export default function BusinessSection() {
  return (
    <section id="business" className="oc-section">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="oc-dots absolute -right-10 top-10 h-60 w-60 opacity-50" />
      </div>
      <div className="oc-container relative">
        <SectionHeading eyebrow="How Ocean AI makes money">
          Multiple streams. <span className="oc-accent">One mission.</span>
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {revenueStreams.map((r, i) => (
            <Reveal key={r.num} delayMs={i * 80}>
              <div className="oc-card oc-card-soft h-full p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-aqua text-sm font-extrabold text-ink">
                  {r.num}
                </span>
                <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                <p className="oc-muted mt-2 text-sm leading-relaxed">{r.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={100}>
          <div className="oc-dark mt-6 grid grid-cols-2 gap-y-8 rounded-[2rem] p-7 md:grid-cols-4 md:p-10">
            {unitEconomics.map((u) => (
              <div key={u.label} className="text-center">
                <div className="text-2xl font-extrabold text-aqua sm:text-3xl md:text-4xl">{u.value}</div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">{u.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24">
          <SectionHeading eyebrow="Go to market" align="left">
            India first, <span className="oc-accent">global by design.</span>
          </SectionHeading>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {gtmPhases.map((p, i) => (
              <Reveal key={p.phase} delayMs={i * 100}>
                <div className="oc-card h-full p-6 md:p-7">
                  <span className="oc-badge">{p.phase}</span>
                  <h4 className="mt-4 text-xl font-bold">{p.title}</h4>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm text-ink/80">
                        <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-aqua text-ink">
                          <Icon name="check" size={12} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
