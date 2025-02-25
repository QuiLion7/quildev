import { ReactNode, ComponentType, SVGProps } from "react";

import {
  Monitor,
  User,
  BookOpenCheck,
  Contact,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";

import { SiExpress } from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFirebase,
  TbBrandMongodb,
  TbBrandReact,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandBootstrap,
  TbBrandSupabase,
  TbBrandNodejs,
  TbBrandPrisma,
  TbBrandGit,
  TbBrandGithub,
  TbBrandFigma,
  TbBrandStripe,
  TbFileCode,
} from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";

export interface Skill {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  emphasis: boolean;
  documentationUrl: string;
  development?: string;
}

type MainSkillsEmphasis = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const mainSkillsEmphasis: MainSkillsEmphasis[] = [
  { name: "JavaScript", icon: TbBrandJavascript },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: TbBrandReact },
  { name: "Next", icon: TbBrandNextjs },
  { name: "TailwindCSS", icon: TbBrandTailwind },
  { name: "Firebase", icon: TbBrandFirebase },
  { name: "MongoDB", icon: TbBrandMongodb },
];

export const navigationLinks = [
  { label: "Inicio", path: "/", icon: Monitor },
  { label: "Sobre Mim", path: "/about", icon: User },
  { label: "Projetos", path: "/projects", icon: BookOpenCheck },
  { label: "Contato", path: "/contact", icon: Contact },
  // { label: "Habilidades Técnicas", path: "/skills", icon: Code2 },
  // { label: "Services", path: "#services", icon: FileCode },
];

export const footerLinks = [
  { label: "GitHub", url: "https://github.com/QuiLion7", icon: GithubIcon },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/quilion7/",
    icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/quilion7",
    icon: InstagramIcon,
  },
  // {
  //   label: "YouTube",
  //   url: "https://www.youtube.com/@quilcode",
  //   icon: YoutubeIcon,
  // },
];

type IconType = ComponentType | ReactNode;

interface InfoItem {
  fieldName: string;
  fieldValue: string;
}

interface About {
  title: string;
  description: string;
  personalInfo: Array<{ fieldName: string; value: string }>;
  info: InfoItem[];
}

export const about: About = {
  title: "Quem sou eu?!",
  description:
    "Eu sou um eterno aprendiz. Estudo sobre desenvolvimento periodicamente para me tornar um solucionador de problemas, através de linhas de código. Fui professor de química durante 9 anos, e possuo competências e habilidades que se destacam dos demais desenvolvedores. Dentre elas estão: adaptabilidade, proatividade, dinamismo, comunicação, persistência, criatividade e proatividade. ",
  personalInfo: [
    { fieldName: "Nome", value: "Quilion Oliveira" },
    { fieldName: "Email", value: "quilbrub@gmail.com" },
    { fieldName: "Freelance", value: "Disponível" },
    { fieldName: "Idiomas", value: "Português/Nativo, Inglês/Básico" },
  ],
  info: [
    { fieldName: "Nome", fieldValue: "Quilion Oliveira" },
    { fieldName: "Email", fieldValue: "quilbrub@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Disponível" },
    { fieldName: "Idiomas", fieldValue: "Português/Nativo, Inglês/Básico" },
  ],
};

interface ExperienceItem {
  position: string;
  company: string;
  duration: string;
  description?: string;
}

interface Experience {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  items: ExperienceItem[];
}

export const experience: Experience = {
  icon: TbFileCode,
  title: "Minhas Experiências",
  description:
    "Independente da função, busco executar minhas tarefas com excelência, criatividade e no prazo determinado.",
  items: [
    {
      company: "LSINN",
      position: "Consultor Trainee",
      duration: "07/2024 - Atualmente",
    },
    {
      company: "Freelancer",
      position: "Desenvolvedor Full Stack",
      duration: "01/2024 - Atualmente",
    },
    {
      company: "EEEP Marta Giffoni",
      position: "Professor de Química",
      duration: "04/2015 - 06/2024",
    },
    {
      company: "CVP",
      position: "Professor de Química",
      duration: "01/2024 - 06/2024",
    },
    {
      company: "CAGECE",
      position: "Estagiário no Laboratório",
      duration: "07/2024 - 01/2015",
    },
  ],
};

interface EducationItem {
  course: string;
  title?: string;
  institution: string;
  duration: string;
  degree: string;
}

interface Education {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  items: EducationItem[];
}

export const education: Education = {
  icon: PiStudentBold,
  title: "Minhas Formações",
  description:
    "Como um eterno aprendiz, estou em busca constante pela evolução.",
  items: [
    {
      institution: "UNOPAR",
      course: "Engenharia de Software",
      duration: "2022 - Atualmente",
      degree: "Graduação",
    },
    {
      institution: "PROMINAS",
      course: "Gestão Escolar",
      duration: "2020 - 2021",
      degree: "Pós-Graduação",
    },
    {
      institution: "KURIUS",
      course: "Educação Física Escolar",
      duration: "2016 - 2018",
      degree: "Pós-Graduação",
    },
    {
      institution: "UECE",
      course: "Licenciatura em Química",
      duration: "2011 - 2015",
      degree: "Graduação",
    },
  ],
};

interface SkillItem {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  development: string;
  emphasis: boolean;
  documentationUrl: string;
}

interface Skills {
  title: string;
  description: string;
  categories: {
    [category: string]: Skill[];
  };
  skillList: SkillItem[];
}

export const mySkills = [
  {
    name: "HTML",
    icon: TbBrandHtml5,
    emphasis: false,
    development: "Front-End",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: TbBrandCss3,
    emphasis: false,
    development: "Front-End",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: TbBrandJavascript,
    emphasis: true,
    development: "Front-End",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: TbBrandTypescript,
    emphasis: true,
    development: "Front-End",
    documentationUrl: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "React",
    icon: TbBrandReact,
    emphasis: true,
    development: "Front-End",
    documentationUrl: "https://reactjs.org/",
  },
  {
    name: "Next",
    icon: TbBrandNextjs,
    emphasis: true,
    development: "Front-End",
    documentationUrl: "https://nextjs.org/docs",
  },
  {
    name: "TailwindCSS",
    icon: TbBrandTailwind,
    emphasis: true,
    development: "Front-End",
    documentationUrl: "https://tailwindcss.com/docs",
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
    emphasis: false,
    development: "Front-End",
    documentationUrl: "https://getbootstrap.com/docs",
  },
  {
    name: "Firebase",
    icon: TbBrandFirebase,
    emphasis: true,
    development: "Banco de Dados",
    documentationUrl: "https://firebase.google.com/docs",
  },
  {
    name: "Subabase",
    icon: TbBrandSupabase,
    emphasis: false,
    development: "Banco de Dados",
    documentationUrl: "https://supabase.io/docs",
  },
  {
    name: "MongoDB",
    icon: TbBrandMongodb,
    emphasis: true,
    development: "Banco de Dados",
    documentationUrl: "https://docs.mongodb.com/",
  },
  {
    name: "Node",
    icon: TbBrandNodejs,
    emphasis: false,
    development: "Back-End",
    documentationUrl: "https://nodejs.org/en/docs/",
  },
  {
    name: "Express",
    icon: SiExpress,
    emphasis: false,
    development: "Back-End",
    documentationUrl: "https://expressjs.com/en/starter/installing.html",
  },
  {
    name: "Prisma",
    icon: TbBrandPrisma,
    emphasis: false,
    development: "Back-End",
    documentationUrl: "https://www.prisma.io/docs/",
  },
  {
    name: "Git",
    icon: TbBrandGit,
    emphasis: false,
    development: "FullStack",
    documentationUrl: "https://git-scm.com/doc",
  },
  {
    name: "GitHub",
    icon: TbBrandGithub,
    emphasis: false,
    development: "FullStack",
    documentationUrl: "https://docs.github.com/en/github",
  },
  {
    name: "Figma",
    icon: TbBrandFigma,
    emphasis: false,
    development: "Front-End",
    documentationUrl: "https://help.figma.com/",
  },
  {
    name: "Stripe",
    icon: TbBrandStripe,
    emphasis: false,
    development: "Back-End",
    documentationUrl: "https://stripe.com/docs",
  },
] as Skill[] & {
  title: string;
  description: string;
};

mySkills.title = "Minhas Habilidades";
mySkills.description =
  "Desenvolvedor Frontend, com foco em Next, Typescript e TailwindCSS.";
