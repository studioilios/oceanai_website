"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import PlaygroundShell from "@/components/playground/PlaygroundShell";

type Message = { role: "user" | "assistant"; content: string };

const SAMPLE_QUESTIONS = [
  "What are normal blood pressure ranges?",
  "How does sleep affect heart health?",
  "What does a low hemoglobin level mean?",
  "When should I see a doctor for chest pain?",
];

export default function VoicePlayground() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [supported, setSupported] = useState(true);
  const [bars, setBars] = useState<number[]>(Array(20).fill(4));
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const animFrameRef = useRef<number>(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      setSupported(false);
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const animateBars = useCallback(() => {
    setBars(Array.from({ length: 20 }, () => Math.random() * 36 + 4));
    animFrameRef.current = requestAnimationFrame(() => {
      setTimeout(animateBars, 80);
    });
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    cancelAnimationFrame(animFrameRef.current);
    setListening(false);
    setBars(Array(20).fill(4));
  }, []);

  const askAI = useCallback(async (question: string) => {
    if (!question.trim() || loading) return;
    const newMessages: Message[] = [...messages, { role: "user", content: question }];
    setMessages(newMessages);
    setTranscript("");
    setLoading(true);

    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "voice", messages: newMessages }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error);

      setMessages(prev => [...prev, { role: "assistant", content: data.result }]);

      // Text-to-speech
      if ("speechSynthesis" in window) {
        const utter = new SpeechSynthesisUtterance(data.result);
        utter.rate = 0.95;
        utter.pitch = 1;
        window.speechSynthesis.speak(utter);
      }
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I had trouble processing that. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }, [messages, loading]);

  const startListening = useCallback(() => {
    if (!supported) return;

    const SpeechRecognition =
      (window as typeof window & { webkitSpeechRecognition: typeof SpeechRecognition }).webkitSpeechRecognition ||
      window.SpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const current = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join("");
      setTranscript(current);

      if (event.results[event.results.length - 1].isFinal) {
        stopListening();
        askAI(current);
      }
    };

    recognition.onerror = () => stopListening();
    recognition.onend = () => {
      setListening(false);
      cancelAnimationFrame(animFrameRef.current);
      setBars(Array(20).fill(4));
    };

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
    animateBars();
  }, [supported, animateBars, stopListening, askAI]);

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <PlaygroundShell>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "rgba(244, 63, 94, 0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.25rem",
          }}>🎙️</div>
          <div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1.375rem", color: "var(--text-primary)", letterSpacing: "-0.02em",
            }}>Voice AI</h1>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: 2 }}>
              Speak your health question. OceanAI listens and responds.
            </p>
          </div>
        </div>
      </div>

      {/* Not supported warning */}
      {!supported && (
        <div style={{
          padding: "14px 18px",
          background: "rgba(245, 158, 11, 0.08)",
          border: "1px solid rgba(245, 158, 11, 0.25)",
          borderRadius: 12,
          marginBottom: 24,
          fontSize: "0.875rem",
          color: "#B45309",
        }}>
          🌐 Voice recognition requires Chrome or Edge. Try typing a question below instead.
        </div>
      )}

      {/* Voice UI */}
      <div style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "var(--shadow-card)",
        marginBottom: 24,
      }}>
        {/* Mic area */}
        <div style={{
          padding: "48px 32px",
          textAlign: "center",
          background: listening
            ? "linear-gradient(160deg, #FFF1F2 0%, #FFF9FC 100%)"
            : "linear-gradient(160deg, var(--bg-subtle) 0%, var(--bg-card) 100%)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.4s ease",
        }}>
          {/* Waveform */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 3, height: 52, marginBottom: 32,
          }}>
            {bars.map((h, i) => (
              <div key={i} style={{
                width: 3, borderRadius: 2,
                background: listening ? "#F43F5E" : "var(--border-strong)",
                height: `${h}px`,
                transition: listening ? "height 0.08s ease" : "height 0.3s ease",
                opacity: listening ? 1 : 0.5,
              }} />
            ))}
          </div>

          {/* Mic button */}
          <button
            onClick={toggleListening}
            disabled={!supported && !transcript}
            style={{
              width: 80, height: 80, borderRadius: "50%",
              background: listening
                ? "linear-gradient(135deg, #F43F5E, #FB7185)"
                : "linear-gradient(135deg, #1A6BFF, #0DB87A)",
              border: "none", cursor: supported ? "pointer" : "default",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
              boxShadow: listening
                ? "0 0 0 12px rgba(244, 63, 94, 0.12), 0 8px 24px rgba(244, 63, 94, 0.35)"
                : "0 8px 24px rgba(26, 107, 255, 0.3)",
              transition: "all 0.25s ease",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              {listening ? (
                <rect x="6" y="4" width="4" height="16" rx="2" fill="white"/>
              ) : (
                <>
                  <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" fill="white"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="12" y1="19" x2="12" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="8" y1="22" x2="16" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>

          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "0.9375rem",
            color: listening ? "#F43F5E" : "var(--text-primary)",
          }}>
            {listening ? "Listening..." : "Tap to speak"}
          </div>

          {transcript && (
            <div style={{
              marginTop: 16,
              padding: "10px 18px",
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: 10,
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              fontStyle: "italic",
              display: "inline-block",
              maxWidth: 400,
            }}>
              &ldquo;{transcript}&rdquo;
            </div>
          )}
        </div>

        {/* Sample questions */}
        {messages.length === 0 && (
          <div style={{ padding: "20px 24px" }}>
            <p style={{
              fontSize: "0.75rem", fontWeight: 700,
              color: "var(--text-muted)", textTransform: "uppercase",
              letterSpacing: "0.07em", marginBottom: 12,
            }}>
              Try asking
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {SAMPLE_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => askAI(q)}
                  disabled={loading}
                  style={{
                    textAlign: "left", padding: "10px 14px",
                    background: "var(--bg-subtle)", border: "1px solid var(--border)",
                    borderRadius: 10, cursor: "pointer",
                    fontFamily: "var(--font-body)", fontSize: "0.875rem",
                    color: "var(--text-primary)", transition: "all 0.15s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.background = "var(--accent-light)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-subtle)";
                  }}
                >
                  🎙️ &ldquo;{q}&rdquo;
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Conversation */}
      {messages.length > 0 && (
        <div style={{
          background: "var(--bg-card)", border: "1px solid var(--border)",
          borderRadius: 18, overflow: "hidden", boxShadow: "var(--shadow-card)",
        }}>
          <div style={{ padding: "20px 20px", maxHeight: 380, overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                marginBottom: 14,
              }}>
                {msg.role === "assistant" && (
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.625rem", fontWeight: 700, color: "white",
                    marginRight: 8, marginTop: 2,
                  }}>AI</div>
                )}
                <div style={{
                  maxWidth: "78%", padding: "10px 14px",
                  borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "4px 14px 14px 14px",
                  background: msg.role === "user" ? "var(--accent)" : "var(--bg-subtle)",
                  border: msg.role === "assistant" ? "1px solid var(--border)" : "none",
                  color: msg.role === "user" ? "white" : "var(--text-primary)",
                  fontSize: "0.9rem", lineHeight: 1.6,
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.625rem", fontWeight: 700, color: "white",
                }}>AI</div>
                <div style={{
                  display: "flex", gap: 4, padding: "10px 14px",
                  background: "var(--bg-subtle)", border: "1px solid var(--border)",
                  borderRadius: "4px 14px 14px 14px",
                }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "var(--accent)",
                      animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </PlaygroundShell>
  );
}
