import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Voice AI — OceanAI", description: "Wake word activation and natural voice conversation with your health AI in OceanAI." };

export default function VoicePage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #F7F9FC 0%, #FFF1F2 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "rgba(244,63,94,0.1)", color: "#E11D48", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Voice AI</div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            Just say it.<br />
            <span className="gradient-text">Your AI listens.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 520, marginBottom: 32 }}>
            Wake word activation lets you start a health conversation without touching your phone. Natural voice answers from your AI, spoken back to you — hands-free health intelligence.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/playground/voice" className="btn-primary">Try Voice Demo →</Link>
            <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download the App</Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { icon: "🎙️", title: "Wake word", desc: "Trigger the AI by voice without unlocking your phone. Always listening, never storing." },
              { icon: "🗣️", title: "Natural language", desc: "Ask anything. &quot;What&apos;s my last blood test show?&quot; or &quot;When&apos;s my next appointment?&quot;" },
              { icon: "🔊", title: "Voice response", desc: "The AI speaks back with a concise, clear answer — optimized for spoken delivery." },
              { icon: "🔒", title: "On-device processing", desc: "Voice wake detection happens locally. Audio is never sent to the cloud without your explicit action." },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: "22px 20px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }} dangerouslySetInnerHTML={{ __html: f.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:640px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
