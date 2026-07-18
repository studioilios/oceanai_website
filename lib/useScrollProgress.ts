"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

/**
 * Global scroll store. A single rAF loop reads document scroll and writes
 * a smoothed 0..1 progress value that both the R3F canvas (camera/shader
 * uniforms) and DOM sections subscribe to. Kept outside React state so the
 * 3D layer can read it every frame without triggering React re-renders.
 */
class ScrollStore {
  raw = 0; // 0..1 immediate
  smooth = 0; // 0..1 eased, what consumers should read for motion
  velocity = 0;
  listeners = new Set<() => void>();
  private frame = 0;

  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.onScroll, { passive: true });
      window.addEventListener("resize", this.onScroll);
      this.onScroll();
      this.loop();
    }
  }

  onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    this.raw = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  };

  loop = () => {
    const prev = this.smooth;
    this.smooth += (this.raw - this.smooth) * 0.085;
    if (Math.abs(this.smooth - this.raw) < 0.0005) this.smooth = this.raw;
    this.velocity = this.smooth - prev;
    this.listeners.forEach((l) => l());
    this.frame = requestAnimationFrame(this.loop);
  };

  subscribe = (cb: () => void) => {
    this.listeners.add(cb);
    return () => {
      this.listeners.delete(cb);
    };
  };

  getSnapshot = () => this.smooth;
}

export const scrollStore = typeof window !== "undefined" ? new ScrollStore() : null;

/** React hook — subscribe a DOM component to the smoothed progress. */
export function useScrollProgress() {
  return useSyncExternalStore(
    (cb) => scrollStore?.subscribe(cb) ?? (() => {}),
    () => scrollStore?.getSnapshot() ?? 0,
    () => 0
  );
}

/** Reveal-on-scroll for section content (IntersectionObserver, not tied to the 3D loop). */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return ref;
}