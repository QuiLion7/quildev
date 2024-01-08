import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      role: "ESTÁGIO NO LABORATÓRIO",
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

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-md cursor-default text-center font-bold uppercase duration-300 hover:text-primary md:text-base lg:text-xl">
        Experiência
      </h1>
      <section className="grid h-full w-full grid-cols-1 items-center justify-center gap-2 ">
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((experience, index) => (
            <AccordionItem
              className="p-2 duration-300 hover:rounded-lg hover:bg-background/50"
              value={index.toString()}
              key={index}
            >
              <AccordionTrigger className="text-sm font-bold uppercase duration-300 hover:text-primary md:text-base lg:text-xl">
                {experience.role} | {experience.period}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <h3 className="text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary sm:text-xs md:text-sm lg:text-base">
                  <strong>EMPRESA:</strong> {experience.company}
                </h3>
                <h3 className="text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary sm:text-xs md:text-sm lg:text-base">
                  <strong>RESPONSABILIDADES:</strong>{" "}
                  {experience.responsibilities.join(" ")}
                </h3>
                <h3 className="text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary sm:text-xs md:text-sm lg:text-base">
                  <strong>RESULTADOS:</strong>{" "}
                  {experience.achievements.join(" ")}
                </h3>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
