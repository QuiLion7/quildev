import {
  Monitor,
  User,
  Code2,
  BookOpenCheck,
  FileCode,
  Contact,
} from "lucide-react";

export const navigationLinks = [
  { label: "Inicio", path: "/", icon: Monitor },
  { label: "Habilidades Técnicas", path: "/skills", icon: Code2 },
  { label: "Sobre Mim", path: "/about", icon: User },
  // { label: "Services", path: "#services", icon: FileCode },
  { label: "Projetos", path: "/portfolio", icon: BookOpenCheck },
  { label: "Contato", path: "/contact", icon: Contact },
];
