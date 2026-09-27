import Reveal from "@/components/ui/Reveal";
import { featureGroups } from "@/lib/content";
import { SectionHeading, Icon, type IconName } from "./primitives";

const icons: IconName[][] = [
  ["video", "alert", "pill"],
  ["heart", "watch", "bell"],
  ["brain", "mic", "wallet"],
];

export default function FeatureSection() {
  return (
    <section id="features" className="oc-section oc-tint">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="oc-dots absolute -left-10 top-10 h-64 w-64 opacity-60" />
        <div className="oc-blob -right-24 bottom-10 h-80 w-80 bg-aqua/20" />
      </div>
      <div className="oc-container relative">
        <SectionHeading eyebrow="What Ocean AI does">
          One app. Every <span className="oc-accent">pillar of care.</span>
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 lg:grid-cols-3">
          {featureGroups.map((group, gi) => (
            <Reveal key={group.group} delayMs={gi * 100}>
              <div className="oc-card h-full p-6 md:p-8">
                <span className="inline-block rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-aqua">
                  {group.group}
                </span>
                <ul className="mt-6 flex flex-col gap-5">
                  {group.items.map((item, ii) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-aqua-soft text-aqua-deep">
                        <Icon name={icons[gi][ii]} size={18} />
                      </span>
                      <div>
                        <h3 className="text-base font-bold">{item.title}</h3>
                        <p className="oc-muted mt-1 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
