import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { mainSkillsEmphasis } from "./utils/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Photo from "@/components/photo";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <main className="mt-[60px] flex h-full min-h-[87.28vh] w-screen flex-col items-center justify-center gap-4 sm:mt-0">
      <section className="flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row">
        <section className="order-2 flex flex-1 flex-col gap-2 text-center sm:gap-3 xl:order-none">
          <h3 className="text-base md:text-lg">
            Desenvolvedor de Software Front-End
          </h3>
          <h1 className="text-2xl md:text-4xl">
            Eu sou <span className="text-primary">Quilion Oliveira</span>
          </h1>
          <h3 className="text-sm md:text-base">
            Um solucionador de problemas em constante evolução!
          </h3>
          <div className="mt-3 flex flex-col items-center gap-3 sm:gap-5">
            <Button
              asChild
              variant="outline"
              className="group flex w-full max-w-[200px] cursor-pointer justify-center rounded-xl border-2 font-bold uppercase"
            >
              <Link
                href="https://drive.google.com/file/d/1O9ArbhnUrxYtwQp8vwr1XLy3VvtNeHb3/view?usp=sharing"
                target="_blank"
                className=""
              >
                <span className="mr-2 text-xs md:text-lg">Currículo</span>
                <Download className="h-5 w-5 group-hover:animate-bounce" />
              </Link>
            </Button>

            <ul className="flex items-center justify-center gap-2 sm:gap-3">
              {mainSkillsEmphasis.map((item, index) => (
                <li key={index} className="group relative">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <item.icon className="h-8 w-8 rounded-xl p-1 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground group-hover:animate-pulse" />
                      </TooltipTrigger>
                      <TooltipContent side="bottom" align="center">
                        <span className="text-xs">{item.name}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="order-1 w-full md:flex-1 xl:order-none">
          <Photo
            imageUrl="/quilion.png"
            imageClasses="h-[150px] w-[150px] mix-blend-normal xl:h-[300px] xl:w-[300px]"
            svgClasses="h-[180px] w-[180px] xl:h-[400px] xl:w-[400px]"
          />
        </section>
      </section>
      <section className="z-20 my-4 flex h-full w-full items-center justify-center bg-background xl:my-2">
        <Stats />
      </section>
    </main>
  );
}
