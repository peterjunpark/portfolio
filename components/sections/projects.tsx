import React, { useRef } from "react";
import SectionHeading from "@/components/atoms/section-heading";
import { projects } from "@/lib/site-data";
import Project from "@/components/atoms/project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 ">
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
