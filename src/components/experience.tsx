import { useRef } from "react";
import { Separator } from "./ui/separator";
import { motion, useScroll } from "framer-motion";

export default function Experience() {
  interface IExperience {
    role: string;
    company: string;
    period: string;
    responsibilities: string[];
    achievements: string[];
  }

  interface IEducation {
    degree: string;
    institution: string;
    period: string;
  }

  const experiences: IExperience[] = [
    {
      role: "PROFESSOR DE QUÍMICA",
      company: "EEEP Marta Maria Giffoni de Sousa",
      period: "2015-Presente",
      responsibilities: [
        "Ministrou aulas de química para alunos do ensino médio, com foco em um ensino atrativo, acessível e que promova o pensamento crítico e analítico;",
        "Planejou e executou aulas e atividades que atendiam às necessidades dos alunos.",
      ],
      achievements: [
        "Aumento de 20% no desempenho dos alunos em avaliações externas.",
        "Conquista de medalhas em olimpíadas de química.",
      ],
    },
    {
      role: "ESTAGIÁRIO",
      company: "CAGECE-Itapipoca",
      period: "2014-2015",
      responsibilities: [
        "Realizou análises químicas, físicas e biológicas em amostras de água e esgoto;",
        "Operou equipamentos de alta precisão, como espectrofotômetros.",
      ],
      achievements: [
        "Contribuiu para a manutenção dos padrões de qualidade da água tratada;",
        "Identificou e resolveu problemas relacionados à qualidade da água.",
      ],
    },
  ];

  const education: IEducation[] = [
    {
      degree: "Engenharia de Software",
      institution: "UNOPAR",
      period: "02/2022 – 06/2025",
    },
    {
      degree: "Gestão Escolar",
      institution: "PROMINAS",
      period: "09/2020 – 09/2021",
    },
    {
      degree: "Educação Física Escolar",
      institution: "KURIUS",
      period: "08/2016 – 01/2018",
    },
    {
      degree: "Licenciatura em Química",
      institution: "UECE",
      period: "02/2011 – 11/2015",
    },
  ];

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div
      ref={ref}
      className="relative flex h-full w-full items-center justify-center"
    >
      <motion.div
        style={{ scaleY: scrollXProgress }}
        className="absolute left-4 top-0 flex h-full w-[2px] origin-top bg-primary"
      />

      <section className="ml-12 flex w-full flex-col gap-6">
        {experiences.map((experience, index) => (
          <div
            className="flex flex-col items-start justify-center gap-1 text-justify"
            key={index}
          >
            <h1 className="text-wrap text-lg font-semibold uppercase md:text-xl lg:text-2xl">
              {experience.role}
            </h1>
            <h3 className="text-xs font-semibold uppercase sm:text-sm md:text-base">
              {experience.period} | {experience.company}
            </h3>
            <h3 className="text-xs font-semibold sm:text-sm md:text-base">
              Responsabilidades: {experience.responsibilities.join(" ")}
            </h3>
            <h3 className="text-xs font-semibold sm:text-sm md:text-base">
              Resultados: {experience.achievements.join(" ")}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
}
