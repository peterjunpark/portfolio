"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/atoms/section-heading";

export default function About() {
  const { ref } = useSectionInView({
    section: "about",
    activeThreshold: 0.7,
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
        In the sphere of development, my go-to toolkit is the MERN stack.{" "}
        <span className="font-semibold">Continual learning</span> is integral to
        my approach, whether it involves creating engaging front-end interfaces
        or designing server-side solutions. My goal is to deliver code that
        aligns with both user expectations and business objectives. And my
        commitment to detail and adherence to best practices help ensure the
        dependability of my work.
        <br />
        <br />
        As a technical writer, I play a vital role in bridging the gap between
        complex technical concepts and end-users. My dedication to the{" "}
        <span className="font-semibold">docs-as-code</span> methodology,
        including modularity and version control, means that I treat
        documentation as a fundamental part of the development process. I
        collaborate closely with development teams to ensure that documentation
        evolves in tandem with the product, providing users with up-to-date and
        accessible resources. From API documentation to user guides, I strive to
        make technical information approachable, contributing to a seamless and
        satisfying user journey.
      </p>
    </motion.section>
  );
}
