"use client";

import { motion, type Variants } from "framer-motion";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const links = [
  { href: "mailto:hello@andrivogt.com", label: "hello@andrivogt.com" },
  { href: "https://github.com/andrivogt", label: "github.com/andrivogt" },
  { href: "https://linkedin.com/in/andrivogt", label: "linkedin.com/in/andrivogt" },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="px-6 md:px-10 pb-40 md:pb-48"
    >
      <motion.div
        variants={child}
        className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-y-4 md:gap-x-10 mb-20 md:mb-28"
      >
        <h2 className="text-mono-label">contact</h2>
        <span className="text-mono-label md:pt-2">say hello</span>
      </motion.div>

      <motion.h3
        variants={child}
        className="text-display font-sans font-medium mb-16 md:mb-20"
      >
        Let&apos;s work.
      </motion.h3>

      <motion.ul variants={parent} className="flex flex-col gap-4">
        {links.map((link) => (
          <motion.li key={link.href} variants={child}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="font-mono text-sm md:text-base link-underline"
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
