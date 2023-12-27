import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function PageSkills() {
  const technicalAbilities = [
    {
      name: "Front-End",
      skills: [
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
          name: "JavaScript",
          iconPath: "/skills/javascript.svg",
          documentationUrl:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "React",
          iconPath: "/skills/react.svg",
          documentationUrl: "https://reactjs.org/",
        },
        {
          name: "Next",
          iconPath: "/skills/nextjs.svg",
          documentationUrl: "https://nextjs.org/docs",
        },
        {
          name: "TypeScript",
          iconPath: "/skills/typescript.svg",
          documentationUrl: "https://www.typescriptlang.org/docs/",
        },
        {
          name: "Framer Motion",
          iconPath: "/skills/framer-motion.svg",
          documentationUrl: "https://www.framer.com/api/motion/",
        },
        {
          name: "TailwindCSS",
          iconPath: "/skills/tailwindcss.svg",
          documentationUrl: "https://tailwindcss.com/docs",
        },
        {
          name: "Bootstrap",
          iconPath: "/skills/bootstrap.svg",
          documentationUrl: "https://getbootstrap.com/docs",
        },
        {
          name: "React Router",
          iconPath: "/skills/react-router.svg",
          documentationUrl: "https://reactrouter.com/",
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
      skills: [
        {
          name: "JavaScript",
          iconPath: "/skills/javascript.svg",
          documentationUrl:
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "Node",
          iconPath: "/skills/nodejs.svg",
          documentationUrl: "https://nodejs.org/en/docs/",
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
      name: "Design",
      skills: [
        {
          name: "Figma",
          iconPath: "/skills/figma.svg",
          documentationUrl: "https://help.figma.com/",
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
        },
        {
          name: "GitHub",
          iconPath: "/skills/github.svg",
          documentationUrl: "https://docs.github.com/en/github",
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
        },
        {
          name: "MongoDB",
          iconPath: "/skills/mongodb.svg",
          documentationUrl: "https://docs.mongodb.com/",
        },
        {
          name: "Subabase",
          iconPath: "/skills/supabase.svg",
          documentationUrl: "https://supabase.io/docs",
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
        },
        {
          name: "Stripe",
          iconPath: "/skills/stripe.svg",
          documentationUrl: "https://stripe.com/docs",
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
        },
        {
          name: "Vercel",
          iconPath: "/skills/vercel.svg",
          documentationUrl: "https://vercel.com/docs",
        },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="w-full flex flex-col justify-center items-center gap-2 p-2"
    >
      {technicalAbilities.map((ability, index) => (
        <div
          className="flex flex-col justify-center items-start border border-primary/0 hover:border-primary/100 duration-300 hover:duration-300 rounded-lg p-2"
          key={index}
        >
          <h2 className="text-md md:text-xl uppercase mb-2 w-full">
            {ability.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 md:gap-3 lg:grid-cols-5 justify-center items-center w-full h-auto ">
            {ability.skills.map((skill, skillIndex) => (
              <Button
                asChild
                key={skillIndex}
                className="flex justify-start items-center h-[50px] md:h-[55px]"
              >
                <Link
                  href={skill.documentationUrl}
                  target="_blank"
                  className="bg-primary w-[140px] sm:w-[160px] md:w-[180px] flex justify-start items-center rounded-lg"
                >
                  <Image
                    src={skill.iconPath}
                    width={0}
                    height={0}
                    className=" bg-primary-foreground/50 p-1 w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
                    sizes="100%"
                    priority
                    alt={skill.name}
                  />
                  <span className="text-[0.7rem] sm:text-xs md:text-sm ml-2 text-wrap">
                    {skill.name}
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
