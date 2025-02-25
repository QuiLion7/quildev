"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { education, experience, mySkills, about } from "../utils/data";
import Image from "next/image";
import {
  CalendarDays,
  GraduationCap,
  Briefcase,
  User,
  Code,
} from "lucide-react";
import { Skill } from "../utils/data";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeIn" },
      }}
      className="flex min-h-[87.28vh] w-full flex-col items-center justify-center px-4 py-12 pt-20 sm:mt-0 sm:pt-24"
    >
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Sobre Mim
          </h1>
        </motion.div>
        <Tabs defaultValue="about" className="w-full">
          <div className="mb-2 flex w-full justify-center">
            <TabsList className="grid w-full max-w-3xl grid-cols-2 gap-4 rounded-xl bg-background/80 p-2 md:grid-cols-4">
              <TabsTrigger
                value="about"
                className="flex items-center gap-2 text-secondary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="hidden sm:inline">Sobre</span>
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="flex items-center gap-2 text-secondary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="hidden sm:inline">Experiência</span>
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="flex items-center gap-2 text-secondary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="hidden sm:inline">Formação</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex items-center gap-2 text-secondary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="hidden sm:inline">Habilidades</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="rounded-xl bg-background/80 p-6 backdrop-blur-sm md:p-8">
            {/* Sobre Mim */}
            <TabsContent value="about" className="mt-0">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1">
                  <motion.h2
                    {...fadeIn}
                    className="mb-4 text-2xl font-bold text-primary"
                  >
                    {about.title}
                  </motion.h2>
                  <motion.div
                    {...fadeIn}
                    className="space-y-4 text-muted-foreground"
                  >
                    <p className="text-justify text-base leading-relaxed">
                      {about.description}
                    </p>
                  </motion.div>

                  <motion.div {...fadeIn} className="mt-8">
                    <h3 className="mb-4 text-xl font-semibold">
                      Informações Pessoais
                    </h3>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {about.personalInfo &&
                        about.personalInfo.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="font-medium text-primary">
                              {item.fieldName}:
                            </span>
                            <span className="text-muted-foreground">
                              {item.value}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div
                  {...fadeIn}
                  className="flex flex-1 items-center justify-center"
                >
                  <div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl border-2 border-primary/30 md:h-[350px] md:w-[350px]">
                    <Image
                      src="/quilion.png"
                      alt="Quilion Oliveira"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Experiência */}
            <TabsContent value="experience" className="mt-0">
              <motion.h2
                {...fadeIn}
                className="mb-6 text-2xl font-bold text-primary"
              >
                {experience.title}
              </motion.h2>
              <motion.p
                {...fadeIn}
                className="mb-8 text-base text-muted-foreground"
              >
                {experience.description}
              </motion.p>

              <div className="grid gap-6 md:grid-cols-2">
                {experience.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.1 + 0.3,
                        duration: 0.5,
                      },
                    }}
                    className="group rounded-xl border-2 border-primary/30 bg-background/50 p-6 transition-all duration-300 hover:border-primary hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <Badge
                        variant={
                          item.duration.includes("Atualmente")
                            ? "default"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        <CalendarDays className="mr-1 h-3 w-3" />
                        {item.duration}
                      </Badge>
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                      {item.position}
                    </h3>
                    <p className="text-muted-foreground">{item.company}</p>
                    {item.description && (
                      <p className="mt-4 border-t border-primary/10 pt-4 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Formação */}
            <TabsContent value="education" className="mt-0">
              <motion.h2
                {...fadeIn}
                className="mb-6 text-2xl font-bold text-primary"
              >
                {education.title}
              </motion.h2>
              <motion.p
                {...fadeIn}
                className="mb-8 text-base text-muted-foreground"
              >
                {education.description}
              </motion.p>

              <div className="grid gap-6 md:grid-cols-2">
                {education.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.1 + 0.3,
                        duration: 0.5,
                      },
                    }}
                    className="group rounded-xl border-2 border-primary/30 bg-background/50 p-6 transition-all duration-300 hover:border-primary hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        <CalendarDays className="mr-1 h-3 w-3" />
                        {item.duration}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {item.degree}
                      </Badge>
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                      {item.course || item.title || "Curso"}
                    </h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Habilidades */}
            <TabsContent value="skills" className="mt-0">
              <motion.h2
                {...fadeIn}
                className="mb-6 text-2xl font-bold text-primary"
              >
                {mySkills.title}
              </motion.h2>
              <motion.p
                {...fadeIn}
                className=" text-base text-muted-foreground"
              >
                {mySkills.description}
              </motion.p>

              <div className="mt-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {mySkills.map((skill: Skill, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="flex flex-col items-center rounded-lg border border-primary/20 bg-card p-4 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                    >
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
