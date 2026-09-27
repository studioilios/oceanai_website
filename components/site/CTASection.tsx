import Reveal from "@/components/ui/Reveal";
import { demoAccess } from "@/lib/content";
import { Badge, CTAButton } from "./primitives";

export default function CTASection() {
  return (
    <section id="cta" className="oc-section">
      <div className="oc-container">
        <div className="oc-tint relative overflow-hidden rounded-[2rem] border border-aqua/20 px-5 py-14 text-center md:rounded-[3rem] md:px-16 md:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="oc-dots absolute -left-8 -top-8 h-56 w-56 opacity-70" />
            <div className="oc-dots absolute -bottom-8 -right-8 h-56 w-56 opacity-70" />
            <div className="oc-ring -right-24 -top-24 h-72 w-72" />
            <div className="oc-ring -bottom-32 -left-20 h-80 w-80" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <Badge>Available now on iOS &amp; Android</Badge>
            </Reveal>
            <Reveal delayMs={80}>
              <h2 className="oc-h2 mt-5">
                Your health deserves <span className="oc-accent">better intelligence.</span>
              </h2>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="oc-muted mt-5 text-base leading-relaxed md:text-lg">
                Download Ocean AI and experience health intelligence that works offline, respects your privacy, and
                speaks your language.
              </p>
            </Reveal>
            <Reveal delayMs={240} className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <CTAButton href={demoAccess.ios} external>
                Download on the App Store
              </CTAButton>
              <CTAButton href={demoAccess.android} external variant="dark">
                Get it on Google Play
              </CTAButton>
            </Reveal>

            <Reveal delayMs={320}>
              <div className="oc-card mx-auto mt-10 max-w-md p-6 text-left">
                <span className="oc-badge">Demo credentials</span>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex flex-wrap justify-between gap-x-4">
                    <dt className="oc-muted font-medium">Email</dt>
                    <dd className="break-all font-mono font-semibold">{demoAccess.email}</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-x-4">
                    <dt className="oc-muted font-medium">Password</dt>
                    <dd className="font-mono font-semibold">{demoAccess.password}</dd>
                  </div>
                </dl>
                <a
                  href={demoAccess.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-bold text-aqua-deep hover:underline"
                >
                  {demoAccess.website} ↗
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={400}>
              <p className="oc-muted mt-10 text-sm font-medium">Ocean AI — Dive into a healthier future.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
