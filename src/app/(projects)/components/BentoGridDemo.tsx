import { cn } from "../../../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto  mb-10">
      <BentoGrid className="m-8 sm:m-0">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

function ItemImage({ src, href }: { src: string; href: string }) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"
    >
      <Image
        className="h-full w-full object "
        width={500}
        height={500}
        src={src ?? ""}
        alt="project-img"
      />
    </Link>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
const items = [
  {
    title: "CryptoVerse",
    description:
      "The Platform where you can see all the details about digital currencies and explore it.",
    header: (
      <ItemImage
        src="/Images/crypto.png"
        href="https://crypto-verse07.netlify.app/"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Music Class",
    description: "Use of Aceternity UI, A Frontend Library.",
    header: (
      <ItemImage
        src="/Images/aceUI.png"
        href="https://aceternity-ui-library.vercel.app/"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Portfolio",
    description: "All About Me at one place. Made using Chakra UI.",
    header: (
      <ItemImage
        src="/Images/portfolio.jpg"
        href="https://omreactport.netlify.app/"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Weather App",
    description: "To learn the concepts of API and axios.",
    header: (
      <ItemImage
        src="/Images/weather.png"
        href="https://mytemperature.netlify.app/"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "MyRupee.com",
    description: "Firebase Application with ReactJS.",
    header: (
      <ItemImage
        src="/Images/MyRupee.png"
        href="https://rupee-website.web.app/"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "TechyStar",
    description: "Small ReactJS Project to practice the Concepts.",
    header: (
      <ItemImage
        src="/Images/techystar.png"
        href="https://reactservice.netlify.app/"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "resumifyX",
    description: "Developed a dynamic and user-friendly web application that allows users to create professional resumes with ease.",
    header: (
      <ItemImage
        src="/Images/resumifyX.png"
        href="https://resumifyx.vercel.app/"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
