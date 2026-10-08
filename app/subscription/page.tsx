import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { Badge, CTAButton, DecorativeBackground, Icon } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Subscription — OceanAI",
  description: "OceanAI pricing — free to download, premium AI features available. Simple, transparent pricing.",
};

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    highlight: false,
    desc: "Everything you need to get started with your health AI.",
    features: [
      "File upload (5 docs/month)",
      "Basic AI health chat",
      "Organ health overview",
      "Doctor appointment booking",
      "Blood donor finder",
      "AI history (30 days)",
    ],
    cta: "Download free",
    href: "https://apps.apple.com",
  },
  {
    name: "OceanAI Pro",
    price: "₹299",
    period: "month",
    highlight: true,
    badge: "Most popular",
    desc: "Unlimited AI, advanced insurance coding, and full health intelligence.",
    features: [
      "Unlimited file uploads",
      "Full Insurance AI (ICD-10 · CPT · DRG)",
      "On-device Local LLM",
      "Voice AI with wake word",
      "Watch integration (all metrics)",
      "Family Connect (up to 5 members)",
      "Unlimited AI history",
      "PDF health report export",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "https://apps.apple.com",
  },
  {
    name: "Family",
    price: "₹599",
    period: "month",
    highlight: false,
    desc: "One plan for the whole family. Up to 10 profiles, shared intelligence.",
    features: [
      "Everything in Pro",
      "Up to 10 family members",
      "Shared appointment visibility",
      "Caregiver dashboard",
      "Elderly care alerts",
      "Dedicated family health timeline",
    ],
    cta: "Get Family plan",
    href: "https://apps.apple.com",
  },
];

export default function SubscriptionPage() {
  return (
    <div className="oc-home min-h-screen flex flex-col bg-white">
      <SiteNav />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-12 pt-28 md:pb-16 md:pt-40">
          <DecorativeBackground />
          <div className="oc-container relative">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="oc-rise">
                <Badge>Pricing & Plans</Badge>
              </div>

              <h1 className="oc-h1 oc-rise mt-6" style={{ animationDelay: "100ms" }}>
                Simple, <span className="oc-accent">honest pricing.</span>
              </h1>

              <p
                className="oc-muted oc-rise mt-5 max-w-xl text-base leading-relaxed md:text-lg"
                style={{ animationDelay: "200ms" }}
              >
                Free to start. Upgrade when you need more. No hidden fees, no data selling, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="oc-section oc-tint pt-8 pb-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="oc-dots absolute -left-10 top-10 h-64 w-64 opacity-50" />
            <div className="oc-blob -right-24 bottom-10 h-72 w-72 bg-aqua/20" />
          </div>

          <div className="oc-container relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
              {PLANS.map((plan) => {
                if (plan.highlight) {
                  return (
                    <div
                      key={plan.name}
                      className="relative flex flex-col justify-between rounded-[2rem] bg-ink text-white p-8 md:p-9 shadow-[0_30px_70px_-20px_rgba(0,35,33,0.45)] border-2 border-aqua transition-all duration-300 hover:-translate-y-2 md:-mt-4 md:mb-4"
                    >
                      {/* Popular Badge */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-aqua text-ink text-xs font-extrabold uppercase tracking-wider shadow-md">
                        {plan.badge}
                      </div>

                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-extrabold uppercase tracking-wider text-aqua">
                            {plan.name}
                          </span>
                        </div>

                        <div className="mt-5 flex items-baseline gap-1.5">
                          <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
                            {plan.price}
                          </span>
                          <span className="text-sm font-medium text-white/60">/{plan.period}</span>
                        </div>

                        <p className="mt-3 text-sm text-white/75 leading-relaxed">{plan.desc}</p>

                        <div className="mt-6 mb-8">
                          <a
                            href={plan.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="oc-btn oc-btn-primary w-full shadow-lg"
                          >
                            <span>{plan.cta}</span>
                            <Icon name="arrow" size={16} />
                          </a>
                        </div>

                        <div className="border-t border-white/10 pt-6">
                          <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-4">
                            What&apos;s included
                          </p>
                          <ul className="flex flex-col gap-3">
                            {plan.features.map((f) => (
                              <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-aqua text-ink">
                                  <Icon name="check" size={12} />
                                </span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={plan.name}
                    className="oc-card flex flex-col justify-between p-8 md:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold uppercase tracking-wider text-ink/60">
                          {plan.name}
                        </span>
                      </div>

                      <div className="mt-5 flex items-baseline gap-1.5">
                        <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink font-sans">
                          {plan.price}
                        </span>
                        <span className="text-sm font-medium text-ink/60">/{plan.period}</span>
                      </div>

                      <p className="oc-muted mt-3 text-sm leading-relaxed">{plan.desc}</p>

                      <div className="mt-6 mb-8">
                        <a
                          href={plan.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="oc-btn oc-btn-secondary w-full"
                        >
                          <span>{plan.cta}</span>
                          <Icon name="arrow" size={16} />
                        </a>
                      </div>

                      <div className="border-t border-black/5 pt-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-4">
                          What&apos;s included
                        </p>
                        <ul className="flex flex-col gap-3">
                          {plan.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-sm text-ink/85">
                              <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-aqua-soft text-aqua-deep">
                                <Icon name="check" size={12} />
                              </span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Support & Terms text */}
            <div className="mt-14 max-w-xl mx-auto text-center">
              <div className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm backdrop-blur">
                <p className="text-xs md:text-sm text-ink/70 leading-relaxed">
                  All prices in INR. Free trial available on Pro plan. Cancel anytime. Questions? Email us at{" "}
                  <a
                    href="mailto:design@studioilios.com"
                    className="font-bold text-aqua-deep hover:underline"
                  >
                    design@studioilios.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}