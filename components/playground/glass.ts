import type { CSSProperties } from "react";

/**
 * The playground pages sit on top of PlaygroundScene (a 3D canvas), not a
 * flat page background. Every panel, chip, and button needs to actually be
 * translucent + blurred to read as "floating over the scene" rather than
 * opaque light-theme cards with the 3D showing only in the gaps. This file
 * is the single source for that — pages should spread these instead of
 * reaching for var(--bg-card) / var(--accent-light) / var(--text-primary)
 * etc., which were tuned for a white page background and go invisible or
 * illegible once the backing is dark and translucent.
 */

export const glassPanel: CSSProperties = {
  background: "rgba(6, 14, 26, 0.55)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",
};

export const glassPanelSoft: CSSProperties = {
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
};

/** Primary CTA — a translucent tint of the brand gradient, not a solid fill. */
export const glassButtonPrimary: CSSProperties = {
  background: "linear-gradient(135deg, rgba(26, 107, 255, 0.55), rgba(13, 184, 122, 0.55))",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  color: "#F5F9FF",
};

export const glassButtonGhost: CSSProperties = {
  background: "rgba(255, 255, 255, 0.06)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255, 255, 255, 0.14)",
};

/** A colored glass chip — badges, status pills, selected states. Pass a hex color. */
export function glassChip(hex: string, alpha = 0.18): CSSProperties {
  return {
    background: hexToRgba(hex, alpha),
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: `1px solid ${hexToRgba(hex, 0.35)}`,
  };
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Text — the light-on-dark equivalents of --text-primary / --text-secondary / --text-muted
export const textPrimary = "#EAF2FB";
export const textSecondary = "rgba(234, 242, 251, 0.72)";
export const textMuted = "rgba(234, 242, 251, 0.5)";

export const borderColor = "rgba(255, 255, 255, 0.14)";
export const borderColorStrong = "rgba(255, 255, 255, 0.26)";

// Status colors, lightened for dark glass backgrounds (the light-theme
// versions like #B45309 were tuned for white cards and go nearly invisible
// on a translucent dark panel).
export const statusColors: Record<string, { color: string; label: string }> = {
  normal: { color: "#6EE7B7", label: "Normal" },
  abnormal: { color: "#FCD34D", label: "Abnormal" },
  critical: { color: "#FDA4AF", label: "Critical" },
  unknown: { color: "rgba(234, 242, 251, 0.6)", label: "–" },
};