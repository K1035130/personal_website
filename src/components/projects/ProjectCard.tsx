import Link from "next/link";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block rounded-lg border border-black/10 p-5 transition hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
    >
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm opacity-80">{project.summary}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded bg-black/5 px-2 py-0.5 text-xs dark:bg-white/10">
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
