"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import workImage from "@/assets/tao-yuan-dK8uO7szEdk-unsplash.jpg";
import { EASE, useLineReveal, useParallax, lineMask, parallaxLayer } from "./motion";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li variants={child}>
      <Link
        href={`/work/${project.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="block"
      >
        {/* nested 2-col grid shares the page gap, so title sits on col 3, copy on col 4 */}
        <motion.div
          animate={{ x: hovered ? 8 : 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="grid grid-cols-2 gap-x-[var(--gap)] items-baseline text-body"
        >
          <h3
            className={`link-underline justify-self-start ${hovered ? "link-underline-active" : ""}`}
          >
            [ {project.title} ]
          </h3>
          <p className="md:text-justify">{project.description}</p>
        </motion.div>
      </Link>
    </motion.li>
  );
}

export default function Work() {
  const { ref, y } = useParallax();
  const line = useLineReveal();

  return (
    <motion.section
      id="work"
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="mt-[var(--space-section)]"
    >
      {/* anchored to the right edge and run off it, like VOGT */}
      <h2 className="text-headline">
        <span className={lineMask}>
          <motion.span custom={0} variants={line} className="block text-right -mr-[0.2em]">
            Projects
          </motion.span>
        </span>
      </h2>

      <div className="grid-swiss gutter-x items-start">
        {/* image — bleeds off the left edge and up into the headline */}
        <motion.div
          variants={child}
          className="relative z-10 col-span-2 bleed-l -mt-[2.2vw]"
        >
          <div
            ref={ref}
            className="relative aspect-[2/3] overflow-hidden w-[60vw] md:w-[32vw]"
          >
            <motion.div style={{ y }} className={parallaxLayer}>
              <Image
                src={workImage}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 32vw, 60vw"
                className="object-cover grayscale"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* project rows — cols 3–4 */}
        <ul className="col-span-2 md:col-start-3 flex flex-col gap-y-12 md:gap-y-[7vw] mt-12 md:mt-[8.5vw]">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
