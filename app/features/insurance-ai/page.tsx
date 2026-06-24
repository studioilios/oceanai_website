import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insurance AI — OceanAI",
  description: "AxisMapper — OceanAI's fine-tuned insurance intelligence model for ICD-10, CPT, and DRG codes.",
};

const CAPABILITIES = [
  { code: "ICD-10-CM", label: "Diagnosis Codes", desc: "Over 70,000 codes covering every diagnosis. Ask in plain English and get the exact code plus coverage notes.", eg: "E11.9 — Type 2 diabetes without complications" },
  { code: "CPT", label: "Procedure Codes", desc: "Current Procedural Terminology codes for every medical procedure, from office visits to complex surgeries.", eg: "99213 — Office visit, established patient" },
  { code: "MS-DRG", label: "Hospital Reimbursement", desc: "Medicare Severity Diagnosis Related Groups — how hospitals get paid for inpatient stays.", eg: "DRG 470 — Major joint replacement" },
];

export default function InsuranceAIPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 100%)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", alignItems: "center", padding: "5px 14px", borderRadius: 100, background: "rgba(139,92,246,0.1)", color: "#7C3AED", fontSize: "0.8125rem", fontWeight: 600, marginBottom: 20 }}>
            Insurance AI · AxisMapper
          </div>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            Medical billing intelligence,<br />
            <span className="gradient-text">built into your pocket.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 580, marginBottom: 32 }}>
            AxisMapper is OceanAI&apos;s fine-tuned insurance model — trained on ICD-10-CM 2026, CPT codes, and MS-DRG mappings. Ask about any code in plain English. Understand what your insurance actually covers.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/playground/insurance" className="btn-primary">Try Insurance AI →</Link>
            <a href="https://huggingface.co/AmareshHebbar" target="_blank" rel="noopener noreferrer" className="btn-secondary">View model on HuggingFace ↗</a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ display: "inline-flex", marginBottom: 16 }}>What AxisMapper covers</div>
            <h2 className="display-md">Three code systems. One AI.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {CAPABILITIES.map((c) => (
              <div key={c.code} className="card" style={{ padding: "28px 24px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.06em", marginBottom: 10 }}>{c.code}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--text-primary)", marginBottom: 10 }}>{c.label}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>{c.desc}</p>
                <div style={{ padding: "9px 12px", background: "var(--bg-subtle)", borderRadius: 8, fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                  e.g. {c.eg}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-pad-sm" style={{ background: "var(--bg-subtle)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 className="display-md" style={{ marginBottom: 32 }}>Who uses this</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { who: "Patients", desc: "Understand what diagnosis codes appear on your bills and what they actually mean for your coverage." },
              { who: "Caregivers", desc: "Navigate insurance paperwork for elderly parents or family members with complex conditions." },
              { who: "Healthcare workers", desc: "Quick reference for coding questions during documentation without switching tools." },
              { who: "Investors & analysts", desc: "Understand the complexity of medical billing that OceanAI is automating." },
            ].map((u) => (
              <div key={u.who} className="card" style={{ padding: "22px 20px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: 8 }}>{u.who}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="section-pad-sm" style={{ background: "var(--bg-deep)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: "inline-flex", padding: "4px 12px", background: "rgba(26,107,255,0.12)", border: "1px solid rgba(26,107,255,0.2)", borderRadius: 100, color: "#60A5FA", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>Model details</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "white", marginBottom: 16 }}>AxisMapper — open source, Apache 2.0</h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 24 }}>
            Fine-tuned on Qwen2.5 base using ORPO training. Training data sourced from ICD-10-CM 2026 tabular listings, CMS CPT crosswalks, and MS-DRG v41 grouper documentation. The model maps natural language medical descriptions to precise billing codes and explains coverage implications in plain English.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Qwen2.5 base", "ORPO fine-tuning", "ICD-10-CM 2026", "Apache 2.0", "Published on HuggingFace"].map(tag => (
              <span key={tag} style={{ padding: "4px 12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100, fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-mono)" }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: "var(--bg-primary)", textAlign: "center" }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: 16 }}>Ask AxisMapper anything.</h2>
          <p className="body-md" style={{ marginBottom: 28 }}>Free to use in the Playground. No account needed.</p>
          <Link href="/playground/insurance" className="btn-primary" style={{ padding: "15px 36px" }}>Open Insurance AI →</Link>
        </div>
      </section>

      <style>{`@media(max-width:768px){div[style*="grid-template-columns: repeat(3, 1fr)"]{grid-template-columns:1fr!important}div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
