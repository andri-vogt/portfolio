"use client";

import { motion, type Variants } from "framer-motion";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const links = [
  { href: "mailto:hello@andrivogt.com", label: "hello@andrivogt.com" },
  { href: "https://linkedin.com/in/andrivogt", label: "linkedin.com/in/andrivogt" },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-24 md:mt-40"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 items-start px-6 md:px-10">
        {/* column 1: massive CTA — full-width on mobile */}
        <motion.div
          variants={child}
          className="col-span-2 md:col-span-1 py-16 md:py-24"
        >
          <h3
            className="font-sans font-black uppercase leading-[0.85] tracking-[-0.05em]"
            style={{ fontSize: "clamp(3rem, 9vw, 10rem)" }}
          >
            Let&apos;s<br />work.
          </h3>
        </motion.div>

        {/* column 2: empty (desktop only) */}
        <div className="hidden md:block" />

        {/* column 3: Contact title + links — full-width on mobile */}
        <motion.div variants={child} className="col-span-2 md:col-span-1 pb-16 md:py-24">
          <h2 className="text-section-title">Contact</h2>
          <div className="flex flex-col mt-6 gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="font-mono text-sm uppercase tracking-[0.05em] link-underline self-start"
              >
                [ {link.label} ]
              </a>
            ))}
          </div>
        </motion.div>

        {/* column 4: empty (desktop only) */}
        <div className="hidden md:block" />
      </div>

      {/* footer strip */}
      <motion.div
        variants={child}
        className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 px-6 md:px-10 py-4"
      >
        <span className="text-mono-label">&copy; 2026</span>
        <span className="text-mono-label text-right md:text-right md:col-start-4">All rights reserved</span>
      </motion.div>
    </motion.section>
  );
}
