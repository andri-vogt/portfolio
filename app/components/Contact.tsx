"use client";

import { Fragment } from "react";
import { motion, type Variants } from "framer-motion";
import { useLineReveal, lineMask } from "./motion";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const links = [
  { kind: "email", href: "mailto:hello@andrivogt.com", label: "hello@andrivogt.com" },
  { kind: "linkedin", href: "https://linkedin.com/in/andrivogt", label: "linkedin.com/in/andrivogt" },
];

export default function Contact() {
  const line = useLineReveal();

  return (
    <motion.section
      id="contact"
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-[var(--space-section)]"
    >
      {/* runs off the left edge */}
      <h2 className="text-headline -ml-[0.06em]">
        <span className={lineMask}>
          <motion.span custom={0} variants={line} className="block">
            Let&rsquo;s work
          </motion.span>
        </span>
      </h2>

      {/* label on col 1, value on the half-column line — 8 tracks on desktop */}
      <dl className="gutter-x grid grid-cols-[5.5rem_1fr] md:grid-cols-8 gap-x-[var(--gap)] gap-y-3 md:gap-y-4 text-body mt-8 md:mt-[4.8vw]">
        {links.map((link) => (
          <Fragment key={link.href}>
            <motion.dt variants={child}>{link.kind}</motion.dt>
            <motion.dd variants={child} className="md:col-span-7">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="link-underline"
              >
                [ {link.label} ]
              </a>
            </motion.dd>
          </Fragment>
        ))}
      </dl>

      <motion.footer
        variants={child}
        className="gutter-x flex items-baseline justify-between mt-[calc(var(--space-section)*1.5)] pb-[var(--gutter)] text-mono-label"
      >
        <span>&copy; 2026</span>
        <span>all rights reserved</span>
      </motion.footer>
    </motion.section>
  );
}
