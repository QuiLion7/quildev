"use client";

import Link from "next/link";
import { footerLinks } from "@/app/utils/data";

export default function Footer() {
  return (
    <footer className="flex h-[60px] w-full items-end justify-center">
      <ul className="flex h-full w-full items-center justify-center gap-1 p-1">
        {footerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            className="rounded-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <li className="p-2">
              <link.icon />
            </li>
          </Link>
        ))}
      </ul>
    </footer>
  );
}
