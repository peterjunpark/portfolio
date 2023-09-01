"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/lib/siteData";

type ProjectProps = (typeof projects)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // When to start/stop the animation
    offset: ["0 1", "1.33 1"],
  });

  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleTransform,
        opacity: opacityTransform,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section
        className="relative  max-w-[42rem] overflow-hidden rounded-lg border
    border-black/5 bg-stone-100 transition hover:bg-stone-200  group-even:pl-8 sm:h-[20rem] sm:pr-8"
      >
        <div
          className="flex h-full flex-col px-5 pb-6 pt-4
      group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-stone-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={`${title} project`}
          quality={95}
          className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl
        transition group-even:-left-40 group-even:right-[initial]
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 "
        />
      </section>
    </motion.div>
  );
}
