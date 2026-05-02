"use client"

import { motion } from "motion/react"
import { User, Bot, Shield } from "lucide-react"

const pillars = [
  {
    icon: User,
    title: "Human-Centric",
    subtitle: "Focado no Humano",
    description: "Estritamente projetado para garantir autonomia real aos usuarios com deficiencia."
  },
  {
    icon: Bot,
    title: "AI-Ready",
    subtitle: "Pronto para IA",
    description: "Diretrizes deterministicas especificamente criadas para ancorar o comportamento de agentes de codigo, eliminando 'invencoes' (alucinacoes tecnicas)."
  },
  {
    icon: Shield,
    title: "Certifiable",
    subtitle: "Certificavel",
    description: "Cada diretriz no A11Y.md e estritamente mapeada para criterios WCAG 2.2, permitindo rastreabilidade direta para auditorias externas."
  }
]

export function ParadigmSection() {
  return (
    <section className="py-24 px-4 relative bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">O PARADIGMA</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tres Pilares Fundamentais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa filosofia dita que acessibilidade web nunca deve ser um &quot;polimento posterior&quot;, 
            mas uma precondicao tecnica para uso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-xl border border-border bg-background hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-1 font-mono">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
