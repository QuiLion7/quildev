"use client";
import Link from "next/link";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className=" flex h-full w-full flex-row items-center justify-center gap-4">
      <Link
        className="rounded-lg p-1 duration-300 hover:scale-125 hover:rounded-lg hover:bg-secondary-foreground hover:text-secondary hover:duration-300"
        href="https://github.com/QuiLion7"
        target="_blank"
      >
        <Github className="h-5 w-5 md:h-6 md:w-6" />
      </Link>
      <Link
        className="rounded-lg p-1 duration-300 hover:scale-125 hover:rounded-lg hover:bg-secondary-foreground hover:text-secondary hover:duration-300"
        href="https://www.linkedin.com/in/quilion7/"
        target="_blank"
      >
        <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
      </Link>
      <Link
        className="rounded-lg p-1 duration-300 hover:scale-125 hover:rounded-lg hover:bg-secondary-foreground hover:text-secondary hover:duration-300"
        href="https://www.instagram.com/quilion7"
        target="_blank"
      >
        <Instagram className="h-5 w-5 md:h-6 md:w-6" />
      </Link>
      <Link
        className="rounded-lg p-1 duration-300 hover:scale-125 hover:rounded-lg hover:bg-secondary-foreground hover:text-secondary hover:duration-300"
        href="https://www.youtube.com/@quilcode"
        target="_blank"
      >
        <Youtube className="h-5 w-5 md:h-6 md:w-6" />
      </Link>
    </div>
  );
}
