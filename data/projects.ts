export type Project = {
  slug: string;
  title: string;
  year: number;
  category: string;
  description: string;
  longDescription: string;
};

export const projects: Project[] = [
  {
    slug: "field-notes",
    title: "Field Notes",
    year: 2025,
    category: "editorial / web",
    description:
      "A reading journal that treats marginalia as a first-class citizen.",
    longDescription:
      "Field Notes is a quiet writing surface for readers. Annotations, excerpts, and stray thoughts share the page with the text that prompted them — no tabs, no folders, no taxonomy. The interface is built around a single column and a single typeface; the work is in what gets left out.",
  },
  {
    slug: "halftone",
    title: "Halftone",
    year: 2024,
    category: "identity / print",
    description:
      "Visual system for an independent risograph studio in Basel.",
    longDescription:
      "Halftone is a small print studio that needed an identity tuned to its medium. The system leans on rough registration, two-color overlays, and a wordmark that prints cleanly at any drum size. Every applied piece — invoices, business cards, posters — was designed to survive a one-pass riso print.",
  },
  {
    slug: "atlas",
    title: "Atlas",
    year: 2023,
    category: "tooling / cli",
    description:
      "Command-line companion for traversing large monorepos without losing your place.",
    longDescription:
      "Atlas is a small, opinionated CLI for navigating monorepos. It remembers where you were, surfaces files by recency rather than alphabet, and exposes a single keybinding for jumping between sibling packages. Built for engineers who treat their terminal like a workshop.",
  },
];
