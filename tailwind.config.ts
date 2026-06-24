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
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
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
