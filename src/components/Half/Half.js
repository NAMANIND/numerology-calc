"use client";
import React from "react";
import { motion } from "framer-motion";

function Half() {
  // animate when visible
  return (
    <motion.div
      initial={{ opacity: 1, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="h-1/2  text-white flex items-center justify-center text-4xl font-bold"
    >
      <img src="/chakra-half.png" alt="Chakra" className="w-full" />
    </motion.div>
  );
}

export default Half;
