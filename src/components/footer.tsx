"use client";

import Link from "next/link";
import { footerLinks } from "@/app/utils/data";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-primary/20 bg-background/80 py-6 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                Q
              </div>
              <span className="text-lg font-bold text-primary">QuilDev</span>
            </Link>
            <p className="mt-2 text-center text-sm text-muted-foreground md:text-left">
              Desenvolvendo Soluções!
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-3">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  title={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Quilion Oliveira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
