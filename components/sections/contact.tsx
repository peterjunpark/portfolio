"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/atoms/section-heading";

export default function Contact() {
  const { ref } = useSectionInView({
    section: "contact",
  });
  return (
    <section id="contact" ref={ref}>
      <SectionHeading>Contact me</SectionHeading>
    </section>
  );
}
