"use client";

import React from "react";
import { motion } from "framer-motion";

type DividerProps = { animate?: boolean };

export default function Divider({ animate }: DividerProps) {
  return (
    <motion.div
      {...(animate && {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.135 },
      })}
      className="my-24 hidden h-16 w-1 rounded-full bg-stone-200 sm:block"
    ></motion.div>
  );
}
