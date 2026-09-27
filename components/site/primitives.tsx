import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/* ── Icons (single stroke-based set, 24px grid) ─────────────── */
const PATHS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M7 17 17 7M8 7h9v9" />,
  video: <><rect x="3" y="6" width="13" height="12" rx="3" /><path d="m16 10 5-3v10l-5-3" /></>,
  alert: <><path d="M12 3 2.5 20h19L12 3Z" /><path d="M12 10v4M12 17.5v.01" /></>,
  pill: <><rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-35 12 12)" /><path d="m9.5 9.5 5 5" /></>,
  heart: <path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9Z" />,
  watch: <><rect x="7" y="6" width="10" height="12" rx="3" /><path d="M9 6l.6-3h4.8L15 6M9 18l.6 3h4.8l.6-3" /></>,
  bell: <><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Z" /><path d="M10 21h4" /></>,
  brain: <><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 3 4 3 3 0 0 0 5 1V5a2 2 0 0 0-3-1Z" /><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-3 4 3 3 0 0 1-5 1" /></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
  shield: <><path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></>,
  building: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h2M13 8h2M9 12h2M13 12h2M10 21v-4h4v4" /></>,
  map: <><path d="M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  wallet: <><rect x="3" y="6" width="18" height="14" rx="3" /><path d="M16 13h2M3 10h18M6 6l9-3v3" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  phone: <><rect x="7" y="2.5" width="10" height="19" rx="3" /><path d="M11 18.5h2" /></>,
  server: <><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>,
  wave: <path d="M3 12h3l2-6 4 12 3-9 2 3h4" />,
  trend: <path d="m3 17 6-6 4 4 8-9M15 6h6v6" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5S15.5 16.5 15.5 20M16 4.7a3.5 3.5 0 0 1 0 6.6M18 14.6c2.2.6 3.5 2.3 3.5 5.4" /></>,
  coin: <><circle cx="12" cy="12" r="9" /><path d="M9 9.5c0-1.4 1.3-2 3-2s3 .8 3 2-1.3 1.6-3 2-3 .8-3 2.2 1.3 2 3 2 3-.6 3-2" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3" /><path d="M7.5 15h9" /></>,
  code: <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 8 9 6 9-6" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  play: <path d="M7 4v16l13-8L7 4Z" />,
} satisfies Record<string, React.ReactNode>;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 20, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}

export function IconDot({ name, size = 18, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <span className={`oc-icon-dot ${className}`}>
      <Icon name={name} size={size} />
    </span>
  );
}

/* ── Badge ──────────────────────────────────────────────────── */
export function Badge({ children, dot = true }: { children: React.ReactNode; dot?: boolean }) {
  return (
    <span className="oc-badge">
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-aqua" />}
      {children}
    </span>
  );
}

/* ── CTAButton ──────────────────────────────────────────────── */
type Variant = "primary" | "secondary" | "dark" | "ghost-light";

export function CTAButton({
  href,
  children,
  variant = "primary",
  arrow = true,
  external = false,
  block = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  block?: boolean;
}) {
  const cls = `oc-btn oc-btn-${variant} ${block ? "oc-btn-block" : ""}`;
  const inner = (
    <>
      {children}
      {arrow && <Icon name={external ? "arrowUp" : "arrow"} size={16} />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  if (href.startsWith("#") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ── SectionHeading ─────────────────────────────────────────── */
export function SectionHeading({
  eyebrow,
  children,
  lead,
  align = "center",
}: {
  eyebrow: string;
  children: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 max-w-3xl ${a}`}>
      <Reveal>
        <Badge>{eyebrow}</Badge>
      </Reveal>
      <Reveal delayMs={80}>
        <h2 className="oc-h2">{children}</h2>
      </Reveal>
      {lead && (
        <Reveal delayMs={160}>
          <p className="oc-muted text-base md:text-lg leading-relaxed max-w-2xl">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ── FloatingCard ───────────────────────────────────────────── */
export function FloatingCard({
  icon,
  title,
  value,
  className = "",
  delay = 0,
}: {
  icon: IconName;
  title: string;
  value: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`oc-pop absolute z-20 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      <div
        className="oc-float flex items-center gap-3 rounded-2xl border border-black/5 bg-white/95 px-4 py-3 shadow-[0_18px_40px_-14px_rgba(0,35,33,0.35)] backdrop-blur"
        style={{ animationDelay: `${delay}ms` }}
      >
        <IconDot name={icon} size={16} className="!h-9 !w-9" />
        <div className="leading-tight">
          <div className="text-[0.7rem] font-medium text-[#5b6f6e]">{title}</div>
          <div className="text-sm font-bold text-ink">{value}</div>
        </div>
      </div>
    </div>
  );
}

/* ── DecorativeBackground ───────────────────────────────────── */
export function DecorativeBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="oc-blob -right-24 -top-24 h-80 w-80 bg-aqua/20" />
      <div className="oc-blob -left-24 bottom-0 h-72 w-72 bg-aqua/15" />
      <div className="oc-dots absolute -top-6 right-6 h-56 w-56 opacity-70" />
      <div className="oc-dots absolute -left-10 bottom-6 hidden h-48 w-48 opacity-50 md:block" />
      <div className="oc-ring -right-32 top-1/3 hidden h-[26rem] w-[26rem] md:block" />
    </div>
  );
}
