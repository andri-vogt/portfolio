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

// rendered twice (mobile above the headline, desktop beside the copy),
// so each instance gets its own parallax
function Mountains({ className, sizes }: { className: string; sizes: string }) {
  const { ref, y } = useParallax();

  return (
    <div ref={ref} className={`relative aspect-[5/3] overflow-hidden ${className}`}>
      <motion.div style={{ y }} className={parallaxLayer}>
        <Image
          src={aboutImage}
          alt=""
          fill
          placeholder="blur"
          sizes={sizes}
          className="object-cover grayscale"
        />
      </motion.div>
    </div>
  );
}

export default function About() {
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
      {/* mobile — sits on the headline, runs off the right edge, and ends at the
          middle of the T's crossbar (0.136 × headline size, measured from the glyph) */}
      <motion.div
        variants={child}
        className="md:hidden relative z-10 pl-[var(--gutter)] -mb-[calc(var(--text-headline)*0.136)]"
      >
        <Mountains className="ml-auto w-[calc(60vw_+_var(--gutter))]" sizes="70vw" />
      </motion.div>

      <h2 className="text-headline gutter-x">
        <span className={lineMask}>
          <motion.span custom={0} variants={line} className="block">
            About me
          </motion.span>
        </span>
      </h2>

      <div className="grid-swiss gutter-x items-start mt-8 md:mt-[3.3vw]">
        {/* copy — left column, justified (Blocksatz); hyphenated on mobile,
            where the column is too narrow to justify without big word gaps */}
        <div className="text-body text-justify hyphens-auto md:hyphens-manual">
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
            <Link href="/cv" className="font-mono link-underline">
              [ full cv ]
            </Link>
          </motion.div>
        </div>

        {/* desktop — cols 3–4, bleeding off the right edge and up into the headline */}
        <motion.div
          variants={child}
          className="hidden md:block relative z-10 col-start-3 col-span-2 bleed-r -mt-[4.2vw]"
        >
          <Mountains className="ml-auto w-[41vw]" sizes="41vw" />
        </motion.div>
      </div>
    </motion.section>
  );
}
