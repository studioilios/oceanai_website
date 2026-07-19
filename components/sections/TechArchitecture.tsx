import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/lib/content";

export default function TechArchitecture() {
  return (
    <Section id="tech" align="right" maxWidth="max-w-3xl">
      <Reveal>
        <span className="eyebrow">Under the hood</span>
      </Reveal>
      <Reveal delayMs={100}>
        <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight mt-4">
          Built on a serious technical foundation.
        </h2>
      </Reveal>
      <Reveal delayMs={200}>
        <p className="text-mist mt-5 max-w-lg leading-relaxed">
          Diagnostic inference runs on-device by default — private, instant, and
          working with zero connectivity — and escalates to cloud only when a
          case needs deeper clinical reasoning.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
        {techStack.map((t, i) => (
          <Reveal key={t.label} delayMs={i * 60}>
            <div className="panel rounded-xl p-4">
              <div className="font-display font-medium text-foam text-sm">{t.label}</div>
              <div className="font-mono text-xs text-current mt-1">{t.tech}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={420} className="mt-8 panel rounded-2xl p-6 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span className="eyebrow">Open source model</span>
          <p className="font-display font-medium text-foam mt-1">ICD-10 & insurance intelligence</p>
          <p className="text-mist text-xs mt-1">Published on HuggingFace · Apache 2.0</p>
        </div>
        <a
          href="https://huggingface.co/AmareshHebbar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-current whitespace-nowrap"
        >
          View on HuggingFace ↗
        </a>
      </Reveal>
    </Section>
  );
}