import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Text } from "lucide-react";
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
    <div className="flex h-full min-h-[93.65dvh] w-full flex-col items-center justify-center bg-[url('/home.jpg')] bg-cover bg-center bg-no-repeat text-center">
      <div className="flex h-full min-h-[93.65dvh] w-full flex-col items-center justify-center overflow-y-auto bg-background/80">
        <div className="relative flex h-full flex-col items-center justify-center px-[2%]">
          <section className="flex h-full min-h-[90%] items-center justify-center ">
            <div className="flex flex-1 flex-col items-center justify-center gap-2 border-y-2 border-primary p-4 duration-300 hover:rounded-lg hover:bg-background/50 sm:gap-3 md:gap-4">
              <h1 className="cursor-default text-2xl font-bold uppercase duration-300 hover:text-primary md:text-3xl lg:text-4xl">
                Quilion Oliveira
              </h1>
              <h2 className="cursor-default text-lg font-semibold uppercase duration-300 hover:text-primary md:text-xl lg:text-2xl">
                Desenvolvedor Front-End
              </h2>
              <div className="flex cursor-default flex-wrap items-center justify-center gap-2 text-center text-xs md:text-sm lg:text-base">
                {mainSkills.map((skill, index) => (
                  <h3
                    key={index}
                    className="border-1 w-auto cursor-default rounded-lg border-primary bg-primary/40 px-2 font-bold duration-300 hover:bg-secondary-foreground hover:text-secondary"
                  >
                    {skill}
                  </h3>
                ))}
              </div>
              <h3 className="cursor-default text-center text-xs font-semibold duration-300 hover:text-primary md:text-sm lg:text-base">
                Sou um solucionador de problemas que transforma ideias em
                Realidade e busca evoluir constantemente.
              </h3>
              <div className="flex w-full items-center justify-center gap-2">
                <Button className="flex w-full max-w-[250px] justify-center rounded-lg font-bold uppercase">
                  <p className="mr-2 text-xs md:text-sm">Contato</p>
                  <MessageSquare
                    size={0}
                    className="h-auto w-[0.8rem] md:w-[1.1rem]"
                  />
                </Button>
                <Button
                  asChild
                  className="flex w-full max-w-[250px] justify-center rounded-lg font-bold uppercase"
                >
                  <Link
                    href="https://drive.google.com/file/d/17VX4F-R15BVL2iY2jiarawZMtIUjGtZF/view?usp=sharing"
                    target="_blank"
                  >
                    <p className="mr-2 text-xs md:text-sm">Currículo</p>
                    <Text
                      size={0}
                      className="h-auto w-[0.8rem] md:w-[1.1rem]"
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <div className="absolute bottom-0 flex h-auto min-h-[10%] w-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
