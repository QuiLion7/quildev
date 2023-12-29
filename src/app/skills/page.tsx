"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Database, FileCog, LayoutTemplate, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Skills() {
  const technicalAbilities = [
    {
      name: "Front-End",
      iconPath: <LayoutTemplate className="h-[20px] w-[20px]" />,
      skills: [
        {
          name: "JavaScript",
          iconPath: "/skills/javascript.svg",
          documentationUrl:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "TypeScript",
          iconPath: "/skills/typescript.svg",
          documentationUrl: "https://www.typescriptlang.org/docs/",
        },
        {
          name: "React",
          iconPath: "/skills/react.svg",
          documentationUrl: "https://reactjs.org/",
        },
        {
          name: "React Router",
          iconPath: "/skills/react-router.svg",
          documentationUrl: "https://reactrouter.com/",
        },
        {
          name: "Next",
          iconPath: "/skills/nextjs.svg",
          documentationUrl: "https://nextjs.org/docs",
        },
        {
          name: "TailwindCSS",
          iconPath: "/skills/tailwindcss.svg",
          documentationUrl: "https://tailwindcss.com/docs",
        },
        {
          name: "HTML",
          iconPath: "/skills/html.svg",
          documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "CSS",
          iconPath: "/skills/css.svg",
          documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: "Bootstrap",
          iconPath: "/skills/bootstrap.svg",
          documentationUrl: "https://getbootstrap.com/docs",
        },
        {
          name: "Framer Motion",
          iconPath: "/skills/framer-motion.svg",
          documentationUrl: "https://www.framer.com/api/motion/",
        },
        {
          name: "Vite",
          iconPath: "/skills/vite.svg",
          documentationUrl: "https://vitejs.dev/guide/",
        },
      ],
    },
    {
      name: "Back-End",
      iconPath: <FileCog className="h-[20px] w-[20px]" />,
      skills: [
        {
          name: "Node",
          iconPath: "/skills/nodejs.svg",
          documentationUrl: "https://nodejs.org/en/docs/",
        },
        {
          name: "JavaScript",
          iconPath: "/skills/javascript.svg",
          documentationUrl:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "TypeScript",
          iconPath: "/skills/typescript.svg",
          documentationUrl: "https://www.typescriptlang.org/docs/",
        },
        {
          name: "Express",
          iconPath: "/skills/express.svg",
          documentationUrl: "https://expressjs.com/en/starter/installing.html",
        },
        {
          name: "Prisma",
          iconPath: "/skills/prisma.svg",
          documentationUrl: "https://www.prisma.io/docs/",
        },
      ],
    },
    {
      name: "Banco de Dados",
      iconPath: <Database className="h-[20px] w-[20px]" />,
      skills: [
        {
          name: "Firebase",
          iconPath: "/skills/firebase.svg",
          documentationUrl: "https://firebase.google.com/docs",
        },
        {
          name: "Subabase",
          iconPath: "/skills/supabase.svg",
          documentationUrl: "https://supabase.io/docs",
        },
        {
          name: "MongoDB",
          iconPath: "/skills/mongodb.svg",
          documentationUrl: "https://docs.mongodb.com/",
        },
      ],
    },
    {
      name: "Outros",
      iconPath: <UserPlus className="h-[20px] w-[20px]" />,
      skills: [
        {
          name: "Git",
          iconPath: "/skills/git.svg",
          documentationUrl: "https://git-scm.com/doc",
        },
        {
          name: "GitHub",
          iconPath: "/skills/github.svg",
          documentationUrl: "https://docs.github.com/en/github",
        },
        {
          name: "Postman",
          iconPath: "/skills/postman.svg",
          documentationUrl: "https://learning.postman.com/docs/",
        },
        {
          name: "Stripe",
          iconPath: "/skills/stripe.svg",
          documentationUrl: "https://stripe.com/docs",
        },
        {
          name: "Figma",
          iconPath: "/skills/figma.svg",
          documentationUrl: "https://help.figma.com/",
        },
        {
          name: "Vercel",
          iconPath: "/skills/vercel.svg",
          documentationUrl: "https://vercel.com/docs",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Front-End");

  const selectedSkills = technicalAbilities.filter(
    (ability) => ability.name === selectedCategory,
  );

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="flex min-h-[91.57vh] w-full flex-col items-center justify-center gap-2 px-[2%] py-2 text-center">
      <h1 className="w-[95%] text-xl font-bold uppercase sm:text-2xl lg:text-3xl">
        Tecnologias e Ferramentas
      </h1>
      <h2 className="mb-4 w-[80%] text-xs md:text-sm lg:text-base">
        Explore as tecnologias e ferramentas que impulsionam a minha experiência
        como desenvolvedor Front-End.
      </h2>
      <div className="flex w-full flex-col items-center justify-center gap-4  p-2 lg:flex-row">
        <section className="grid h-auto max-h-[330px] w-full max-w-[655px] grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[330px]">
          {technicalAbilities.map((ability, index) => (
            <Button
              key={index}
              variant="simple"
              className={cn(
                "flex h-full w-full items-center justify-center rounded-lg border-2 border-primary p-2",
                selectedCategory === ability.name ? "bg-secondary" : "",
              )}
              onClick={() => handleCategoryClick(ability.name)}
            >
              <div className="relative flex h-full w-full uppercase">
                <h2 className="mb-2 flex w-full items-center justify-center text-xs font-bold sm:text-lg">
                  {ability.name}
                </h2>
                <div className="absolute left-[-20px] top-[-20px] rounded-lg border-2 border-primary bg-secondary p-2 sm:left-[-18px] sm:top-[-18px]">
                  {ability.iconPath}
                </div>
              </div>
            </Button>
          ))}
        </section>
        <section className="h-auto max-h-[330px] w-full max-w-[650px] rounded-lg border-2 border-primary lg:h-[330px]">
          {selectedSkills.map((ability, index) => (
            <div
              className="flex h-full w-full flex-col items-start justify-start rounded-lg"
              key={index}
            >
              <h2 className="text-md flex w-full items-center justify-center py-2 uppercase md:text-lg">
                {ability.name}
              </h2>
              <Separator className="h-[2px] bg-primary" />
              <div className="flex h-full w-full items-center justify-center p-1">
                <div className="grid h-auto w-full grid-cols-4 items-center justify-center gap-[0.3rem] p-1 sm:grid-cols-3 sm:flex-row sm:gap-2 md:p-2">
                  {ability.skills.map((skill, skillIndex) => (
                    <Button
                      variant="ghost"
                      asChild
                      key={skillIndex}
                      className="flex w-full flex-col items-center justify-start sm:flex-row"
                    >
                      <Link
                        href={skill.documentationUrl}
                        target="_blank"
                        className="flex h-full w-full items-center justify-center rounded-lg bg-primary sm:justify-start"
                      >
                        <Image
                          src={skill.iconPath}
                          width={0}
                          height={0}
                          className=" h-7 w-7 rounded-lg bg-primary-foreground/40 p-1 sm:h-9 sm:w-9"
                          sizes="100%"
                          priority
                          alt={skill.name}
                        />
                        <span className="mt-1 flex h-[22px] items-center justify-center text-wrap text-[0.6rem] uppercase leading-3 sm:ml-2 sm:mt-0 sm:text-left sm:text-xs">
                          {skill.name}
                        </span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
