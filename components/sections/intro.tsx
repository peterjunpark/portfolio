"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { intro } from "@/lib/siteData";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://placekitten.com/400/400"
              alt="placeholder"
              width="192"
              height="192"
              priority={true}
              className="h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            🫣
          </motion.span>
        </div>
      </div>

      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]">
        {intro}
      </p>
    </section>
  );
}
