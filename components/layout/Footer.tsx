"use client";

import Link from "next/link";

const FEATURE_LINKS = [
  { label: "File Intelligence", href: "/features/file-intelligence" },
  { label: "Insurance AI", href: "/features/insurance-ai" },
  { label: "Organ Health", href: "/features/organs" },
  { label: "Doctor Appointments", href: "/features/appointments" },
  { label: "Watch Integration", href: "/features/watch" },
  { label: "On-Device LLM", href: "/features/local-llm" },
  { label: "Voice AI", href: "/features/voice" },
  { label: "Family Connect", href: "/features/family" },
  { label: "Blood Donor Finder", href: "/features/blood-donor" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-deep)", color: "white", paddingTop: 72, paddingBottom: 40 }}>
      <div className="container">
        {/* Top: logo + tagline + app badges */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 48,
          paddingBottom: 56,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, #1A6BFF 0%, #0DB87A 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white" opacity="0.4"/>
                  <circle cx="12" cy="12" r="4" fill="white"/>
                  <path d="M12 6v2M12 16v2M6 12h2M16 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "-0.01em",
              }}>
                Ocean<span style={{ color: "#1A6BFF" }}>AI</span>
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: 380,
              lineHeight: 1.6,
              marginBottom: 24,
            }}>
              Personal health intelligence that works at the edge. Built by Studio ILLIOS.
            </p>
            {/* Store badges */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <AppStoreBadge type="ios" />
              <AppStoreBadge type="android" />
            </div>
          </div>

          {/* Right: newsletter / investor CTA */}
          <div style={{
            background: "rgba(26, 107, 255, 0.1)",
            border: "1px solid rgba(26, 107, 255, 0.25)",
            borderRadius: 16,
            padding: "28px 32px",
            maxWidth: 320,
            alignSelf: "flex-start",
          }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.0625rem",
              color: "white",
              marginBottom: 8,
            }}>
              Investor inquiries
            </p>
            <p style={{
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.5)",
              marginBottom: 20,
              lineHeight: 1.55,
            }}>
              Interested in OceanAI? We&apos;re building the next layer of personal health infrastructure.
            </p>
            <a
              href="mailto:hello@illios.studio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 22px",
                background: "#1A6BFF",
                color: "white",
                borderRadius: 100,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "background 0.15s ease",
              }}
            >
              Get in touch
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle: links grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,
          padding: "48px 0",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 20,
            }}>
              Features
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {FEATURE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "white"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 20,
            }}>
              Company
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {[
                { label: "Playground", href: "/playground" },
                { label: "Features", href: "/features" },
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Careers", href: "/careers" },
                { label: "Subscription", href: "/subscription" },
                { label: "Changelog", href: "/changelog" },
                { label: "Press", href: "/press" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Bug Report", href: "/bug-report" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "white"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                >
                  {link.label}
                </Link>
              ))}
              <a href="https://github.com/studioilios" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "white"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
              >GitHub ↗</a>
              <a href="https://huggingface.co/AmareshHebbar" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "white"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
              >HuggingFace ↗</a>
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 20,
            }}>
              Legal
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-conditions" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "white"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                >
                  {link.label}
                </Link>
              ))}
              <a href="mailto:nextlife@studioilios.org"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = "white"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
              >
                nextlife@studioilios.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.3)" }}>
            © 2026 Studio ILLIOS. All rights reserved.
          </p>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.3)" }}>
            Built in India 🇮🇳
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
          footer > div > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function AppStoreBadge({ type }: { type: "ios" | "android" }) {
  const isIos = type === "ios";
  return (
    <a
      href={isIos
        ? "https://apps.apple.com"
        : "https://play.google.com"}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 18px",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 12,
        textDecoration: "none",
        transition: "all 0.15s ease",
        minWidth: 152,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.11)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        {isIos ? (
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="white"/>
        ) : (
          <>
            <path d="M3.18 23.76A1.97 1.97 0 012 22V2c0-.73.42-1.37 1.04-1.68L13.5 12 3.18 23.76z" fill="white"/>
            <path d="M16.96 15.43l-3-1.73-3-1.7 3-1.71 3-1.73 1.9 1.09c.81.47.81 1.43 0 1.9l-1.9 1.09v.09z" fill="white" opacity="0.7"/>
            <path d="M3.18 23.76L13.5 12 4.82.24C4.3.08 3.7.24 3.18.32 2.46.61 2 1.28 2 2v20c0 .72.46 1.38 1.18 1.76z" fill="white" opacity="0.5"/>
          </>
        )}
      </svg>
      <div>
        <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1 }}>
          {isIos ? "Download on the" : "Get it on"}
        </div>
        <div style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "0.9375rem",
          color: "white",
          lineHeight: 1.2,
          marginTop: 2,
        }}>
          {isIos ? "App Store" : "Google Play"}
        </div>
      </div>
    </a>
  );
}
