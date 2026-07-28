// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
// import BackToTop from "@/components/ui/BackToTop";

// const BASE_URL = "https://oceanai-website-kappa.vercel.app";

// export const metadata: Metadata = {
//   metadataBase: new URL(BASE_URL),
//   title: {
//     default: "OceanAI — Personal Health Intelligence",
//     template: "%s · OceanAI",
//   },
//   description:
//     "OceanAI is an AI-powered health platform with on-device LLM, insurance code intelligence (ICD-10, CPT), organ health monitoring, family health graphs, and voice AI — now on iOS and Android.",
//   keywords: [
//     "health AI", "ICD-10 codes", "insurance AI", "on-device LLM",
//     "organ health", "personal health app", "medical AI", "Studio ILLIOS",
//     "AxisMapper", "TrueNorth", "health intelligence", "offline AI",
//   ],
//   authors: [{ name: "Studio ILLIOS", url: "https://github.com/studioilios" }],
//   creator: "Studio ILLIOS",
//   publisher: "Studio ILLIOS",
//   category: "Health & Medical",
//   openGraph: {
//     title: "OceanAI — Personal Health Intelligence",
//     description:
//       "On-device AI health platform with ICD-10 insurance coding, organ health monitoring, voice AI, and family health graphs.",
//     url: BASE_URL,
//     siteName: "OceanAI",
//     type: "website",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "OceanAI — Personal Health Intelligence",
//     description:
//       "On-device AI health platform with ICD-10 insurance coding, organ health, voice AI, and family health graphs.",
//     creator: "@studioilios",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   verification: {
//     // Add your Google / Bing verification tokens here when ready
//     // google: "xxxx",
//   },
// };

// // JSON-LD structured data
// const jsonLd = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "Organization",
//       "@id": `${BASE_URL}/#organization`,
//       name: "Studio ILLIOS",
//       url: BASE_URL,
//       logo: { "@type": "ImageObject", url: `${BASE_URL}/icon.png` },
//       sameAs: [
//         "https://github.com/studioilios",
//         "https://huggingface.co/AmareshHebbar",
//       ],
//       contactPoint: {
//         "@type": "ContactPoint",
//         email: "design@studioilios.com",
//         contactType: "customer support",
//       },
//     },
//     {
//       "@type": "SoftwareApplication",
//       "@id": `${BASE_URL}/#app`,
//       name: "OceanAI",
//       applicationCategory: "HealthApplication",
//       operatingSystem: "iOS, Android",
//       description:
//         "AI-powered personal health platform with on-device LLM, insurance code intelligence, organ health monitoring, voice AI, and family health graphs.",
//       offers: {
//         "@type": "Offer",
//         price: "0",
//         priceCurrency: "INR",
//         availability: "https://schema.org/InStock",
//       },
//       author: { "@id": `${BASE_URL}/#organization` },
//     },
//     {
//       "@type": "WebSite",
//       "@id": `${BASE_URL}/#website`,
//       url: BASE_URL,
//       name: "OceanAI",
//       publisher: { "@id": `${BASE_URL}/#organization` },
//     },
//   ],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         {/* Preconnect for fonts */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

//         {/* DNS prefetch for API */}
//         <link rel="dns-prefetch" href="https://api.anthropic.com" />

//         {/* Theme color */}
//         <meta name="theme-color" content="#0A1628" />
//         <meta name="color-scheme" content="light" />

//         {/* Apple PWA meta */}
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//         <meta name="apple-mobile-web-app-title" content="OceanAI" />

//         {/* JSON-LD */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />
//       </head>
//       <body>
//         <AnnouncementBanner />
//         {/* Push content down when banner is visible */}
//         <div style={{ paddingTop: 40 }}>
//           <Navbar />
//           <main>{children}</main>
//           <Footer />
//         </div>
//         <BackToTop />
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ocean AI — Your Health. Your Language. Your AI.",
  description:
    "A private, on-device health intelligence platform for Bharat — diagnosis, insurance, and care in your own language.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}