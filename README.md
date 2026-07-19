# OceanAI Website

> **OceanAI — Personal Health Intelligence**  
> Production website for the OceanAI iOS and Android app, built by [Studio ILLIOS](https://github.com/studioilios).

[![Live](https://img.shields.io/badge/Live-Vercel-black?logo=vercel)](https://oceanai-website-kappa.vercel.app)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)

---

## Quick start

```bash
git clone https://github.com/studioilios/oceanai_website
cd oceanai_website
npm install
cp .env.example .env.local   # add your ANTHROPIC_API_KEY
npm run dev                   # http://localhost:3000
```

**Required env var for AI playground:**
```
ANTHROPIC_API_KEY=sk-ant-xxxx
```

---

## All routes (28 total)

| Route | Type | Description |
|---|---|---|
| `/` | Marketing | Home — hero, features, tech stack, investor section |
| `/features` | Marketing | All 11 features overview |
| `/features/file-intelligence` | Feature | Smart file upload deep-dive |
| `/features/insurance-ai` | Feature | AxisMapper / ICD-10 / CPT / DRG |
| `/features/organs` | Feature | Organ health categories |
| `/features/appointments` | Feature | Doctor appointment booking |
| `/features/watch` | Feature | Watch integration |
| `/features/local-llm` | Feature | On-device LLM |
| `/features/voice` | Feature | Voice AI + wake word |
| `/features/ai-history` | Feature | AI conversation history |
| `/features/family` | Feature | Family Connect |
| `/features/blood-donor` | Feature | Nearest blood donor |
| `/playground` | Demo | Interactive playground hub |
| `/playground/upload` | Demo | Live file extraction with Claude AI |
| `/playground/insurance` | Demo | ICD-10 / CPT / DRG chat |
| `/playground/organs` | Demo | Interactive organ body map |
| `/playground/voice` | Demo | Voice AI (Web Speech API) |
| `/playground/appointment` | Demo | Doctor booking wizard |
| `/subscription` | Utility | Pricing — Free / Pro / Family |
| `/who-we-are` | Utility | Studio ILLIOS story + values |
| `/careers` | Utility | Open roles → nextlife@studioilios.org |
| `/changelog` | Utility | Version history — built in public |
| `/press` | Utility | Media kit, brand colors, key messages |
| `/contact-us` | Utility | Contact form → nextlife@studioilios.org |
| `/bug-report` | Utility | Bug report form → nextlife@studioilios.org |
| `/privacy-policy` | Legal | DPDPA compliant privacy policy |
| `/terms-conditions` | Legal | Terms with medical disclaimer |
| `/404` | System | Branded not-found page |

**Redirects (legacy aliases):**
`/privacy` → `/privacy-policy` · `/terms` → `/terms-conditions` · `/about` → `/who-we-are` · `/contact` → `/contact-us` · `/bugs` → `/bug-report` · `/pricing` → `/subscription` · `/releases` → `/changelog` · `/media` → `/press`

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 strict |
| Styling | CSS custom properties + Tailwind v4 |
| AI Playground | Anthropic Claude API `claude-sonnet-4-6` via Edge route |
| Animations | CSS keyframes + `useInView` (zero external deps) |
| Rate limiting | Edge middleware (20 req/min/IP) |
| Icons | SVG inline — zero icon library dependencies |
| Fonts | Plus Jakarta Sans · Inter · JetBrains Mono (Google Fonts) |
| Deployment | Vercel (auto-deploy from `main`) |
| OG images | Next.js `ImageResponse` (edge-generated) |
| SEO | `sitemap.ts`, `robots.ts`, JSON-LD, canonical meta |
| PWA | `manifest.ts`, apple-icon, theme-color |

---

## Deployment checklist

Before going live, verify each of these:

- [ ] `ANTHROPIC_API_KEY` set in Vercel → Project → Settings → Environment Variables (Production + Preview + Development)
- [ ] App Store link updated in `lib/constants.ts` → `URLS.appStore`
- [ ] Google Play link updated in `lib/constants.ts` → `URLS.googlePlay`
- [ ] `NEXT_PUBLIC_SITE_URL` set to your real domain (not the Vercel preview URL)
- [ ] JSON-LD `BASE_URL` in `app/layout.tsx` updated to match real domain
- [ ] Google Search Console verification token added in `layout.tsx` metadata `verification` field
- [ ] Custom domain configured in Vercel project settings
- [ ] Run `npm run type-check` — zero TypeScript errors
- [ ] Run `npm run lint` — zero ESLint errors
- [ ] Run `npm run build` — clean build, no warnings

**Lighthouse targets (production):**

| Metric | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |

---

## Project structure

```
app/
  page.tsx                      Home
  layout.tsx                    Root layout · JSON-LD · meta · PWA
  globals.css                   Design system tokens + all utilities
  not-found.tsx                 Branded 404
  loading.tsx                   Sonar pulse route loader
  error.tsx                     Global error boundary
  sitemap.ts                    Auto-generated /sitemap.xml
  robots.ts                     /robots.txt
  manifest.ts                   PWA /manifest.webmanifest
  opengraph-image.tsx           Dynamic OG image (1200×630)
  twitter-image.tsx             Twitter card image (1200×600)
  icon.tsx                      32×32 favicon
  apple-icon.tsx                180×180 Apple touch icon
  api/claude/route.ts           Edge AI route · 3 modes · rate-limited
  features/[slug]/page.tsx      10 feature pages
  playground/[demo]/page.tsx    5 interactive demos
  changelog/page.tsx            Release history
  press/page.tsx                Media kit
  subscription/page.tsx         Pricing
  who-we-are/page.tsx           Studio ILLIOS
  careers/page.tsx              Open roles
  contact-us/page.tsx           Contact form
  bug-report/page.tsx           Bug report form
  privacy-policy/page.tsx       Legal
  terms-conditions/page.tsx     Legal

components/
  layout/Navbar.tsx             Fixed · active route · mobile menu · a11y
  layout/Footer.tsx             Full footer · all links
  home/{Hero,FeaturesGrid,TechStack,InvestorSection,DownloadCTA}.tsx
  playground/PlaygroundShell.tsx Sidebar + panel layout
  ui/AnnouncementBanner.tsx     Top bar · dismissible
  ui/BackToTop.tsx              Scroll-to-top
  ui/AnimatedSection.tsx        useInView fade-up wrapper
  ui/PageHero.tsx               Shared page hero

hooks/
  useInView.ts                  Intersection Observer · fadeUpStyle · fadeInStyle

lib/
  constants.ts                  Single source of truth · URLs · emails · features

middleware.ts                   Rate limiting · method guard · maintenance mode
next.config.ts                  Performance · security headers · redirects
postcss.config.js               Tailwind v4 compilation
eslint.config.js                Next.js 15 flat ESLint config
tsconfig.json                   Strict TypeScript · path aliases
.env.example                    All required env vars documented
.gitignore                      Complete Next.js gitignore
```

---

## Design system

Tokens in `app/globals.css`:

```css
--accent: #1A6BFF         /* Ocean blue — primary CTA */
--accent-emerald: #0DB87A /* Health green — positive indicators */
--bg-deep: #0A1628        /* Dark navy — dark sections */
--bg-primary: #F7F9FC     /* Off-white background */
--font-display: 'Plus Jakarta Sans'
--font-body: 'Inter'
--font-mono: 'JetBrains Mono'
```

---

## Contact

**Studio ILLIOS** · Built in India 🇮🇳  
nextlife@studioilios.org  
[GitHub](https://github.com/studioilios) · [HuggingFace](https://huggingface.co/AmareshHebbar)
