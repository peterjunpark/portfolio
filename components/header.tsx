"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/siteData";

export default function Header() {
  return (
    <header className="relative z-[999]">
      <motion.div
        // Centering: use left-1/2 to start the header from the bisection --then, translate -50%.
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none
      border border-white border-opacity-40
      bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
      sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }} // motion overrides css translate
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-stone-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex h-3/4 items-center justify-center"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center p-3 transition hover:text-stone-950"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
