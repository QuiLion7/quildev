"use client";

import * as z from "zod";
import Footer from "@/components/footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "O seu nome deve ter pelo menos 3 caracteres.",
    })
    .max(30, {
      message: "O seu nome não deve ter mais de 30 caracteres.",
    }),
  email: z
    .string({
      required_error: "Escreva seu E-mail",
    })
    .email(),
  message: z
    .string()
    .max(160, {
      message: "Sua mensagem não deve ter mais 160 caracteres.",
    })
    .min(7, {
      message: "Sua mensagem deve ter pelo menos 7 caracteres.",
    }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function Contact() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ProfileFormValues) {
    const messageWithUserInfo = `Nome: ${data.name}\nE-mail: ${data.email}\n\nMensagem: ${data.message}`;

    const whatsappUrl = `https://wa.me/5588981062656?text=${encodeURIComponent(
      messageWithUserInfo,
    )}`;

    window.open(whatsappUrl, "_blank");

    form.reset();
  }

  return (
    <div className="flex h-full min-h-[87.28vh] w-screen flex-col items-center justify-center bg-[url('/contact.jpg')] bg-cover bg-center bg-no-repeat">
      <div className=" flex h-full min-h-[87.28vh] w-full flex-col items-center justify-between overflow-y-auto bg-background/80 ">
        <div className="flex h-auto min-h-[84.2dvh] w-full items-center justify-center px-[2%] pt-2">
          <div className="flex h-full w-full max-w-[700px] items-center justify-center rounded-lg border-2 border-primary p-4 duration-300 hover:bg-background/50">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu e-mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte-me um pouco da solução que deseja..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full rounded-lg uppercase">
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
