import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-md cursor-default text-center font-bold uppercase duration-300 hover:text-primary md:text-base lg:text-xl">
        EDUCAÇÃO
      </h1>
      <section className="grid h-full w-full grid-cols-1 items-center justify-center gap-2">
        <Accordion
          type="single"
          collapsible
          className="grid w-full grid-cols-1 sm:grid-cols-2"
        >
          {education.map((educ, index) => (
            <AccordionItem
              className="p-2 duration-300 hover:rounded-lg hover:bg-background/50"
              value={index.toString()}
              key={index}
            >
              <AccordionTrigger className="text-sm font-bold uppercase duration-300 hover:text-primary md:text-base lg:text-xl">
                {educ.degree}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-2">
                <h3 className="text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary sm:text-xs md:text-sm lg:text-xl">
                  <strong>INSTITUIÇÃO:</strong> {educ.institution}
                </h3>
                <h3 className="text-justify text-[0.7rem] font-semibold duration-300 hover:text-primary sm:text-xs md:text-sm lg:text-xl">
                  <strong>PERÍODO:</strong> {educ.period}
                </h3>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
