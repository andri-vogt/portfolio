"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { cv } from "@/data/cv";
import PrintButton from "./PrintButton";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function SectionHeader({ title, label }: { title: string; label: string }) {
  return (
    <motion.div
      variants={child}
      className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-end mt-16 md:mt-24 mb-6 md:mb-8"
    >
      <h2 className="text-section-title col-span-1 md:col-span-1">{title}</h2>
      <div className="hidden md:block" />
      <div className="hidden md:block" />
      <span className="text-mono-label justify-self-end md:justify-self-end self-end">
        {label}
      </span>
    </motion.div>
  );
}

export default function CVPage() {
  return (
    <main className="cv min-h-screen px-6 md:px-10 pt-20 md:pt-24 pb-32 md:pb-40">
      {/* top bar: back link + curriculum vitae label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="no-print grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-center py-3"
      >
        <Link
          href="/#about"
          className="font-mono text-[length:var(--text-mono)] uppercase tracking-[0.1em] link-underline justify-self-start"
        >
          [ ← back ]
        </Link>
        <div className="hidden md:block" />
        <div className="hidden md:block" />
        <span className="text-mono-label justify-self-end">
          fig. 04 | curriculum vitae
        </span>
      </motion.div>

      <motion.section variants={parent} initial="hidden" animate="show">
        {/* HERO: massive name + meta column */}
        <motion.div
          variants={child}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-end mt-10 md:mt-16"
        >
          <h1
            className="col-span-2 md:col-span-3 font-sans font-black uppercase leading-[0.85] tracking-[-0.05em]"
            style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
          >
            Andri<br />Vogt.
          </h1>

          <div className="col-span-2 md:col-span-1 flex flex-col gap-5 pb-2">
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
            <div className="mt-2">
              <PrintButton />
            </div>
          </div>
        </motion.div>

        {/* heavy structural rule */}
        <motion.hr variants={child} className="rule mt-16 md:mt-24" />

        {/* PROFILE */}
        <SectionHeader title="Profile" label="summary" />
        <motion.div
          variants={child}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8"
        >
          <div className="hidden md:block" />
          <div className="col-span-2 md:col-span-3">
            {cv.summary ? (
              <p className="font-sans text-xl md:text-2xl leading-[1.4] font-medium">
                {cv.summary}
              </p>
            ) : null}
          </div>
        </motion.div>

        <motion.hr variants={child} className="rule-thin mt-16 md:mt-24" />

        {/* EXPERIENCE */}
        <SectionHeader title="Experience" label="roles" />
        <motion.div
          variants={child}
          className="flex flex-col gap-10 md:gap-14"
        >
          {cv.experience.map((role, i) => (
            <div
              key={`${role.company}-${i}`}
              className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-start"
            >
              {/* col 1 empty on desktop */}
              <div className="hidden md:block" />

              {/* main content cols 2-3 */}
              <div className="col-span-2 md:col-span-2">
                <h3 className="font-sans text-xl md:text-2xl leading-[1.3] font-medium">
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

              {/* meta col 4 */}
              <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
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

        <motion.hr variants={child} className="rule-thin mt-16 md:mt-24" />

        {/* EDUCATION */}
        <SectionHeader title="Education" label="schools" />
        <motion.div
          variants={child}
          className="flex flex-col gap-10 md:gap-14"
        >
          {cv.education.map((entry, i) => (
            <div
              key={`${entry.institution}-${i}`}
              className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-start"
            >
              <div className="hidden md:block" />

              <div className="col-span-2 md:col-span-2">
                <h3 className="font-sans text-xl md:text-2xl leading-[1.3] font-medium">
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

              <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
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

        <motion.hr variants={child} className="rule-thin mt-16 md:mt-24" />

        {/* SKILLS */}
        <SectionHeader title="Skills" label="stack" />
        <motion.div
          variants={child}
          className="flex flex-col gap-8 md:gap-10"
        >
          {cv.skills.map((group) => (
            <div
              key={group.group}
              className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-start"
            >
              <div className="hidden md:block" />
              <ul className="col-span-2 md:col-span-2 flex flex-wrap gap-x-6 gap-y-2 font-sans text-xl md:text-2xl leading-[1.4] font-medium">
                {group.items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < group.items.length - 1 ? (
                      <span className="text-[color:var(--muted)]"> /</span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <span className="text-mono-label col-span-2 md:col-span-1 md:pt-2">
                {group.group}
              </span>
            </div>
          ))}
        </motion.div>

        {/* footer mark */}
        <motion.div
          variants={child}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mt-24 md:mt-40 py-4 border-t border-[color:var(--fg)]"
        >
          <span className="text-mono-label">&copy; 2026</span>
          <div className="hidden md:block" />
          <div className="hidden md:block" />
          <span className="text-mono-label text-right">
            end of document | rev. 01
          </span>
        </motion.div>
      </motion.section>
    </main>
  );
}
