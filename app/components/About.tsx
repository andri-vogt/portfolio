"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import aboutImage from "@/assets/jeevan-katel--2PE4LUihDQ-unsplash.jpg";
import { useLineReveal, useParallax, lineMask, parallaxLayer } from "./motion";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  const { ref, y } = useParallax();
  const line = useLineReveal();

  return (
    <motion.section
      id="about"
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-[var(--space-section)]"
    >
      <h2 className="text-headline gutter-x">
        <span className={lineMask}>
          <motion.span custom={0} variants={line} className="block">
            About me
          </motion.span>
        </span>
      </h2>

      <div className="grid-swiss gutter-x items-start mt-8 md:mt-[3.3vw]">
        {/* copy — col 1 */}
        <div className="col-span-2 md:col-span-1 text-body md:text-justify">
          <motion.p variants={child}>
            I&apos;m a digital designer and developer based in Zurich, working
            at the seam between editorial design and quiet, usable software.
            Most of what I make is for small teams who want one careful thing
            rather than ten hurried ones.
          </motion.p>
          <motion.p variants={child} className="mt-[1.6em]">
            My practice is built around restraint — typography that earns the
            page, interfaces that don&apos;t announce themselves, and tools
            that stay out of their own way.
          </motion.p>
          <motion.div variants={child} className="mt-[1.6em]">
            <Link href="/cv" className="link-underline">
              [ Read the full CV ]
            </Link>
          </motion.div>
        </div>

        {/* image — cols 3–4, bleeding off the right edge and up into the headline */}
        <motion.div
          variants={child}
          className="relative z-10 col-span-2 md:col-start-3 bleed-r mt-12 md:-mt-[4.2vw]"
        >
          <div
            ref={ref}
            className="relative aspect-[5/3] overflow-hidden ml-auto w-[80vw] md:w-[41vw]"
          >
            <motion.div style={{ y }} className={parallaxLayer}>
              <Image
                src={aboutImage}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 41vw, 80vw"
                className="object-cover grayscale"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
