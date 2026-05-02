"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span 
              className="text-2xl font-bold text-primary"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              A11Y.md
            </span>
            <span className="text-muted-foreground text-sm">
              Licenca MIT
            </span>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              Criado por{" "}
              <Link 
                href="https://www.linkedin.com/in/felipecarrico/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Felipe A. Carrico
              </Link>
            </p>
            
            <div className="flex items-center gap-3">
              <Link 
                href="https://github.com/fecarrico/A11Y.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/felipecarrico/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Acessibilidade e a base da experiencia humana excepcional.
          </p>
        </div>
      </div>
    </footer>
  )
}
