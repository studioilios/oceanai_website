import type { Metadata } from "next";
import CompanyShell from "@/components/company/CompanyShell";
import SubscriptionScene from "@/components/canvas/scenes/SubscriptionScene";
import { glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Subscription — OceanAI",
  description: "OceanAI pricing — free to download, premium AI features available. Simple, transparent pricing.",
};

const PLANS = [
  {
    name: "Free", price: "₹0", period: "forever", highlight: false, accent: "#94A3B8",
    desc: "Everything you need to get started with your health AI.",
    features: ["File upload (5 docs/month)", "Basic AI health chat", "Organ health overview", "Doctor appointment booking", "Blood donor finder", "AI history (30 days)"],
    cta: "Download free",
  },
  {
    name: "OceanAI Pro", price: "₹299", period: "per month", highlight: true, badge: "Most popular", accent: "#38BDF8",
    desc: "Unlimited AI, advanced insurance coding, and full health intelligence.",
    features: ["Unlimited file uploads", "Full Insurance AI (ICD-10 · CPT · DRG)", "On-device Local LLM", "Voice AI with wake word", "Watch integration (all metrics)", "Family Connect (up to 5 members)", "Unlimited AI history", "PDF health report export", "Priority support"],
    cta: "Start free trial",
  },
  {
    name: "Family", price: "₹599", period: "per month", highlight: false, accent: "#FBBF24",
    desc: "One plan for the whole family. Up to 10 profiles, shared intelligence.",
    features: ["Everything in Pro", "Up to 10 family members", "Shared appointment visibility", "Caregiver dashboard", "Elderly care alerts", "Dedicated family health timeline"],
    cta: "Get Family plan",
  },
];

export default function SubscriptionPage() {
  return (
    <CompanyShell scene={<SubscriptionScene />}>
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 56, textAlign: "center", borderBottom: `1px solid ${borderColor}` }}>
        <div className="container">
          <div style={{ display: "inline-flex", ...glassChip("#38BDF8"), padding: "5px 14px", borderRadius: 100, color: "#7DD3FC", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Pricing</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, marginBottom: 16, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>Simple, honest pricing.</h1>
          <p style={{ fontSize: "1.0625rem", color: textSecondary, maxWidth: 480, margin: "0 auto" }}>Free to start. Upgrade when you need more. No hidden fees, no data selling, no surprises.</p>
        </div>
      </section>

      <section className="relative z-10" style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 1000, margin: "0 auto" }} className="plan-grid">
            {PLANS.map((plan) => (
              <div key={plan.name} style={{
                background: plan.highlight ? "rgba(56,189,248,0.1)" : "rgba(6,14,26,0.55)",
                backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                border: plan.highlight ? `2px solid ${plan.accent}` : `1px solid ${borderColor}`,
                borderRadius: 20, padding: "32px 28px", position: "relative",
                boxShadow: plan.highlight ? "0 20px 60px rgba(56,189,248,0.2)" : "0 16px 40px rgba(0,0,0,0.3)",
              }}>
                {plan.badge && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "4px 16px", background: plan.accent, color: "#0A1628", borderRadius: 100, fontSize: "0.75rem", fontWeight: 700, whiteSpace: "nowrap" }}>{plan.badge}</div>
                )}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: textMuted, marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.25rem", color: textPrimary, letterSpacing: "-0.03em" }}>{plan.price}</span>
                    <span style={{ fontSize: "0.875rem", color: textMuted }}>/{plan.period}</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: textSecondary, lineHeight: 1.55 }}>{plan.desc}</p>
                </div>

                <a
                  href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "13px 20px", borderRadius: 100,
                    background: plan.highlight ? plan.accent : "rgba(255,255,255,0.06)",
                    border: plan.highlight ? "none" : `1.5px solid ${borderColor}`,
                    color: plan.highlight ? "#0A1628" : textPrimary,
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9375rem",
                    textDecoration: "none", marginBottom: 24,
                  }}
                >
                  {plan.cta}
                </a>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(52,211,153,0.16)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <span style={{ fontSize: "0.875rem", color: textSecondary, lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 600, margin: "48px auto 0", textAlign: "center" }}>
            <p style={{ fontSize: "0.875rem", color: textMuted, lineHeight: 1.6 }}>
              All prices in INR. Free trial available on Pro plan. Cancel anytime. Questions? Email us at{" "}
              <a href="mailto:design@studioilios.com" style={{ color: "#7DD3FC", textDecoration: "none" }}>design@studioilios.com</a>
            </p>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:900px){.plan-grid{grid-template-columns:1fr!important}}`}</style>
    </CompanyShell>
  );
}