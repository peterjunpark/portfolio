"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/site-data";
import { useActiveSection } from "@/lib/contexts/active-section-context";
import SectionHeading from "@/components/atoms/section-heading";
import Project from "@/components/atoms/project";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, lastClickTime } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection("projects");
    }
  }, [inView, setActiveSection, lastClickTime]);

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
