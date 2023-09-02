"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/site-data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/atoms/section-heading";
import Project from "@/components/atoms/project";

export default function Projects() {
  const { ref } = useSectionInView({
    section: "projects",
    activeThreshold: 0.7,
  });

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15 }}
      className="sectionEndMargin scroll-mt-32"
    >
      <SectionHeading>Featured projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
