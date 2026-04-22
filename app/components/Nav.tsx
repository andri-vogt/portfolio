"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
      className="fixed left-0 right-0 z-50 px-6 md:px-10
                 top-0
                 py-4 md:py-6
                 backdrop-blur-sm
                 bg-[color:var(--bg)]/70
                 border-b border-[color:var(--hairline)]"
    >
      <div className="flex items-center justify-between">
        <a href="#top" className="font-mono text-[length:var(--text-mono)] uppercase tracking-[0.08em]">
          andri vogt
        </a>
        <ul className="flex items-center gap-6 md:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[length:var(--text-mono)] uppercase tracking-[0.08em] link-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
