import { Button } from "@/components/ui/button";
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
import { Separator } from "./ui/separator";

export default function PageHome() {
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
    <div
      id="home"
      className="flex flex-col md:flex-row justify-between items-center w-full h-[85vh]"
    >
      <section className="w-[15%] md:w-[20%] p-4 flex flex-row md:flex-col gap-4 md:gap-6 justify-center items-center order-last md:order-none">
        <Link
          className="hover:scale-125 rounded-lg duration-300 hover:duration-300 hover:bg-primary hover:rounded-lg p-1 hover:text-secondary"
          href="https://github.com/QuiLion7"
          target="_blank"
        >
          <Github className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
        <Link
          className="hover:scale-125 rounded-lg duration-300 hover:duration-300 hover:bg-primary hover:rounded-lg p-1 hover:text-secondary"
          href="https://www.linkedin.com/in/quilion7/"
          target="_blank"
        >
          <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
        <Link
          className="hover:scale-125 rounded-lg duration-300 hover:duration-300 hover:bg-primary hover:rounded-lg p-1 hover:text-secondary"
          href="https://www.instagram.com/quilion7"
          target="_blank"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
        <Link
          className="hover:scale-125 rounded-lg duration-300 hover:duration-300 hover:bg-primary hover:rounded-lg p-1 hover:text-secondary"
          href="https://www.youtube.com/@quilcode"
          target="_blank"
        >
          <Youtube className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
      </section>
      <section className="flex justify-center md:justify-evenly items-center flex-col md:flex-row w-full h-full p-0 md:p-4">
        <div className="w-full h-full flex flex-col justify-start p-2 md:justify-center items-center order-last md:order-first">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-3 uppercase font-bold">
            Quilion Oliveira
          </h1>
          <Separator className="mb-2 w-[90%] bg-primary" />
          <h2 className="text-md font-semibold uppercase md:text-xl lg:text-2xl mb-1 md:mb-2">
            Desenvolvedor Front-End
          </h2>
          <div className="flex flex-wrap gap-2 justify-center items-center text-center text-sm sm:text-base mb-1 md:mb-2">
            {mainSkills.map((skill, index) => (
              <h3
                key={index}
                className="border-1 border-primary bg-primary/40 hover:bg-secondary duration-300 hover:duration-300 rounded-lg px-2 w-auto"
              >
                {skill}
              </h3>
            ))}
          </div>
          <h3 className="text-xs md:text-sm lg:text-base text-center w-[90%]">
            Sou um solucionador de problemas que transforma ideias em Realidade
            e busca evoluir constantemente.
          </h3>
          <Separator className="mt-2 w-[90%] bg-primary" />
          <div className="flex justify-center items-center gap-2 mt-4 w-[250px] md:w-[300px]">
            <Button className="flex justify-center w-full">
              <p className="mr-2 text-xs md:text-sm">Contato</p>
              <MessageSquare
                size={0}
                className="w-[0.8rem] md:w-[1.1rem] h-auto"
              />
            </Button>
            <Button asChild className="flex justify-center w-full">
              <Link
                href="https://drive.google.com/file/d/17VX4F-R15BVL2iY2jiarawZMtIUjGtZF/view?usp=sharing"
                target="_blank"
              >
                <p className="mr-2 text-xs md:text-sm">Currículo</p>
                <Text size={0} className="w-[0.8rem] md:w-[1.1rem] h-auto" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-end p-2 md:items-center w-full md:w-auto h-full">
          <div className="bg-primary hover:bg-secondary-foreground/90 duration-500 hover:duration-500 flex justify-center items-center w-[180px] h-[180px] lg:w-[230px] lg:h-[230px] rounded-xl order-first md:order-last">
            <Image
              src="/profile.png"
              width={0}
              height={0}
              className="md:h-auto w-[80%] hover:w-[100%] duration-500 hover:duration-500"
              sizes="100%"
              priority
              alt="Goku Criança"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
