"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";

export default function page() {
  return (
    <motion.section
      className="flex flex-col mb-28 w-[85%] text-md leading-8 sm:mb-40 gap-5 md:w-[70%] md:leading-9 md:text-xl lg:w-[55%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex items-center justify-center select-none pointer-events-none mt-5 mb-10">
        <div className="relative outline-none">
          <Image
            src="/me.jpg"
            alt="Picture of Chunyou Su"
            width="192"
            height="192"
            className="rounded-full w-28 h-28 border-[0.35rem] border-white object-cover"
          />
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <SectionHeading>about me</SectionHeading>
      <p>
        Hello! I&apos;m Su, a recent graduate with a degree in{" "}
        <span className="font-medium">Software Engineering</span>, enthusiastic
        about venturing into the vibrant realm of technology. My academic
        journey instilled in me a solid foundation in software engineering
        principles and a passion to continually grow and adapt.
      </p>

      <p>
        With a fresh CompTIA A+ certification under my belt, I&apos;m armed with
        fundamental IT knowledge and a keen appetite to explore the vast
        opportunities in the tech landscape.
      </p>

      <p className="mb-5">
        I&apos;m on an exciting learning journey, continually building my
        skills. Currently, I&apos;m focusing on honing my abilities in network
        administration. I&apos;m working towards achieving the Network+
        certification to broaden my understanding and proficiency in networking.
      </p>
    </motion.section>
  );
}
