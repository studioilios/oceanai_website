import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "AI Health History — OceanAI", description: "Every OceanAI conversation stored, searchable, and contextual — your AI remembers everything so you don't have to." };

export default function AIHistoryPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "var(--accent-light)", color: "var(--accent)", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>AI History</div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            Your AI remembers<br />
            <span className="gradient-text">everything about your health.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
            Every conversation, diagnosis insight, uploaded report, and AI recommendation is stored and searchable. When you ask a follow-up question six months later, your AI already has the full context.
          </p>
          <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Download OceanAI →</Link>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { icon: "📚", title: "Full conversation history", desc: "Every exchange with your health AI is stored chronologically. Scroll back any time." },
              { icon: "🔍", title: "Searchable records", desc: "Search by date, condition, medication, or keyword. Find any insight instantly." },
              { icon: "🧵", title: "Context threads", desc: "AI conversations are linked to the documents and lab reports they referenced — full traceability." },
              { icon: "📤", title: "Export to PDF", desc: "Export your AI health history as a structured PDF to share with a doctor or specialist." },
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
