"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Download, Github, Linkedin } from "lucide-react";
import { TypeEffect } from "@/components/type-effect";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-[87.28vh] w-full flex-col items-center justify-center px-4 py-12 pt-20 sm:mt-0 sm:pt-24">
      <div className="w-full max-w-6xl">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <div className="mb-2 inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary">
              <Code className="mr-1 h-4 w-4" />
              Desenvolvedor Front-end
            </div>

            <h1 className="mb-3 mt-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Quilion
              </span>
            </h1>

            <div className="mb-6 h-12 text-xl font-medium text-muted-foreground sm:text-2xl">
              <TypeEffect
                texts={[
                  "Desenvolvedor Front-end",
                  "Desenvolvedor React",
                  "Desenvolvedor Next.js",
                  "Desenvolvedor TypeScript",
                ]}
                speed={50}
              />
            </div>

            <p className="mb-8 max-w-md text-muted-foreground">
              Desenvolvo soluções através de linhas de código, crio interfaces
              modernas e responsivas utilizando as melhores tecnologias do
              mercado.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  Ver Projetos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/files/curriculo.pdf" target="_blank" download>
                  Baixar CV
                  <Download className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="https://github.com/QuiLion7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/quilion-oliveira-224156235/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>

              <div className="h-6 border-l border-primary/20"></div>

              <span className="text-sm text-muted-foreground">
                quilbrub@gmail.com
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]">
              <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl"></div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -right-4 -top-4 h-20 w-20 rounded-xl border border-primary/30 bg-background/80 backdrop-blur-sm"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="absolute bottom-12 right-0 flex h-16 w-16 items-center justify-center rounded-lg border border-primary/30 bg-background/80 backdrop-blur-sm"
              >
                <Image
                  src="/icons/react.svg"
                  alt="React"
                  width={30}
                  height={30}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="absolute left-0 top-20 flex h-14 w-14 items-center justify-center rounded-lg border border-primary/30 bg-background/80 backdrop-blur-sm"
              >
                <Image
                  src="/icons/typescript.svg"
                  alt="TypeScript"
                  width={25}
                  height={25}
                />
              </motion.div>

              <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-primary/30 bg-background/50 p-2 backdrop-blur-sm">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/quilion.png"
                    alt="Quilion Oliveira"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/400?text=Quilion";
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 rounded-xl border border-primary/30 bg-background/50 p-6 backdrop-blur-sm"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">
            Tecnologias que mais utilizo
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { name: "React", icon: "/icons/react.svg" },
              { name: "Next.js", icon: "/icons/nextjs.svg" },
              { name: "TypeScript", icon: "/icons/typescript.svg" },
              { name: "JavaScript", icon: "/icons/javascript.svg" },
              { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-primary/30 bg-background/80 p-3 transition-all duration-300 hover:border-primary hover:shadow-md">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className={`h-10 w-10 ${
                      tech.name === "Next.js" ? "dark:invert" : ""
                    }`}
                  />
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
