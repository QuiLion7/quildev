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
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  return (
    <div className="container flex h-full flex-col items-center justify-center px-[2%] py-3">
      <div className="flex min-h-[85dvh] w-full flex-col items-center justify-center gap-2  md:flex-row">
        <section className="flex h-full w-full flex-1 items-end justify-center gap-4">
          <Carousel
            plugins={[plugin.current]}
            className="max-h-[400px] w-full max-w-[600px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {imagesCarousel.map((image, index) => (
                <CarouselItem key={index}>
                  <div>
                    <Card className="h-auto max-h-[400px] max-w-[600px]">
                      <CardContent className="flex aspect-square items-center justify-center p-0">
                        <div className="flex h-full w-full items-center justify-center overflow-hidden">
                          <Image
                            src={image}
                            width={0}
                            height={0}
                            className="h-full w-full object-cover"
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section className="flex h-full w-auto flex-1 items-center justify-center gap-4 px-2">
          <div className="flex-wap flex flex-col justify-center gap-2 text-justify text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2 text-xl uppercase">
              <p>Programador</p>
              <p>Professor</p>
            </div>
            <p>
              Como Professor de Química no Ensino Médio desde 2015, planejei e
              implementei novas estratégias que incorporam o uso de tecnologias
              da web. Essa iniciativa resultou no aumento do engajamento dos
              alunos e na melhoria dos resultados acadêmicos, da instituição de
              ensino que leciono, que alcançou o 4º melhor IDEB do estado do
              Ceará.
            </p>
            <p>
              Apaixonado por tecnologia, estudo periodicamente para me tornar um
              desenvolvedor de códigos e soluções que acredita na importância da
              colaboração e comunicação eficiente.
            </p>
            <p>
              Sou um professor diferenciado, marido apaixonado, um pai babão e
              grato. Um entusiasta da tecnologia, que é detalhista e persistente
              em alcançar os objetivos. Como um perdedor inconformado eu sou um
              solucionador de problemas.
            </p>
          </div>
        </section>
      </div>
      <Separator className="my-5 h-[2px] bg-primary" />
      <Experience />
      <div className="mt-20"></div>
    </div>
  );
}
