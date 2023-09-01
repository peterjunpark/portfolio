"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/atoms/section-heading";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-relaxed sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        aspernatur exercitationem maiores iure earum inventore, facere quisquam
        voluptates quidem error. Deleniti impedit sequi commodi facere ut
        distinctio magnam earum facilis?
      </p>
    </motion.section>
  );
}
