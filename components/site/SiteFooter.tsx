import Link from "next/link";
import { BRAND, CONTACT, URLS } from "@/lib/constants";
import { Icon } from "./primitives";

const explore = [
  { href: "/features", label: "Features" },
  { href: "/playground", label: "Playground" },
  { href: "/subscription", label: "Pricing" },
  { href: "/changelog", label: "Changelog" },
];
const company = [
  { href: "/about", label: "About" },
  { href: "/who-we-are", label: "Who we are" },
  { href: "/careers", label: "Careers" },
  { href: "/press", label: "Press" },
  { href: "/contact-us", label: "Contact" },
];
const legal = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms-conditions", label: "Terms & conditions" },
  { href: "/bug-report", label: "Report a bug" },
];

function Col({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-white">{title}</h4>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-aqua">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="oc-dark relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="oc-dots absolute -right-10 top-0 h-56 w-56 opacity-25" />
      </div>
      <div className="oc-container relative py-14 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-lg font-extrabold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-aqua text-ink">
                <Icon name="wave" size={18} />
              </span>
              Ocean AI
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {BRAND.description}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={`mailto:${CONTACT.primary}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-aqua hover:text-aqua"
              >
                <Icon name="mail" size={17} />
              </a>
              <a
                href={URLS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-aqua hover:text-aqua"
              >
                <Icon name="code" size={17} />
              </a>
              <a
                href={URLS.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HuggingFace"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-aqua hover:text-aqua"
              >
                <Icon name="brain" size={17} />
              </a>
            </div>
          </div>
          <Col title="Explore" links={explore} />
          <Col title="Company" links={company} />
          <div className="col-span-2 md:col-span-1">
            <Col title="Legal" links={legal} />
            <a
              href={`mailto:${CONTACT.primary}`}
              className="mt-5 inline-block break-all text-sm font-semibold text-aqua hover:underline"
            >
              {CONTACT.primary}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© 2026 {BRAND.studio}. All rights reserved.</p>
          <p>Ocean AI — Dive into a healthier future.</p>
        </div>
      </div>
    </footer>
  );
}
