"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/lib/contexts/active-section-context";
import avatar from "@/public/profile.jpg";
import {
  TbArrowRight,
  TbHandRock,
  TbDownload,
  TbBrandGithub,
  TbBrandLinkedin,
} from "react-icons/tb";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const { setActiveSection, lastClickTime } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection("intro");
    }
  }, [inView, setActiveSection, lastClickTime]);

  return (
    <section
      id="intro"
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-[69rem] text-center sm:mb-0"
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
          className="text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          consequatur repellendus ratione doloribus, optio nulla nisi totam
          provident quisquam odio ad. Culpa ducimus similique omnis ipsam
          officiis iste delectus perspiciatis.
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
          gap-2 rounded-full bg-stone-800 px-7 py-3 text-white outline-none
          transition hover:scale-110 hover:bg-stone-950 focus:scale-110 active:scale-105"
        >
          Contact me here{" "}
          <TbArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>
        <a
          download
          href="/PeterPark_CV_dev.pdf"
          target="_blank"
          className="group flex cursor-pointer items-center
          gap-2 rounded-full border border-black/10 bg-white px-7 py-3 text-stone-900 outline-none
          transition hover:scale-110 focus:scale-110 active:scale-105"
        >
          Download CV{" "}
          <TbDownload className="opacity-70 group-hover:scale-110" />
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
