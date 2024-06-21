"use client";

import React, { ComponentType, SVGProps, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFirebase,
  TbBrandMongodb,
  TbBrandReact,
  TbBrandBootstrap,
} from "react-icons/tb";
import { Code, Search } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ProjectIcon = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
interface Project {
  title: string;
  images: string[];
  liveLink: string;
  repoLink: string;
  isPublic: boolean;
  description: string;
  technologies: ProjectIcon[];
}

export default function Projects() {
  const myProjects: Project[] = [
    {
      title: "Quilvacation",
      images: ["/projects/quilvacation1.png", "/projects/quilvacation2.png"],
      liveLink: "https://quilvacation.vercel.app",
      repoLink: "https://github.com/QuiLion7/project-quilvacation",
      isPublic: true,
      description:
        "Plataforma para anunciar ofertas e para os clientes personalizarem suas férias.",
      technologies: [
        { name: "Next", icon: TbBrandNextjs },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
        { name: "Firebase", icon: TbBrandFirebase },
      ],
    },
    {
      title: "RQ fotografia",
      images: ["/projects/rqfotografia1.png", "/projects/rqfotografia2.png"],
      liveLink: "https://rq-fotografia.vercel.app",
      repoLink: "https://github.com/QuiLion7/rq-fotografia",
      isPublic: true,
      description:
        "Portfólio moderno e atraente que incorpora animações da biblioteca Framer Motion.",
      technologies: [
        { name: "React", icon: TbBrandReact },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
      ],
    },

    {
      title: "QuilCursos",
      images: ["/projects/quilcursos1.png", "/projects/quilcursos2.png"],
      liveLink: "https://quilcursos.vercel.app",
      repoLink: "https://github.com/yourusername/quilcursos",
      isPublic: true,
      description:
        "Uma plataforma de cursos em vídeo online que podem ser gratuitos ou pagos.",
      technologies: [
        { name: "Next", icon: TbBrandNextjs },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
        { name: "MongoDB", icon: TbBrandMongodb },
      ],
    },
    {
      title: "Portfolio Desenvolvedor",
      images: ["/projects/portifolio1.png", "/projects/portifolio2.png"],
      liveLink: "https://quilportfolio.vercel.app",
      repoLink: "https://github.com/QuiLion7/myportfolio",
      isPublic: true,
      description:
        "Portfólio atraente, moderno e com animações da biblioteca Framer Motion.",
      technologies: [
        { name: "Next", icon: TbBrandNextjs },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
      ],
    },
    {
      title: "Projeto MiniBlog",
      images: ["/projects/miniblog1.png", "/projects/miniblog2.png"],
      liveLink: "https://projetominiblog.vercel.app",
      repoLink: "https://github.com/QuiLion7/projetominiblog",
      isPublic: true,
      description:
        "MiniBlog para compartilhamento de práticas exitosas entre professores.",
      technologies: [
        { name: "React", icon: TbBrandReact },
        { name: "Bootstrap", icon: TbBrandBootstrap },
        { name: "Firebase", icon: TbBrandFirebase },
      ],
    },
  ];

  return (
    <main className="mb-0 mt-2 flex h-full min-h-[87.28vh] w-screen flex-col items-center justify-center sm:mt-[60px]">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-full w-full max-w-screen-2xl flex-col items-center justify-center px-4 pt-12"
      >
        <section className="grid h-full w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {myProjects.map((project, index) => (
            <Card key={index} className="rounded-xl border-2 border-primary">
              <CardHeader className="p-3">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      quality={100}
                      layout="responsive"
                      loading="lazy"
                      width={500}
                      height={500}
                      className="cursor-pointer rounded-xl"
                    />
                  </DialogTrigger>
                  <DialogContent className="w-full">
                    <DialogHeader className="flex flex-col items-center justify-center">
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        quality={100}
                        layout="responsive"
                        loading="lazy"
                        width={500}
                        height={500}
                        className="rounded-xl"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
              <CardFooter className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 pt-0 sm:flex-row sm:gap-0 sm:pt-3">
                <div className="flex w-full flex-wrap items-center justify-center gap-1 sm:justify-start md:gap-2">
                  {project.technologies.map((technology, index) => (
                    <TooltipProvider key={index} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger>
                          <technology.icon className="h-5 w-5 md:h-7 md:w-7" />
                        </TooltipTrigger>
                        <TooltipContent side="bottom" align="center">
                          <span className="text-xs">{technology.name}</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
                <div className="flex w-full items-center justify-center gap-2 px-2 sm:justify-end">
                  <Button className="w-[80px] rounded-xl text-xs md:w-[100px] md:text-sm">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center justify-center gap-1"
                    >
                      <Search className="h-4 w-4 md:h-5 md:w-5" />
                      <p>Site</p>
                    </Link>
                  </Button>
                  <Button className="w-[80px] rounded-xl text-xs md:w-[100px] md:text-sm">
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      className="flex items-center justify-center gap-1"
                    >
                      <Code className="h-4 w-4 md:h-5 md:w-5" />
                      <p>Código</p>
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </section>
      </motion.section>
    </main>
  );
}
