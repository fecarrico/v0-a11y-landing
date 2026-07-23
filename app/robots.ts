import type { MetadataRoute } from "next"
import { SITE_URL } from "@/content/site"

// Necessário com output: export — gera o robots.txt estático no build.
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
