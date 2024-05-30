"use client";
import React from "react";
import { TabsDemo } from "../components/TabsDemo";
import { BentoGridDemo } from "../components/BentoGridDemo";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import projects from "../data/projects";
import Certification from "../components/Certification";

const page = () => {
  // console.log(projects, "PROJECTS");

  return (
    <>
      <TracingBeam className="min-h-screen relative">
        <div className="min-h-screen mt-48 sm:mt-28 ">
          {/* <h1 className="text-center text-3xl py-4">BEST PROJECTS!</h1> */}
          <h1 className="mt-6 sm:text-3xl text-2xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-green-400/40 bg-opacity-50 py-4">
            BEST{" "}
            <span className="space-y-0 border-b-4 border-b-green-400">
              PROJECTS!
            </span>{" "}
            <br />
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 ">
            {projects.bestProjects.map((project, index) => {
              return (
                <div key={index}>
                  <ThreeDCardDemo
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    imgSrc={project.imgSrc}
                  />
                </div>
              );
            })}
          </div>

          <div>
            <h1 className="mt-6 sm:text-3xl text-2xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-green-400/40 bg-opacity-50 py-10">
              ALL{" "}
              <span className="space-y-0 border-b-4 border-b-green-400">
                PROJECTS!
              </span>{" "}
              <br />
            </h1>
            <BentoGridDemo />
          </div>
        </div>
      </TracingBeam>

      <div>
        <h1 className="mt-2 sm:text-4xl text-2xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-green-400/40 bg-opacity-50 sm:py-6 tracking-wide">
          CERTIFICATES !
          <br />
        </h1>
        <Certification />
      </div>
    </>
  );
};

export default page;
