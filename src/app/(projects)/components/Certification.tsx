"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React, { useEffect } from "react";

const Certification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = [
    {
      title: "Frontend Developer (React)",
      link: "https://www.hackerrank.com/certificates/d240dce1eb78",
      description:
        "I have earned the Frontend Developer (React) Certificate from HackerRank. This certification showcases my skills in building web applications using React, CSS, and JavaScript. It validates my proficiency in creating dynamic and responsive user interfaces, ensuring best practices and efficient performance in frontend development.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/react.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Java (Basic)",
      link: "https://www.hackerrank.com/certificates/6803b60936c6",
      description:
        "I have earned the Java (Basic) Certificate from HackerRank, demonstrating my foundational knowledge of the Java programming language. This certification covers essential topics such as classes, data structures, inheritance, and exception handling. It validates my ability to write and understand basic Java code, showcasing my proficiency in both Java 7 and Java 8.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/java.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Problem Solving (Basic)",
      link: "https://www.hackerrank.com/certificates/d76d489dca65",
      description:
        "I have earned the Problem Solving (Basic) Certificate from HackerRank. This certification validates my proficiency in fundamental data structures and algorithms, including arrays, strings, sorting, and searching. It demonstrates my ability to tackle and solve basic computational problems effectively, showcasing my problem-solving skills and foundational programming knowledge.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/psolving.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="sm:px-12 py-6">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Certification;
