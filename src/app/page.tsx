import { ModeToggle } from "@/components/mode-toggle";
import PageHome from "@/components/page-home";
import PageSkills from "@/components/page-skills";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className=" relative container flex flex-col justify-center items-center p-0">
      <div className="absolute top-10 right-10">
        <ModeToggle />
      </div>
      <PageHome />

      <Separator className="bg-primary" />

      <PageSkills />

      <Separator className="bg-primary" />
    </div>
  );
}
