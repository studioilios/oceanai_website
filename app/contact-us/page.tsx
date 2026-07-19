"use client";

import { useState } from "react";
import CompanyShell from "@/components/company/CompanyShell";
import ContactScene from "@/components/canvas/scenes/ContactScene";
import { glassPanel, glassPanelSoft, glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

const INQUIRY_TYPES = [
  { value: "investor", label: "💼 Investor inquiry" },
  { value: "partnership", label: "🤝 Partnership" },
  { value: "press", label: "📰 Press / media" },
  { value: "careers", label: "💡 Careers" },
  { value: "feedback", label: "💬 Product feedback" },
  { value: "other", label: "📩 Other" },
];

const INFO_ITEMS = [
  { icon: "💼", label: "Investor inquiries", desc: "We're raising. If you're building the future of health AI, we'd like to meet.", email: "nextlife@studioilios.org" },
  { icon: "📰", label: "Press & media", desc: "For interviews, quotes, or coverage of OceanAI and Studio ILLIOS.", email: "nextlife@studioilios.org" },
  { icon: "🤝", label: "Partnerships", desc: "Healthcare providers, insurance companies, or tech integrations.", email: "nextlife@studioilios.org" },
  { icon: "💡", label: "Careers", desc: "See open roles or send a general application.", email: "nextlife@studioilios.org" },
];

const inputStyle = {
  width: "100%", padding: "11px 14px",
  border: `1.5px solid ${borderColor}`, borderRadius: 10,
  fontFamily: "var(--font-body)", fontSize: "0.9375rem",
  color: textPrimary, background: "rgba(255,255,255,0.05)",
  outline: "none", transition: "border-color 0.15s ease",
};

const labelStyle = { display: "block" as const, fontSize: "0.8125rem", fontWeight: 600, color: textSecondary, marginBottom: 6 };

export default function ContactUsPage() {
  const [type, setType] = useState("investor");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const selectedLabel = INQUIRY_TYPES.find((t) => t.value === type)?.label ?? "";
  const subject = `[${selectedLabel.replace(/^.* /, "")}] ${name || "Contact form"}`;
  const body = `Name: ${name}\nEmail: ${email}\nType: ${selectedLabel}\n\n${message}`;
  const mailtoHref = `mailto:nextlife@studioilios.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <CompanyShell scene={<ContactScene />}>
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 72, borderBottom: `1px solid ${borderColor}` }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ display: "inline-flex", ...glassChip("#38BDF8"), padding: "5px 14px", borderRadius: 100, color: "#7DD3FC", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Get in touch</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, marginBottom: 16, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>We read every email.</h1>
          <p style={{ fontSize: "1.0625rem", color: textSecondary, maxWidth: 480 }}>Investors, press, partners, or just someone building in health AI — we&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="relative z-10" style={{ padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 56, alignItems: "start" }} className="contact-grid">
            {/* Form */}
            <div style={{ ...glassPanel, borderRadius: 20, padding: "36px 36px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: textPrimary, marginBottom: 28 }}>Send a message</h2>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>What&apos;s this about?</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {INQUIRY_TYPES.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setType(t.value)}
                      style={{
                        padding: "7px 14px", borderRadius: 100,
                        ...(type === t.value ? glassChip("#38BDF8", 0.2) : glassPanelSoft),
                        color: type === t.value ? "#7DD3FC" : textSecondary,
                        fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.8125rem",
                        cursor: "pointer", transition: "all 0.15s ease",
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Your name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Anika Sharma" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "#38BDF8")} onBlur={(e) => (e.target.style.borderColor = borderColor)} />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Your email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="anika@example.com" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "#38BDF8")} onBlur={(e) => (e.target.style.borderColor = borderColor)} />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you're thinking..." rows={5} style={{ ...inputStyle, resize: "vertical" }} onFocus={(e) => (e.target.style.borderColor = "#38BDF8")} onBlur={(e) => (e.target.style.borderColor = borderColor)} />
              </div>

              <a href={mailtoHref} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 20px", borderRadius: 100, background: "linear-gradient(135deg, rgba(56,189,248,0.55), rgba(52,211,153,0.55))", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.18)", color: "#F5F9FF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Send via email
              </a>
              <p style={{ textAlign: "center", fontSize: "0.75rem", color: textMuted, marginTop: 10 }}>Opens your email client with everything filled in.</p>
            </div>

            {/* Info panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {INFO_ITEMS.map((item) => (
                <div key={item.label} style={{ ...glassPanel, padding: "20px 22px", borderRadius: 14 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: textPrimary, marginBottom: 4 }}>{item.label}</div>
                      <p style={{ fontSize: "0.8125rem", color: textSecondary, lineHeight: 1.55, marginBottom: 8 }}>{item.desc}</p>
                      <a href={`mailto:${item.email}`} style={{ fontSize: "0.8125rem", color: "#7DD3FC", fontWeight: 600, textDecoration: "none" }}>{item.email} →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </CompanyShell>
  );
}