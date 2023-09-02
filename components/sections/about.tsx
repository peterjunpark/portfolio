"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/atoms/section-heading";

export default function About() {
  const { ref } = useSectionInView({
    section: "about",
    activeThreshold: 0.9,
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="sectionEndMargin max-w-[45rem] scroll-mt-32 text-center leading-7"
    >
      <SectionHeading>More about me</SectionHeading>
      <p className="mb-3">
        As a full-stack web developer, I have honed my skills in both front-end
        and back-end technologies. From creating responsive and visually
        appealing user interfaces to architecting robust server-side solutions,
        I&apos;m equipped to handle the entire development stack. As a technical
        writer, I have intimate familiarity with the docs-as-code approach.
      </p>
    </motion.section>
  );
}
