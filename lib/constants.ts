// ─────────────────────────────────────────────────────────────────
// OceanAI — Site Constants
// Single source of truth. Import from here everywhere.
// Never hardcode URLs, emails, or brand strings in page files.
// ─────────────────────────────────────────────────────────────────

// ── Brand ────────────────────────────────────────────────────────
export const BRAND = {
  name: "OceanAI",
  studio: "Studio ILLIOS",
  tagline: "Personal Health Intelligence",
  description:
    "AI-powered health platform with on-device LLM, insurance code intelligence, organ health monitoring, voice AI, and family health graphs.",
  founded: "2024",
  country: "India 🇮🇳",
} as const;

// ── Contact ───────────────────────────────────────────────────────
export const CONTACT = {
  primary: "design@studioilios.com",
  investor: "design@studioilios.com",
  press: "design@studioilios.com",
  support: "design@studioilios.com",
  bugReport: "design@studioilios.com",
} as const;

// ── URLs ─────────────────────────────────────────────────────────
export const URLS = {
  site: "https://oceanai-website-kappa.vercel.app",
  appStore: "https://apps.apple.com",           // Replace with real App Store link
  googlePlay: "https://play.google.com",         // Replace with real Play Store link
  github: "https://github.com/studioilios",
  huggingface: "https://huggingface.co/AmareshHebbar",
  axiomapper: "https://huggingface.co/AmareshHebbar/AxisMapper",
  truenorth: "https://github.com/studioilios/truenorth",
} as const;

// ── Internal routes ───────────────────────────────────────────────
export const ROUTES = {
  home: "/",
  features: "/features",
  playground: "/playground",
  subscription: "/subscription",
  whoWeAre: "/who-we-are",
  careers: "/careers",
  contactUs: "/contact-us",
  bugReport: "/bug-report",
  privacyPolicy: "/privacy-policy",
  termsConditions: "/terms-conditions",
  changelog: "/changelog",
  press: "/press",
  // Feature deep-dives
  fileIntelligence: "/features/file-intelligence",
  insuranceAI: "/features/insurance-ai",
  organs: "/features/organs",
  appointments: "/features/appointments",
  watch: "/features/watch",
  localLLM: "/features/local-llm",
  voice: "/features/voice",
  aiHistory: "/features/ai-history",
  family: "/features/family",
  bloodDonor: "/features/blood-donor",
  // Playground demos
  uploadDemo: "/playground/upload",
  insuranceDemo: "/playground/insurance",
  organsDemo: "/playground/organs",
  voiceDemo: "/playground/voice",
  appointmentDemo: "/playground/appointment",
} as const;

// ── Pricing ───────────────────────────────────────────────────────
export const PRICING = {
  free: { price: 0, currency: "INR", label: "Free" },
  pro: { price: 299, currency: "INR", label: "OceanAI Pro", period: "month" },
  family: { price: 599, currency: "INR", label: "Family", period: "month" },
} as const;

// ── Features list ─────────────────────────────────────────────────
export const FEATURES = [
  { slug: "file-intelligence",  label: "File Intelligence",   emoji: "📎" },
  { slug: "insurance-ai",       label: "Insurance AI",        emoji: "🔬" },
  { slug: "organs",             label: "Organ Health",        emoji: "🫀" },
  { slug: "appointments",       label: "Doctor Appointments", emoji: "🩺" },
  { slug: "watch",              label: "Watch Integration",   emoji: "⌚" },
  { slug: "local-llm",          label: "On-Device LLM",       emoji: "🤖" },
  { slug: "voice",              label: "Voice AI",            emoji: "🎙️" },
  { slug: "ai-history",         label: "AI History",          emoji: "📚" },
  { slug: "family",             label: "Family Connect",      emoji: "👨‍👩‍👧" },
  { slug: "blood-donor",        label: "Blood Donor Finder",  emoji: "🩸" },
] as const;

// ── Model ─────────────────────────────────────────────────────────
export const AI_MODEL = "claude-sonnet-4-6";
export const MAX_TOKENS = 1000;
