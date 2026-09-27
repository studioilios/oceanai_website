import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/lib/content";
import { CTAButton, IconDot, SectionHeading, type IconName } from "./primitives";

const icons: IconName[] = ["phone", "server", "chip", "shield", "mic", "layers"];

export default function TechSection() {
  return (
    <section id="tech" className="oc-section">
      <div className="oc-container">
        <SectionHeading
          eyebrow="Under the hood"
          lead="Diagnostic inference runs on-device by default — private, instant, and working with zero connectivity — and escalates to cloud only when a case needs deeper clinical reasoning."
        >
          Built on a serious <span className="oc-accent">technical foundation.</span>
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {techStack.map((t, i) => (
            <Reveal key={t.label} delayMs={i * 60}>
              <div className="oc-card h-full p-6">
                <IconDot name={icons[i]} />
                <h3 className="mt-4 text-base font-bold">{t.label}</h3>
                <p className="oc-muted mt-1.5 text-sm leading-relaxed">{t.tech}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200}>
          <div className="oc-dark relative mt-6 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] p-7 md:flex-row md:items-center md:p-10">
            <div className="oc-blob -right-10 -top-16 h-56 w-56 bg-aqua/30" />
            <div className="relative">
              <span className="oc-badge">Open source model</span>
              <p className="mt-4 text-2xl font-extrabold md:text-3xl">ICD-10 &amp; insurance intelligence</p>
              <p className="oc-muted mt-2 text-sm">Published on HuggingFace · Apache 2.0</p>
            </div>
            <div className="relative w-full sm:w-auto">
              <CTAButton href="https://huggingface.co/AmareshHebbar" external block>
                View on HuggingFace
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
