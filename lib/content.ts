export const crisisStats = [
  { value: "212M", label: "Adults with diabetes", source: "IDF Atlas 2024" },
  { value: "54.6M", label: "Adults with heart disease", source: "ICMR / PMC 2024" },
  { value: "220M", label: "Living with hypertension — 15.4% of the population", source: "ICMR 2024" },
  { value: "150M", label: "Adults with untreated mental disorders", source: "NMHS 2016" },
  { value: "128M", label: "Living with chronic kidney disease — 9.3% of India", source: "GBD 2021" },
  { value: "55M+", label: "Living with COPD — 32% of the world's burden", source: "GBD 2021" },
];

export const everySecond = {
  headline: "Every 15 seconds, an Indian dies from a preventable cause.",
  support:
    "5.8 million Indians die each year from non-communicable disease. 56% of rural deaths happen without a doctor ever being seen.",
  preventable: "80% of premature heart disease, stroke, and type 2 diabetes is preventable with early intervention.",
};

export const accessGaps = [
  {
    title: "Specialist shortage",
    body: "A critical shortage of trained specialists forces reliance on general practitioners in smaller cities.",
  },
  {
    title: "Infrastructure gaps",
    body: "Primary health clinics lack advanced diagnostic machinery and immediate care facilities.",
  },
  {
    title: "Travel & cost burden",
    body: "Patients travel hours to metro hubs, incurring heavy out-of-pocket expenses.",
  },
  {
    title: "Limited awareness",
    body: "Minor symptoms are frequently ignored until they escalate into late-stage emergencies.",
  },
];

export const insuranceGap = [
  { value: "400M", label: "Indians have zero health insurance coverage", source: "IRDAI 2023" },
  { value: "63M", label: "Pushed into poverty annually by catastrophic medical bills" },
  { value: "86%", label: "Of rural Indians pay for healthcare entirely out of pocket", source: "National Health Accounts 2021–22" },
  { value: "13%", label: "True health insurance penetration — an 87% open market", source: "IBEF 2024" },
];

export const featureGroups = [
  {
    group: "Direct medical care",
    items: [
      { title: "Online doctor consultations", body: "Instant video calls with certified doctors, in your local language." },
      { title: "Emergency support", body: "Fast access to urgent guidance when it matters most to your family." },
      { title: "Prescription management", body: "Order and track medicines safely to your doorstep." },
    ],
  },
  {
    group: "Smart health tracking",
    items: [
      { title: "Health monitoring", body: "Continuous wellness tracking that keeps clinical care personalized." },
      { title: "Wearable integration", body: "Syncs with Apple Watch, Fitbit, and Xiaomi devices for real-time vitals." },
      { title: "Medicine tracker", body: "Smart alerts and dosage reminders to stay strictly on schedule." },
    ],
  },
  {
    group: "AI & accessibility",
    items: [
      { title: "Agentic AI diagnosis", body: "Multi-agent clinical symptom analysis, paired with expert doctor oversight." },
      { title: "Voice commands", body: "Speak naturally in 12+ regional Indian languages and dialects." },
      { title: "Affordable insurance", body: "AI-powered health plans from ₹99/month with instant digital claims." },
    ],
  },
];

export const techStack = [
  { label: "Mobile app", tech: "React Native · Expo · TypeScript" },
  { label: "Backend API", tech: "Go · Node.js · Supabase" },
  { label: "On-device AI", tech: "MediaPipe C++ · local LLM, zero network required" },
  { label: "Insurance AI", tech: "AxisMapper · Qwen2.5 · ORPO fine-tuning on ICD-10-CM, MS-DRG, CPT" },
  { label: "Voice AI", tech: "Native wake word · STT · TTS" },
  { label: "Orchestration", tech: "TrueNorth — Studio ILLIOS' open-source agent framework" },
];

export const marketFigures = [
  { value: "$19.1B → $84.1B", label: "India digital health TAM, 2025 → 2034, 17.33% CAGR" },
  { value: "$150B", label: "World SAM potential" },
  { value: "$47B", label: "India SOM potential by 2030" },
  { value: "1B+", label: "Smartphone users in India by 2026" },
  { value: "500M+", label: "Verified ABHA digital health IDs already issued" },
];

export const revenueStreams = [
  { num: "01", title: "Subscription", detail: "₹90–300/month AI health companion. 82% gross margin." },
  { num: "02", title: "Consultations", detail: "₹99–299/session, 30% platform fee on live doctor bookings." },
  { num: "03", title: "Lab & clinic", detail: "Commission on diagnostics and medicine delivery via partner pharmacies." },
  { num: "04", title: "Insurance", detail: "Share of micro-insurance policies from ₹99/month, DPDPA 2023 compliant." },
];

export const unitEconomics = [
  { value: "₹300/mo", label: "Target ARPU" },
  { value: "₹180", label: "Blended CAC" },
  { value: "₹2,680", label: "Projected LTV" },
  { value: "14.9x", label: "LTV : CAC" },
];

export const gtmPhases = [
  { phase: "Phase 1 — Y1", title: "India pilot", items: ["5–10 hospital pilot deployments", "Bengaluru, Mumbai, Delhi", "Focus: TB, diabetes, preventive screening"] },
  { phase: "Phase 2 — Y2–Y3", title: "Scale across India", items: ["100+ hospitals and clinics", "B2C mobile subscription launch", "50K+ paying users by Y2"] },
  { phase: "Phase 3 — Y3–Y5", title: "International expansion", items: ["Southeast Asia & Middle East", "Enterprise SaaS for hospitals & insurers", "1M+ users globally"] },
];

export const team = [
  { name: "Arjun", role: "Co-founder, CEO", detail: "8 yr experience" },
  { name: "Amaresh", role: "Co-founder, CTO", detail: "AI engineering lead" },
  { name: "Dr. Bharathi", role: "Medical lead", detail: "30 yrs, India Army — leads 20 healthcare specialists" },
  { name: "Karthik", role: "Research, PhD in AI", detail: "10 yr experience, MIT Bengaluru" },
  { name: "Sachin", role: "Research, PhD in AI", detail: "8 yr experience, researcher in Norway" },
  { name: "Harsha", role: "COO, Finance", detail: "13 yr experience" },
];

export const demoAccess = {
  email: "test.oceanai@gmail.com",
  password: "test1234",
  website: "https://oceanai.health",
  ios: "https://apps.apple.com/in/app/ocean-ai-health/id6765589909",
  android: "https://play.google.com/store/apps/details?id=com.ilios.oceanai",
};

export const navItems = [
  { id: "hero", label: "Ocean AI" },
  { id: "crisis", label: "The crisis" },
  { id: "access", label: "The gap" },
  { id: "features", label: "Platform" },
  { id: "tech", label: "Technology" },
  { id: "market", label: "Market" },
  { id: "business", label: "Business" },
  { id: "team", label: "Team" },
  { id: "cta", label: "Access" },
];