import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Nearest Blood Donor — OceanAI", description: "Find compatible blood donors near you in an emergency. OceanAI's real-time proximity matching across your network." };

export default function BloodDonorPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #F7F9FC 0%, #FFF1F2 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "rgba(244,63,94,0.1)", color: "#E11D48", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Emergency · Blood Donor</div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            Find a donor<br />
            <span style={{ background: "linear-gradient(135deg, #F43F5E, #FB923C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>when it counts most.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 520, marginBottom: 32 }}>
            OceanAI&apos;s blood donor network matches you with compatible, nearby donors in real time. In an emergency, every minute matters — OceanAI surfaces the nearest match in seconds.
          </p>
          <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Download OceanAI →</Link>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { icon: "🩸", title: "Blood group matching", desc: "Enter your blood type or pull it from a uploaded lab report. OceanAI finds compatible donors automatically." },
              { icon: "📍", title: "Real-time proximity", desc: "Donors within your city, sorted by distance. Live availability status so you know who can respond." },
              { icon: "📲", title: "One-tap contact", desc: "Reach a donor directly from within OceanAI. No intermediary, no delay." },
              { icon: "🤝", title: "Register as a donor", desc: "Add your blood type to the network. Get notified when someone nearby needs your blood group." },
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
