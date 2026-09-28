"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import flowerImage from "@/assets/flower.jpg";
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

      {/* each row is one link: label on col 1, value on the half-column line (the
          label track is one 8-col track wide on desktop). On hover / focus the whole
          row inverts to white on black, like the project rows; the block is padded out
          and pulled back by the same amount, so nothing moves */}
      <ul className="gutter-x flex flex-col items-start gap-y-5 md:gap-y-6 text-body mt-8 md:mt-[4.8vw]">
        {links.map((link) => (
          <motion.li key={link.href} variants={child}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="grid grid-cols-[5.5rem_auto] md:grid-cols-[calc((var(--col)_-_var(--gap))/2)_auto] gap-x-[var(--gap)] py-[0.4em] -my-[0.4em] px-[0.5em] -mx-[0.5em] transition-colors duration-150 hover:bg-[color:var(--fg)] hover:text-[color:var(--bg)] focus-visible:bg-[color:var(--fg)] focus-visible:text-[color:var(--bg)]"
            >
              <span>{link.kind}</span>
              <span>[ {link.label} ]</span>
            </a>
          </motion.li>
        ))}
      </ul>

      {/* footer — square flower flush with the bottom-right corner (last column +
          gutter). On desktop it's pulled up one body line so its top sits level with
          the linkedin row. The copyright line is set in white inside it: "© 2026" left,
          "all rights reserved" right. The photo fills the square above a pure-black
          caption strip, so the line never lands on the petals — seamless, because the
          photo's background is #000.
          Type size = (square width − side insets) / 17em — the line is ~15.5em of mono
          plus ~1.5em between the two parts — capped at the regular mono size. */}
      <footer className="mt-16 md:-mt-[calc(var(--text-body)*1.6)] font-mono lowercase tracking-[0.02em] whitespace-nowrap text-[length:min(var(--text-mono),calc(((100vw_-_2*var(--gutter)_-_var(--gap))/2_+_var(--gutter)_-_1.5rem)/17))] md:text-[length:min(var(--text-mono),calc((var(--col)_+_var(--gutter)_-_2*var(--gap))/17))]">
        <motion.div
          variants={child}
          className="relative ml-auto aspect-square bg-black w-[calc((100vw_-_2*var(--gutter)_-_var(--gap))/2_+_var(--gutter))] md:w-[calc(var(--col)_+_var(--gutter))]"
        >
          <div className="absolute inset-x-0 top-0 bottom-[calc(max(0.75rem,env(safe-area-inset-bottom))_+_1.75em)] md:bottom-[calc(max(var(--gap),env(safe-area-inset-bottom))_+_1.75em)] overflow-hidden">
            <Image
              src={flowerImage}
              alt=""
              fill
              sizes="(min-width: 768px) 28vw, 50vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between px-3 md:px-[var(--gap)] pb-[max(0.75rem,env(safe-area-inset-bottom))] md:pb-[max(var(--gap),env(safe-area-inset-bottom))] text-white">
            <span>&copy; 2026</span>
            <span>all rights reserved</span>
          </div>
        </motion.div>
      </footer>
    </motion.section>
  );
}
