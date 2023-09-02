"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/atoms/section-heading";

export default function About() {
  const { ref } = useSectionInView({
    section: "about",
    activeThreshold: 1,
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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        aspernatur exercitationem maiores iure earum inventore, facere quisquam
        voluptates quidem error. Deleniti impedit sequi commodi facere ut
        distinctio magnam earum facilis? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Dolorem aspernatur exercitationem maiores iure earum
        inventore, facere quisquam voluptates quidem error. Deleniti impedit
        sequi commodi facere ut distinctio magnam earum facilis? Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Dolorem aspernatur
        exercitationem maiores iure earum inventore, facere quisquam voluptates
        quidem error. Deleniti impedit sequi commodi facere ut distinctio magnam
        earum facilis?
      </p>
    </motion.section>
  );
}
