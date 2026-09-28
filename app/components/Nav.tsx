"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "font-mono text-[length:var(--text-body)] lowercase tracking-[0.02em] link-underline";

  return (
    // reaches the physical top of the screen and pads past the status bar.
    // The nav itself stays fully opaque from first paint (Safari 26 won't tint
    // from an element with opacity < 1) — only its contents fade in.
    <nav className="fixed left-0 right-0 top-0 z-50 gutter-x pt-[calc(env(safe-area-inset-top)_+_1rem)] md:pt-[calc(env(safe-area-inset-top)_+_1.25rem)] pb-4 md:pb-5 bg-[color:var(--bg)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
      >
      {/* desktop: all links evenly spaced */}
      <ul className="hidden md:flex items-center justify-between">
        <li>
          <a href="#top" className={linkClass}>[ av ]</a>
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={linkClass}>
              [ {link.label} ]
            </a>
          </li>
        ))}
        <li>
          {/* language switch — no German copy wired up yet */}
          <button type="button" aria-label="Deutsch" className={linkClass}>
            [ de ]
          </button>
        </li>
      </ul>

      {/* mobile: av left, menu right */}
      <div className="flex items-center justify-between md:hidden">
        <a href="#top" className={linkClass}>[ av ]</a>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className={linkClass}
        >
          [ {menuOpen ? "close" : "menu"} ]
        </button>
      </div>

      {/* mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col items-end gap-4 pt-6 pb-4 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass}
                >
                  [ {link.label} ]
                </a>
              </li>
            ))}
            <li>
              <button type="button" aria-label="Deutsch" className={linkClass}>
                [ de ]
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
      </motion.div>
    </nav>
  );
}
