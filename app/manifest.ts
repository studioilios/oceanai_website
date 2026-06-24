import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OceanAI — Personal Health Intelligence",
    short_name: "OceanAI",
    description:
      "AI-powered health platform with on-device LLM, insurance code intelligence, organ health, and voice AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F9FC",
    theme_color: "#0A1628",
    orientation: "portrait",
    categories: ["health", "medical", "productivity"],
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    screenshots: [],
    shortcuts: [
      {
        name: "Playground",
        short_name: "Playground",
        description: "Try OceanAI features interactively",
        url: "/playground",
      },
      {
        name: "Insurance AI",
        short_name: "Insurance AI",
        description: "Look up ICD-10, CPT, and DRG codes",
        url: "/playground/insurance",
      },
    ],
  };
}
