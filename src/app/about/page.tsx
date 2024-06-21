"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { education, experience, mySkills, about } from "../utils/data";
import Link from "next/link";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="mt-[60px] flex h-full min-h-[87.28vh] w-screen flex-col items-center justify-center sm:mt-0"
    >
      <div className="mt-[30px] flex w-full items-center justify-center">
        <Tabs
          defaultValue="experience"
          className="flex w-full flex-col items-center justify-center p-1 xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[400px] flex-col gap-4 xl:mx-0">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="about">Sobre Mim</TabsTrigger>
          </TabsList>

          <div className="h-full w-full max-w-[600px] bg-background p-1">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-4 text-center">
                <h3 className="px-3 text-2xl font-bold md:text-3xl">
                  {experience.title}
                </h3>
                <p className="mx-auto px-3 text-sm sm:text-base xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[360px] px-3">
                  <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="group flex h-[160px] flex-col items-center justify-center gap-1 rounded-xl border-2 border-primary px-10 py-6 transition-all duration-200 hover:bg-secondary"
                      >
                        <span className="text-primary">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl text-primary-foreground transition-all duration-200 group-hover:scale-105">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full  ${
                              item.duration.includes("Atualmente")
                                ? "bg-green-500"
                                : "bg-primary-foreground"
                            }`}
                          ></span>
                          <p className="text-primary-foreground">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-4 px-3 text-center">
                <h3 className="px-3 text-2xl font-bold md:text-3xl">
                  {mySkills.title}
                </h3>
                <p className="mx-auto px-3 text-sm  sm:text-base xl:mx-0">
                  {mySkills.description}
                </p>
                <ScrollArea className="h-[360px] px-3">
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {mySkills.skillList.map((skill, index) => (
                      <Link
                        key={index}
                        href={skill.documentationUrl}
                        target="_blank"
                      >
                        <li>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="group flex h-[100px] w-full flex-col items-center justify-center gap-1 rounded-xl border-2 border-primary transition-all duration-200 hover:bg-secondary">
                                <skill.icon className="text-6xl transition-all duration-200 hover:text-primary group-hover:scale-110" />
                                <p>{skill.name}</p>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.development}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-4 px-3 text-center">
                <h3 className="px-3 text-2xl font-bold md:text-3xl">
                  {education.title}
                </h3>
                <p className="mx-auto px-3 text-sm  sm:text-base xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[360px] px-3">
                  <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex h-[160px] flex-col items-center justify-center gap-1 rounded-xl border-2 border-primary px-10 py-6 transition-all duration-200 hover:bg-secondary"
                      >
                        <span className="text-primary">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full  ${
                              item.duration.includes("Atualmente")
                                ? "bg-green-500"
                                : "bg-primary-foreground"
                            }`}
                          ></span>
                          <p className="">{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center">
              <div className="flex flex-col gap-4 px-3 text-center">
                <h3 className="px-3 text-2xl font-bold md:text-3xl">
                  {about.title}
                </h3>
                <p className="mx-auto px-3 text-sm  sm:text-base xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[360px] px-3">
                  <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-primary p-2 transition-all duration-200 hover:bg-secondary"
                      >
                        <span className="text-center text-base text-primary">
                          {item.fieldName}
                        </span>
                        <span className="text-center text-lg ">
                          {item.fieldValue}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
