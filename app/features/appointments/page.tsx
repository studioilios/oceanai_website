import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doctor Appointments — OceanAI",
  description: "Book and manage doctor-patient appointments directly inside OceanAI. Your full medical schedule in one place.",
};

export default function AppointmentsPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "var(--accent-light)", color: "var(--accent)", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Appointments</div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            Your medical schedule,<br />
            <span className="gradient-text">inside your health AI.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
            Book, track, and manage doctor-patient appointments without leaving OceanAI. Every appointment is linked to your health timeline — so your AI has full context before you walk in.
          </p>
          <Link href="/playground/appointment" className="btn-primary">See the booking demo →</Link>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { icon: "🔍", title: "Find by specialty", desc: "Search across GP, cardiology, neurology, endocrinology, and more. Filter by availability, rating, and experience." },
              { icon: "📅", title: "Book in 3 taps", desc: "Select a doctor, pick a day, choose a time. Confirmation is instant. No phone calls, no wait music." },
              { icon: "📋", title: "Context-aware AI", desc: "Your health AI reads your appointment history and upcoming visits before answering any health question." },
              { icon: "🔔", title: "Reminders built in", desc: "OceanAI reminds you before appointments and follows up after — logging any notes or new prescriptions you add." },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: "24px 22px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: "var(--bg-primary)", textAlign: "center" }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: 16 }}>Try the booking flow.</h2>
          <Link href="/playground/appointment" className="btn-primary" style={{ padding: "15px 36px" }}>Open Appointment Demo →</Link>
        </div>
      </section>

      <style>{`@media(max-width:640px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
