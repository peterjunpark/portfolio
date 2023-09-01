import React, { useRef } from "react";
import SectionHeading from "@/components/atoms/section-heading";
import { projects } from "@/lib/siteData";
import Project from "@/components/atoms/project";

export default function Projects() {
  return (
    <section>
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
