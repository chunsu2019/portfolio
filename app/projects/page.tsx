"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.section
      className="w-[80%] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-wrap justify-center mt-11 gap-10">
        <ProjectCard
          title="Portfolio"
          description="Created my portfolio website using React, Next.js, and Tailwind CSS. Its hosted on AWS using Amplify."
          imgUrl="/portfolio.png"
          githubUrl="https://chunyousu.com"
          siteUrl="https://github.com/chunsu2019/portfolio"
        />

        <ProjectCard
          title="Web Timer Chrome Extension"
          description="A Chrome extension that allows users to set a timer with custom actions. It will redirects users to a chosen URLs on a new window or plays a default alarm sounds on completion"
          imgUrl="/webtimer.png"
          githubUrl="https://github.com/chunsu2019/WebCT"
          siteUrl="https://chrome.google.com/webstore/detail/webct/ojangnfohknlejfjbaggfinneepfjnhb"
        />

        <ProjectCard
          title="Calculator - Frontend Master Challenge"
          description="Implemented a solution for the Calculator app challenge from Frontend Mentor, faithfully recreating the calculator's functionalities and design to meet the challenge criteria."
          imgUrl="/calculator-challenge.png"
          githubUrl="https://github.com/chunsu2019/FEM_Challenge-Calculator"
          siteUrl="https://chunsu2019.github.io/FEM_Challenge-Calculator/"
        />
      </div>
    </motion.section>
  );
};

export default page;
