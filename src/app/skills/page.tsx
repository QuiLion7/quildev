"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Skills() {
  const technicalAbilities = [
    {
      name: "Front-End",
      skills: [
        {
          name: "HTML",
          iconPath: "/skills/html.svg",
          documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          isFavorite: false,
        },
        {
          name: "CSS",
          iconPath: "/skills/css.svg",
          documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          isFavorite: false,
        },
        {
          name: "JavaScript",
          iconPath: "/skills/javascript.svg",
          documentationUrl:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          isFavorite: false,
        },
        {
          name: "React",
          iconPath: "/skills/react.svg",
          documentationUrl: "https://reactjs.org/",
          isFavorite: false,
        },
        {
          name: "Next",
          iconPath: "/skills/nextjs.svg",
          documentationUrl: "https://nextjs.org/docs",
          isFavorite: true,
        },
        {
          name: "TypeScript",
          iconPath: "/skills/typescript.svg",
          documentationUrl: "https://www.typescriptlang.org/docs/",
          isFavorite: true,
        },
        {
          name: "Framer Motion",
          iconPath: "/skills/framer-motion.svg",
          documentationUrl: "https://www.framer.com/api/motion/",
          isFavorite: false,
        },
        {
          name: "TailwindCSS",
          iconPath: "/skills/tailwindcss.svg",
          documentationUrl: "https://tailwindcss.com/docs",
          isFavorite: false,
        },
        {
          name: "Bootstrap",
          iconPath: "/skills/bootstrap.svg",
          documentationUrl: "https://getbootstrap.com/docs",
          isFavorite: false,
        },
        {
          name: "React Router",
          iconPath: "/skills/react-router.svg",
          documentationUrl: "https://reactrouter.com/",
          isFavorite: false,
        },
        {
          name: "Vite",
          iconPath: "/skills/vite.svg",
          documentationUrl: "https://vitejs.dev/guide/",
          isFavorite: false,
        },
      ],
    },
    {
      name: "Back-End",
      skills: [
        {
          name: "JavaScript",
          iconPath: "/skills/javascript.svg",
          documentationUrl:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          isFavorite: false,
        },
        {
          name: "Node",
          iconPath: "/skills/nodejs.svg",
          documentationUrl: "https://nodejs.org/en/docs/",
          isFavorite: true,
        },
        {
          name: "TypeScript",
          iconPath: "/skills/typescript.svg",
          documentationUrl: "https://www.typescriptlang.org/docs/",
          isFavorite: false,
        },
        {
          name: "Express",
          iconPath: "/skills/express.svg",
          documentationUrl: "https://expressjs.com/en/starter/installing.html",
          isFavorite: true,
        },
        {
          name: "Prisma",
          iconPath: "/skills/prisma.svg",
          documentationUrl: "https://www.prisma.io/docs/",
          isFavorite: false,
        },
      ],
    },
    {
      name: "Controle de Versões",
      skills: [
        {
          name: "Git",
          iconPath: "/skills/git.svg",
          documentationUrl: "https://git-scm.com/doc",
          isFavorite: true,
        },
        {
          name: "GitHub",
          iconPath: "/skills/github.svg",
          documentationUrl: "https://docs.github.com/en/github",
          isFavorite: true,
        },
      ],
    },
    {
      name: "Banco de Dados",
      skills: [
        {
          name: "Firebase",
          iconPath: "/skills/firebase.svg",
          documentationUrl: "https://firebase.google.com/docs",
          isFavorite: true,
        },
        {
          name: "MongoDB",
          iconPath: "/skills/mongodb.svg",
          documentationUrl: "https://docs.mongodb.com/",
          isFavorite: true,
        },
        {
          name: "Subabase",
          iconPath: "/skills/supabase.svg",
          documentationUrl: "https://supabase.io/docs",
          isFavorite: false,
        },
      ],
    },
    {
      name: "Autenticação e Pagamento",
      skills: [
        {
          name: "Firebase",
          iconPath: "/skills/firebase.svg",
          documentationUrl: "https://firebase.google.com/docs",
          isFavorite: true,
        },
        {
          name: "Stripe",
          iconPath: "/skills/stripe.svg",
          documentationUrl: "https://stripe.com/docs",
          isFavorite: true,
        },
      ],
    },
    {
      name: "Outros",
      skills: [
        {
          name: "Postman",
          iconPath: "/skills/postman.svg",
          documentationUrl: "https://learning.postman.com/docs/",
          isFavorite: true,
        },
        {
          name: "Vercel",
          iconPath: "/skills/vercel.svg",
          documentationUrl: "https://vercel.com/docs",
          isFavorite: true,
        },
        {
          name: "Figma",
          iconPath: "/skills/figma.svg",
          documentationUrl: "https://help.figma.com/",
          isFavorite: false,
        },
      ],
    },
  ];

  // type Category = {
  //   name: string;
  //   skills: {
  //     name: string;
  //     iconPath: string;
  //     documentationUrl: string;
  //     isFavorite: boolean;
  //   }[];
  // };

  // type CategoryProps = {
  //   category: Category;
  // };

  const handleShowFullCategory = (category: string) => {
    alert(category);
  };

  return (
    <div className="mb-4 flex w-full flex-col items-center justify-center gap-2">
      <h1 className="w-[95%] pt-4 text-center text-xl font-bold uppercase md:text-2xl lg:text-3xl">
        Tecnologias e Ferramentas
      </h1>
      <h2 className="w-[80%] pb-2 text-center text-xs md:text-sm lg:text-base">
        Explore as tecnologias e ferramentas que impulsionam a minha experiência
        como desenvolvedor Front-End.
      </h2>
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
        {technicalAbilities.map((ability, index) => (
          <div
            className="flex h-auto w-full max-w-[270px] flex-col items-center justify-center rounded-lg border border-primary p-2 text-center duration-300 hover:bg-secondary hover:duration-300 sm:max-w-[310px] md:max-w-[350px]"
            key={index}
          >
            <h2 className=" text-md mb-2 flex w-full items-center justify-center md:text-lg">
              <p>{ability.name}</p>
              <Button
                variant="any"
                className="bg-none px-2"
                onClick={() => handleShowFullCategory(ability.name)}
              >
                <Plus size={18} />
              </Button>
            </h2>
            <div className="flex h-auto w-full items-center justify-center gap-1 text-wrap sm:flex-row md:gap-2 ">
              {ability.skills
                .filter((skill) => skill.isFavorite)
                .map((skill, skillIndex) => (
                  <Button
                    asChild
                    key={skillIndex}
                    className="flex h-[45px] items-center justify-start"
                  >
                    <Link
                      href={skill.documentationUrl}
                      target="_blank"
                      className="flex w-[95%] items-center justify-start rounded-lg bg-primary"
                    >
                      <Image
                        src={skill.iconPath}
                        width={0}
                        height={0}
                        className=" h-8 w-8 rounded-lg bg-primary-foreground/50 p-1 sm:h-9 sm:w-9"
                        sizes="100%"
                        priority
                        alt={skill.name}
                      />
                      <span className="ml-2 text-wrap text-[0.7rem] sm:text-sm">
                        {skill.name}
                      </span>
                    </Link>
                  </Button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
