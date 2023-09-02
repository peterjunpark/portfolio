"use client";

import React from "react";
import { projects } from "@/lib/site-data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/atoms/section-heading";
import Project from "@/components/atoms/project";

export default function Projects() {
  const { ref } = useSectionInView({
    section: "projects",
  });

  return (
    <section id="projects" ref={ref} className="sectionEndMargin scroll-mt-32">
      <SectionHeading>Featured projects</SectionHeading>
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
