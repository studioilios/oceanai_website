import type { MetadataRoute } from "next";
import { URLS } from "@/lib/constants";

const BASE = URLS.site;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,                           lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/features`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/playground`,                 lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/playground/upload`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/playground/insurance`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/playground/organs`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/playground/voice`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/playground/appointment`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/features/file-intelligence`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/features/insurance-ai`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/features/organs`,            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/features/appointments`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/features/watch`,             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/features/local-llm`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/features/voice`,             lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/features/ai-history`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/features/family`,            lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/features/blood-donor`,       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/subscription`,               lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/who-we-are`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/careers`,                    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/changelog`,                  lastModified: now, changeFrequency: "weekly",  priority: 0.6 },
    { url: `${BASE}/press`,                      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact-us`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE}/bug-report`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${BASE}/privacy-policy`,             lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms-conditions`,           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
