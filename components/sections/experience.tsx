"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/lib/site-data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/atoms/section-heading";

export default function Experience() {
  const { ref } = useSectionInView({
    section: "experience",
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="sectionEndMargin scroll-mt-32 text-center leading-7"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{exp.title}</h3>
              <p className="!mt-0 font-normal">{exp.location}</p>
              <p className="!mt-1 !font-normal text-stone-700">
                {exp.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
