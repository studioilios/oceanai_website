"use client";

import { useEffect, useRef } from "react";
import { scrollStore } from "@/lib/useScrollProgress";

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const store = scrollStore;
    if (!store) return;
    const unsub = store.subscribe(() => {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${store.smooth})`;
      }
    });
    return unsub;
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-current to-pulse"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}