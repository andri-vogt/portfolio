import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Andri Vogt",
  description:
    "Curriculum vitae of Andri Vogt — designer and developer based in Zurich.",
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
