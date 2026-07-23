import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { notFound } from "next/navigation"
import { MotionProvider } from "@/components/motion-provider"
import { getDictionary, product } from "@/content"
import { htmlLang, isLocale, locales, type Locale } from "@/content/types"
import { BASE_PATH, SITE_URL } from "@/content/site"
import "../globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" })

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)

  // URLs absolutas: sob subcaminho (/a11ymd), um caminho iniciado por "/"
  // resolvido contra o metadataBase perderia o subcaminho. Por isso são
  // strings absolutas completas. Os favicons levam BASE_PATH explícito porque
  // o basePath do Next não é aplicado às URLs de ícones dos metadados.
  return {
    metadataBase: new URL(`${SITE_URL}/`),
    title: dict.meta.title,
    description: dict.meta.description,
    authors: [{ name: product.author.name, url: product.author.linkedin }],
    alternates: {
      canonical: `${SITE_URL}/${lang}/`,
      // SC 3.1.1 e boa prática de SEO: cada idioma tem URL própria e declarada.
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `${SITE_URL}/${l}/`])),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}/`,
      siteName: "A11Y.md",
      locale: lang === "pt-BR" ? "pt_BR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    icons: {
      icon: [
        { url: `${BASE_PATH}/icon-light-32x32.png`, media: "(prefers-color-scheme: light)" },
        { url: `${BASE_PATH}/icon-dark-32x32.png`, media: "(prefers-color-scheme: dark)" },
        { url: `${BASE_PATH}/icon.svg`, type: "image/svg+xml" },
      ],
      apple: `${BASE_PATH}/apple-icon.png`,
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const locale = lang as Locale

  return (
    // suppressHydrationWarning: o script inline troca as classes do <html>
    // (`no-js` sai, `intro` pode entrar) ANTES de o React hidratar — a
    // divergência é intencional e restrita a este elemento.
    <html
      lang={htmlLang[locale]}
      className={`${geist.variable} ${geistMono.variable} no-js`}
      suppressHydrationWarning
    >
      <head>
        {/*
          A11Y: as animações de entrada partem de opacity:0. Se o JavaScript não
          rodar, o conteúdo ficaria invisível — Principle Zero trata isso como
          quebrado. A classe `no-js` neutraliza a animação via CSS e sai daqui,
          antes da pintura, quando há JS.

          `intro` liga a abertura ACCESSIBILITY.md → A11Y.md: só com JS, sem
          prefers-reduced-motion e uma vez por sessão (troca de idioma é
          navegação — sem o guard, a intro replayaria a cada troca).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js');try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&!sessionStorage.getItem('a11ymd-intro')){document.documentElement.classList.add('intro');sessionStorage.setItem('a11ymd-intro','1')}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-background font-sans antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
