"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import aboutImage from "@/assets/jeevan-katel--2PE4LUihDQ-unsplash.jpg";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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
      viewport={{ once: true, amount: 0.1 }}
      className="mt-16 md:mt-24"
    >
      <motion.div
        variants={child}
        className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 px-6 md:px-10 items-start"
      >
        {/* image — cols 1-2 on desktop, last on mobile */}
        <div className="order-3 md:order-1 col-span-2 md:col-span-2 md:mt-60">
          <div className="relative aspect-[4/3] overflow-hidden max-w-[280px] md:max-w-none">
            <Image
              src={aboutImage}
              alt=""
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 50vw, 280px"
              className="object-cover grayscale"
            />
          </div>
          <span className="text-mono-label block mt-3">fig. 02 | mountains</span>
        </div>

        {/* title — col 1 on mobile, col 3 on desktop */}
        <div className="order-1 md:order-2 py-10 md:py-14">
          <h3 className="text-section-title">About me</h3>
        </div>

        {/* text — col 2 on mobile, col 4 on desktop */}
        <div className="order-2 md:order-3 py-10 md:py-14">
            <div className="font-sans text-xl md:text-2xl leading-[1.4] font-medium">
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
              className="mt-8 md:mt-10 inline-block font-sans text-xl md:text-2xl leading-[1.4] font-medium link-underline"
            >
              [ Read the full CV ]
            </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
