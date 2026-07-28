"use client";

import { useState } from "react";
import CompanyShell from "@/components/company/CompanyShell";
import BugReportScene from "@/components/canvas/scenes/BugReportScene";
import { glassPanel, glassChip, textPrimary, textSecondary, textMuted, borderColor } from "@/components/features/glass";

const AREAS = ["File Upload", "Insurance AI", "Organ Explorer", "Voice AI", "Appointments", "Watch Sync", "Local LLM", "Family Connect", "Blood Donor", "AI History", "Other"];
const SEVERITY = [
  { value: "critical", label: "🔴 Critical — App crashes or data loss" },
  { value: "high", label: "🟠 High — Feature broken, no workaround" },
  { value: "medium", label: "🟡 Medium — Feature broken, workaround exists" },
  { value: "low", label: "🟢 Low — Minor visual or UX issue" },
];
const PLATFORMS = ["iOS", "Android", "Web (this site)", "Both iOS & Android"];

const inputStyle = {
  width: "100%", padding: "11px 14px",
  border: `1.5px solid ${borderColor}`, borderRadius: 10,
  fontFamily: "var(--font-body)", fontSize: "0.9rem",
  color: textPrimary, background: "rgba(255,255,255,0.05)",
  outline: "none", transition: "border-color 0.15s ease",
};

const labelStyle = { display: "block" as const, fontSize: "0.8125rem", fontWeight: 600, color: textSecondary, marginBottom: 6 };

export default function BugReportPage() {
  const [area, setArea] = useState("");
  const [severity, setSeverity] = useState("medium");
  const [platform, setPlatform] = useState("iOS");
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");
  const [expected, setExpected] = useState("");
  const [actual, setActual] = useState("");
  const [email, setEmail] = useState("");

  const sevLabel = SEVERITY.find((s) => s.value === severity)?.label ?? "";
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

  const mailtoHref = `mailto:design@studioilios.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <CompanyShell scene={<BugReportScene />}>
      <section className="relative z-10" style={{ paddingTop: 140, paddingBottom: 72, borderBottom: `1px solid ${borderColor}` }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ display: "inline-flex", ...glassChip("#FB7185"), padding: "5px 14px", borderRadius: 100, color: "#FDA4AF", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>Bug Report</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: textPrimary, marginBottom: 16, textShadow: "0 2px 24px rgba(5,11,20,0.85)" }}>Found a bug?</h1>
          <p style={{ fontSize: "1.0625rem", color: textSecondary, maxWidth: 480 }}>Help us fix it. Every bug report goes directly to the engineering team at Studio ILLIOS. We take them seriously.</p>
        </div>
      </section>

      <section className="relative z-10" style={{ padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ ...glassPanel, borderRadius: 20, padding: "36px 36px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="bug-grid">
              <div>
                <label style={labelStyle}>Feature area</label>
                <select value={area} onChange={(e) => setArea(e.target.value)} style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }} onFocus={(e) => (e.target.style.borderColor = "#FB7185")} onBlur={(e) => (e.target.style.borderColor = borderColor)}>
                  <option value="" style={{ color: "#0A1628" }}>Select area...</option>
                  {AREAS.map((a) => <option key={a} value={a} style={{ color: "#0A1628" }}>{a}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Platform</label>
                <select value={platform} onChange={(e) => setPlatform(e.target.value)} style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }} onFocus={(e) => (e.target.style.borderColor = "#FB7185")} onBlur={(e) => (e.target.style.borderColor = borderColor)}>
                  {PLATFORMS.map((p) => <option key={p} value={p} style={{ color: "#0A1628" }}>{p}</option>)}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Severity</label>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {SEVERITY.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setSeverity(s.value)}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "10px 14px", borderRadius: 10, cursor: "pointer",
                      ...(severity === s.value ? glassChip("#FB7185", 0.16) : { background: "rgba(255,255,255,0.05)", border: `1.5px solid ${borderColor}` }),
                      fontFamily: "var(--font-body)", fontSize: "0.875rem",
                      color: severity === s.value ? "#FDA4AF" : textSecondary,
                      transition: "all 0.15s ease", textAlign: "left",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Bug title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Short description of what's broken" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "#FB7185")} onBlur={(e) => (e.target.style.borderColor = borderColor)} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Steps to reproduce</label>
              <textarea value={steps} onChange={(e) => setSteps(e.target.value)} placeholder={"1. Open file upload\n2. Select a PDF\n3. ..."} rows={4} style={{ ...inputStyle, resize: "vertical" as const }} onFocus={(e) => (e.target.style.borderColor = "#FB7185")} onBlur={(e) => (e.target.style.borderColor = borderColor)} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="bug-grid">
              <div>
                <label style={labelStyle}>Expected behaviour</label>
                <textarea value={expected} onChange={(e) => setExpected(e.target.value)} placeholder="What should happen" rows={3} style={{ ...inputStyle, resize: "vertical" as const }} onFocus={(e) => (e.target.style.borderColor = "#FB7185")} onBlur={(e) => (e.target.style.borderColor = borderColor)} />
              </div>
              <div>
                <label style={labelStyle}>Actual behaviour</label>
                <textarea value={actual} onChange={(e) => setActual(e.target.value)} placeholder="What actually happens" rows={3} style={{ ...inputStyle, resize: "vertical" as const }} onFocus={(e) => (e.target.style.borderColor = "#FB7185")} onBlur={(e) => (e.target.style.borderColor = borderColor)} />
              </div>
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Your email (optional — for follow-up)</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "#FB7185")} onBlur={(e) => (e.target.style.borderColor = borderColor)} />
            </div>

            <a
              href={mailtoHref}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                padding: "14px 20px", borderRadius: 100,
                background: "linear-gradient(135deg, rgba(251,113,133,0.55), rgba(56,189,248,0.4))",
                backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#F5F9FF", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Send Bug Report
            </a>
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: textMuted, marginTop: 10 }}>Sends to design@studioilios.com via your email client.</p>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:640px){.bug-grid{grid-template-columns:1fr!important}}`}</style>
    </CompanyShell>
  );
}