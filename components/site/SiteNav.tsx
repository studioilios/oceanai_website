"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";
import { CTAButton, Icon } from "./primitives";

// Real site routes. Secondary pages (changelog, press, privacy, terms,
// bug-report) live in the footer.
const SITE_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/playground", label: "Playground" },
  { href: "/subscription", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [story, setStory] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setStory(false);
  };

  const anchors = navItems.slice(1);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "bg-white/85 shadow-[0_1px_0_rgba(0,35,33,0.06)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="oc-container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-lg font-extrabold tracking-tight text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-aqua">
            <Icon name="wave" size={18} />
          </span>
          Ocean AI
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {SITE_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                  pathname === l.href ? "bg-aqua-soft text-aqua-deep" : "text-ink/70 hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          {isHome && (
            <li className="relative">
              <button
                onClick={() => setStory((v) => !v)}
                aria-expanded={story}
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
              >
                On this page <Icon name="chevron" size={14} />
              </button>
              {story && (
                <ul className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-black/5 bg-white p-2 shadow-[0_20px_40px_-16px_rgba(0,35,33,0.3)]">
                  {anchors.map((a) => (
                    <li key={a.id}>
                      <button
                        onClick={() => goTo(a.id)}
                        className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-ink/80 hover:bg-aqua-soft"
                      >
                        {a.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CTAButton href={isHome ? "#cta" : "/#cta"}>Get access</CTAButton>
          </div>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-black/5 bg-white lg:hidden">
          <div className="oc-container flex flex-col gap-1 py-4">
            {SITE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base font-semibold ${
                  pathname === l.href ? "bg-aqua-soft text-aqua-deep" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {isHome && (
              <>
                <p className="px-4 pb-1 pt-4 text-xs font-bold uppercase tracking-widest text-ink/40">On this page</p>
                {anchors.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => goTo(a.id)}
                    className="rounded-2xl px-4 py-2.5 text-left text-sm font-medium text-ink/80"
                  >
                    {a.label}
                  </button>
                ))}
              </>
            )}
            <div className="pt-3" onClick={() => setOpen(false)}>
              <CTAButton href={isHome ? "#cta" : "/#cta"} block>
                Get access
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
