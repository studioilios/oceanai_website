import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { Badge, CTAButton, DecorativeBackground, Icon } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Careers — OceanAI · Studio ILLIOS",
  description:
    "Join Studio ILLIOS. We're building AI-native health infrastructure. Small team, high ownership, serious technical problems.",
};

const OPEN_ROLES = [
  {
    title: "React Native Engineer",
    type: "Full-time · Remote",
    team: "Mobile",
    desc: "Build and own core product features in our Expo/React Native app. Experience with native modules (C++/JNI bridge) is a strong plus.",
    skills: ["React Native", "Expo", "TypeScript", "Performance optimization"],
  },
  {
    title: "ML Engineer — Health Models",
    type: "Full-time · Remote",
    team: "AI",
    desc: "Fine-tune and evaluate models on medical datasets. Work directly on AxisMapper (ICD-10/CPT) and our next-generation health intelligence layer.",
    skills: ["PyTorch", "ORPO / DPO fine-tuning", "Hugging Face", "Medical NLP"],
  },
  {
    title: "Backend Engineer — Go",
    type: "Full-time · Remote",
    team: "Backend",
    desc: "Own the Go microservices layer, Supabase integration, and real-time health data pipeline. High autonomy, production responsibility from day one.",
    skills: ["Go", "Supabase", "PostgreSQL", "REST / gRPC"],
  },
  {
    title: "Product Designer",
    type: "Full-time · Remote",
    team: "Design",
    desc: "Define the visual and interaction language of OceanAI across mobile, web, and playground. Own the design system end to end.",
    skills: ["Figma", "Mobile UI", "Design systems", "User research"],
  },
];

const PERKS = [
  { num: "Small team", label: "High ownership, no bureaucracy" },
  { num: "Remote-first", label: "Work from anywhere in India" },
  { num: "Real AI", label: "Not wrappers — actual fine-tuned models" },
];

export default function CareersPage() {
  return (
    <div className="oc-home min-h-screen flex flex-col bg-white">
      <SiteNav />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40">
          <DecorativeBackground />
          <div className="oc-container relative">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="oc-rise">
                <Badge>We&apos;re hiring</Badge>
              </div>

              <h1 className="oc-h1 oc-rise mt-6" style={{ animationDelay: "100ms" }}>
                Build the future of
                <br />
                <span className="oc-accent">personal health AI.</span>
              </h1>

              <p
                className="oc-muted oc-rise mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ animationDelay: "200ms" }}
              >
                Studio ILLIOS is a small, focused team building AI-native health infrastructure. We ship fast, own what
                we build, and work on problems that actually matter. India-based, globally distributed.
              </p>

              {/* Highlights strip */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
                {PERKS.map((s) => (
                  <div key={s.num} className="oc-card p-5 text-center">
                    <div className="text-lg font-bold text-ink font-sans">{s.num}</div>
                    <div className="mt-1 text-xs text-ink/70 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section className="oc-section oc-tint py-16 md:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="oc-dots absolute -left-10 top-10 h-64 w-64 opacity-50" />
            <div className="oc-blob -right-24 bottom-10 h-72 w-72 bg-aqua/20" />
          </div>

          <div className="oc-container relative max-w-4xl">
            <div className="text-center mb-12">
              <span className="oc-badge">Open roles</span>
              <h2 className="oc-h2 mt-3 text-ink">We&apos;re looking for builders.</h2>
              <p className="oc-muted mt-2 text-base">
                Explore our current openings. If you have extreme conviction and speed, we want to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {OPEN_ROLES.map((role) => (
                <div
                  key={role.title}
                  className="oc-card p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="inline-block rounded-full bg-ink px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-aqua">
                          {role.team}
                        </span>
                        <span className="text-xs font-semibold text-ink/60">{role.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-ink">{role.title}</h3>
                    </div>

                    <a
                      href={`mailto:design@studioilios.com?subject=Application: ${encodeURIComponent(role.title)}`}
                      className="oc-btn oc-btn-primary self-start sm:self-auto text-sm"
                    >
                      <span>Apply now</span>
                      <Icon name="arrow" size={16} />
                    </a>
                  </div>

                  <p className="oc-muted text-sm leading-relaxed mb-6">{role.desc}</p>

                  <div className="border-t border-black/5 pt-4 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink/40 mr-1">Skills:</span>
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-aqua-soft px-3 py-1 text-xs font-semibold text-aqua-deep border border-aqua/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* General Application Card */}
            <div className="mt-12 rounded-[2rem] bg-ink text-white p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="oc-blob -right-10 -bottom-10 h-48 w-48 bg-aqua/25" />
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">Don&apos;t see your role?</h3>
                <p className="text-sm text-white/70 max-w-md">
                  Send us what you build, your GitHub, or projects you&apos;re proud of. If it&apos;s impressive, we&apos;ll
                  make room.
                </p>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <CTAButton
                  href="mailto:design@studioilios.com?subject=General Application — OceanAI"
                  external
                >
                  Send a general application
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}