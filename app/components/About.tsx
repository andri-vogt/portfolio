"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="px-6 md:px-10"
    >
      <motion.div
        variants={child}
        className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-4 md:gap-x-10 mb-20 md:mb-28"
      >
        <h2 className="text-mono-label">about</h2>
        <span className="text-mono-label md:pt-2">profile</span>
      </motion.div>

      <motion.div
        variants={child}
        className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-10 md:gap-x-10"
      >
        <div className="max-w-2xl">
          <div className="font-sans text-xl md:text-2xl leading-[1.4]">
            <p>
              I&apos;m a designer and developer based in Zurich, working at the
              seam between editorial design and quiet, usable software. Most of
              what I make is for small teams who want one careful thing rather
              than ten hurried ones.
            </p>
            <p className="mt-6">
              My practice is built around restraint — typography that earns the
              page, interfaces that don&apos;t announce themselves, and tools
              that stay out of their own way.
            </p>
          </div>

          <Link
            href="/cv"
            className="group mt-8 md:mt-10 inline-flex items-baseline gap-3 font-sans text-xl md:text-2xl leading-[1.4]"
          >
            <span className="link-underline">Read the full CV</span>
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-5 md:pt-3 md:translate-y-1">
          <div className="flex flex-col gap-1">
            <span className="text-mono-label">based</span>
            <span className="font-mono text-sm">Zurich, CH</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-mono-label">focus</span>
            <span className="font-mono text-sm">design + engineering</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-mono-label">availability</span>
            <span className="font-mono text-sm">selected projects, 2026</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
