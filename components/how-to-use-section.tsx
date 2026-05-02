"use client"

import { motion } from "motion/react"
import { Download, FileCode, MessageSquare } from "lucide-react"
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal"

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Baixe as Regras",
    description: "Copie o conteudo da pasta /docs/pt-BR para a raiz do repositorio do seu projeto."
  },
  {
    number: "02",
    icon: FileCode,
    title: "Injete no Prompt",
    description: "Adicione ao seu arquivo de regras globais (.cursorrules, GEMINI.md ou outro sistema de contexto)."
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Use como Revisor",
    description: "Chame o A11Y.md a qualquer momento direto no seu agente para analisar codigo ou telas do Figma."
  }
]

export function HowToUseSection() {
  return (
    <section id="como-usar" className="py-24 px-4 relative bg-card/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">QUICK START</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Como Usar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece em menos de 2 minutos. Ler sobre acessibilidade e o primeiro passo, 
            injetar no seu codigo e o objetivo real.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-xl border border-border bg-background hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-primary">{step.number}</span>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Terminal className="max-h-[500px]">
              <TypingAnimation>&gt; Adicione ao seu .cursorrules:</TypingAnimation>

              <AnimatedSpan delay={1500} className="text-muted-foreground">
                <span className="text-primary">&quot;Ao desenvolver interfaces, siga</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2000} className="text-muted-foreground">
                <span className="text-primary">estritamente as regras de desenvolvimento</span>
              </AnimatedSpan>

              <AnimatedSpan delay={2500} className="text-muted-foreground">
                <span className="text-primary">definidas no arquivo A11Y.md.&quot;</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3500} className="text-green-500">
                <span>✔ Contexto de acessibilidade carregado</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4000} className="text-green-500">
                <span>✔ Regras WCAG 2.2 AA ativadas</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4500} className="text-green-500">
                <span>✔ Validacao semantica habilitada</span>
              </AnimatedSpan>

              <TypingAnimation delay={5500} className="text-muted-foreground">
                Seu ambiente agora sabe que acessibilidade e requisito basico.
              </TypingAnimation>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
