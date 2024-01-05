"use client";
import * as React from "react";
import Image from "next/image";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="flex h-full min-h-[93.65dvh] w-full flex-col items-center justify-center bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat">
      <div className=" flex h-full min-h-[93.65dvh] w-full flex-col items-center justify-between overflow-y-auto bg-background/80 ">
        <div className="flex h-auto min-h-[84.285dvh] w-full flex-col items-center justify-center gap-2 px-[2%] pt-2 sm:gap-4 md:gap-6">
          <section className="group relative flex h-auto w-full flex-col items-center justify-center gap-2 border-y-2 border-primary p-2 duration-300 hover:rounded-lg hover:bg-background/50 sm:flex-row">
            <div className="w-full">
              <h1 className="text-md flex cursor-default justify-center text-center font-bold uppercase duration-300 hover:text-primary md:text-2xl lg:text-3xl">
                DESENVOLVEDOR Front-End
              </h1>
              <div className="flex h-full w-full flex-col justify-center gap-2">
                <h2 className="w-full cursor-default text-center text-sm font-semibold uppercase duration-300 hover:text-primary md:text-lg lg:text-xl">
                  Quem sou eu?!
                </h2>
                <h3 className="cursor-default text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary md:text-sm lg:text-base">
                  Sou um desenvolvedor de códigos e soluções que acredita na
                  importância da colaboração e comunicação efetiva. Estudo
                  periodicamente, já que tecnologia é uma das minhas paixões.
                </h3>
                <h3 className="cursor-default text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary md:text-sm lg:text-base">
                  Habilidades de comunicação verbal e escrita temos, o dinamismo
                  e proatividade já viraram rotina, e trabalhar em equipe é um
                  hard skills que me orgulho em ter.
                </h3>
                <h3 className="cursor-default text-justify text-[0.68rem] font-semibold duration-300 hover:text-primary md:text-sm lg:text-base"></h3>
                <h3 className="cursor-default text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary md:text-sm lg:text-base">
                  Professor diferenciado, marido apaixonado, pai babão e grato.
                  Um entusiasta da tecnologia, que é detalhista e persistente em
                  alcançar os objetivos. Como um perdedor inconformado eu sou um
                  solucionador de problemas.
                </h3>
              </div>
            </div>
            <Image
              src="/quilabout1.png"
              width={0}
              height={0}
              className="hidden w-auto rounded-lg duration-300 group-hover:bg-primary/5 sm:block sm:h-[250px] sm:scale-[105.5%] md:h-[350px] md:scale-[103.7%] lg:h-[400px]"
              sizes="100%"
              priority
              alt="Quilion"
            />
            <Image
              src="/quilprofile.png"
              width={0}
              height={0}
              className="block h-[100px] w-auto scale-[113%] rounded-lg duration-300 group-hover:bg-primary/5 sm:hidden"
              sizes="100%"
              priority
              alt="Quilion"
            />
          </section>
          <section className="grid h-full w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-2">
            <div className="h-full w-full border-y-2 border-primary p-2 duration-300 hover:rounded-lg hover:bg-background/50">
              <Experience />
            </div>
            <div className="h-full w-full border-y-2 border-primary p-2 duration-300 hover:rounded-lg hover:bg-background/50">
              <Education />
            </div>
          </section>
        </div>
        <div className="z-10 flex h-auto min-h-[9.635dvh] w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
