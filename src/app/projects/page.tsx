"use client";

import React, { ComponentType, SVGProps, useState, useEffect } from "react";
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
  SiJest,
  SiReacthookform,
  SiShadcnui,
  SiTensorflow,
  SiGooglegemini,
  SiClerk,
} from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFirebase,
  TbBrandReact,
  TbBrandBootstrap,
  TbBrandRadixUi,
  TbApi,
  TbDatabaseImport,
} from "react-icons/tb";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { MdAnimation } from "react-icons/md";
import { Code, Search, ExternalLink, Github, Filter } from "lucide-react";
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
import { SiReactquery } from "react-icons/si";
import { BsWebcam } from "react-icons/bs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
      title: "Quiltreina",
      images: ["/projects/quiltreina1.png", "/projects/quiltreina2.png"],
      liveLink: "https://quiltreina.vercel.app/",
      repoLink: "https://github.com/QuiLion7/quiltreina",
      isPublic: true,
      description:
        "Usando IA generativa, assistente por voz e dados em tempo real para criar treinos e dietas personalizados, com base no perfil físico e metas de saúde do usuário.",
      technologies: [
        { name: "Next", icon: TbBrandNextjs },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
        { name: "ShadcnUi  ", icon: SiShadcnui },
        { name: "Clerk", icon: SiClerk },
        { name: "Convex ", icon: TbDatabaseImport },
        { name: "Vapi.ai", icon: MdOutlineRecordVoiceOver },
        { name: "Gemini AI", icon: SiGooglegemini },
      ],
    },
    {
      title: "Chuck-norris-jokes",
      images: [
        "/projects/chuck-norris-jokes1.png",
        "/projects/chuck-norris-jokes2.png",
      ],
      liveLink: "https://chuck-norris-jokes-xi.vercel.app/",
      repoLink: "https://github.com/QuiLion7/chuck-norris-jokes",
      isPublic: true,
      description: "Consumindo API de piadas Chuck Norris",
      technologies: [
        { name: "Next", icon: TbBrandNextjs },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
        { name: "ShadcnUi  ", icon: SiShadcnui },
        { name: "Tanstack Query", icon: SiReactquery },
        { name: "Jest", icon: SiJest },
        { name: "API", icon: TbApi },
      ],
    },
    {
      title: "Quildetection",
      images: ["/projects/quildetection1.png", "/projects/quildetection2.png"],
      liveLink: "https://quildetection.vercel.app/",
      repoLink: "https://github.com/QuiLion7/quildetection",
      isPublic: true,
      description: "Sistema de detecção de movimento em tempo real",
      technologies: [
        { name: "Next", icon: TbBrandNextjs },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
        { name: "ShadcnUi  ", icon: SiShadcnui },
        { name: "Tensorflow ", icon: SiTensorflow },
        { name: "React Webcam", icon: BsWebcam },
      ],
    },
    {
      title: "Gerenciando Oak",
      images: ["/projects/gerenciando1.png", "/projects/gerenciando2.png"],
      liveLink: "https://gerenciando-oak.vercel.app/",
      repoLink: "https://github.com/QuiLion7/gerenciando-oak",
      isPublic: true,
      description: "Sistema de gerenciamento de produtos - Vaga de Estágio",
      technologies: [
        { name: "Next", icon: TbBrandNextjs },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
        { name: "Radix UI", icon: TbBrandRadixUi },
        { name: "React Hook Form", icon: SiReacthookform },
      ],
    },
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
        { name: "ShadcnUi  ", icon: SiShadcnui },
        { name: "Firebase", icon: TbBrandFirebase },
      ],
    },
    {
      title: "Desafio Perguntas",
      images: ["/projects/desafio1.png", "/projects/desafio2.png"],
      liveLink: "https://desafio-vaga-estagio-target.vercel.app/",
      repoLink: "https://github.com/QuiLion7/desafio-vaga-estagio-target",
      isPublic: true,
      description:
        "Projeto responsivo de perguntas e respostas desafio - Vaga de Estágio",
      technologies: [
        { name: "Next", icon: TbBrandNextjs },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
        { name: "ShadcnUi  ", icon: SiShadcnui },
        { name: "React Type Animation", icon: MdAnimation },
        { name: "React Syntax Highlighter", icon: FaLaptopCode },
        { name: "React Hook Form", icon: SiReacthookform },
      ],
    },
    {
      title: "QuiL Recipe",
      images: ["/projects/recipe1.png", "/projects/recipe2.png"],
      liveLink: "https://quilrecipe.vercel.app/",
      repoLink: "https://github.com/QuiLion7/quilrecipe",
      isPublic: true,
      description:
        "Localizador de receitas que consume uma API externa usando TanStack Query.",
      technologies: [
        { name: "React", icon: TbBrandReact },
        { name: "Typescript", icon: TbBrandTypescript },
        { name: "TailwindCSS", icon: TbBrandTailwind },
        { name: "Tanstack Query", icon: SiReactquery },
        { name: "API", icon: TbApi },
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
    // {
    //   title: "QuilCursos",
    //   images: ["/projects/quilcursos1.png", "/projects/quilcursos2.png"],
    //   liveLink: "https://quilcursos.vercel.app",
    //   repoLink: "https://github.com/yourusername/quilcursos",
    //   isPublic: true,
    //   description:
    //     "Uma plataforma de cursos em vídeo online que podem ser gratuitos ou pagos.",
    //   technologies: [
    //     { name: "Next", icon: TbBrandNextjs },
    //     { name: "Typescript", icon: TbBrandTypescript },
    //     { name: "TailwindCSS", icon: TbBrandTailwind },
    //     { name: "MongoDB", icon: TbBrandMongodb },
    //   ],
    // },

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

  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(myProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("all");

  // Extrair todas as tecnologias únicas dos projetos
  const allTechnologies = Array.from(
    new Set(
      myProjects.flatMap((project) =>
        project.technologies.map((tech) => tech.name),
      ),
    ),
  ).sort();

  // Efeito para filtrar projetos com base no termo de pesquisa e tecnologia selecionada
  useEffect(() => {
    let results = myProjects;

    // Filtrar por termo de pesquisa
    if (searchTerm) {
      results = results.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Filtrar por tecnologia
    if (selectedTech !== "all") {
      results = results.filter((project) =>
        project.technologies.some((tech) => tech.name === selectedTech),
      );
    }

    setFilteredProjects(results);
  }, [searchTerm, selectedTech]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            Meus Projetos
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Conheça um pouco da minha trajetória de desenvolvimento.
          </p>
        </motion.div>

        <motion.div
          {...fadeIn}
          className="mb-8 rounded-xl border border-primary/30 bg-background/80 p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1 rounded-xl">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Pesquisar projetos..."
                className="w-full rounded-xl pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filtrar:</span>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 rounded-xl text-sm"
                  >
                    {selectedTech === "all"
                      ? "Todas tecnologias"
                      : selectedTech}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {/* <DropdownMenuLabel>Tecnologias</DropdownMenuLabel>
                  <DropdownMenuSeparator /> */}
                  <DropdownMenuRadioGroup
                    value={selectedTech}
                    onValueChange={setSelectedTech}
                  >
                    <DropdownMenuRadioItem value="all">
                      Todas
                    </DropdownMenuRadioItem>
                    {allTechnologies.map((tech) => (
                      <DropdownMenuRadioItem key={tech} value={tech}>
                        {tech}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            {...fadeIn}
            className="flex h-60 flex-col items-center justify-center rounded-xl border border-primary/30 bg-background/80 p-6 text-center"
          >
            <p className="mb-2 text-lg font-medium text-muted-foreground">
              Nenhum projeto encontrado com os filtros atuais.
            </p>
            <p className="mb-4 text-sm text-muted-foreground">
              Tente ajustar seus critérios de pesquisa ou tecnologia.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedTech("all");
              }}
            >
              Limpar filtros
            </Button>
          </motion.div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <Card className="group h-full overflow-hidden rounded-xl border-2 border-primary/30 bg-background/80 transition-all duration-300 hover:scale-[1.02] hover:border-primary hover:shadow-lg">
                  <CardHeader className="p-4">
                    <CardTitle className="group-hover:text-primary">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl">
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="rounded-xl object-cover px-4"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <ExternalLink className="h-10 w-10 text-white" />
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent className="max-w-3xl p-4 sm:p-6">
                        <DialogHeader className="mb-2">
                          <DialogTitle className="text-lg font-bold text-primary sm:text-xl">
                            {project.title}
                          </DialogTitle>
                          <DialogDescription className="mt-1 text-sm">
                            {project.description}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="relative overflow-hidden rounded-lg">
                          <Carousel className="w-full">
                            <CarouselContent>
                              {project.images.map((image, i) => (
                                <CarouselItem key={i}>
                                  <div className="relative h-[50vh] w-full overflow-hidden rounded-lg">
                                    <Image
                                      src={image}
                                      alt={`${project.title} screenshot ${
                                        i + 1
                                      }`}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <div className="absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-2">
                              <CarouselPrevious className="h-7 w-7 bg-background/80 hover:bg-background" />
                              <CarouselNext className="h-7 w-7 bg-background/80 hover:bg-background" />
                            </div>
                          </Carousel>
                        </div>

                        <div className="mt-4">
                          <h4 className="mb-2 text-sm font-semibold">
                            Tecnologias:
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="flex items-center gap-1 px-2 py-0.5 text-xs"
                              >
                                <tech.icon className="h-3 w-3" />
                                {tech.name}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
                          <Button
                            size="sm"
                            className="w-full sm:w-auto"
                            asChild
                          >
                            <Link href={project.liveLink} target="_blank">
                              <Search className="mr-1.5 h-3.5 w-3.5" />
                              Ver Site
                            </Link>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full sm:w-auto"
                            asChild
                          >
                            <Link href={project.repoLink} target="_blank">
                              <Github className="mr-1.5 h-3.5 w-3.5" />
                              Código
                            </Link>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>

                  <div className="px-4 py-3">
                    <h4 className="mb-2 text-sm font-medium">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <TooltipProvider key={techIndex} delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="rounded-full bg-primary/10 p-1.5 transition-all duration-300 hover:bg-primary/20">
                                <tech.icon className="h-4 w-4" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                              <p className="text-xs">{tech.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>

                  <CardFooter className="flex flex-col gap-2 border-t border-primary/10 p-4 sm:flex-row sm:justify-between">
                    <Button
                      size="sm"
                      className="w-full rounded-lg transition-all duration-300 hover:scale-105 sm:flex-1"
                      asChild
                    >
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="flex items-center justify-center gap-1"
                      >
                        <Search className="h-4 w-4" />
                        <span>Ver Site</span>
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full rounded-lg transition-all duration-300 hover:scale-105 sm:flex-1"
                      asChild
                    >
                      <Link
                        href={project.repoLink}
                        target="_blank"
                        className="flex items-center justify-center gap-1"
                      >
                        <Code className="h-4 w-4" />
                        <span>Código</span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}
