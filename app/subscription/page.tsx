import type { Metadata } from "next";

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
    ctaHref: "https://apps.apple.com",
  },
  {
    name: "OceanAI Pro",
    price: "₹299",
    period: "per month",
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
    ctaHref: "https://apps.apple.com",
  },
  {
    name: "Family",
    price: "₹599",
    period: "per month",
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
    ctaHref: "https://apps.apple.com",
  },
];

export default function SubscriptionPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 60, background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)", borderBottom: "1px solid var(--border)", textAlign: "center" }}>
        <div className="container">
          <div className="eyebrow" style={{ display: "inline-flex", marginBottom: 20 }}>Pricing</div>
          <h1 className="display-xl" style={{ marginBottom: 16 }}>
            Simple, honest pricing.
          </h1>
          <p className="body-lg" style={{ maxWidth: 480, margin: "0 auto" }}>
            Free to start. Upgrade when you need more. No hidden fees, no data selling, no surprises.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }}>
            {PLANS.map((plan) => (
              <div key={plan.name} style={{
                background: plan.highlight ? "var(--bg-deep)" : "var(--bg-card)",
                border: plan.highlight ? "2px solid var(--accent)" : "1px solid var(--border)",
                borderRadius: 20,
                padding: "32px 28px",
                position: "relative",
                boxShadow: plan.highlight ? "0 20px 60px rgba(26,107,255,0.2)" : "var(--shadow-card)",
              }}>
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    padding: "4px 16px", background: "var(--accent)", color: "white",
                    borderRadius: 100, fontSize: "0.75rem", fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}>{plan.badge}</div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: plan.highlight ? "rgba(255,255,255,0.6)" : "var(--text-muted)", marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.25rem", color: plan.highlight ? "white" : "var(--text-primary)", letterSpacing: "-0.03em" }}>{plan.price}</span>
                    <span style={{ fontSize: "0.875rem", color: plan.highlight ? "rgba(255,255,255,0.4)" : "var(--text-muted)" }}>/{plan.period}</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: plan.highlight ? "rgba(255,255,255,0.5)" : "var(--text-secondary)", lineHeight: 1.55 }}>{plan.desc}</p>
                </div>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "13px 20px", borderRadius: 100,
                    background: plan.highlight ? "var(--accent)" : "transparent",
                    border: plan.highlight ? "none" : "1.5px solid var(--border-strong)",
                    color: plan.highlight ? "white" : "var(--text-primary)",
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem",
                    textDecoration: "none", marginBottom: 24,
                    transition: "all 0.15s ease",
                    boxShadow: plan.highlight ? "0 4px 14px rgba(26,107,255,0.35)" : "none",
                  }}
                >
                  {plan.cta}
                </a>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: plan.highlight ? "rgba(13,184,122,0.2)" : "rgba(13,184,122,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#0DB87A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ fontSize: "0.875rem", color: plan.highlight ? "rgba(255,255,255,0.65)" : "var(--text-secondary)", lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ / note */}
          <div style={{ maxWidth: 600, margin: "48px auto 0", textAlign: "center" }}>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              All prices in INR. Free trial available on Pro plan. Cancel anytime. 
              Questions? Email us at{" "}
              <a href="mailto:nextlife@studioilios.org" style={{ color: "var(--accent)", textDecoration: "none" }}>
                nextlife@studioilios.org
              </a>
            </p>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:900px){div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
