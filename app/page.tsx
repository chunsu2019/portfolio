"use client";
import SectionDivider from "@/components/section-divider";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

interface HighlightAnchorProps {
  highlightColor?: string;
}

const fillAnimation = keyframes`
  0% {
    background-size: 0% 100%; /* Start with no fill */
  }
  100% {
    background-size: 100% 100%; /* Fill completely */
  }
`;

const HighlightAnchor = styled(Link)<HighlightAnchorProps>`
  position: relative; /* Ensure relative positioning */
  overflow: hidden; /* Hide any overflowing content */
  margin: -2px -6px;
  padding: 2px 6px;
  user-select: none;
  background-image: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=${(
    props
  ) => props.highlightColor || "E3DC95"});
  background-repeat: no-repeat;
  background-position: 0 0;
  animation: ${fillAnimation} 1.5s ease forwards; /* Adjust duration and easing as needed */
`;

export default function Home() {
  return (
    <motion.div
      className="mt-[17rem] text-start w-[70%] md:w-[50%]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
      }}
    >
      <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
        Hi, I am Su
      </h1>

      <p className="text-lg mt-4 md:text-xl lg:text-2xl">
        A dedicated <b>IT enthusiast</b> eager to start a satisfying career in
        the tech industry.
      </p>

      <p className="text-lg mt-4 md:text-xl lg:text-2xl">
        read more{" "}
        <HighlightAnchor highlightColor="ffc702" href="/about">
          about me
        </HighlightAnchor>{" "}
        or{" "}
        <HighlightAnchor highlightColor="f18a00" href="/contact">
          contact me
        </HighlightAnchor>
        .
      </p>
    </motion.div>
  );
}
