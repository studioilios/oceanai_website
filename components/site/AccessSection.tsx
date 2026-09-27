import Reveal from "@/components/ui/Reveal";
import { accessGaps, insuranceGap } from "@/lib/content";
import { DecorativeBackground, IconDot, SectionHeading, type IconName } from "./primitives";

const gapIcons: IconName[] = ["user", "building", "map", "eye"];

export default function AccessSection() {
  return (
    <section id="access" className="oc-section">
      <DecorativeBackground />
      <div className="oc-container relative">
        <SectionHeading eyebrow="One hospital bill from losing everything">
          Care exists. It just never <span className="oc-accent">reaches most of India.</span>
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {insuranceGap.map((s, i) => (
            <Reveal key={s.value} delayMs={i * 70}>
              <div className="oc-card h-full p-6">
                <div className="text-4xl font-extrabold tracking-tight text-ink">{s.value}</div>
                <p className="oc-muted mt-3 text-sm leading-snug">{s.label}</p>
                {s.source && <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-wider text-aqua-deep">{s.source}</p>}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {accessGaps.map((g, i) => (
            <Reveal key={g.title} delayMs={i * 70}>
              <div className="oc-card oc-card-soft flex h-full items-start gap-4 p-6">
                <IconDot name={gapIcons[i]} />
                <div>
                  <h3 className="text-lg font-bold">{g.title}</h3>
                  <p className="oc-muted mt-1.5 text-sm leading-relaxed">{g.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-xl font-bold leading-snug md:text-2xl">
            “They simply were never told they <span className="oc-accent">could be protected.</span>”
          </p>
        </Reveal>
      </div>
    </section>
  );
}
