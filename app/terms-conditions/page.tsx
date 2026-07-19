import type { Metadata } from "next";
import CompanyShell from "@/components/company/CompanyShell";
import TermsScene from "@/components/canvas/scenes/TermsScene";
import { glassPanel, glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Terms & Conditions — OceanAI",
  description: "OceanAI Terms and Conditions — usage, liability, health disclaimer, and user obligations.",
};

const SECTIONS = [
  { title: "1. Acceptance of terms", body: `By downloading OceanAI or using the OceanAI website, you agree to these Terms and Conditions. If you do not agree, do not use the service. These terms apply to all users, including visitors, free users, and paid subscribers.` },
  { title: "2. Medical disclaimer", body: `OceanAI is an AI-powered health information tool. It is NOT a substitute for professional medical advice, diagnosis, or treatment.

Always seek the advice of a qualified healthcare provider with any questions regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you read in OceanAI.

In case of a medical emergency, contact emergency services immediately. OceanAI is not designed for emergency medical situations.` },
  { title: "3. Use of the service", body: `You agree to:
- Use OceanAI only for lawful personal health management purposes
- Provide accurate information when creating an account
- Not attempt to reverse-engineer, extract model weights, or misuse the AI systems
- Not use OceanAI to provide medical advice to third parties for compensation
- Not upload documents belonging to individuals without their explicit consent` },
  { title: "4. Insurance AI and AxisMapper", body: `OceanAI's insurance coding features, including AxisMapper, are provided for informational purposes only. They are not certified medical billing tools and should not be used as the sole basis for insurance claims, billing submissions, or coverage decisions.

Always verify coding decisions with a certified medical coder or billing professional before submission.` },
  { title: "5. Intellectual property", body: `OceanAI and Studio ILLIOS retain all intellectual property rights in the platform, AI models (except those published under Apache 2.0), and software.

Open-source components (TrueNorth, AxisMapper, PocketLLM, ShiftLeft) are licensed under their respective open-source licenses as published on GitHub and HuggingFace.` },
  { title: "6. Subscription and payments", body: `OceanAI Pro and Family plan subscriptions are billed monthly or annually. Payments are processed through Apple App Store or Google Play Store billing.

Free trials, where offered, convert to paid subscriptions at the end of the trial period unless cancelled before the trial ends. All cancellations take effect at the end of the current billing period. No refunds are provided for partial months.` },
  { title: "7. Limitation of liability", body: `To the maximum extent permitted by applicable law, Studio ILLIOS and OceanAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service, including health decisions made based on information from the app.

Our maximum aggregate liability to you for any claims arising from these terms or your use of the service shall not exceed the amount you paid us in the three months preceding the claim.` },
  { title: "8. Governing law", body: `These Terms are governed by and construed under the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.` },
  { title: "9. Changes to terms", body: `We may update these Terms from time to time. We will notify you of significant changes via the app or email. Continued use of OceanAI after changes constitutes acceptance of the updated Terms.` },
  { title: "10. Contact", body: `For questions about these Terms, contact us at:

Studio ILLIOS
nextlife@studioilios.org` },
];

export default function TermsPage() {
  return (
    <CompanyShell scene={<TermsScene />}>
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 56, borderBottom: `1px solid ${borderColor}` }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "inline-flex", ...glassChip("#94A3B8"), padding: "5px 14px", borderRadius: 100, color: "#CBD5E1", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Legal</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, marginBottom: 16, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>Terms &amp; Conditions</h1>
          <p style={{ fontSize: "0.9375rem", color: textMuted }}>Last updated: June 2026 · Effective for all OceanAI users</p>
        </div>
      </section>

      <section className="relative z-10" style={{ padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ ...glassChip("#FBBF24", 0.08), padding: "20px 24px", borderRadius: 14, marginBottom: 48 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "#FCD34D", marginBottom: 6 }}>⚠️ Not medical advice</div>
            <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.65 }}>
              OceanAI provides health information tools, not medical advice. Always consult a qualified healthcare professional for medical decisions. See Section 2 for the full disclaimer.
            </p>
          </div>

          <div style={{ ...glassPanel, borderRadius: 20, padding: "8px 40px" }}>
            {SECTIONS.map((s, i) => (
              <div key={s.title} style={{ padding: "28px 0", borderBottom: i < SECTIONS.length - 1 ? `1px solid ${borderColor}` : "none" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem", color: textPrimary, marginBottom: 12 }}>{s.title}</h2>
                <div style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75, whiteSpace: "pre-line" }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CompanyShell>
  );
}