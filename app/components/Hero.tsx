"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/assets/DSC00688.jpg";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <motion.section
      id="top"
      variants={parent}
      initial="hidden"
      animate="show"
      className="px-6 md:px-10 pt-20 md:pt-24 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
    >
      <motion.div variants={child} className="flex items-center justify-end md:justify-end pt-16 md:pt-0 md:col-start-2 md:row-start-1">
        <div className="relative aspect-[4/3] w-3/4 md:w-full max-w-md overflow-hidden">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </motion.div>
      <motion.div variants={child} className="flex items-end pb-12 md:pb-16 md:col-start-1 md:row-start-1">
        <div>
          <h1 className="text-display font-sans font-medium">Andri Vogt</h1>
          <p className="text-mono-label mt-4 md:mt-6">designer · product owner</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
