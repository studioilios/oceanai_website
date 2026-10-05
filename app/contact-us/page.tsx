"use client";

import { useState } from "react";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { Badge, DecorativeBackground, Icon } from "@/components/site/primitives";

const INQUIRY_TYPES = [
  { value: "investor", label: "💼 Investor inquiry" },
  { value: "partnership", label: "🤝 Partnership" },
  { value: "press", label: "📰 Press / media" },
  { value: "careers", label: "💡 Careers" },
  { value: "feedback", label: "💬 Product feedback" },
  { value: "other", label: "📩 Other" },
];

const INFO_ITEMS = [
  {
    icon: "💼",
    label: "Investor inquiries",
    desc: "We're raising. If you're building the future of health AI, we'd like to meet.",
    email: "design@studioilios.com",
  },
  {
    icon: "📰",
    label: "Press & media",
    desc: "For interviews, quotes, or coverage of OceanAI and Studio ILLIOS.",
    email: "design@studioilios.com",
  },
  {
    icon: "🤝",
    label: "Partnerships",
    desc: "Healthcare providers, insurance companies, or tech integrations.",
    email: "design@studioilios.com",
  },
  {
    icon: "💡",
    label: "Careers",
    desc: "See open roles or send a general application.",
    email: "design@studioilios.com",
  },
];

export default function ContactUsPage() {
  const [type, setType] = useState("investor");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const selectedLabel = INQUIRY_TYPES.find((t) => t.value === type)?.label ?? "";
  const subject = `[${selectedLabel.replace(/^.* /, "")}] ${name || "Contact form"}`;
  const body = `Name: ${name}\nEmail: ${email}\nType: ${selectedLabel}\n\n${message}`;
  const mailtoHref = `mailto:design@studioilios.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="oc-home min-h-screen flex flex-col bg-white">
      <SiteNav />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-12 pt-28 md:pb-16 md:pt-40">
          <DecorativeBackground />
          <div className="oc-container relative">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="oc-rise">
                <Badge>Get in touch</Badge>
              </div>

              <h1 className="oc-h1 oc-rise mt-6" style={{ animationDelay: "100ms" }}>
                We read <span className="oc-accent">every email.</span>
              </h1>

              <p
                className="oc-muted oc-rise mt-5 max-w-xl text-base leading-relaxed md:text-lg"
                style={{ animationDelay: "200ms" }}
              >
                Investors, press, partners, or just someone building in health AI — we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="oc-section oc-tint pt-8 pb-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="oc-dots absolute -left-10 top-10 h-64 w-64 opacity-50" />
            <div className="oc-blob -right-24 bottom-10 h-72 w-72 bg-aqua/20" />
          </div>

          <div className="oc-container relative max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
              {/* Form Card */}
              <div className="oc-card p-8 md:p-10 shadow-lg bg-white">
                <h2 className="text-2xl font-bold text-ink mb-6">Send a message</h2>

                {/* Inquiry Type Chips */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/60 mb-2.5">
                    What&apos;s this about?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INQUIRY_TYPES.map((t) => {
                      const isActive = type === t.value;
                      return (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setType(t.value)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                            isActive
                              ? "bg-ink text-aqua shadow-sm scale-105"
                              : "bg-aqua-soft text-ink/80 hover:bg-aqua/20 hover:text-ink"
                          }`}
                        >
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name Field */}
                <div className="mb-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/60 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Anika Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-ink text-sm outline-none transition-all focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/60 mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="anika@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-ink text-sm outline-none transition-all focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/60 mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you're thinking..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-ink text-sm outline-none transition-all resize-y focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  />
                </div>

                {/* Submit button */}
                <a
                  href={mailtoHref}
                  className="oc-btn oc-btn-primary w-full shadow-md text-base font-bold py-3.5"
                >
                  <Icon name="mail" size={18} />
                  <span>Send via email</span>
                </a>
                <p className="text-center text-xs text-ink/50 mt-3">
                  Opens your email client with everything pre-filled.
                </p>
              </div>

              {/* Info Sidebar Cards */}
              <div className="flex flex-col gap-4">
                {INFO_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="oc-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-aqua-soft text-xl border border-aqua/20">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="font-bold text-ink text-base">{item.label}</h3>
                        <p className="oc-muted text-xs leading-relaxed mt-1 mb-2">{item.desc}</p>
                        <a
                          href={`mailto:${item.email}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-aqua-deep hover:underline"
                        >
                          <span>{item.email}</span>
                          <Icon name="arrow" size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}