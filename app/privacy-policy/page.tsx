import type { Metadata } from "next";
import CompanyShell from "@/components/company/CompanyShell";
import PrivacyScene from "@/components/canvas/scenes/PrivacyScene";
import { glassPanel, glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

export const metadata: Metadata = {
  title: "Privacy Policy — OceanAI",
  description: "OceanAI Privacy Policy — how we handle your health data, what we store, and your rights.",
};

const SECTIONS = [
  { title: "What data we collect", body: `OceanAI collects only what is necessary to provide your health intelligence experience. This includes:
- Health documents you upload (lab reports, prescriptions, imaging)
- AI conversation history
- Appointment data you create
- Account information (email, name) if you create an account
- Watch/wearable data when you grant permission

We do NOT collect: location data in the background, contacts, camera outside of document uploads, or any data you have not explicitly provided.` },
  { title: "On-device processing", body: `OceanAI's on-device Local LLM processes your health queries entirely on your phone. No query is sent to any server when the on-device model is active.

When you use the cloud AI features (Insurance AI, advanced file extraction), your query is transmitted securely to our API endpoint and to Anthropic's Claude API. No health data is retained by Anthropic beyond the immediate API call.` },
  { title: "How we use your data", body: `Your health data is used solely to provide your OceanAI experience:
- Documents you upload are analyzed to extract health data for your timeline
- AI conversations are stored in your personal history to provide context for future queries
- Watch data is used to populate your organ health metrics

We do not use your health data for advertising, analytics products, or model training.` },
  { title: "Data storage and security", body: `Your data is stored in Supabase (PostgreSQL) with row-level security — your data is isolated from all other users at the database level. All data in transit is encrypted via TLS 1.3. At-rest encryption is enforced on all storage backends.

Documents you upload are stored encrypted and tied exclusively to your account. No Studio ILLIOS employee has access to your health documents in the normal course of operations.` },
  { title: "Family Connect", body: `When you use Family Connect to share health data with family members, you grant explicit, revocable consent to each connection. Shared data is limited to what you specifically authorize. You can revoke access at any time from within the app.` },
  { title: "Your rights", body: `Under India's Digital Personal Data Protection Act (DPDPA) 2023 and applicable international regulations, you have the right to:
- Access all personal data we hold about you
- Correct any inaccurate data
- Request deletion of your account and all associated data
- Withdraw consent for any data processing
- Data portability — export your health timeline as a PDF

To exercise any of these rights, email nextlife@studioilios.org.` },
  { title: "Third-party services", body: `OceanAI uses the following third-party services:
- Anthropic Claude API — for cloud AI features only (no data retention per Anthropic's API terms)
- Supabase — database and authentication
- Vercel — web hosting (this website only; no health data)
- Apple / Google — app distribution only

We do not sell, rent, or share your data with any advertising or analytics third parties.` },
  { title: "Contact", body: `For any privacy-related questions, data access requests, or concerns, contact us at:

Studio ILLIOS
nextlife@studioilios.org

We will respond within 5 business days.` },
];

export default function PrivacyPolicyPage() {
  return (
    <CompanyShell scene={<PrivacyScene />}>
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 56, borderBottom: `1px solid ${borderColor}` }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "inline-flex", ...glassChip("#10B981"), padding: "5px 14px", borderRadius: 100, color: "#6EE7B7", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Legal</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, marginBottom: 16, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>Privacy Policy</h1>
          <p style={{ fontSize: "0.9375rem", color: textMuted }}>Last updated: June 2026 · Applies to OceanAI iOS, Android, and web</p>
        </div>
      </section>

      <section className="relative z-10" style={{ padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ ...glassChip("#10B981", 0.08), padding: "20px 24px", borderRadius: 14, marginBottom: 48 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "#6EE7B7", marginBottom: 6 }}>🔒 Our privacy commitment</div>
            <p style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.65 }}>
              OceanAI is a health platform. We treat your data with the highest level of care. We do not sell it, we do not use it for ads, and wherever possible, we process it on your device so it never leaves your phone.
            </p>
          </div>

          <div style={{ ...glassPanel, borderRadius: 20, padding: "8px 40px" }}>
            {SECTIONS.map((s, i) => (
              <div key={s.title} style={{ padding: "32px 0", borderBottom: i < SECTIONS.length - 1 ? `1px solid ${borderColor}` : "none" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: textPrimary, marginBottom: 14 }}>{s.title}</h2>
                <div style={{ fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.75, whiteSpace: "pre-line" }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CompanyShell>
  );
}