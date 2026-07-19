import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#1A6BFF",
        "accent-hover": "#1458D6",
        "accent-light": "#EBF1FF",
        "accent-emerald": "#0DB87A",
        "bg-primary": "#F7F9FC",
        "bg-card": "#FFFFFF",
        "bg-subtle": "#EEF5FD",
        "bg-deep": "#0A1628",
        "text-primary": "#0D1B2E",
        "text-secondary": "#3D5166",
        "text-muted": "#7A8FA6",
        border: "#DDE5EF",
           abyss: "#050B14",      // deepest background — below all light
        depth: "#0A1628",      // primary background — mid-ocean
        surface: "#0F2038",    // panel background — upper water
        current: "#1A6BFF",    // primary accent — arterial blue
        pulse: "#0DB87A",      // secondary accent — vital teal
        alarm: "#FF6B5B",      // crisis coral — used sparingly, for stat urgency
        foam: "#EAF2FB",       // primary text on dark
        mist: "rgba(234,242,251,0.56)", // secondary text on dark
        haze: "rgba(234,242,251,0.14)",
      },
      fontFamily: {
  display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
        letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "28px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(13,27,46,0.06), 0 0 1px rgba(13,27,46,0.08)",
        elevated: "0 8px 32px rgba(13,27,46,0.10), 0 0 1px rgba(13,27,46,0.06)",
        float: "0 20px 60px rgba(13,27,46,0.14), 0 0 1px rgba(13,27,46,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
