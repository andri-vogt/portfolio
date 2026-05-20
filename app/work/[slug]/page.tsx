import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Andri Vogt`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen px-6 md:px-10 pt-32 md:pt-40 pb-40">
      <div className="max-w-4xl">
        <Link
          href="/#work"
          className="font-mono text-[length:var(--text-mono)] uppercase tracking-[0.08em] link-underline"
        >
          ← back
        </Link>

        <h1 className="text-display font-sans font-medium mt-16 md:mt-20">
          {project.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-12 md:mt-16 pb-12 border-b border-[color:var(--hairline)]">
          <div className="flex flex-col gap-1">
            <span className="text-mono-label">year</span>
            <span className="font-mono text-sm">{project.year}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-mono-label">category</span>
            <span className="font-mono text-sm">{project.category}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-mono-label">status</span>
            <span className="font-mono text-sm">shipped</span>
          </div>
        </div>

        <p className="font-sans text-xl md:text-2xl leading-[1.4] mt-12 md:mt-16 max-w-2xl">
          {project.longDescription}
        </p>
      </div>
    </main>
  );
}
