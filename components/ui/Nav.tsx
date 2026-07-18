"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";

// Real site pages — shown in the nav on every route. Keep this list short;
// secondary pages (changelog, press, privacy, terms, bug-report) live in the
// footer, not here.
const SITE_LINKS = [
  { href: "/features", label: "Product" },
  { href: "/playground", label: "Playground" },
  { href: "/subscription", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  // Story-section highlighting only makes sense on the home page — the
  // section ids in navItems don't exist as DOM nodes on any other route.
  useEffect(() => {
    if (!isHome) return;
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  const goToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between gap-6 px-6 md:px-10 py-5">
      <Link href="/" className="font-display font-semibold text-lg tracking-tight text-foam shrink-0">
        Ocean AI
      </Link>

      {/* Story anchors — home page only, sits between logo and site links */}
      {isHome && (
        <ul className="hidden lg:flex items-center gap-6 overflow-x-auto">
          {navItems.slice(1).map((item) => (
            <li key={item.id} className="shrink-0">
              <button
                onClick={() => goToSection(item.id)}
                className={`text-xs uppercase tracking-[0.14em] transition-colors ${
                  active === item.id ? "text-current" : "text-mist hover:text-foam"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        className="md:hidden text-foam/80 text-sm border border-haze rounded-full px-4 py-2 shrink-0"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>

      {/* Real site navigation — every route, right-aligned */}
      <ul className="hidden md:flex items-center gap-6 shrink-0">
        {SITE_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-xs uppercase tracking-[0.14em] transition-colors ${
                pathname === link.href ? "text-current" : "text-mist hover:text-foam"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {open && (
        <ul className="md:hidden absolute top-16 right-6 panel rounded-2xl p-4 flex flex-col gap-3 min-w-[180px]">
          {isHome &&
            navItems.slice(1).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => goToSection(item.id)}
                  className={`text-sm text-left ${active === item.id ? "text-current" : "text-mist"}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          {isHome && <li className="border-t border-haze my-1" />}
          {SITE_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm ${pathname === link.href ? "text-current" : "text-mist"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}