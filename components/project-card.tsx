import Image from "next/image";
import React from "react";
import { BsGithub, BsLink, BsYoutube } from "react-icons/bs";
import { inherits } from "util";

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  githubUrl?: string;
  siteUrl?: string;
};

const ProjectCard = ({
  title,
  description,
  githubUrl,
  siteUrl,
  imgUrl,
}: ProjectCardProps) => {
  return (
    <div className="flex p-4 shadow-2xl rounded-lg bg-white w-[35rem] h-[12rem] md:h-[15rem] lg:h-[19rem]">
      {/* Left side (Title and Description) */}
      <div className="flex flex-col w-6/12 mt-5 overflow-auto">
        <h2 className="text-[0.7rem] font-bold mb-3 md:text-xl">{title}</h2>
        <p className="text-gray-700 text-[0.5rem] leading-3 md:text-[1rem] md:leading-5 lg:text-[1.1rem] lg:leading-7">
          {description}
        </p>
      </div>

      {/* Right side (Image) */}
      <div className="relative flex flex-col ml-5 w-6/12 justify-center text-white">
        <img
          src={imgUrl}
          alt="Card Image"
          className="border-solid object-fill border-2 border-gray-500 rounded-sm h-[7rem] md:h-[9rem] lg:h-[10rem]"
        />
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-[50%] bg-gray-900 left-0 h-[7rem] opacity-0 hover:opacity-80 cursor-pointer md:h-[9rem] lg:h-[10rem]"
        >
          <BsGithub className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-5xl" />
        </a>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-[50%] bg-gray-900 right-0 h-[7rem] opacity-0 hover:opacity-80 cursor-pointer md:h-[9rem] lg:h-[10rem]"
        >
          <BsLink className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-5xl" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
