"use client";

import { useEffect, useState } from "react";
import { Icon } from "./primitives";

const SHOW_MS = 1900;
const EXIT_MS = 700;

// Intro splash: visible from first paint (server-rendered), then slides away.
export default function Loader() {
  const [phase, setPhase] = useState<"show" | "exit" | "done">("show");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t1 = window.setTimeout(() => setPhase("exit"), reduce ? 400 : SHOW_MS);
    const t2 = window.setTimeout(() => setPhase("done"), (reduce ? 400 : SHOW_MS) + EXIT_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (phase === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Loading Ocean AI"
      className="fixed inset-0 z-[100] grid place-items-center bg-ink text-white"
      style={{
        transform: phase === "exit" ? "translateY(-100%)" : "none",
        transition: `transform ${EXIT_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="oc-blob left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-aqua/25" />
        <div className="oc-dots absolute -right-10 -top-10 h-64 w-64 opacity-30" />
        <div className="oc-dots absolute -bottom-10 -left-10 h-64 w-64 opacity-30" />
      </div>

      <div className="relative flex flex-col items-center gap-6 px-6">
        <div className="relative grid h-20 w-20 place-items-center">
          <span className="oc-loader-ring absolute inset-0 rounded-full border border-aqua/60" />
          <span className="oc-loader-ring absolute inset-0 rounded-full border border-aqua/40" style={{ animationDelay: "0.6s" }} />
          <span className="grid h-16 w-16 place-items-center rounded-full bg-aqua text-ink">
            <Icon name="wave" size={28} />
          </span>
        </div>

        <p className="oc-rise text-3xl font-extrabold tracking-tight">
          Ocean <span className="text-aqua">AI</span>
        </p>

        <svg viewBox="0 0 240 40" className="h-8 w-48 text-aqua" fill="none" aria-hidden>
          <path
            className="oc-loader-ecg"
            d="M0 20h70l10-16 16 32 14-24 8 8h122"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="oc-loader-bar h-full rounded-full bg-aqua" />
        </div>
        <p className="text-xs font-medium tracking-wide text-white/50">Your health. Your language. Your AI.</p>
      </div>
    </div>
  );
}
