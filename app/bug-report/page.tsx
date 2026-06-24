"use client";

import { useState } from "react";

const AREAS = ["File Upload", "Insurance AI", "Organ Explorer", "Voice AI", "Appointments", "Watch Sync", "Local LLM", "Family Connect", "Blood Donor", "AI History", "Other"];
const SEVERITY = [
  { value: "critical", label: "🔴 Critical — App crashes or data loss" },
  { value: "high", label: "🟠 High — Feature broken, no workaround" },
  { value: "medium", label: "🟡 Medium — Feature broken, workaround exists" },
  { value: "low", label: "🟢 Low — Minor visual or UX issue" },
];
const PLATFORMS = ["iOS", "Android", "Web (this site)", "Both iOS & Android"];

export default function BugReportPage() {
  const [area, setArea] = useState("");
  const [severity, setSeverity] = useState("medium");
  const [platform, setPlatform] = useState("iOS");
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");
  const [expected, setExpected] = useState("");
  const [actual, setActual] = useState("");
  const [email, setEmail] = useState("");

  const sevLabel = SEVERITY.find(s => s.value === severity)?.label ?? "";
  const subject = `[Bug] ${title || "Bug report"} — ${area || "General"}`;
  const body = `Bug Report
==========
Feature Area: ${area}
Severity: ${sevLabel}
Platform: ${platform}
Reporter email: ${email}

Title: ${title}

Steps to reproduce:
${steps}

Expected behavior:
${expected}

Actual behavior:
${actual}`;

  const mailtoHref = `mailto:nextlife@studioilios.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const inputStyle = {
    width: "100%", padding: "11px 14px",
    border: "1.5px solid var(--border)", borderRadius: 10,
    fontFamily: "var(--font-body)", fontSize: "0.9rem",
    color: "var(--text-primary)", background: "var(--bg-primary)",
    outline: "none", transition: "border-color 0.15s ease",
  };

  const labelStyle = {
    display: "block" as const, fontSize: "0.8125rem",
    fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6,
  };

  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #F7F9FC 0%, #FFF1F2 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "rgba(244,63,94,0.1)", color: "#E11D48", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Bug Report</div>
          <h1 className="display-xl" style={{ marginBottom: 16 }}>Found a bug?</h1>
          <p className="body-lg" style={{ maxWidth: 480 }}>
            Help us fix it. Every bug report goes directly to the engineering team at Studio ILLIOS. We take them seriously.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 20, padding: "36px 36px", boxShadow: "var(--shadow-card)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              {/* Feature area */}
              <div>
                <label style={labelStyle}>Feature area</label>
                <select
                  value={area}
                  onChange={e => setArea(e.target.value)}
                  style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                >
                  <option value="">Select area...</option>
                  {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>

              {/* Platform */}
              <div>
                <label style={labelStyle}>Platform</label>
                <select
                  value={platform}
                  onChange={e => setPlatform(e.target.value)}
                  style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                >
                  {PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>

            {/* Severity */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Severity</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {SEVERITY.map(s => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setSeverity(s.value)}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "10px 14px", borderRadius: 10, cursor: "pointer",
                      background: severity === s.value ? "var(--accent-light)" : "var(--bg-subtle)",
                      border: `1.5px solid ${severity === s.value ? "var(--accent)" : "var(--border)"}`,
                      fontFamily: "var(--font-body)", fontSize: "0.875rem",
                      color: severity === s.value ? "var(--accent)" : "var(--text-secondary)",
                      transition: "all 0.15s ease", textAlign: "left",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bug title */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Bug title</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Short description of what&apos;s broken" style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")} />
            </div>

            {/* Steps */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Steps to reproduce</label>
              <textarea value={steps} onChange={e => setSteps(e.target.value)} placeholder="1. Open file upload&#10;2. Select a PDF&#10;3. ..." rows={4}
                style={{ ...inputStyle, resize: "vertical" as const }}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>Expected behaviour</label>
                <textarea value={expected} onChange={e => setExpected(e.target.value)} placeholder="What should happen" rows={3}
                  style={{ ...inputStyle, resize: "vertical" as const }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")} />
              </div>
              <div>
                <label style={labelStyle}>Actual behaviour</label>
                <textarea value={actual} onChange={e => setActual(e.target.value)} placeholder="What actually happens" rows={3}
                  style={{ ...inputStyle, resize: "vertical" as const }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")} />
              </div>
            </div>

            {/* Contact email */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Your email (optional — for follow-up)</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border)")} />
            </div>

            <a
              href={mailtoHref}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "14px 20px", borderRadius: 100,
                background: "var(--accent)", color: "white",
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem",
                textDecoration: "none", boxShadow: "0 4px 14px rgba(26,107,255,0.3)",
                transition: "background 0.15s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Send Bug Report
            </a>
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 10 }}>
              Sends to nextlife@studioilios.org via your email client.
            </p>
          </div>
        </div>

        <style>{`@media(max-width:640px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}
