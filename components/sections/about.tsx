"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/lib/contexts/active-section-context";
import SectionHeading from "@/components/atoms/section-heading";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, lastClickTime } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection("about");
    }
  }, [inView, setActiveSection, lastClickTime]);

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] scroll-mt-32 text-center leading-7 sm:mb-0"
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
