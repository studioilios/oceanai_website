"use client";

import { useState } from "react";
import PlaygroundShell from "@/components/playground/PlaygroundShell";

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
      <PlaygroundShell>
        <div style={{
          maxWidth: 520, margin: "0 auto", textAlign: "center",
          paddingTop: 32,
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "rgba(13, 184, 122, 0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.5rem", margin: "0 auto 24px",
          }}>✅</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "1.75rem", color: "var(--text-primary)",
            letterSpacing: "-0.02em", marginBottom: 12,
          }}>
            Appointment Confirmed
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginBottom: 32 }}>
            Your appointment has been booked and saved to your OceanAI health timeline.
          </p>

          {/* Confirmation card */}
          <div style={{
            padding: "24px 28px",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            boxShadow: "var(--shadow-card)",
            textAlign: "left",
            marginBottom: 28,
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Specialty", val: selectedSpec?.label + " " + selectedSpec?.icon },
                { label: "Doctor", val: selectedDoc?.name },
                { label: "Date", val: `June ${day?.split(" ")[1]}, 2026` },
                { label: "Time", val: time },
              ].map(row => (
                <div key={row.label} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 500 }}>{row.label}</span>
                  <span style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 600 }}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={reset} className="btn-secondary" style={{ padding: "12px 24px" }}>
              Book another
            </button>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "12px 24px" }}>
              Download OceanAI
            </a>
          </div>
        </div>
      </PlaygroundShell>
    );
  }

  return (
    <PlaygroundShell>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "rgba(26, 107, 255, 0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.25rem",
          }}>🩺</div>
          <div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.375rem", color: "var(--text-primary)", letterSpacing: "-0.02em",
            }}>Doctor Appointment</h1>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: 2 }}>
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
              <div style={{
                display: "flex", alignItems: "center", gap: 8, flexShrink: 0,
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: done ? "var(--accent-emerald)"
                    : active ? "var(--accent)" : "var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", fontWeight: 700,
                  color: done || active ? "white" : "var(--text-muted)",
                  transition: "all 0.2s ease",
                }}>
                  {done ? "✓" : num}
                </div>
                <span style={{
                  fontSize: "0.875rem", fontWeight: active ? 600 : 400,
                  color: active ? "var(--text-primary)" : done ? "var(--accent-emerald)" : "var(--text-muted)",
                }}>
                  {s}
                </span>
              </div>
              {i < 2 && (
                <div style={{
                  flex: 1, height: 1,
                  background: step > num + 1 ? "var(--accent-emerald)"
                    : step > num ? "var(--accent)" : "var(--border)",
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
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "1.125rem", color: "var(--text-primary)", marginBottom: 20,
          }}>Choose a specialty</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {SPECIALTIES.map((s) => (
              <button
                key={s.id}
                onClick={() => { setSpecialty(s.id); setDoctor(null); setStep(2); }}
                style={{
                  padding: "18px 16px",
                  background: specialty === s.id ? "var(--accent-light)" : "var(--bg-card)",
                  border: `1.5px solid ${specialty === s.id ? "var(--accent)" : "var(--border)"}`,
                  borderRadius: 14, cursor: "pointer", textAlign: "left",
                  fontFamily: "var(--font-body)", transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  if (specialty !== s.id) {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
                  }
                }}
                onMouseLeave={e => {
                  if (specialty !== s.id) {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  }
                }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: 4 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{s.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Doctor */}
      {step === 2 && (
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.125rem", color: "var(--text-primary)",
            }}>
              {selectedSpec?.icon} {selectedSpec?.label} — Choose a doctor
            </h2>
            <button onClick={() => setStep(1)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.875rem", color: "var(--accent)", fontFamily: "var(--font-display)", fontWeight: 600,
            }}>
              ← Back
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {doctors.map((d) => (
              <button
                key={d.name}
                onClick={() => { setDoctor(d.name); setStep(3); }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "18px 20px",
                  background: doctor === d.name ? "var(--accent-light)" : "var(--bg-card)",
                  border: `1.5px solid ${doctor === d.name ? "var(--accent)" : "var(--border)"}`,
                  borderRadius: 14, cursor: "pointer",
                  fontFamily: "var(--font-body)", transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
                }}
                onMouseLeave={e => {
                  if (doctor !== d.name) {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  }
                }}
              >
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "var(--bg-subtle)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.25rem",
                  }}>
                    👩‍⚕️
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)" }}>{d.name}</div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 2 }}>{d.qual} · {d.exp}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#B45309" }}>⭐ {d.rating}</div>
                  <div style={{
                    fontSize: "0.75rem", color: "#0DB87A", fontWeight: 600, marginTop: 2,
                  }}>
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
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.125rem", color: "var(--text-primary)",
            }}>
              Schedule with {selectedDoc?.name}
            </h2>
            <button onClick={() => setStep(2)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.875rem", color: "var(--accent)", fontFamily: "var(--font-display)", fontWeight: 600,
            }}>
              ← Back
            </button>
          </div>

          {/* Day picker */}
          <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
            Select day — June 2026
          </p>
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {DAYS.map(d => (
              <button
                key={d}
                onClick={() => setDay(d)}
                style={{
                  padding: "10px 16px",
                  background: day === d ? "var(--accent)" : "var(--bg-card)",
                  border: `1.5px solid ${day === d ? "var(--accent)" : "var(--border)"}`,
                  borderRadius: 10, cursor: "pointer",
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem",
                  color: day === d ? "white" : "var(--text-primary)",
                  transition: "all 0.15s ease",
                }}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Time picker */}
          {day && (
            <>
              <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
                Available times
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {TIMES.map(t => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    style={{
                      padding: "10px 18px",
                      background: time === t ? "var(--accent)" : "var(--bg-card)",
                      border: `1.5px solid ${time === t ? "var(--accent)" : "var(--border)"}`,
                      borderRadius: 10, cursor: "pointer",
                      fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: "0.875rem",
                      color: time === t ? "white" : "var(--text-primary)",
                      transition: "all 0.15s ease",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Confirm */}
          {day && time && (
            <div style={{
              padding: "20px 24px",
              background: "var(--accent-light)",
              border: "1px solid rgba(26, 107, 255, 0.2)",
              borderRadius: 14,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: 16,
            }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: 4 }}>
                  {selectedDoc?.name} · {selectedSpec?.label}
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  June {day.split(" ")[1]}, 2026 at {time}
                </div>
              </div>
              <button onClick={confirmBooking} className="btn-primary" style={{ padding: "12px 28px" }}>
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
