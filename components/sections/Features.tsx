import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { featureGroups } from "@/lib/content";

export default function Features() {
  return (
    <Section id="features" align="left" maxWidth="max-w-5xl">
      <Reveal>
        <span className="eyebrow">What Ocean AI does</span>
      </Reveal>
      <Reveal delayMs={100}>
        <h2 className="font-display font-semibold text-4xl md:text-6xl leading-tight mt-4 max-w-2xl">
          One app. Every pillar of care.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {featureGroups.map((group, gi) => (
          <Reveal key={group.group} delayMs={gi * 120}>
            <div className="panel rounded-2xl p-6 h-full">
              <span className="eyebrow">{group.group}</span>
              <ul className="mt-5 space-y-5">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-display font-medium text-foam text-base">{item.title}</h3>
                    <p className="text-mist text-sm mt-1 leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}