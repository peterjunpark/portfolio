"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/site-data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSection } from "@/lib/contexts/active-section-context";
import SectionHeading from "@/components/atoms/section-heading";
import Project from "@/components/atoms/project";

export default function Projects() {
  const { ref } = useSectionInView({
    section: "projects",
  });

  return (
    <section id="projects" ref={ref} className="scroll-mt-32">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
