"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import workImage from "@/assets/tao-yuan-dK8uO7szEdk-unsplash.jpg";

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
        className="block py-5 md:py-6 grid grid-cols-2 gap-5 md:gap-8 items-baseline"
      >
        <h3
          className={`text-xl md:text-2xl font-sans font-medium leading-[1.4] link-underline justify-self-start ${hovered ? "link-underline-active" : ""}`}
        >
          [ {project.title} ]
        </h3>
        <p className="font-sans text-xl md:text-2xl leading-[1.4] font-medium">
          {project.description}
        </p>
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
      className="px-6 md:px-10 mt-24 md:mt-40"
    >
      <motion.div variants={child} className="mb-8 md:mb-10">
        <h2 className="text-section-title">Selected work</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-start">
        <ul className="col-span-2">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>

        <motion.div variants={child} className="col-span-2">
          <div className="relative aspect-[3/4] overflow-hidden max-w-[280px] md:max-w-none">
            <Image
              src={workImage}
              alt=""
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 50vw, 280px"
              className="object-cover grayscale"
            />
          </div>
          <span className="text-mono-label block mt-3">fig. 03 | ducks</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
