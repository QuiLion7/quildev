import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="relative container flex justify-center items-center mt-1">
      <div className="absolute top-10 right-10">
        <ModeToggle />
      </div>
      <p>Iniciando Projeto</p>
    </div>
  );
}
