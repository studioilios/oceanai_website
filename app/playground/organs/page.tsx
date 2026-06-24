"use client";

import { useState } from "react";
import PlaygroundShell from "@/components/playground/PlaygroundShell";

type Organ = {
  id: string;
  label: string;
  emoji: string;
  cx: number; cy: number; rx: number; ry: number;
  color: string;
  hoverColor: string;
  monitors: string[];
  conditions: string[];
  metrics: { label: string; value: string; status: "normal" | "info" }[];
  description: string;
};

const ORGANS: Organ[] = [
  {
    id: "brain",
    label: "Brain", emoji: "🧠",
    cx: 155, cy: 72, rx: 32, ry: 28,
    color: "#8B5CF6", hoverColor: "#7C3AED",
    monitors: ["Cognitive health signals", "Sleep quality via watch", "Stress markers", "AI conversation patterns"],
    conditions: ["Migraines", "Memory disorders", "Anxiety", "Depression"],
    metrics: [
      { label: "Cognitive score", value: "94/100", status: "normal" },
      { label: "Sleep quality", value: "Good", status: "normal" },
      { label: "Stress level", value: "Moderate", status: "info" },
    ],
    description: "OceanAI monitors neurological health markers from wearable data, sleep patterns, and AI conversation quality indicators.",
  },
  {
    id: "heart",
    label: "Heart", emoji: "❤️",
    cx: 148, cy: 178, rx: 24, ry: 22,
    color: "#EF4444", hoverColor: "#DC2626",
    monitors: ["Heart rate (resting + active)", "Heart rate variability (HRV)", "ECG via watch", "Blood pressure trends"],
    conditions: ["Hypertension", "Arrhythmia", "Coronary artery disease", "Heart failure"],
    metrics: [
      { label: "Resting HR", value: "68 bpm", status: "normal" },
      { label: "HRV", value: "45 ms", status: "normal" },
      { label: "BP trend", value: "Stable", status: "normal" },
    ],
    description: "Continuous heart health monitoring via watch integration. OceanAI flags anomalies and tracks trends over time.",
  },
  {
    id: "lungs",
    label: "Lungs", emoji: "🫁",
    cx: 155, cy: 185, rx: 44, ry: 30,
    color: "#06B6D4", hoverColor: "#0891B2",
    monitors: ["SpO2 (blood oxygen)", "Respiratory rate", "Activity-based breath patterns"],
    conditions: ["Asthma", "COPD", "Pneumonia", "Sleep apnea"],
    metrics: [
      { label: "SpO2", value: "98%", status: "normal" },
      { label: "Resp rate", value: "16/min", status: "normal" },
    ],
    description: "Tracks oxygen saturation and respiratory patterns from wearable sensors, alerting on sustained drops.",
  },
  {
    id: "liver",
    label: "Liver", emoji: "🫀",
    cx: 170, cy: 240, rx: 26, ry: 22,
    color: "#F59E0B", hoverColor: "#D97706",
    monitors: ["Enzyme levels from lab uploads", "Medication interaction flags", "Diet markers"],
    conditions: ["Fatty liver", "Hepatitis", "Cirrhosis"],
    metrics: [
      { label: "ALT (from last lab)", value: "28 U/L", status: "normal" },
      { label: "AST", value: "24 U/L", status: "normal" },
    ],
    description: "Extracted from uploaded lab reports. OceanAI tracks liver enzyme trends and flags medication interactions.",
  },
  {
    id: "kidneys",
    label: "Kidneys", emoji: "🫘",
    cx: 155, cy: 270, rx: 36, ry: 18,
    color: "#10B981", hoverColor: "#059669",
    monitors: ["Creatinine from lab reports", "eGFR", "Urine markers", "Hydration signals"],
    conditions: ["CKD", "Kidney stones", "UTI", "Hypertensive nephropathy"],
    metrics: [
      { label: "eGFR", value: "92 mL/min", status: "normal" },
      { label: "Creatinine", value: "0.9 mg/dL", status: "normal" },
    ],
    description: "Kidney function tracked through lab uploads. OceanAI monitors GFR trends and flags early CKD patterns.",
  },
  {
    id: "stomach",
    label: "Stomach & Gut", emoji: "🫃",
    cx: 148, cy: 238, rx: 22, ry: 20,
    color: "#F97316", hoverColor: "#EA580C",
    monitors: ["Digestive issue patterns", "Diet tracking", "Medication side effects"],
    conditions: ["GERD", "IBS", "Gastritis", "Ulcers"],
    metrics: [
      { label: "Reported issues", value: "None recent", status: "normal" },
    ],
    description: "Tracks GI health patterns from AI conversations and uploaded gastroenterology reports.",
  },
  {
    id: "bones",
    label: "Musculoskeletal", emoji: "🦴",
    cx: 155, cy: 330, rx: 28, ry: 22,
    color: "#94A3B8", hoverColor: "#64748B",
    monitors: ["Activity & step data from watch", "Fracture risk indicators", "Vitamin D from labs"],
    conditions: ["Osteoporosis", "Arthritis", "Back pain", "Joint disorders"],
    metrics: [
      { label: "Daily steps", value: "7,240", status: "normal" },
      { label: "Vitamin D (lab)", value: "34 ng/mL", status: "info" },
    ],
    description: "Bone and joint health assessed from wearable activity data and uploaded bone density or lab reports.",
  },
];

export default function OrgansPlayground() {
  const [selected, setSelected] = useState<Organ | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <PlaygroundShell>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "rgba(13, 184, 122, 0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.25rem",
          }}>🫀</div>
          <div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.375rem", color: "var(--text-primary)", letterSpacing: "-0.02em",
            }}>Organ Health Explorer</h1>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: 2 }}>
              Click any organ to see what OceanAI monitors and tracks.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 28, alignItems: "start" }}>

        {/* SVG body map */}
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 18,
          padding: "24px 16px",
          boxShadow: "var(--shadow-card)",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "0.75rem", fontWeight: 600,
            color: "var(--text-muted)", textTransform: "uppercase",
            letterSpacing: "0.07em", marginBottom: 16,
          }}>
            Click an organ
          </p>
          <svg
            viewBox="50 30 210 360"
            style={{ width: "100%", maxWidth: 260, cursor: "pointer" }}
          >
            {/* Body silhouette */}
            <ellipse cx="155" cy="72" rx="38" ry="34" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1"/>
            {/* Neck */}
            <rect x="141" y="100" width="28" height="22" rx="8" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1"/>
            {/* Torso */}
            <ellipse cx="155" cy="210" rx="58" ry="80" fill="#EEF5FD" stroke="#CBD5E1" strokeWidth="1"/>
            {/* Arms */}
            <ellipse cx="82" cy="210" rx="16" ry="60" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1"/>
            <ellipse cx="228" cy="210" rx="16" ry="60" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1"/>
            {/* Legs */}
            <ellipse cx="130" cy="360" rx="22" ry="55" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1"/>
            <ellipse cx="182" cy="360" rx="22" ry="55" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1"/>

            {/* Organs — clickable */}
            {ORGANS.map((organ) => {
              const isSelected = selected?.id === organ.id;
              const isHovered = hovered === organ.id;
              return (
                <g key={organ.id}>
                  <ellipse
                    cx={organ.cx}
                    cy={organ.cy}
                    rx={organ.rx}
                    ry={organ.ry}
                    fill={isSelected || isHovered ? organ.hoverColor : organ.color}
                    opacity={isSelected ? 1 : isHovered ? 0.85 : 0.65}
                    style={{ cursor: "pointer", transition: "all 0.18s ease" }}
                    onClick={() => setSelected(isSelected ? null : organ)}
                    onMouseEnter={() => setHovered(organ.id)}
                    onMouseLeave={() => setHovered(null)}
                  />
                  {isSelected && (
                    <ellipse
                      cx={organ.cx}
                      cy={organ.cy}
                      rx={organ.rx + 4}
                      ry={organ.ry + 4}
                      fill="none"
                      stroke={organ.hoverColor}
                      strokeWidth="2"
                      opacity={0.5}
                      style={{ pointerEvents: "none" }}
                    />
                  )}
                  <text
                    x={organ.cx}
                    y={organ.cy + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="11"
                    fontWeight="600"
                    fill="white"
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {organ.label.split(" ")[0]}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Organ list */}
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 4 }}>
            {ORGANS.map((organ) => (
              <button
                key={organ.id}
                onClick={() => setSelected(selected?.id === organ.id ? null : organ)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "7px 10px", borderRadius: 8,
                  background: selected?.id === organ.id ? organ.color + "18" : "transparent",
                  border: selected?.id === organ.id ? `1px solid ${organ.color}40` : "1px solid transparent",
                  cursor: "pointer", textAlign: "left",
                  fontFamily: "var(--font-body)", transition: "all 0.15s ease",
                }}
              >
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: organ.color, flexShrink: 0,
                }} />
                <span style={{
                  fontSize: "0.8125rem", fontWeight: 500,
                  color: selected?.id === organ.id ? organ.hoverColor : "var(--text-secondary)",
                }}>
                  {organ.emoji} {organ.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        {selected ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Title card */}
            <div style={{
              padding: "22px 24px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              boxShadow: "var(--shadow-card)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: selected.color + "18",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.75rem",
                }}>
                  {selected.emoji}
                </div>
                <div>
                  <h2 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "1.25rem", color: "var(--text-primary)", letterSpacing: "-0.02em",
                  }}>
                    {selected.label}
                  </h2>
                </div>
              </div>
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                {selected.description}
              </p>
            </div>

            {/* Live metrics */}
            <div style={{
              padding: "20px 24px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              boxShadow: "var(--shadow-card)",
            }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 14,
              }}>
                Sample Metrics
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {selected.metrics.map((m, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: i < selected.metrics.length - 1 ? "1px solid var(--border)" : "none",
                  }}>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{m.label}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontWeight: 600,
                        fontSize: "0.875rem", color: "var(--text-primary)",
                      }}>
                        {m.value}
                      </span>
                      <span style={{
                        padding: "2px 8px", borderRadius: 100,
                        fontSize: "0.6875rem", fontWeight: 700,
                        background: m.status === "normal"
                          ? "rgba(13, 184, 122, 0.1)" : "rgba(245, 158, 11, 0.1)",
                        color: m.status === "normal" ? "#0DB87A" : "#B45309",
                      }}>
                        {m.status === "normal" ? "Normal" : "Note"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What AI monitors */}
            <div style={{
              padding: "20px 24px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              boxShadow: "var(--shadow-card)",
            }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 14,
              }}>
                What OceanAI monitors
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {selected.monitors.map((m, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                      background: selected.color + "18",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginTop: 1,
                    }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: selected.color }} />
                    </div>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related conditions */}
            <div style={{
              padding: "20px 24px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              boxShadow: "var(--shadow-card)",
            }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 14,
              }}>
                Related conditions tracked
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {selected.conditions.map((c) => (
                  <span key={c} style={{
                    padding: "5px 14px",
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--border)",
                    borderRadius: 100,
                    fontSize: "0.8125rem",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Empty state */
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            background: "var(--bg-card)", border: "1.5px dashed var(--border)",
            borderRadius: 18, padding: "60px 32px", textAlign: "center",
          }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🫀</div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.125rem", color: "var(--text-primary)", marginBottom: 8,
            }}>
              Select an organ
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", maxWidth: 280 }}>
              Click on the body map or any organ name on the left to see health details and what OceanAI monitors.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 300px 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </PlaygroundShell>
  );
}
