"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/assets/frederic-perez-RDNAtCk5rJ8-unsplash.jpg";

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
    <section
      id="top"
      className="relative isolate min-h-screen flex flex-col justify-end overflow-hidden px-6 md:px-10 pt-24 pb-32 md:pb-32"
    >
      <Image
        src={heroImage}
        alt=""
        aria-hidden
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="-z-10 absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"
      />
      <div aria-hidden className="grain -z-10 absolute inset-0" />

      <motion.div variants={parent} initial="hidden" animate="show" className="max-w-6xl">
        <motion.h1
          variants={child}
          className="text-display font-sans font-medium"
        >
          Andri Vogt
        </motion.h1>
        <motion.p
          variants={child}
          className="font-mono text-[length:var(--text-mono)] uppercase tracking-[0.08em] text-white/70 mt-8 md:mt-10"
        >
          designer · product owner
        </motion.p>
      </motion.div>
    </section>
  );
}
