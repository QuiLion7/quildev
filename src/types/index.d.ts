import { ComponentType, SVGProps } from "react";

declare global {
  interface Skill {
    name: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    emphasis: boolean;
    documentationUrl: string;
    development?: string;
  }
}
