"use client"

import { motion } from "motion/react"
import { X, Check } from "lucide-react"

const comparisons = [
  {
    title: "O Falso Botao",
    description: "Elementos visiveis clicaveis usando div sao invisiveis para teclado e leitores de tela.",
    bad: {
      label: "Sem A11Y.md",
      code: `<div onClick={() => navigate('/components')}>
  Explorar Componentes
</div>`
    },
    good: {
      label: "Com A11Y.md",
      code: `<button onClick={() => navigate('/components')}>
  Explorar Componentes
</button>`
    }
  },
  {
    title: "Formularios Silenciosos",
    description: "Leitores de tela navegam entre campos ignorando conteudo ao redor. Sem associacao, o usuario nao sabe o que o campo representa.",
    bad: {
      label: "Sem A11Y.md",
      code: `<label>Email</label>
<input type="email" />`
    },
    good: {
      label: "Com A11Y.md",
      code: `<label htmlFor="email">Email</label>
<input id="email" type="email" />`
    }
  },
  {
    title: "Feedback Invisivel",
    description: "Mensagens de erro aparecem na tela, mas nao sao anunciadas. Para leitores de tela, nada aconteceu.",
    bad: {
      label: "Sem A11Y.md",
      code: `{error && (
  <div className="text-red-700">
    {error}
  </div>
)}`
    },
    good: {
      label: "Com A11Y.md",
      code: `{error && (
  <div role="alert" aria-live="assertive">
    {error}
  </div>
)}`
    }
  }
]

export function CodeComparison() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">IMPACTO PRATICO</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Antes vs Depois
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diferenca entre codigo gerado aleatoriamente e codigo guiado pelo A11Y.md
          </p>
        </motion.div>

        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border overflow-hidden"
            >
              <div className="p-6 bg-card/50 border-b border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {comparison.title}
                </h3>
                <p className="text-muted-foreground">
                  {comparison.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2">
                {/* Bad code */}
                <div className="border-r border-border">
                  <div className="flex items-center gap-2 px-4 py-3 bg-destructive/10 border-b border-border">
                    <X className="w-4 h-4 text-destructive" />
                    <span className="text-sm font-medium text-destructive">{comparison.bad.label}</span>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm font-mono text-muted-foreground">{comparison.bad.code}</code>
                  </pre>
                </div>
                
                {/* Good code */}
                <div>
                  <div className="flex items-center gap-2 px-4 py-3 bg-green-500/10 border-b border-border">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-500">{comparison.good.label}</span>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-sm font-mono text-foreground">{comparison.good.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
