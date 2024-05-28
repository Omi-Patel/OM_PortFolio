import Link from "next/link";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { SparklesCore } from "../ui/sparkles";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-300 font-medium bg-gray-900/35 body-font fixed top-0 w-full shadow-md z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap justify-center items-center text-base md:ml-auto ">
            <Link href={"/"} className="mr-6 hover:text-white">
              HOME
            </Link>

            <Link href={"/about"} className="mr-6 hover:text-white">
              ABOUT
            </Link>
            <Link href={"/projects"} className="mr-6 hover:text-white">
              PROJECT
            </Link>
            <Link href={"/contact"} className=" hover:text-white">
              CONTACT
            </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            
            <span className="ml-3 text-xl xl:block lg:hidden">
              <h1 className="font-bold text-xl tracking-widest text-center text-white relative z-20">
                JavaScriptor.
              </h1>
              <div className="relative">
                {/* Gradients */}
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-25 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-3/4 blur-sm" />
                <div className="absolute inset-x-25 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4" />
              </div>
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1600}
                className="w-18 h-3"
                particleColor="#FFFFFF"
              />
            </span>
          </a>

          {/* resume button  */}

          <div className="lg:w-2/5 mt-4 sm:mt-0 inline-flex lg:justify-end ml-5 lg:ml-0">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>RESUME</span>
            </HoverBorderGradient>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
