"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sonar pulse canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const rings: { r: number; opacity: number; speed: number }[] = [];

    const W = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    W();
    window.addEventListener("resize", W);

    // Seed rings at staggered intervals
    for (let i = 0; i < 4; i++) {
      rings.push({ r: 80 + i * 120, opacity: 0.18 - i * 0.035, speed: 0.4 + i * 0.12 });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width * 0.72;
      const cy = canvas.height * 0.5;

      rings.forEach((ring) => {
        ring.r += ring.speed;
        ring.opacity -= 0.0004;

        if (ring.r > Math.max(canvas.width, canvas.height) * 0.75 || ring.opacity <= 0) {
          ring.r = 60;
          ring.opacity = 0.15;
        }

        ctx.beginPath();
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(26, 107, 255, ${ring.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Center dot
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
      grad.addColorStop(0, "rgba(26, 107, 255, 0.18)");
      grad.addColorStop(1, "rgba(26, 107, 255, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(26, 107, 255, 0.55)";
      ctx.fill();

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", W);
    };
  }, []);

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      background: "linear-gradient(160deg, #F7F9FC 0%, #EEF5FD 55%, #F0FDF8 100%)",
    }}>
      {/* Canvas sonar */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(26, 107, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26, 107, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 100, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760 }}>
          {/* Eyebrow */}
          <div className="animate-fade-up" style={{ marginBottom: 28 }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px 6px 8px",
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: 100,
              boxShadow: "0 2px 8px rgba(13, 27, 46, 0.06)",
            }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "3px 10px",
                background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
                borderRadius: 100,
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "white",
                letterSpacing: "0.04em",
              }}>
                <span style={{ width: 5, height: 5, background: "white", borderRadius: "50%", display: "inline-block" }} />
                LIVE
              </span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)" }}>
                Available on iOS & Android
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="display-xl animate-fade-up delay-100" style={{ marginBottom: 24 }}>
            Health intelligence
            <br />
            that lives{" "}
            <span className="gradient-text">on your device.</span>
          </h1>

          {/* Sub */}
          <p className="body-lg animate-fade-up delay-200" style={{ maxWidth: 560, marginBottom: 40 }}>
            OceanAI is the first personal health platform with an on-device LLM, AI-driven insurance code lookup, organ health monitoring, and voice AI — all working offline, all private.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 60 }}>
            <Link href="/features" className="btn-primary" style={{ padding: "15px 30px", fontSize: "1rem" }}>
              See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/playground" className="btn-secondary" style={{ padding: "15px 30px", fontSize: "1rem" }}>
              Try the playground
            </Link>
          </div>

          {/* Trust signals */}
          <div className="animate-fade-up delay-400" style={{
            display: "flex",
            gap: 36,
            flexWrap: "wrap",
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
          }}>
            {[
              { num: "11", label: "Core features" },
              { num: "2", label: "Platforms (iOS + Android)" },
              { num: "100%", label: "Privacy-first, on-device" },
              { num: "ICD-10", label: "Insurance code AI" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "var(--accent)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: 4,
                }}>
                  {stat.num}
                </div>
                <div style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating app UI mockup — right side */}
      <div className="animate-slide-right delay-300" style={{
        position: "absolute",
        right: "4%",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}>
        <AppMockup />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .animate-slide-right { display: none; }
        }
      `}</style>
    </section>
  );
}

function AppMockup() {
  return (
    <div style={{
      width: 280,
      background: "white",
      borderRadius: 28,
      boxShadow: "0 32px 80px rgba(13, 27, 46, 0.18), 0 0 0 1px rgba(13, 27, 46, 0.06)",
      overflow: "hidden",
      fontFamily: "var(--font-body)",
    }}>
      {/* Phone notch bar */}
      <div style={{
        background: "#0A1628",
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{ width: 60, height: 5, background: "rgba(255,255,255,0.15)", borderRadius: 4 }} />
      </div>

      {/* Header */}
      <div style={{
        padding: "16px 18px 12px",
        background: "linear-gradient(135deg, #0A1628 0%, #1a2a44 100%)",
        color: "white",
      }}>
        <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>OceanAI · Your Health</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem" }}>Good morning 👋</div>
        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: 2 }}>All systems healthy</div>
      </div>

      {/* Chat snippet */}
      <div style={{ padding: "14px 14px 8px", background: "var(--bg-primary)" }}>
        <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", fontWeight: 600, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          AI Conversation
        </div>

        {/* User msg */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
          <div style={{
            background: "var(--accent)",
            color: "white",
            borderRadius: "12px 12px 3px 12px",
            padding: "8px 12px",
            fontSize: "0.8rem",
            maxWidth: "80%",
          }}>
            What does ICD-10 E11.9 mean?
          </div>
        </div>

        {/* AI msg */}
        <div style={{ display: "flex", gap: 7, marginBottom: 8 }}>
          <div style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.6rem",
            color: "white",
            fontWeight: 700,
          }}>AI</div>
          <div style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "3px 12px 12px 12px",
            padding: "8px 12px",
            fontSize: "0.8rem",
            color: "var(--text-primary)",
            lineHeight: 1.45,
            maxWidth: "80%",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}>
            E11.9 is Type 2 diabetes mellitus without complications. Common coverage under ICD-10-CM...
          </div>
        </div>

        {/* Typing indicator */}
        <div style={{ display: "flex", gap: 7, marginBottom: 12 }}>
          <div style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
            flexShrink: 0,
          }} />
          <div style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "3px 12px 12px 12px",
            padding: "10px 14px",
            display: "flex",
            gap: 4,
            alignItems: "center",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--text-muted)",
                animation: `sonar-pulse 1s ease-in-out ${i * 0.2}s infinite`,
              }} />
            ))}
          </div>
        </div>

        {/* Health cards row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
          {[
            { icon: "❤️", label: "Heart", val: "72 bpm", color: "#FEE2E2", text: "#991B1B" },
            { icon: "🫁", label: "Lungs", val: "Normal", color: "#DCFCE7", text: "#166534" },
            { icon: "🧠", label: "Brain", val: "Active", color: "#EDE9FE", text: "#5B21B6" },
            { icon: "🦴", label: "Bones", val: "Healthy", color: "#FEF3C7", text: "#92400E" },
          ].map((item) => (
            <div key={item.label} style={{
              background: item.color,
              borderRadius: 10,
              padding: "8px 10px",
            }}>
              <div style={{ fontSize: "0.875rem", marginBottom: 2 }}>{item.icon}</div>
              <div style={{ fontSize: "0.6875rem", fontWeight: 600, color: item.text }}>{item.label}</div>
              <div style={{ fontSize: "0.625rem", color: item.text, opacity: 0.75 }}>{item.val}</div>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          background: "white",
          border: "1.5px solid var(--border)",
          borderRadius: 100,
          padding: "8px 12px",
        }}>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", flex: 1 }}>Ask your health AI...</div>
          <div style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" fill="white"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="19" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
