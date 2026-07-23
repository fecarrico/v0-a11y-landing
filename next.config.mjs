/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estático: o site é servido pelo GitHub Pages, um host de arquivos
  // estáticos. `next build` gera a pasta `out/` com HTML pronto — o ganho de
  // SSR (conteúdo no HTML servido) é preservado via generateStaticParams.
  output: "export",

  // O Pages serve num subcaminho (fecarrico.github.io/a11ymd). Sem basePath,
  // todos os assets apontariam para a raiz do domínio e a página carregaria
  // quebrada. Precisa casar com o nome do repositório.
  basePath: "/a11ymd",

  // URLs com barra final → o Pages resolve /a11ymd/pt-BR/ para o index.html
  // do diretório de forma confiável.
  trailingSlash: true,

  reactStrictMode: true,
  outputFileTracingRoot: import.meta.dirname,
}

export default nextConfig
