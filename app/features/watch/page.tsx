import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Watch Integration — OceanAI", description: "Real-time vitals from your smartwatch sync directly into OceanAI's health timeline." };

export default function WatchPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "rgba(13,184,122,0.1)", color: "#0DB87A", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Watch Integration</div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            Your wearable just became<br />
            <span className="gradient-text">a health sensor.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
            OceanAI syncs with your smartwatch to pull real-time vitals — heart rate, SpO2, steps, and more — directly into your health timeline. Your AI understands your body at the sensor level.
          </p>
          <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Download OceanAI →</Link>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: "❤️", metric: "Heart Rate", detail: "Resting, active, and recovery — tracked continuously and surfaced in your health timeline." },
              { icon: "🩸", metric: "SpO2", detail: "Blood oxygen levels logged throughout the day. Alerts on sustained drops below threshold." },
              { icon: "👣", metric: "Steps & Activity", detail: "Daily movement tracked and correlated with organ health metrics." },
              { icon: "💤", metric: "Sleep Quality", detail: "Sleep stages and recovery scores fed into your brain health and cognitive wellness tracking." },
              { icon: "📊", metric: "HRV", detail: "Heart rate variability — one of the strongest indicators of overall health and stress recovery." },
              { icon: "🌡️", metric: "Body Temperature", detail: "Skin temperature trends correlated with illness detection and recovery tracking." },
            ].map((m) => (
              <div key={m.metric} className="card" style={{ padding: "22px 20px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{m.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 8 }}>{m.metric}</h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:1fr 1fr!important}}`}</style>
    </>
  );
}
