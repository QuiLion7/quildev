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

      <section className="ml-12 flex w-full flex-col gap-4">
        {experiences.map((experience, index) => (
          <div
            className="flex flex-col items-start justify-center gap-1 text-justify"
            key={index}
          >
            <h1 className="text-wrap text-lg font-semibold uppercase md:text-xl">
              {experience.role}
            </h1>
            <h3 className="text-xs font-semibold uppercase sm:text-sm">
              {experience.period} | {experience.company}
            </h3>
            <h3 className="text-xs font-semibold sm:text-sm">
              Responsabilidades: {experience.responsibilities.join(" ")}
            </h3>
            <h3 className="text-xs font-semibold sm:text-sm">
              Resultados: {experience.achievements.join(" ")}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
}
