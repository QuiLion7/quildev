import { ModeToggle } from "@/components/mode-toggle";
import PageHome from "@/components/page-home";

export default function Home() {
  return (
    <div className=" relative container flex justify-center items-center p-0">
      <div className="absolute top-10 right-10">
        <ModeToggle />
      </div>
      <PageHome />
    </div>
  );
}
