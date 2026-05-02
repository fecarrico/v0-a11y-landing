"use client"

import { motion } from "motion/react"
import { AlertTriangle, Zap, Scale } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Acessibilidade Reativa",
    description: "Hoje, a acessibilidade e tratada como a ultima etapa: projeta, desenvolve (ou a IA desenvolve), depois valida. O erro ja escalou antes de abrirmos o validador."
  },
  {
    icon: Zap,
    title: "IA Improvisando",
    description: "Sem contexto, a IA improvisa. E o improviso em acessibilidade e a receita para a exclusao. A IA vai preferir o caminho visualmente bonito em detrimento do funcionalmente inclusivo."
  },
  {
    icon: Scale,
    title: "Escalando Exclusao",
    description: "Estamos escalando a exclusao digital mais rapido do que nunca. Quem fica de fora quando a IA funciona, mas nao e acessivel?"
  }
]

export function ProblemSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O Problema
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            De um lado, certificacao e conformidade legal — necessaria, mas lenta. 
            Do outro, vibe coding e IAs gerando interfaces em velocidade absurda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
