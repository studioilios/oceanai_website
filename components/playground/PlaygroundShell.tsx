"use client";

import PlaygroundScene, { PlaygroundVariant } from "@/components/canvas/PlaygroundScene";

/**
 * The 5 playground pages (upload, insurance, organs, voice, appointment)
 * already have working light-themed card UIs built on the site's original
 * --bg-card / --text-primary / --accent tokens — none of that changes here.
 * This shell just adds a fixed, variant-colored 3D backdrop behind them and
 * enough top padding to clear the fixed <Nav />. The light cards float over
 * the dark 3D scene the same way the stat cards do on the home page.
 */
export default function PlaygroundShell({
  children,
  variant = "insurance",
}: {
  children: React.ReactNode;
  variant?: PlaygroundVariant;
}) {
  return (
    <div className="relative min-h-screen">
      <PlaygroundScene variant={variant} />
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8 pt-28 pb-20">{children}</div>
    </div>
  );
}