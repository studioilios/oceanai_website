import Reveal from "@/components/ui/Reveal";
import { team } from "@/lib/content";
import { SectionHeading } from "./primitives";

export default function TeamSection() {
  return (
    <section id="team" className="oc-section oc-tint">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="oc-dots absolute -right-10 -top-6 h-64 w-64 opacity-60" />
        <div className="oc-dots absolute -left-10 bottom-0 hidden h-56 w-56 opacity-40 md:block" />
      </div>
      <div className="oc-container relative">
        <SectionHeading eyebrow="Team Ocean AI">
          World-class healthcare, built by a founding team of two —{" "}
          <span className="oc-accent">and the specialists behind them.</span>
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {team.map((m, i) => (
            <Reveal key={m.name} delayMs={i * 70}>
              <div className="oc-card flex h-full items-center gap-4 p-5 md:p-6">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-full bg-ink text-xl font-extrabold text-aqua">
                  {m.name.replace("Dr. ", "").charAt(0)}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-tight">{m.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-aqua-deep">{m.role}</p>
                  <p className="oc-muted mt-1 text-xs leading-snug">{m.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
