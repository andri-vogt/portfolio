"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/assets/DSC00688.jpg";
import { useLineReveal, useParallax, lineMask, parallaxLayer } from "./motion";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const { ref, y } = useParallax();
  const line = useLineReveal();

  return (
    <motion.section
      id="top"
      variants={parent}
      initial="hidden"
      animate="show"
      className="relative min-h-[100svh] flex flex-col justify-end pb-[12svh] md:pb-[var(--gutter)]"
    >
      <div className="relative">
        {/* ANDRI bleeds off the left edge, VOGT off the right */}
        <h1 className="text-hero">
          <span className={lineMask}>
            <motion.span custom={0} variants={line} className="block -ml-[0.03em]">
              Andri
            </motion.span>
          </span>
          <span className={lineMask}>
            <motion.span custom={1} variants={line} className="block text-right -mr-[0.12em]">
              Vogt
            </motion.span>
          </span>
        </h1>

        {/* roles — under the name on mobile; tucked under ANDRI, beside the V from md.
            On the gutter until lg, then the half-column line — narrower, they'd hit the V */}
        <motion.ul
          variants={child}
          className="mt-6 ml-[var(--gutter)] md:mt-0 md:ml-0 md:absolute md:top-[calc(var(--text-hero)*0.83)] md:left-[var(--gutter)] lg:left-[calc(var(--gutter)_+_var(--col)/2_+_var(--gap)/2)] flex flex-col gap-1 md:gap-2 font-mono text-[length:var(--text-body)] lowercase tracking-[0.02em]"
        >
          <li>product owner</li>
          <li>ux designer</li>
        </motion.ul>

        {/* portrait — flush with the right gutter; on mobile it sits above ANDRI and
            bleeds into the top of the letters (bottom-anchored, so resizing keeps
            the overlap), on desktop it's laid over the I */}
        <motion.div
          variants={child}
          className="absolute z-10 right-[var(--gutter)] top-[calc(var(--text-hero)*0.165)] -translate-y-full md:translate-y-0 md:top-[calc(var(--text-hero)*0.275)] w-[48vw] md:w-[var(--col)]"
        >
          <div ref={ref} className="relative aspect-[4/3] overflow-hidden">
            <motion.div style={{ y }} className={parallaxLayer}>
              <Image
                src={heroImage}
                alt="Portrait of Andri Vogt"
                fill
                priority
                sizes="(min-width: 768px) 22vw, 48vw"
                className="object-cover grayscale"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
