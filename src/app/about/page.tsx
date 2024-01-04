"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Experience from "@/components/experience";
import { Separator } from "@/components/ui/separator";
import Education from "@/components/education";
import Footer from "@/components/footer";

export default function About() {
  const imagesCarousel = [
    "/carousel/image1.jpg",
    "/carousel/image2.jpg",
    "/carousel/image3.jpg",
    "/carousel/image4.png",
    "/carousel/image5.jpg",
    "/carousel/image6.jpg",
    "/carousel/image7.jpg",
    "/carousel/image8.jpg",
    "/carousel/image9.jpg",
    "/carousel/image10.jpg",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );

  return (
    <div className="container flex h-[93.65dvh] flex-col items-center justify-center bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat p-0">
      <div className="p flex h-[93.65dvh] w-full flex-col items-center justify-center overflow-hidden bg-background/80 ">
        <div className="flex h-full min-h-[90%] flex-col items-center justify-center gap-2 px-[2%] sm:gap-4 md:gap-6">
          <section className="flex min-h-[300px] flex-col items-center justify-center gap-4 border-y-2 border-primary p-4 duration-300 hover:rounded-lg hover:bg-background/50 hover:duration-300">
            <h1 className="text-md hidden cursor-default text-center font-bold uppercase duration-300 hover:text-primary hover:duration-300 sm:block md:text-2xl lg:text-3xl">
              Programador Front-End
            </h1>
            <div className="flex h-full w-full flex-col justify-center gap-2">
              <h3 className="cursor-default text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary hover:duration-300 md:text-sm lg:text-base">
                Como Professor de Química no Ensino Médio desde 2015, planejei e
                implementei novas estratégias que incorporam o uso de
                tecnologias da web. Essa iniciativa resultou no aumento do
                engajamento dos alunos e na melhoria dos resultados acadêmicos,
                da instituição de ensino que leciono, que alcançou o 4º melhor
                IDEB do estado do Ceará.
              </h3>
              <h3 className="cursor-default text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary hover:duration-300 md:text-sm lg:text-base">
                Apaixonado por tecnologia, estudo periodicamente para me tornar
                um desenvolvedor de códigos e soluções que acredita na
                importância da colaboração e comunicação eficiente.
              </h3>
              <h3 className="cursor-default text-justify text-[0.68rem] font-semibold duration-300 hover:text-primary hover:duration-300 md:text-sm lg:text-base">
                Busco incansalvemnete a transição de carreira. Acredito que
                tenho potencial para ser um programador diferenciado, assim como
                sou na profissão de professor (habilidades de comunicação verbal
                e escrita temos, o dinamismo e proatividade já viraram rotina, e
                trabalhar em equipe é um hard skills que me orgulho em ter).
              </h3>
              <h3 className="cursor-default text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary hover:duration-300 md:text-sm lg:text-base">
                Sou um professor diferenciado, marido apaixonado, um pai babão e
                grato. Um entusiasta da tecnologia, que é detalhista e
                persistente em alcançar os objetivos. Como um perdedor
                inconformado eu sou um solucionador de problemas.
              </h3>
            </div>
          </section>
          <section className="flex h-auto min-h-[150px] w-full items-center justify-center gap-4">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {imagesCarousel.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div>
                      <Card className="h-full max-h-[300px] w-full overflow-hidden border-2 border-y-primary duration-300 hover:rounded-lg hover:duration-300">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <div className="flex h-full w-full items-center justify-center overflow-hidden ">
                            <Image
                              src={image}
                              width={0}
                              height={0}
                              className=" h-full w-full object-cover opacity-80 duration-300 hover:rounded-lg hover:opacity-100 hover:duration-300"
                              sizes="100%"
                              style={{ objectFit: "cover" }}
                              alt=""
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
