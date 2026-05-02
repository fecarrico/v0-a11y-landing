"use client"

import { motion } from "motion/react"
import { Zap, BookOpen, FileText, Code } from "lucide-react"

const sections = [
  {
    icon: Zap,
    title: "Centro de Comando",
    file: "A11Y.md",
    description: "Onde residem a Matriz de Severidade, o framework comportamental para IAs, regras estritas para SPA e o Protocolo de Componentes Complexos."
  },
  {
    icon: BookOpen,
    title: "Biblioteca de Suporte",
    file: "references/",
    description: "A 'Deep Web' de solucoes. Guias de engenharia rapida para UX e Percepcao, UI Interativa, Fluxos e Temporizacao, e Governanca."
  },
  {
    icon: FileText,
    title: "Templates",
    file: "templates/",
    description: "Modelos de fallback e garantias de conclusao: REPORT.md para checklist final e EXCEPTIONS.md para log estruturado de divida tecnica."
  },
  {
    icon: Code,
    title: "Exemplos",
    file: "EXAMPLES.md",
    description: "Exemplos praticos de erros reais encontrados em sistemas gerados com IA, junto com suas correcoes sugeridas pelo A11Y.md."
  }
]

export function StructureSection() {
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
          <span className="text-primary font-mono text-sm mb-4 block">ESTRUTURA</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explorando a Base de Conhecimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizamos as solucoes para atuar como documentacao viva
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {section.title}
                    </h3>
                    <code className="text-xs px-2 py-1 rounded bg-muted text-primary font-mono">
                      {section.file}
                    </code>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
