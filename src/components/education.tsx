import { useRef } from "react";
import { Separator } from "./ui/separator";
import { motion, useScroll } from "framer-motion";

export default function Education() {
  interface IEducation {
    degree: string;
    institution: string;
    period: string;
  }

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

      <section className="ml-12 flex w-full flex-col gap-4">
        {education.map((educ, index) => (
          <div
            className="flex flex-col items-start justify-center gap-1 text-justify"
            key={index}
          >
            <h1 className="text-wrap text-lg font-semibold uppercase md:text-xl">
              {educ.degree}
            </h1>
            <h3 className="text-xs font-semibold sm:text-sm">
              {educ.institution}
            </h3>
            <h3 className="text-xs font-semibold sm:text-sm">{educ.period}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}
