import CompanyShell from "@/components/company/CompanyShell";
import LoadingScene from "@/components/canvas/scenes/LoadingScene";
import { textMuted } from "@/components/features/glass";

export default function Loading() {
  return (
    <CompanyShell scene={<LoadingScene />}>
      <div className="relative z-10" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
      }}>
        <div style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "0.9rem",
          color: textMuted,
          letterSpacing: "0.04em",
        }}>
          Loading...
        </div>
      </div>
    </CompanyShell>
  );
}