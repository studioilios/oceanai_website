import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Organ Health Categories — OceanAI",
  description: "OceanAI monitors every major organ system and visualizes your health at an organ level — not just symptoms.",
};

const ORGANS = [
  { emoji: "🧠", name: "Brain", tracks: ["Cognitive health signals", "Sleep quality", "Stress markers"] },
  { emoji: "❤️", name: "Heart", tracks: ["Heart rate & HRV", "ECG via watch", "BP trends"] },
  { emoji: "🫁", name: "Lungs", tracks: ["SpO2 levels", "Respiratory rate", "Breath patterns"] },
  { emoji: "🫀", name: "Liver", tracks: ["Enzyme levels from labs", "Medication interactions"] },
  { emoji: "🫘", name: "Kidneys", tracks: ["eGFR & creatinine", "Hydration markers"] },
  { emoji: "🦴", name: "Musculoskeletal", tracks: ["Activity data", "Vitamin D from labs"] },
];

export default function OrgansPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", alignItems: "center", padding: "5px 14px", borderRadius: 100, background: "rgba(13,184,122,0.1)", color: "#0DB87A", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Organ Health</div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            Your body, understood<br />
            <span className="gradient-text">organ by organ.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
            OceanAI doesn&apos;t just track symptoms. It monitors each major organ system — pulling data from your wearable, lab uploads, and AI conversations to build a complete picture of your internal health.
          </p>
          <Link href="/playground/organs" className="btn-primary">Explore Organ Map →</Link>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {ORGANS.map((o) => (
              <div key={o.name} className="card" style={{ padding: "24px 22px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{o.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: 10 }}>{o.name}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {o.tracks.map(t => (
                    <div key={t} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#0DB87A", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: "var(--bg-primary)", textAlign: "center" }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: 16 }}>Click on your organs.</h2>
          <p className="body-md" style={{ marginBottom: 28 }}>The interactive body map shows exactly what OceanAI watches for each system.</p>
          <Link href="/playground/organs" className="btn-primary" style={{ padding: "15px 36px" }}>Open Organ Explorer →</Link>
        </div>
      </section>

      <style>{`@media(max-width:768px){div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:1fr 1fr!important}}`}</style>
    </>
  );
}
