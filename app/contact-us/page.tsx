"use client";

import { useState } from "react";

const INQUIRY_TYPES = [
  { value: "investor", label: "💼 Investor inquiry" },
  { value: "partnership", label: "🤝 Partnership" },
  { value: "press", label: "📰 Press / media" },
  { value: "careers", label: "💡 Careers" },
  { value: "feedback", label: "💬 Product feedback" },
  { value: "other", label: "📩 Other" },
];

export default function ContactUsPage() {
  const [type, setType] = useState("investor");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const selectedLabel = INQUIRY_TYPES.find(t => t.value === type)?.label ?? "";
  const subject = `[${selectedLabel.replace(/^.* /, "")}] ${name || "Contact form"}`;
  const body = `Name: ${name}\nEmail: ${email}\nType: ${selectedLabel}\n\n${message}`;
  const mailtoHref = `mailto:nextlife@studioilios.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 80,
        background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="eyebrow" style={{ display: "inline-flex", marginBottom: 20 }}>Get in touch</div>
          <h1 className="display-xl" style={{ marginBottom: 16 }}>
            We read every email.
          </h1>
          <p className="body-lg" style={{ maxWidth: 480 }}>
            Investors, press, partners, or just someone building in health AI — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 56, alignItems: "start" }}>

            {/* Form */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 20, padding: "36px 36px", boxShadow: "var(--shadow-card)" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: 28 }}>Send a message</h2>

              {/* Inquiry type */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: 8 }}>What&apos;s this about?</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {INQUIRY_TYPES.map(t => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setType(t.value)}
                      style={{
                        padding: "7px 14px", borderRadius: 100,
                        background: type === t.value ? "var(--accent-light)" : "var(--bg-subtle)",
                        border: `1.5px solid ${type === t.value ? "var(--accent)" : "var(--border)"}`,
                        color: type === t.value ? "var(--accent)" : "var(--text-secondary)",
                        fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.8125rem",
                        cursor: "pointer", transition: "all 0.15s ease",
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>Your name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Anika Sharma"
                  style={{
                    width: "100%", padding: "11px 14px",
                    border: "1.5px solid var(--border)", borderRadius: 10,
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                    color: "var(--text-primary)", background: "var(--bg-primary)",
                    outline: "none", transition: "border-color 0.15s ease",
                  }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>Your email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="anika@example.com"
                  style={{
                    width: "100%", padding: "11px 14px",
                    border: "1.5px solid var(--border)", borderRadius: 10,
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                    color: "var(--text-primary)", background: "var(--bg-primary)",
                    outline: "none", transition: "border-color 0.15s ease",
                  }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>Message</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell us what you&apos;re thinking..."
                  rows={5}
                  style={{
                    width: "100%", padding: "11px 14px",
                    border: "1.5px solid var(--border)", borderRadius: 10,
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                    color: "var(--text-primary)", background: "var(--bg-primary)",
                    outline: "none", resize: "vertical",
                    transition: "border-color 0.15s ease",
                  }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <a
                href={mailtoHref}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "14px 20px", borderRadius: 100,
                  background: "var(--accent)", color: "white",
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem",
                  textDecoration: "none", transition: "background 0.15s ease",
                  boxShadow: "0 4px 14px rgba(26,107,255,0.3)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Send via email
              </a>
              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 10 }}>
                Opens your email client with everything filled in.
              </p>
            </div>

            {/* Info panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "💼", label: "Investor inquiries", desc: "We&apos;re raising. If you&apos;re building the future of health AI, we&apos;d like to meet.", email: "nextlife@studioilios.org" },
                { icon: "📰", label: "Press & media", desc: "For interviews, quotes, or coverage of OceanAI and Studio ILLIOS.", email: "nextlife@studioilios.org" },
                { icon: "🤝", label: "Partnerships", desc: "Healthcare providers, insurance companies, or tech integrations.", email: "nextlife@studioilios.org" },
                { icon: "💡", label: "Careers", desc: "See open roles or send a general application.", email: "nextlife@studioilios.org" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "20px 22px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14, boxShadow: "var(--shadow-card)" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 4 }}>{item.label}</div>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.55, marginBottom: 8 }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                      <a href={`mailto:${item.email}`} style={{ fontSize: "0.8125rem", color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>{item.email} →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`@media(max-width:900px){div[style*="grid-template-columns: 1fr 420px"]{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}
