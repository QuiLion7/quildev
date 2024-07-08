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
  {
    label: "YouTube",
    url: "https://www.youtube.com/@quilcode",
    icon: YoutubeIcon,
  },
];

type Skill = {
  name: string;
  iconPath: string;
  emphasis: boolean;
  documentationUrl: string;
};

type IconType = ComponentType | ReactNode;

type TechnicalAbilityCategory = {
  name: string;
  iconPath: IconType;
  skills: Skill[];
};

interface InfoItem {
  fieldName: string;
  fieldValue: string;
}

interface About {
  title: string;
  description: string;
  info: InfoItem[];
}

export const about: About = {
  title: "Sobre Mim",
  description:
    "Sou professor de química do ensino médio desde 2015 numa escola que é referência nacional, e por isso, as habilidades de adaptabilidade, inovação, dinamismo e proatividade são naturalmente utilizadas. Como um apaixonado por tecnologia, estudo periodicamente para me tornar um desenvolvedor de códigos e soluções. ",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Quilion Oliveira",
    },
    {
      fieldName: "Whatsapp",
      fieldValue: "(88) 981062656",
    },
    {
      fieldName: "Experiência",
      fieldValue: "+3 Anos",
    },
    {
      fieldName: "Email",
      fieldValue: "quilbrub@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Português/Nativo, Inglês/Básico",
    },
  ],
};

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
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
    "Sou um desenvolvedor Front-End que transforma ideias em realidade. Crio experiências impactantes, envolventes e responsivas.",
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
  institution: string;
  name: string;
  degree: string;
  duration: string;
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
    "Sendo aluno ou professor, continuo buscando evolução na aprendizagem.",
  items: [
    {
      institution: "UNOPAR",
      name: "Engenharia de Software",
      degree: "Graduação",
      duration: "2022 - Atualmente",
    },
    {
      institution: "PROMINAS",
      name: "Gestão Escolar",
      degree: "Pós-Graduação",
      duration: "2020 - 2021",
    },
    {
      institution: "KURIUS",
      name: "Educação Física Escolar",
      degree: "Pós-Graduação",
      duration: "2016 - 2018",
    },
    {
      institution: "UECE",
      name: "Licenciatura em Química",
      degree: "Graduação",
      duration: "2011 - 2015",
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
  skillList: SkillItem[];
}

export const mySkills: Skills = {
  title: "Minhas Habilidades",
  description:
    "Desenvolvedor Front-End diferenciado que busca evoluir periodicamente",
  skillList: [
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
      documentationUrl:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
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
  ],
};
