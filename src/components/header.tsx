"use client";
import { navigationLinks } from "@/app/utils/data";
import Link from "next/link";
import { Card } from "./ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <div className="w-full">
      <nav className="flex md:hidden">
        <Card className="flex items-center w-full justify-between p-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[18.75rem]">
              <SheetHeader className="text-left text-lg font-semibold">
                Menu
              </SheetHeader>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>Quilion Oliveira</AvatarFallback>

                    <AvatarImage src="quilion.png" />
                  </Avatar>

                  <div className="flex flex-col">
                    <p className="font-medium">Desenvolvedor Front-End</p>
                    <p className="text-sm opacity-75">
                      Transformando Ideias em Realidade
                    </p>
                  </div>
                </div>

                <Separator />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                {navigationLinks.map((link, index) => (
                  <SheetClose key={index}>
                    <Link href={link.path}>
                      <Button
                        variant="default"
                        className="w-full justify-start gap-2"
                      >
                        <link.icon size={16} />
                        {link.label}
                      </Button>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/">
            <h1 className="font-bold text-lg">
              QUIL
              <span className="bg-gradient-to-r from-purple-900 to-indigo-500 bg-clip-text text-transparent">
                DEV
              </span>
            </h1>
          </Link>
        </Card>
      </nav>

      <nav className="hidden md:flex bg-card p-[0.5rem] h-[60px] justify-center items-center gap-2 rounded-b-sm text-card-foreground shadow-sm border">
        <Link
          href="/"
          className="flex justify-center items-center w-[20%]  h-full"
        >
          <h1 className="font-bold text-lg md:text-1xl lg:text-2xl">
            QUIL
            <span className="bg-gradient-to-r from-purple-900 to-indigo-500 bg-clip-text text-transparent">
              DEV
            </span>
          </h1>
        </Link>

        <ul className="flex gap-2 w-full h-full justify-end items-center text-md p2-1 pr-2">
          {navigationLinks.map((link, index) => (
            <li
              key={index}
              className={
                activeLink === link.path
                  ? "text-primary bg-accent rounded-lg p-2"
                  : "p-2"
              }
              onMouseEnter={() => setActiveLink(link.path)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
