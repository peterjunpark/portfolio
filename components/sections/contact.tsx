"use client";

import React from "react";
import { motion } from "framer-motion";
import { TbMailShare } from "react-icons/tb";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/atoms/section-heading";

export default function Contact() {
  const { ref } = useSectionInView({
    section: "contact",
    activeThreshold: 0.5,
  });
  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="sectionEndMargin w-[min(100%, 38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-4 text-stone-700">
        Please contact me directly at{" "}
        <a href="mailto:peterjpark@pm.me" className="underline">
          peterjpark@pm.me
        </a>{" "}
        or through this form.
      </p>
      <form className="align-center mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="borderDim h-14 rounded-lg p-4 focus:outline-stone-600"
        />
        <textarea
          placeholder="Your message"
          className="borderDim my-3 h-52 rounded-lg p-4 focus:outline-stone-600"
        />
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] items-center justify-center
          gap-2 rounded-full bg-stone-800 text-white outline-none
          transition-all hover:scale-110 hover:bg-stone-950 focus:scale-110 active:scale-105"
        >
          Submit{" "}
          <TbMailShare className="text-xl opacity-70 transition-all group-hover:-translate-y-[0.1rem] group-hover:translate-x-[0.1rem]" />
        </button>
      </form>
    </motion.section>
  );
}
