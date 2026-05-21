"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/assets/DSC00688.jpg";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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
      className="min-h-screen flex flex-col"
    >
      {/* main content area */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-center md:items-end flex-1 mt-[52px] md:mt-[56px] px-6 md:px-10">
        {/* desktop spacers for cols 1-2 */}
        <div className="hidden md:block" />
        <div className="hidden md:block" />

        {/* image — right-aligned on mobile, cols 3-4 desktop */}
        <motion.div
          variants={child}
          className="col-span-2 md:col-span-2 flex items-center justify-end py-6 md:py-10 md:mb-16"
        >
          <div className="w-[65%] md:w-full">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={heroImage}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 50vw, 65vw"
                className="object-cover grayscale"
              />
            </div>
            <span className="text-mono-label block mt-3">fig. 01 | me</span>
          </div>
        </motion.div>
      </div>

      {/* name at bottom — spans both cols on mobile */}
      <motion.div variants={child} className="px-6 md:px-10 pb-8 md:pb-12">
        <h1
          className="font-sans font-black uppercase leading-[0.85] tracking-[-0.05em]"
          style={{ fontSize: "clamp(4rem, 15vw, 10rem)" }}
        >
          Andri<br />Vogt.
        </h1>
        <span className="text-mono-label block mt-4">ux designer | product owner</span>
      </motion.div>
    </motion.section>
  );
}
