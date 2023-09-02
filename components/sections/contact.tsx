"use client";

import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/lib/actions/send-email";
import SectionHeading from "@/components/atoms/section-heading";
import SubmitButton from "@/components/atoms/submit-button";

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
        Please contact me at{" "}
        <a href="mailto:peterjpark@pm.me" className="underline">
          peterjpark@pm.me
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (data) => {
          // Server action
          const { success, error } = await sendEmail(data);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Thanks for reaching out! I'll get back to you soon.");
        }}
        className="align-center mt-10 flex flex-col"
      >
        <input
          name="email"
          type="email"
          maxLength={69}
          placeholder="Your email"
          required
          className="borderDim h-14 rounded-lg p-4 focus:outline-stone-600"
        />
        <textarea
          name="message"
          maxLength={6969}
          placeholder="Your message"
          required
          className="borderDim my-3 h-52 rounded-lg p-4 focus:outline-stone-600"
        />
        <div className="mr-2 mt-1 flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </motion.section>
  );
}
