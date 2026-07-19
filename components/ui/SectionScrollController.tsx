"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";

/**
 * Pure CSS scroll-snap (scroll-snap-type + scroll-snap-align) is what's in
 * globals.css, but browsers don't reliably honor "one gesture = one snap
 * point" — trackpad momentum in particular can glide past scroll-snap-stop:
 * always in Safari/Firefox, or settle mid-section. This component takes
 * over: it intercepts wheel/keyboard input on "/" only, always moves
 * exactly one section, and locks input for the duration of the animation
 * so a single strong scroll can't cascade through two or three sections.
 *
 * CSS scroll-snap stays in globals.css as a fallback (e.g. before this
 * component hydrates) — the two don't conflict, since this always targets
 * the same section boundaries the CSS already snaps to.
 */

const LOCK_MS = 900;
const WHEEL_THRESHOLD = 12; // ignore trackpad jitter / accidental taps
const SWIPE_THRESHOLD = 60; // px, for touch

export default function SectionScrollController() {
  const pathname = usePathname();
  const lockedRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // let native/CSS scrolling handle it

    const sectionIds = navItems.map((n) => n.id);

    const getCurrentIndex = () => {
      const y = window.scrollY;
      let closest = 0;
      let minDist = Infinity;
      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const dist = Math.abs(el.offsetTop - y);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      return closest;
    };

    const goToIndex = (index: number) => {
      const clamped = Math.max(0, Math.min(sectionIds.length - 1, index));
      const el = document.getElementById(sectionIds[clamped]);
      if (!el) return;
      lockedRef.current = true;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        lockedRef.current = false;
      }, LOCK_MS);
    };

    const move = (direction: 1 | -1) => {
      if (lockedRef.current) return;
      const current = getCurrentIndex();
      const next = current + direction;
      if (next < 0 || next >= sectionIds.length) return; // let it rest at the first/last section
      goToIndex(next);
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
      e.preventDefault();
      if (lockedRef.current) return;
      move(e.deltaY > 0 ? 1 : -1);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      // Don't hijack keys while typing in an input/textarea/select.
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;

      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        move(1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        move(-1);
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const endY = e.changedTouches[0]?.clientY ?? touchStartY.current;
      const delta = touchStartY.current - endY;
      touchStartY.current = null;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      move(delta > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [pathname]);

  return null;
}