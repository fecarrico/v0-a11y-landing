import type { MetadataRoute } from "next"
import { locales } from "@/content/types"
import { SITE_URL } from "@/content/site"

// Necessário com output: export — gera o sitemap.xml estático no build.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${SITE_URL}/${lang}/`,
    lastModified: new Date("2026-07-21"),
    changeFrequency: "monthly",
    priority: lang === "pt-BR" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}/`])),
    },
  }))
}
