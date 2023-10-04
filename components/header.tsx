"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999]">
      <motion.nav
        className="w-[100%] py-1 bg-[#f7f7f7] shadow-xl fixed top-0 md:py-2"
        initial={{ opacity: 0, y: -100, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
      >
        <ul className="flex flex-wrap gap-5 items-center justify-center px-5 text-sm font-semibold text-[#2b2a2f] md:text-xl">
          {links.map((link) => {
            return (
              <li
                className="h-3/4 flex items-center justify-center"
                key={link.hash}
              >
                <Link
                  href={link.hash}
                  className="flex w-full items-center transition-all justify-center px-3 rounded-lg py-1 my-2 hover:text-white hover:bg-[#2b2a2f]"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </header>
  );
}
