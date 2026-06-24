import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Family Connect — OceanAI", description: "Link your OceanAI account with family members. View their health files and AI history — ideal for caregivers." };

export default function FamilyPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #F7F9FC 0%, #F0FDF4 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "rgba(13,184,122,0.1)", color: "#0DB87A", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Family Connect</div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            One account for<br />
            <span className="gradient-text">the whole family.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
            Link accounts with family members and view their health files, AI history, and upcoming appointments — all from your OceanAI account. Built for parents, caregivers, and families managing elderly health.
          </p>
          <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Download OceanAI →</Link>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { icon: "👨‍👩‍👧", title: "Multi-member profiles", desc: "Each family member has their own private health profile. You see theirs, they see yours — with permission." },
              { icon: "🏥", title: "Shared lab results", desc: "When a family member uploads a lab report, you can review it from your account without switching apps." },
              { icon: "🩺", title: "Appointment visibility", desc: "See upcoming appointments for elderly parents or children. Never miss a follow-up." },
              { icon: "🔒", title: "Consent-based access", desc: "Every family connection requires mutual consent. You control who sees what, always." },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: "22px 20px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:640px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
