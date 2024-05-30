"use client";

import Image from "next/image";
import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export function ThreeDCardDemo({ title, description, url, imgSrc }: any) {
  return (
    <CardContainer className="inter-var sm:w-[26rem] w-[18rem] h-[16rem] sm:h-[22rem] ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-green-500/30 border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  shadow-sm shadow-green-500/30">
        <CardItem
          translateZ="50"
          className="text-xl tracking-widest font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imgSrc}
            height="1000"
            width="1000"
            className="sm:h-60 h-30 w-full  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-14">
          <CardItem
            translateZ={20}
            as={Link}
            href={url}
            target="__blank"
            className="px-4 py-2 rounded-xl  bg-black dark:bg-white dark:text-black text-white text-xs font-bold tracking-wider "
          >
            Visit App →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={"https://github.com/Omi-Patel"}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-[#313131] dark:text-white text-white text-xs font-bold"
          >
            View Code !
          </CardItem>

          {/* <div className="flex flex-row items-center justify-center  ">
            <AnimatedTooltip items={skills} />
          </div> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}
