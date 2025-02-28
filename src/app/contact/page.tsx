"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AtSign,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { footerLinks } from "../utils/data";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formatando a mensagem para o WhatsApp
      const message = `*Mensagem do portfólio*\n\n*Nome:* ${formState.name}\n*Email:* ${formState.email}\n*Assunto:* ${formState.subject}\n\n*Mensagem:*\n${formState.message}`;

      const encodedMessage = encodeURIComponent(message);

      // Criando o link do WhatsApp com o número e a mensagem
      const whatsappUrl = `https://wa.me/5588981062656?text=${encodedMessage}`;

      // Abrindo o link em uma nova aba
      window.open(whatsappUrl, "_blank");

      setSubmitStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Erro ao enviar mensagem:", error);

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="relative z-10 flex min-h-[87.28vh] w-full flex-col items-center justify-center px-4 py-12 pt-20 sm:mt-0 sm:pt-24">
      <div className="w-full max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Entre em Contato
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Tem um projeto em mente ou quer conversar sobre oportunidades?
            Preencha o formulário abaixo ou use um dos canais de contato direto.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div {...fadeIn} className="order-2 md:order-1">
            <Card className="overflow-hidden rounded-xl border-2 border-primary/30 bg-background/80">
              <CardHeader className="bg-primary/5 pb-6">
                <CardTitle className="text-xl text-primary">
                  Informações de Contato
                </CardTitle>
                <CardDescription>
                  Escolha a forma mais conveniente para entrar em contato.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <AtSign className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        quilbrub@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Localização</h3>
                      <p className="text-sm text-muted-foreground">
                        Acaraú, Ceará - Brasil
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-3 font-medium">Redes Sociais</h3>
                  <div className="flex gap-3">
                    {footerLinks.map((link, index) => (
                      <motion.a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        title={link.label}
                      >
                        <link.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} className="order-1 md:order-2">
            <Card className="rounded-xl border-2 border-primary/30 bg-background/80">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Envie uma Mensagem
                </CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato o mais
                  breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Assunto da mensagem"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Sua mensagem aqui..."
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 rounded-md bg-green-500/10 p-3 text-sm text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span>Mensagem enviada com sucesso!</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 rounded-md bg-red-500/10 p-3 text-sm text-red-600">
                      <AlertCircle className="h-5 w-5" />
                      <span>Erro ao enviar mensagem. Tente novamente.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar Mensagem
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
