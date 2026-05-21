"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [grid, setGrid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleGrid = () => {
    const el = document.querySelector(".swiss-grid") as HTMLElement | null;
    if (el) el.style.display = !grid ? "grid" : "none";
    setGrid(!grid);
  };

  const linkClass =
    "font-mono text-[length:var(--text-mono)] uppercase tracking-[0.1em] link-underline";

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
      className="fixed left-0 right-0 z-50 px-6 md:px-10
                 top-0 py-4 md:py-5
                 bg-[color:var(--bg)]"
    >
      {/* desktop: all links evenly spaced */}
      <ul className="hidden md:flex items-center justify-between">
        <li>
          <a href="#top" className={linkClass}>[ AV ]</a>
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={linkClass}>
              [ {link.label} ]
            </a>
          </li>
        ))}
        <li>
          <button onClick={toggleGrid} aria-label="Toggle grid overlay" className={linkClass}>
            [ grid ]
          </button>
        </li>
      </ul>

      {/* mobile: AV left, menu right */}
      <div className="flex items-center justify-between md:hidden">
        <a href="#top" className={linkClass}>[ AV ]</a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
            className="flex flex-col items-end gap-4 pt-6 pb-4"
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
              <button
                onClick={() => {
                  toggleGrid();
                  setMenuOpen(false);
                }}
                className={linkClass}
              >
                [ grid ]
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
