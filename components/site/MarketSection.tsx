import Reveal from "@/components/ui/Reveal";
import { marketFigures } from "@/lib/content";
import { Badge } from "./primitives";

export default function MarketSection() {
  const [tam, ...rest] = marketFigures;
  return (
    <section id="market" className="oc-section oc-dark">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="oc-blob -right-20 -top-10 h-96 w-96 bg-aqua/15" />
        <div className="oc-dots absolute -left-10 bottom-0 h-64 w-64 opacity-30" />
      </div>
      <div className="oc-container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Reveal>
            <Badge>Market size</Badge>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="oc-h2">
              A scalable path to a <span className="oc-accent">massive market.</span>
            </h2>
          </Reveal>
          <Reveal delayMs={160}>
            <p className="oc-muted text-base leading-relaxed md:text-lg">
              Scaling preventive care via India Stack integration and ubiquitous connectivity.
            </p>
          </Reveal>
        </div>

        <Reveal delayMs={100}>
          <div className="mt-12 rounded-[2rem] border border-aqua/30 bg-aqua/10 p-7 text-center md:mt-16 md:p-12">
            <div className="text-4xl font-extrabold tracking-tight text-aqua sm:text-5xl md:text-6xl">{tam.value}</div>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/75 md:text-base">{tam.label}</p>
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {rest.map((m, i) => (
            <Reveal key={m.label} delayMs={i * 70}>
              <div className="oc-card-dark h-full p-6">
                <div className="text-3xl font-extrabold text-aqua md:text-4xl">{m.value}</div>
                <p className="mt-2 text-sm leading-snug text-white/75">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
