"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Playground", href: "/playground" },
  { label: "Pricing", href: "/subscription" },
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all 0.25s ease",
        backgroundColor: scrolled ? "rgba(247, 249, 252, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      {/* Skip to content — accessibility */}
      <a href="#main-content" className="skip-to-content">Skip to content</a>

      <div className="container" style={{ display: "flex", alignItems: "center", height: 68 }}>
        {/* Logo */}
        <Link
          href="/"
          aria-label="OceanAI home"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}
        >
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: "linear-gradient(135deg, #1A6BFF 0%, #0DB87A 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="white" opacity="0.4"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
              <path d="M12 6v2M12 16v2M6 12h2M16 12h2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "1.125rem", color: "var(--text-primary)", letterSpacing: "-0.01em",
          }}>
            Ocean<span style={{ color: "var(--accent)" }}>AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          style={{ display: "flex", alignItems: "center", gap: 2, marginLeft: 36, flex: 1 }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                style={{
                  padding: "7px 14px",
                  borderRadius: 100,
                  fontFamily: "var(--font-body)",
                  fontWeight: active ? 600 : 500,
                  fontSize: "0.9rem",
                  color: active ? "var(--accent)" : "var(--text-secondary)",
                  textDecoration: "none",
                  background: active ? "var(--accent-light)" : "transparent",
                  transition: "all 0.15s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(13, 27, 46, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: "auto" }}>
          <div
            className="badge badge-green desktop-nav"
            style={{ display: "flex", gap: 5 }}
            data-tooltip="Available on iOS & Android"
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0DB87A", display: "inline-block", flexShrink: 0 }} />
            Live on App Store
          </div>

          <Link
            href="/playground"
            className="btn-primary"
            style={{ padding: "9px 20px", fontSize: "0.875rem" }}
          >
            Try Playground
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: "none", border: "none",
              cursor: "pointer", padding: 8,
              color: "var(--text-primary)", display: "none",
              borderRadius: 8, transition: "background 0.15s ease",
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        aria-hidden={!menuOpen}
        style={{
          background: "var(--bg-card)",
          borderTop: "1px solid var(--border)",
          padding: menuOpen ? "12px 16px 20px" : "0 16px",
          maxHeight: menuOpen ? 500 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.2s ease",
        }}
      >
        {NAV_LINKS.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "13px 14px",
                fontFamily: "var(--font-body)", fontWeight: active ? 600 : 500,
                fontSize: "1rem",
                color: active ? "var(--accent)" : "var(--text-primary)",
                textDecoration: "none", borderRadius: 10,
                background: active ? "var(--accent-light)" : "transparent",
                marginBottom: 2,
              }}
            >
              {active && (
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
              )}
              {link.label}
            </Link>
          );
        })}
        <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
          <Link
            href="/playground"
            className="btn-primary"
            style={{ flex: 1, justifyContent: "center", padding: "12px 16px" }}
          >
            Try Playground
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
