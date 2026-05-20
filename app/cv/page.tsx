"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { cv } from "@/data/cv";
import PrintButton from "./PrintButton";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CVPage() {
  return (
    <main className="cv min-h-screen px-6 md:px-10 pt-32 md:pt-40 pb-40">
      <Link
        href="/#about"
        className="no-print font-mono text-[length:var(--text-mono)] uppercase tracking-[0.08em] link-underline"
      >
        ← back
      </Link>

      <motion.section
        variants={parent}
        initial="hidden"
        animate="show"
        className="mt-16 md:mt-20"
      >
        <motion.div
          variants={child}
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-4 md:gap-x-10 mb-10 md:mb-14"
        >
          <h2 className="text-mono-label">Curriculum vitae</h2>
          <span className="hidden md:inline text-mono-label md:pt-2">profile</span>
        </motion.div>

        <motion.div
          variants={child}
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-10 md:gap-x-10 mb-20 md:mb-28"
        >
          <div className="max-w-2xl">
            <h1 className="text-display font-sans font-medium">Andri Vogt</h1>
            {cv.summary ? (
              <p className="font-sans text-xl md:text-2xl leading-[1.4] mt-10 md:mt-12">
                {cv.summary}
              </p>
            ) : null}
            <div className="mt-10">
              <PrintButton />
            </div>
          </div>

          <div className="flex flex-col gap-5 md:pt-3 md:translate-y-1">
            <div className="flex flex-col gap-1">
              <span className="text-mono-label">based</span>
              <span className="font-mono text-sm">{cv.location}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-mono-label">email</span>
              <a
                href={`mailto:${cv.email}`}
                className="font-mono text-sm link-underline self-start"
              >
                {cv.email}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-mono-label">updated</span>
              <span className="font-mono text-sm">{cv.updated}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={child}
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-4 md:gap-x-10 mb-10 md:mb-14"
        >
          <h2 className="text-mono-label">experience</h2>
          <span className="hidden md:inline text-mono-label md:pt-2">roles</span>
        </motion.div>

        <motion.div variants={child} className="mb-20 md:mb-28 flex flex-col gap-12 md:gap-14">
          {cv.experience.map((role, i) => (
            <div
              key={`${role.company}-${i}`}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-4 md:gap-x-10"
            >
              <div className="max-w-2xl">
                <h3 className="font-sans text-xl md:text-2xl leading-[1.3]">
                  {role.role}
                  <span className="text-[color:var(--muted)]">
                    {" — "}
                    {role.company}
                  </span>
                </h3>
                {role.bullets.length > 0 ? (
                  <ul className="mt-5 md:mt-6 flex flex-col gap-2 font-sans text-base md:text-lg leading-[1.5]">
                    {role.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3">
                        <span
                          aria-hidden
                          className="font-mono text-sm text-[color:var(--muted)] select-none pt-1.5"
                        >
                          —
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="flex flex-col gap-5 md:pt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-mono-label">years</span>
                  <span className="font-mono text-sm">
                    {role.start} — {role.end}
                  </span>
                </div>
                {role.location ? (
                  <div className="flex flex-col gap-1">
                    <span className="text-mono-label">location</span>
                    <span className="font-mono text-sm">{role.location}</span>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={child}
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-4 md:gap-x-10 mb-10 md:mb-14"
        >
          <h2 className="text-mono-label">education</h2>
          <span className="hidden md:inline text-mono-label md:pt-2">schools</span>
        </motion.div>

        <motion.div variants={child} className="mb-20 md:mb-28 flex flex-col gap-12 md:gap-14">
          {cv.education.map((entry, i) => (
            <div
              key={`${entry.institution}-${i}`}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-4 md:gap-x-10"
            >
              <div className="max-w-2xl">
                <h3 className="font-sans text-xl md:text-2xl leading-[1.3]">
                  {entry.degree}
                  <span className="text-[color:var(--muted)]">
                    {" — "}
                    {entry.institution}
                  </span>
                </h3>
                {entry.notes ? (
                  <p className="mt-5 md:mt-6 font-sans text-base md:text-lg leading-[1.5]">
                    {entry.notes}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-5 md:pt-2">
                <div className="flex flex-col gap-1">
                  <span className="text-mono-label">years</span>
                  <span className="font-mono text-sm">
                    {entry.start} — {entry.end}
                  </span>
                </div>
                {entry.location ? (
                  <div className="flex flex-col gap-1">
                    <span className="text-mono-label">location</span>
                    <span className="font-mono text-sm">{entry.location}</span>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={child}
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-4 md:gap-x-10 mb-10 md:mb-14"
        >
          <h2 className="text-mono-label">skills</h2>
          <span className="hidden md:inline text-mono-label md:pt-2">stack</span>
        </motion.div>

        <motion.div variants={child} className="flex flex-col gap-10 md:gap-12">
          {cv.skills.map((group) => (
            <div
              key={group.group}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-3 md:gap-x-10"
            >
              <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <span className="text-mono-label md:pt-2">{group.group}</span>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}
