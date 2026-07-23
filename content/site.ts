/**
 * URL pública do site, num lugar só.
 *
 * Hospedado no GitHub Pages como project page — serve num subcaminho
 * (`/a11ymd`), não na raiz do domínio. `BASE_PATH` alimenta o `basePath` do
 * Next (para os assets resolverem) e o `SITE_URL` alimenta os metadados
 * (canonical, hreflang, OG, sitemap, robots).
 *
 * Se um dia migrar para domínio próprio, basta esvaziar BASE_PATH e trocar a
 * origem — nenhum outro arquivo referencia a URL diretamente.
 */
export const BASE_PATH = "/a11ymd"

export const SITE_ORIGIN = "https://fecarrico.github.io"

export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`
