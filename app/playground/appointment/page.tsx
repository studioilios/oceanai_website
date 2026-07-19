"use client";

import { useState } from "react";
import PlaygroundShell from "@/components/playground/PlaygroundShell";
import {
  glassPanel,
  glassPanelSoft,
  glassButtonPrimary,
  glassButtonGhost,
  glassChip,
  textPrimary,
  textSecondary,
  textMuted,
  borderColor,
} from "@/components/playground/glass";

const SPECIALTIES = [
  { id: "gp", label: "General Physician", icon: "🩺", desc: "Routine checkups and general health" },
  { id: "cardio", label: "Cardiologist", icon: "❤️", desc: "Heart health and cardiovascular care" },
  { id: "endo", label: "Endocrinologist", icon: "🔬", desc: "Diabetes, thyroid, hormones" },
  { id: "neuro", label: "Neurologist", icon: "🧠", desc: "Brain, nerves, and neurological care" },
  { id: "pulmo", label: "Pulmonologist", icon: "🫁", desc: "Lungs and respiratory health" },
  { id: "ortho", label: "Orthopedic", icon: "🦴", desc: "Bones, joints, and musculoskeletal" },
];

const DOCTORS: Record<string, { name: string; qual: string; exp: string; rating: number; slots: number }[]> = {
  gp: [
    { name: "Dr. Anika Sharma", qual: "MBBS, MD", exp: "12 years", rating: 4.9, slots: 3 },
    { name: "Dr. Rohan Patel", qual: "MBBS, DNB", exp: "8 years", rating: 4.7, slots: 5 },
  ],
  cardio: [
    { name: "Dr. Meera Krishnan", qual: "MBBS, DM Cardiology", exp: "15 years", rating: 4.9, slots: 2 },
    { name: "Dr. Vijay Nair", qual: "MBBS, MD, DM", exp: "20 years", rating: 4.8, slots: 1 },
  ],
  endo: [
    { name: "Dr. Priya Reddy", qual: "MBBS, DM Endocrinology", exp: "10 years", rating: 4.8, slots: 4 },
  ],
  neuro: [
    { name: "Dr. Arjun Iyer", qual: "MBBS, DM Neurology", exp: "18 years", rating: 4.9, slots: 2 },
  ],
  pulmo: [
    { name: "Dr. Kavya Singh", qual: "MBBS, MD Pulmonology", exp: "11 years", rating: 4.7, slots: 3 },
  ],
  ortho: [
    { name: "Dr. Sanjay Mehta", qual: "MBBS, MS Orthopaedics", exp: "16 years", rating: 4.8, slots: 2 },
  ],
};

const TIMES = [
  "09:00 AM", "09:30 AM", "10:00 AM", "11:00 AM",
  "11:30 AM", "02:00 PM", "03:00 PM", "04:30 PM",
];

const DAYS = ["Mon 23", "Tue 24", "Wed 25", "Thu 26", "Fri 27", "Sat 28"];

const ACCENT = "#FBBF24"; // matches the "appointment" PlaygroundScene variant

export default function AppointmentPlayground() {
  const [step, setStep] = useState(1);
  const [specialty, setSpecialty] = useState<string | null>(null);
  const [doctor, setDoctor] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const selectedSpec = SPECIALTIES.find(s => s.id === specialty);
  const doctors = specialty ? DOCTORS[specialty] ?? [] : [];
  const selectedDoc = doctors.find(d => d.name === doctor);

  const confirmBooking = () => {
    setConfirmed(true);
  };

  const reset = () => {
    setStep(1); setSpecialty(null); setDoctor(null);
    setDay(null); setTime(null); setConfirmed(false);
  };

  if (confirmed) {
    return (
      <PlaygroundShell variant="appointment">
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center", paddingTop: 32 }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            ...glassChip("#34D399"),
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.5rem", margin: "0 auto 24px",
          }}>✅</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "1.75rem", color: textPrimary,
            letterSpacing: "-0.02em", marginBottom: 12,
          }}>
            Appointment Confirmed
          </h1>
          <p style={{ fontSize: "1rem", color: textSecondary, marginBottom: 32 }}>
            Your appointment has been booked and saved to your OceanAI health timeline.
          </p>

          <div style={{ ...glassPanel, padding: "24px 28px", borderRadius: 18, textAlign: "left", marginBottom: 28 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Specialty", val: selectedSpec?.label + " " + selectedSpec?.icon },
                { label: "Doctor", val: selectedDoc?.name },
                { label: "Date", val: `June ${day?.split(" ")[1]}, 2026` },
                { label: "Time", val: time },
              ].map(row => (
                <div key={row.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.875rem", color: textMuted, fontWeight: 500 }}>{row.label}</span>
                  <span style={{ fontSize: "0.9375rem", color: textPrimary, fontWeight: 600 }}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={reset} style={{ ...glassButtonGhost, padding: "12px 24px", borderRadius: 100, color: textSecondary, fontFamily: "var(--font-display)", fontWeight: 600, cursor: "pointer" }}>
              Book another
            </button>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ ...glassButtonPrimary, padding: "12px 24px", borderRadius: 100, fontFamily: "var(--font-display)", fontWeight: 600, textDecoration: "none" }}>
              Download OceanAI
            </a>
          </div>
        </div>
      </PlaygroundShell>
    );
  }

  return (
    <PlaygroundShell variant="appointment">
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            ...glassChip(ACCENT),
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.25rem",
          }}>🩺</div>
          <div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.375rem", color: textPrimary, letterSpacing: "-0.02em",
            }}>Doctor Appointment</h1>
            <p style={{ fontSize: "0.875rem", color: textMuted, marginTop: 2 }}>
              This is a demo of the booking experience inside OceanAI.
            </p>
          </div>
        </div>
      </div>

      {/* Step indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 32 }}>
        {["Specialty", "Doctor", "Schedule"].map((s, i) => {
          const num = i + 1;
          const done = step > num;
          const active = step === num;
          return (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: done ? "rgba(52, 211, 153, 0.85)" : active ? ACCENT : "rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", fontWeight: 700,
                  color: done || active ? "#0A1628" : textMuted,
                  transition: "all 0.2s ease",
                }}>
                  {done ? "✓" : num}
                </div>
                <span style={{
                  fontSize: "0.875rem", fontWeight: active ? 600 : 400,
                  color: active ? textPrimary : done ? "#6EE7B7" : textMuted,
                }}>
                  {s}
                </span>
              </div>
              {i < 2 && (
                <div style={{
                  flex: 1, height: 1,
                  background: step > num + 1 ? "rgba(52, 211, 153, 0.6)" : step > num ? ACCENT : "rgba(255,255,255,0.14)",
                  margin: "0 12px",
                  transition: "background 0.2s ease",
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Step 1 — Specialty */}
      {step === 1 && (
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: textPrimary, marginBottom: 20 }}>Choose a specialty</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {SPECIALTIES.map((s) => (
              <button
                key={s.id}
                onClick={() => { setSpecialty(s.id); setDoctor(null); setStep(2); }}
                style={{
                  ...(specialty === s.id ? glassChip(ACCENT, 0.14) : glassPanelSoft),
                  padding: "18px 16px",
                  borderRadius: 14, cursor: "pointer", textAlign: "left",
                  fontFamily: "var(--font-body)", transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  if (specialty !== s.id) {
                    (e.currentTarget as HTMLElement).style.borderColor = ACCENT;
                    (e.currentTarget as HTMLElement).style.background = "rgba(251, 191, 36, 0.1)";
                  }
                }}
                onMouseLeave={e => {
                  if (specialty !== s.id) {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                  }
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: textPrimary, marginBottom: 4 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: "0.75rem", color: textMuted }}>{s.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Doctor */}
      {step === 2 && (
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: textPrimary }}>
              {selectedSpec?.icon} {selectedSpec?.label} — Choose a doctor
            </h2>
            <button onClick={() => setStep(1)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", color: ACCENT, fontFamily: "var(--font-display)", fontWeight: 600 }}>
              ← Back
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {doctors.map((d) => (
              <button
                key={d.name}
                onClick={() => { setDoctor(d.name); setStep(3); }}
                style={{
                  ...(doctor === d.name ? glassChip(ACCENT, 0.14) : glassPanelSoft),
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "18px 20px",
                  borderRadius: 14, cursor: "pointer",
                  fontFamily: "var(--font-body)", transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = ACCENT;
                  (e.currentTarget as HTMLElement).style.background = "rgba(251, 191, 36, 0.1)";
                }}
                onMouseLeave={e => {
                  if (doctor !== d.name) {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                  }
                }}
              >
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    ...glassPanelSoft,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.25rem",
                  }}>
                    👩‍⚕️
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: textPrimary }}>{d.name}</div>
                    <div style={{ fontSize: "0.8125rem", color: textMuted, marginTop: 2 }}>{d.qual} · {d.exp}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#FCD34D" }}>⭐ {d.rating}</div>
                  <div style={{ fontSize: "0.75rem", color: "#6EE7B7", fontWeight: 600, marginTop: 2 }}>
                    {d.slots} slots today
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 — Schedule */}
      {step === 3 && (
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: textPrimary }}>
              Schedule with {selectedDoc?.name}
            </h2>
            <button onClick={() => setStep(2)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", color: ACCENT, fontFamily: "var(--font-display)", fontWeight: 600 }}>
              ← Back
            </button>
          </div>

          <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
            Select day — June 2026
          </p>
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {DAYS.map(d => (
              <button
                key={d}
                onClick={() => setDay(d)}
                style={{
                  ...(day === d ? glassChip(ACCENT, 0.22) : glassPanelSoft),
                  padding: "10px 16px",
                  borderRadius: 10, cursor: "pointer",
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem",
                  color: day === d ? "#FDE68A" : textPrimary,
                  transition: "all 0.15s ease",
                }}
              >
                {d}
              </button>
            ))}
          </div>

          {day && (
            <>
              <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: textMuted, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
                Available times
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {TIMES.map(t => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    style={{
                      ...(time === t ? glassChip(ACCENT, 0.22) : glassPanelSoft),
                      padding: "10px 18px",
                      borderRadius: 10, cursor: "pointer",
                      fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "0.875rem",
                      color: time === t ? "#FDE68A" : textPrimary,
                      transition: "all 0.15s ease",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          {day && time && (
            <div style={{
              ...glassChip(ACCENT, 0.12),
              padding: "20px 24px",
              borderRadius: 14,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: 16,
            }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: textPrimary, marginBottom: 4 }}>
                  {selectedDoc?.name} · {selectedSpec?.label}
                </div>
                <div style={{ fontSize: "0.875rem", color: textSecondary }}>
                  June {day.split(" ")[1]}, 2026 at {time}
                </div>
              </div>
              <button onClick={confirmBooking} style={{ ...glassButtonPrimary, padding: "12px 28px", borderRadius: 100, fontFamily: "var(--font-display)", fontWeight: 600, cursor: "pointer" }}>
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </PlaygroundShell>
  );
}