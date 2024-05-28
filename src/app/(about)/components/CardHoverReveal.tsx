import React from "react";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

import { GridPattern } from "./GridPattern";
// import { GridPattern } from "./GridPattern";
export const CardHoverReveal = () => {
  const data = [
    {
      id: 4,
      title: "Frontend Development",
      description: `As a Frontend Developer, I create engaging and user-friendly interfaces using HTML, CSS, and JavaScript. My expertise includes building responsive designs and optimizing web performance,  to deliver seamless user experiences.`,
      icon: <FaLaptopCode className="h-9 w-9 text-gray-500" />,
      pattern: {
        y: 16,
        squares: [
          [0, 1],
          [1, 3],
        ],
      },
    },

    {
      id: 5,
      title: "Backend Development",
      description: `In Backend Development, I focus on creating robust server-side applications using technologies such as Node.js, Express, and Databases like MongoDB. I design and implement APIs, manage server configurations, and ensure the security and efficiency of web applications.`,
      icon: <FaServer    className="h-8 w-8 text-gray-500" />,
      pattern: {
        y: 16,
        squares: [
          [0, 1],
          [1, 3],
        ],
      },
    },

    {
      id: 6,
      title: "Java Programming",
      description: `With a strong foundation in Java programming, I wrote effective code for the solution. My experience includes Object-Oriented Design, Data Structures, and Algorithms, enabling me to build scalable and maintainable software solutions.`,
      icon: <FaJava className="h-9 w-9 text-gray-500" />,
      pattern: {
        y: 16,
        squares: [
          [0, 1],
          [1, 3],
        ],
      },
    },
  ];

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className=" flex flex-col sm:flex-row justify-center items-center gap-8 m-4 p-4">
      {data.map((item, id) => {
        return (
          <div
            key={id}
            onMouseMove={onMouseMove}
            className="group rounded-2xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-8 relative max-w-sm"
          >
            <Effect {...item.pattern} mouseX={mouseX} mouseY={mouseY} />
            <div className="relative z-10 ">
              <span>{item.icon}</span>
              <h3 className="mt-4 font-bold text-2xl  tracking-wide leading-6 antialiased bg-clip-text text-transparent bg-gradient-to-l from-neutral-50 to-green-400 bg-opacity-50">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-700 tracking-wide leading-6 antialiased dark:text-slate-100">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function Effect({ mouseX, mouseY, ...gridProps }: any) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#2e6058cd] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}
