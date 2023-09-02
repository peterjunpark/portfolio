"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import avatar from "@/public/profile.jpg";
import {
  TbArrowRight,
  TbHandRock,
  TbDownload,
  TbBrandGithub,
  TbBrandLinkedin,
} from "react-icons/tb";

export default function Intro() {
  const { ref } = useSectionInView({
    section: "intro",
    activeThreshold: 0.9,
  });

  return (
    <section
      id="intro"
      ref={ref}
      className="sectionEndMargin mt-7 max-w-[50rem] scroll-mt-[69rem] text-center sm:mt-36"
    >
      <div className="flex items-center justify-center">
        {/* Avatar */}
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={avatar}
              alt="Peter Park's handsome face"
              priority={true}
              quality={95}
              className="h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl text-stone-900"
          >
            <TbHandRock className="rotate-12 -scale-x-100 opacity-80" />
          </motion.span>
        </div>
      </div>
      {/* Intro paragraph */}
      <div className="mb-10 mt-4 px-4 font-medium !leading-[1.5]">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="my-5 text-3xl lowercase text-stone-700"
        >
          Hi. I&apos;m Peter.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-normal"
        >
          I&apos;m <span className="font-semibold">Peter</span> Jun Park—a{" "}
          <span className="font-semibold">full-stack web developer</span> with a
          background in{" "}
          <span className="font-semibold">technical documentation</span>. My
          commitment to <span className="italic">clear communication</span> and{" "}
          <span className="italic">problem-solving</span>, honed through my
          experiences, complements my passion for creating robust web solutions.
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
      >
        <Link
          href="#contact"
          className="group mr-2 flex scale-105 items-center
          gap-2 rounded-full bg-stone-800 px-7 py-3 lowercase text-white
          outline-none transition hover:scale-110 hover:bg-stone-950 focus:scale-110 active:scale-105"
        >
          Contact me here{" "}
          <TbArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>
        <a
          href="/PeterPark_CV_dev.pdf"
          target="_blank"
          className="group flex cursor-pointer items-center
          gap-2 rounded-full border border-black/10 bg-white px-7 py-3 lowercase text-stone-900
          outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
        >
          Get My CV{" "}
          <TbDownload className="-translate-y-[0.04rem] opacity-70 group-hover:translate-y-[0.08rem]" />
        </a>
        <a
          href="https://linkedin.com/in/qkr0wns"
          target="_blank"
          className="flex items-center gap-2 rounded-full border
          border-black/10 bg-white p-3 text-3xl text-stone-900 outline-none
          transition hover:scale-[1.15] hover:text-black focus:scale-[1.15] active:scale-110"
        >
          <TbBrandLinkedin className="group-hover:scale-[1.15]" />
        </a>
        <a
          href="https://github.com/qkr0wns"
          target="_blank"
          className="flex items-center gap-2 rounded-full border
          border-black/10 bg-white p-3 text-3xl text-stone-900 outline-none
          transition hover:scale-[1.15] hover:text-black focus:scale-[1.15] active:scale-110"
        >
          <TbBrandGithub className="group-hover:scale-[1.15]" />
        </a>
      </motion.div>
    </section>
  );
}
