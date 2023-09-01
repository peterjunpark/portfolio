"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="my-24 hidden h-16 w-1 rounded-full bg-stone-200 sm:block"
    ></motion.div>
  );
}
