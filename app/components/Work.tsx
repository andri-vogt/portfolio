"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

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
        className="block py-10 md:py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-6 md:gap-x-10 items-start">
          <div className="flex flex-col gap-5">
            <h3 className={`text-4xl md:text-6xl font-sans font-medium leading-[0.95] tracking-[-0.02em] link-underline self-start ${hovered ? "link-underline-active" : ""}`}>
              {project.title}
            </h3>
            <p className="font-sans text-base md:text-lg text-[color:var(--muted)] max-w-md">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 md:pt-3">
            <div className="flex items-center gap-6">
              <span className="text-mono-label">{project.category}</span>
              <span className="text-mono-label">{project.year}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
}

export default function Work() {
  return (
    <motion.section
      id="work"
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="px-6 md:px-10"
    >
      <motion.div variants={child} className="mb-12 md:mb-16">
        <h2 className="text-mono-label">selected work</h2>
      </motion.div>

      <ul>
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </ul>
    </motion.section>
  );
}
