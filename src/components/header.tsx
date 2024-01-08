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
import { MenuIcon, Settings } from "lucide-react";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";
import { MenuConfig } from "./menu-config";

export default function Header() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-full w-full">
      <nav className="flex md:hidden">
        <Card className="flex h-[50px] w-full items-center justify-between px-[2%]">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                onClick={handleOpen}
                className="rounded-lg"
              >
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

              <nav className="mt-4 flex flex-col gap-2">
                {navigationLinks.map((link, index) => (
                  <SheetClose asChild key={index}>
                    <Link href={link.path} onClick={handleClose}>
                      <Button
                        variant="default"
                        className="w-full justify-start gap-2 rounded-md"
                      >
                        <link.icon size={16} />
                        {link.label}
                      </Button>
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <div onClick={handleClose}>
                    <div className="inline-flex h-10 w-full items-center justify-start  whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                      <Settings size={16} />
                      <MenuConfig displayType={"mobile"} />
                    </div>
                  </div>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/">
            <h1 className="text-lg font-bold">
              QUIL
              <span className="bg-gradient-to-r from-purple-900 to-indigo-500 bg-clip-text text-transparent">
                DEV
              </span>
            </h1>
          </Link>
        </Card>
      </nav>

      <nav className="hidden h-[60px] items-center justify-center gap-2 border bg-card p-[0.5rem] px-[2%] text-card-foreground shadow-sm md:flex">
        <Link href="/" className="flex h-full items-center  justify-center">
          <h1 className="md:text-1xl text-lg font-bold lg:text-2xl">
            QUIL
            <span className="bg-gradient-to-r from-purple-900 to-indigo-500 bg-clip-text text-transparent">
              DEV
            </span>
          </h1>
        </Link>

        <ul className="p2-1 flex h-full w-full items-center justify-end gap-2 pr-2 text-sm uppercase">
          {navigationLinks.map((link, index) => (
            <li
              key={index}
              className={
                activeLink === link.path
                  ? "rounded-lg bg-accent p-2 text-primary"
                  : "p-2"
              }
              onMouseEnter={() => setActiveLink(link.path)}
              onMouseLeave={() => setActiveLink(null)}
            >
              <Link href={link.path} className="">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <MenuConfig displayType={"desktop"} />
      </nav>
    </div>
  );
}
