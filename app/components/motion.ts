"use client";

import { useRef } from "react";
import {
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

/** Slow-out curve shared by every scroll-triggered reveal on the page. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Scroll-linked drift for an image inside an `overflow-hidden` frame.
 * Put `ref` on the frame and `y` on an inner layer classed with
 * `parallaxLayer` — that layer is oversized so the drift never
 * uncovers an edge. Drift is disabled under `prefers-reduced-motion`.
 */
export function useParallax(distance = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : [`-${distance}%`, `${distance}%`],
  );

  return { ref, y };
}

/**
 * Oversized inner layer that gives `useParallax` room to travel.
 * Overhang must exceed distance / (1 - 2 * distance) so the drift never
 * uncovers an edge of the frame — sized here for the 8% default.
 */
export const parallaxLayer = "absolute inset-x-0 -top-[12%] h-[124%]";

/**
 * Wrapper that masks a line of display type so it can rise into view.
 * Clips on the vertical axis only — display type is allowed to bleed past
 * its column, so `overflow-hidden` would cut the line off horizontally.
 */
export const lineMask =
  "block pb-[0.12em] -mb-[0.12em] [clip-path:inset(-0.35em_-100vw_0_-100vw)]";

/**
 * Display-type lines that rise out of `lineMask`, staggered by the
 * `custom` index passed to each line.
 */
export function useLineReveal(): Variants {
  const reduced = useReducedMotion();

  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
    };
  }

  return {
    hidden: { y: "130%" },
    show: (i: number) => ({
      y: "0%",
      transition: { duration: 0.9, delay: 0.1 + i * 0.09, ease: EASE },
    }),
  };
}

/** Hairline that draws itself from the left when scrolled into view. */
export const ruleDraw: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.7, ease: EASE } },
};
