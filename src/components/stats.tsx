"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { mainSkillsEmphasis } from "@/app/utils/data";
import Photo from "./photo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const Stats = () => {
  const [user, setUser] = useState("QuiLion7");

  interface GitHubUserProps {
    avatar_url: string;
    url: string;
    name: string | null;
    email: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
  }

  // interface GitHubUserFollowingProps {
  //   avatar_url: string;
  //   login: string;
  //   html_url: string;
  // }

  const [infoUser, setInfoUser] = useState<GitHubUserProps>();
  // const [infoUserFollowing, setInfoUserFollowing] = useState<GitHubUserFollowingProps[]>();

  useEffect(() => {
    async function getInfoUser() {
      const data = await fetch(`http://api.github.com/users/${user}`);
      // const followingUrl = await fetch(
      //   `https://api.github.com/users/${user}/followers`,
      // );

      // const repoUrl = await fetch(
      //   `https://api.github.com/users/QuiLion7/repos`,
      // );

      const userData = await data.json();
      // const userFollowingUrl = await followingUrl.json();

      if (userData) {
        setInfoUser(userData);
      }

      // if (userFollowingUrl) {
      //   setInfoUserFollowing(userFollowingUrl);
      // }
    }

    getInfoUser();
  }, [user]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="grid w-full grid-cols-2 items-center justify-center gap-2 md:grid-cols-4 xl:max-w-none">
        <div className="flex flex-1 items-center justify-center gap-2">
          <CountUp
            className="text-3xl font-extrabold lg:text-5xl"
            duration={5}
            start={0}
            delay={1.5}
            end={mainSkillsEmphasis.length}
          />
          <p className="max-w-[100px] text-xs sm:text-base md:text-lg lg:text-xl">
            Tecnologias Dominadas
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <CountUp
            className="text-3xl font-extrabold lg:text-5xl"
            duration={5}
            start={0}
            delay={1.5}
            end={Number(infoUser?.public_repos || 24)}
          />
          <p className="max-w-[100px] text-xs sm:text-base md:text-lg lg:text-xl">
            Repositórios Públicos
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center gap-2">
          <CountUp
            className="text-3xl font-extrabold lg:text-5xl"
            duration={5}
            start={0}
            delay={1.5}
            end={Number(infoUser?.followers || 16)}
          />
          <p className="max-w-[100px] text-xs sm:text-base md:text-lg lg:text-xl">
            Devs Conectados
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center gap-2">
          <p className="mr-[-8px] text-3xl font-extrabold xl:text-5xl">+</p>
          <CountUp
            className="text-3xl font-extrabold lg:text-5xl"
            duration={5}
            start={0}
            delay={1.5}
            end={900}
          />
          <p className="max-w-[100px] text-xs sm:text-base md:text-lg lg:text-xl">
            Code Commits
          </p>
        </div>
      </div>
      {/* <Carousel
        opts={{
          loop: true,
        }}
        className="mt-4 flex w-full items-center justify-center"
      >
        <CarouselContent className="mb-4 h-[100px] px-12">
          {Array.isArray(infoUserFollowing) &&
            infoUserFollowing?.map((following, index) => (
              <CarouselItem key={index} className="basis-1/15">
                <div className="p-0">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center  p-1">
                      <Link
                        key={index}
                        href={following.html_url}
                        target="_blank"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Photo
                                imageUrl={following.avatar_url}
                                imageClasses="h-[38px] w-[38px] mix-blend-normal xl:h-[48px] xl:w-[48px]"
                                svgClasses="h-[48px] w-[48px] xl:h-[58px] xl:w-[58px]"
                              />
                            </TooltipTrigger>
                            <TooltipContent side="bottom" align="center">
                              <span className="z-50 text-xs">
                                {following.login}
                              </span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel> */}

      {/* {infoUserFollowing?.map((following, index) => (
          <Link key={index} href={following.html_url} target="_blank">
            <li>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <Photo
                      imageUrl={following.avatar_url}
                      imageClasses="h-[58px] w-[58px] mix-blend-normal xl:h-[58px] xl:w-[58px]"
                      svgClasses="h-[68px] w-[68px] xl:h-[68px] xl:w-[68px]"
                    />
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="center">
                    <span className="text-xs ">{following.login}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          </Link>
        ))} */}
    </div>
  );
};

export default Stats;
