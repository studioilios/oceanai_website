"use client";

import { useState, useRef, useEffect } from "react";
import PlaygroundShell from "@/components/playground/PlaygroundShell";
import {
  glassPanel,
  glassPanelSoft,
  glassButtonPrimary,
  textPrimary,
  textSecondary,
  textMuted,
  borderColor,
} from "@/components/playground/glass";

type Message = { role: "user" | "assistant"; content: string };

const QUICK_PROMPTS = [
  { label: "E11.9", desc: "Type 2 Diabetes", prompt: "What is ICD-10 code E11.9?" },
  { label: "J18.9", desc: "Pneumonia", prompt: "Explain ICD-10 code J18.9 and its insurance implications." },
  { label: "CPT 99213", desc: "Office Visit", prompt: "What is CPT code 99213 and when is it used?" },
  { label: "DRG 470", desc: "Major Joint", prompt: "What is MS-DRG 470 and what does it cover?" },
  { label: "K21.0", desc: "GERD", prompt: "Look up ICD-10 K21.0 and related CPT codes." },
  { label: "CPT 93000", desc: "ECG", prompt: "What is CPT 93000? Who bills it and when?" },
];

const ACCENT = "#A78BFA"; // matches the "insurance" PlaygroundScene variant

function formatMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part.split("\n").map((line, j, arr) => (
      <span key={j}>{line}{j < arr.length - 1 ? <br /> : null}</span>
    ))}</span>;
  });
}

export default function InsurancePlayground() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text?: string) => {
    const userText = (text ?? input).trim();
    if (!userText || loading) return;
    setInput("");

    const newMessages: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "insurance", messages: newMessages }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "AI error");

      setMessages(prev => [...prev, { role: "assistant", content: data.result }]);
    } catch (err: unknown) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: `**Error:** ${err instanceof Error ? err.message : "Something went wrong. Please try again."}`,
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <PlaygroundShell variant="insurance">
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "rgba(167, 139, 250, 0.16)",
            border: "1px solid rgba(167, 139, 250, 0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.25rem",
          }}>🔬</div>
          <div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.375rem", color: textPrimary, letterSpacing: "-0.02em",
            }}>Insurance AI</h1>
            <p style={{ fontSize: "0.875rem", color: textMuted, marginTop: 2 }}>
              Powered by AxisMapper · ICD-10-CM 2026 · CPT · MS-DRG
            </p>
          </div>
        </div>
      </div>

      <div style={{
        ...glassPanel,
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 260px)",
        minHeight: 480,
        borderRadius: 18,
        overflow: "hidden",
      }}>

        {/* Messages area */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 24px 12px" }}>

          {messages.length === 0 && (
            <div style={{ textAlign: "center", paddingTop: 40 }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🔬</div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "1.125rem", color: textPrimary, marginBottom: 8,
              }}>
                Ask about any medical code
              </h2>
              <p style={{ fontSize: "0.9rem", color: textMuted, maxWidth: 360, margin: "0 auto 32px" }}>
                Type a code (E11.9, CPT 99213), describe a condition, or ask how insurance billing works.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                {QUICK_PROMPTS.map((qp) => (
                  <button
                    key={qp.label}
                    onClick={() => send(qp.prompt)}
                    style={{
                      ...glassPanelSoft,
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "9px 16px",
                      borderRadius: 100,
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = ACCENT;
                      (e.currentTarget as HTMLElement).style.background = "rgba(167, 139, 250, 0.14)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.08)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.8125rem",
                      fontWeight: 700, color: "#C4B5FD",
                    }}>
                      {qp.label}
                    </span>
                    <span style={{ fontSize: "0.8125rem", color: textSecondary }}>
                      {qp.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: 16,
            }}>
              {msg.role === "assistant" && (
                <div style={{
                  width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.6875rem", fontWeight: 700, color: "white",
                  marginRight: 10, marginTop: 2,
                }}>
                  AI
                </div>
              )}
              <div style={{
                maxWidth: "75%",
                padding: "12px 16px",
                borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "4px 16px 16px 16px",
                ...(msg.role === "user"
                  ? { background: "rgba(167, 139, 250, 0.35)", border: "1px solid rgba(167, 139, 250, 0.4)" }
                  : glassPanelSoft),
                color: msg.role === "user" ? "#F5F3FF" : textPrimary,
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}>
                {formatMarkdown(msg.content)}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 30, height: 30, borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.6875rem", fontWeight: 700, color: "white",
              }}>
                AI
              </div>
              <div style={{
                ...glassPanelSoft,
                padding: "12px 18px",
                borderRadius: "4px 16px 16px 16px",
                display: "flex", gap: 5, alignItems: "center",
              }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: ACCENT,
                    animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                    opacity: 0.6,
                  }} />
                ))}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {messages.length > 0 && !loading && (
          <div style={{
            padding: "8px 16px",
            borderTop: `1px solid ${borderColor}`,
            display: "flex", gap: 6, overflowX: "auto",
          }}>
            {QUICK_PROMPTS.slice(0, 4).map((qp) => (
              <button
                key={qp.label}
                onClick={() => send(qp.prompt)}
                style={{
                  ...glassPanelSoft,
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "5px 12px", flexShrink: 0,
                  borderRadius: 100, cursor: "pointer",
                  fontFamily: "var(--font-body)", fontSize: "0.8125rem",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = ACCENT;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "#C4B5FD", fontSize: "0.75rem" }}>{qp.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Input bar */}
        <div style={{
          padding: "14px 16px",
          borderTop: `1px solid ${borderColor}`,
          display: "flex", gap: 10, alignItems: "flex-end",
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about an ICD-10 code, CPT code, or describe a condition..."
            rows={1}
            style={{
              ...glassPanelSoft,
              flex: 1, resize: "none",
              borderRadius: 12, padding: "11px 14px",
              fontFamily: "var(--font-body)", fontSize: "0.9375rem",
              color: textPrimary,
              outline: "none", lineHeight: 1.5,
              transition: "border-color 0.15s ease",
              maxHeight: 120,
              overflowY: "auto",
            }}
            onFocus={e => (e.target.style.borderColor = ACCENT)}
            onBlur={e => (e.target.style.borderColor = "rgba(255, 255, 255, 0.08)")}
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            style={{
              ...(input.trim() && !loading ? glassButtonPrimary : glassPanelSoft),
              width: 42, height: 42, borderRadius: 12, flexShrink: 0,
              cursor: input.trim() && !loading ? "pointer" : "default",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.15s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </PlaygroundShell>
  );
}