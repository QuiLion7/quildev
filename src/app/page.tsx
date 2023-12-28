import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Instagram,
  Linkedin,
  MessageSquare,
  Text,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const mainSkills = [
    "JavaScript",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "TailwindCSS",
    "NodeJS",
    "Firebase",
  ];

  return (
    <div className="container flex h-[91.57vh] flex-col items-center justify-center p-0">
      <div className="flex h-full w-full flex-col items-center justify-between md:flex-row">
        <section className="order-last flex w-full flex-row items-center justify-center gap-4 p-4 md:order-none md:h-full md:w-[20%] md:flex-col md:gap-6">
          <Link
            className="rounded-lg p-1 duration-300 hover:scale-125 hover:rounded-lg hover:bg-primary hover:text-secondary hover:duration-300"
            href="https://github.com/QuiLion7"
            target="_blank"
          >
            <Github className="h-5 w-5 md:h-6 md:w-6" />
          </Link>
          <Link
            className="rounded-lg p-1 duration-300 hover:scale-125 hover:rounded-lg hover:bg-primary hover:text-secondary hover:duration-300"
            href="https://www.linkedin.com/in/quilion7/"
            target="_blank"
          >
            <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
          </Link>
          <Link
            className="rounded-lg p-1 duration-300 hover:scale-125 hover:rounded-lg hover:bg-primary hover:text-secondary hover:duration-300"
            href="https://www.instagram.com/quilion7"
            target="_blank"
          >
            <Instagram className="h-5 w-5 md:h-6 md:w-6" />
          </Link>
          <Link
            className="rounded-lg p-1 duration-300 hover:scale-125 hover:rounded-lg hover:bg-primary hover:text-secondary hover:duration-300"
            href="https://www.youtube.com/@quilcode"
            target="_blank"
          >
            <Youtube className="h-5 w-5 md:h-6 md:w-6" />
          </Link>
        </section>
        <section className="flex h-full w-full flex-col items-center justify-center p-0 md:flex-row md:justify-evenly md:p-4">
          <div className="order-last flex h-full w-full flex-col items-center justify-start gap-2 p-2 md:order-first md:justify-center">
            <h1 className="text-2xl font-bold uppercase md:text-3xl lg:text-4xl">
              Quilion Oliveira
            </h1>
            <Separator className="mb-2 bg-primary" />
            <div className="xs:gap-2 flex h-auto flex-col items-center justify-center gap-3">
              <h2 className="text-lg font-semibold uppercase md:text-xl lg:text-2xl">
                Desenvolvedor Front-End
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-2 text-center text-xs md:text-sm lg:text-base">
                {mainSkills.map((skill, index) => (
                  <h3
                    key={index}
                    className="border-1 w-auto rounded-lg border-primary bg-primary/40 px-2 duration-300 hover:bg-secondary hover:duration-300"
                  >
                    {skill}
                  </h3>
                ))}
              </div>
              <h3 className="text-center text-xs md:text-sm lg:text-base">
                Sou um solucionador de problemas que transforma ideias em
                Realidade e busca evoluir constantemente.
              </h3>
            </div>
            <Separator className="mt-2 bg-primary" />
            <div className="mt-4 flex w-[250px] items-center justify-center gap-2 md:w-[300px]">
              <Button className="flex w-full justify-center">
                <p className="mr-2 text-xs md:text-sm">Contato</p>
                <MessageSquare
                  size={0}
                  className="h-auto w-[0.8rem] md:w-[1.1rem]"
                />
              </Button>
              <Button asChild className="flex w-full justify-center">
                <Link
                  href="https://drive.google.com/file/d/17VX4F-R15BVL2iY2jiarawZMtIUjGtZF/view?usp=sharing"
                  target="_blank"
                >
                  <p className="mr-2 text-xs md:text-sm">Currículo</p>
                  <Text size={0} className="h-auto w-[0.8rem] md:w-[1.1rem]" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center p-2 md:w-auto">
            <div className="order-first flex h-[220px] w-[220px] items-center justify-center rounded-xl bg-primary duration-500 hover:bg-secondary-foreground/90 hover:duration-500  md:order-last md:h-[250px] md:w-[250px]">
              <Image
                src="/profile.png"
                width={0}
                height={0}
                className="w-[80%] duration-500 hover:w-[100%] hover:duration-500 md:h-auto"
                sizes="100%"
                priority
                alt="Criança programando"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
