import type { FeatureVariant } from "@/components/canvas/FeatureScene";

export type FeatureMeta = {
  icon: string;
  title: string;
  slug: string;
  variant: FeatureVariant;
  tag: string;
  desc: string;
};

export const ALL_FEATURES: FeatureMeta[] = [
  { icon: "📎", title: "Universal File Upload", slug: "file-intelligence", variant: "file-intelligence", tag: "Core", desc: "Any format. Any file. Structured health data extracted instantly via AI." },
  { icon: "🔬", title: "Insurance AI", slug: "insurance-ai", variant: "insurance-ai", tag: "AI", desc: "AxisMapper — fine-tuned insurance code intelligence with condition-to-code mapping." },
  { icon: "🤖", title: "On-Device Local LLM", slug: "local-llm", variant: "local-llm", tag: "Edge AI", desc: "Full LLM inference offline. No cloud. No data leaving your device." },
  { icon: "📚", title: "AI Health History", slug: "ai-history", variant: "ai-history", tag: "Core", desc: "Every AI conversation stored, searchable, and contextual." },
  { icon: "🩺", title: "Doctor Appointments", slug: "appointments", variant: "appointments", tag: "Core", desc: "Book and manage doctor-patient appointments inside the app." },
  { icon: "🩸", title: "Nearest Blood Donor", slug: "blood-donor", variant: "blood-donor", tag: "Emergency", desc: "Real-time proximity matching for compatible blood donors." },
  { icon: "👨‍👩‍👧", title: "Family Connect", slug: "family", variant: "family", tag: "Social", desc: "Link family accounts. View health files and AI history across your household." },
  { icon: "🫀", title: "Organ Health Categories", slug: "organs", variant: "organs", tag: "Core", desc: "Visual organ-by-organ health tracking and monitoring." },
  { icon: "🎙️", title: "Voice Wake + AI Talk", slug: "voice", variant: "voice", tag: "AI", desc: "Always-on wake word and natural voice health conversation." },
  { icon: "⌚", title: "Watch Integration", slug: "watch", variant: "watch", tag: "Sensor", desc: "Real-time vitals from your wearable — heart rate, SpO2, steps, and more." },
];

export function relatedFeatures(currentSlug: string, count = 3): FeatureMeta[] {
  const others = ALL_FEATURES.filter((f) => f.slug !== currentSlug);
  // Deterministic "related" picks rather than random, so the page is stable across renders/SSR.
  const startIndex = ALL_FEATURES.findIndex((f) => f.slug === currentSlug);
  const rotated = [...others.slice(startIndex % others.length), ...others.slice(0, startIndex % others.length)];
  return rotated.slice(0, count);
}