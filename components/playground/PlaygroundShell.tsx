"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { icon: "📎", label: "File Upload", href: "/playground/upload", desc: "Any format" },
  { icon: "🔬", label: "Insurance AI", href: "/playground/insurance", desc: "ICD-10 · CPT · DRG" },
  { icon: "🫀", label: "Organ Explorer", href: "/playground/organs", desc: "Body map" },
  { icon: "🎙️", label: "Voice AI", href: "/playground/voice", desc: "Speak & ask" },
  { icon: "🩺", label: "Appointments", href: "/playground/appointment", desc: "Booking demo" },
];

export default function PlaygroundShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{
      minHeight: "100vh",
      paddingTop: 68,
      background: "var(--bg-primary)",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Top bar */}
      <div style={{
        background: "var(--bg-deep)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 24px",
      }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>OceanAI</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <Link href="/playground" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Playground</Link>
            {pathname !== "/playground" && (
              <>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
                <span style={{ color: "white", fontWeight: 500 }}>
                  {TABS.find(t => t.href === pathname)?.label ?? "Demo"}
                </span>
              </>
            )}
          </div>

          {/* Right: no-login badge + download link */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              background: "rgba(13, 184, 122, 0.12)",
              border: "1px solid rgba(13, 184, 122, 0.2)",
              borderRadius: 100,
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#4ADE80",
            }}>
              <span style={{ width: 5, height: 5, background: "#4ADE80", borderRadius: "50%", display: "inline-block" }} />
              No login needed
            </div>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "0.8125rem",
                fontWeight: 500,
                transition: "all 0.15s ease",
                fontFamily: "var(--font-display)",
              }}
            >
              Download full app ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div style={{
        flex: 1,
        display: "flex",
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "0 24px",
      }}>
        {/* Sidebar */}
        <aside style={{
          width: 224,
          flexShrink: 0,
          paddingTop: 28,
          paddingRight: 20,
          borderRight: "1px solid var(--border)",
        }}>
          <p style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 12,
            paddingLeft: 12,
          }}>
            Demos
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {TABS.map((tab) => {
              const active = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 12px",
                    borderRadius: 10,
                    textDecoration: "none",
                    background: active ? "var(--accent-light)" : "transparent",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>{tab.icon}</span>
                  <div>
                    <div style={{
                      fontSize: "0.875rem",
                      fontWeight: active ? 600 : 500,
                      color: active ? "var(--accent)" : "var(--text-primary)",
                      lineHeight: 1.2,
                    }}>
                      {tab.label}
                    </div>
                    <div style={{
                      fontSize: "0.6875rem",
                      color: active ? "var(--accent)" : "var(--text-muted)",
                      marginTop: 1,
                      opacity: active ? 0.75 : 1,
                    }}>
                      {tab.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div style={{ height: 1, background: "var(--border)", margin: "20px 0" }} />

          {/* Info box */}
          <div style={{
            padding: "14px 14px",
            background: "var(--bg-subtle)",
            border: "1px solid var(--border)",
            borderRadius: 12,
          }}>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
              These demos run on real Claude AI. Upload real health files — nothing is stored.
            </p>
          </div>
        </aside>

        {/* Main panel */}
        <main style={{
          flex: 1,
          paddingTop: 28,
          paddingLeft: 32,
          paddingBottom: 48,
          minWidth: 0,
        }}>
          {children}
        </main>
      </div>

      {/* Mobile tab bar */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "white",
        borderTop: "1px solid var(--border)",
        display: "none",
        padding: "8px 4px",
        zIndex: 50,
      }} className="mobile-tabs">
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                padding: "6px 4px",
                textDecoration: "none",
                color: active ? "var(--accent)" : "var(--text-muted)",
                fontSize: "0.625rem",
                fontWeight: active ? 600 : 400,
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>{tab.icon}</span>
              {tab.label.split(" ")[0]}
            </Link>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          aside { display: none !important; }
          main { padding-left: 0 !important; }
          .mobile-tabs { display: flex !important; }
          main > div { padding-bottom: 80px !important; }
        }
      `}</style>
    </div>
  );
}
