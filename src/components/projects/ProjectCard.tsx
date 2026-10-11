import Image from "next/image";
import Link from "next/link";
import Enso from "@/components/ui/Enso";
import { statusLabel } from "@/lib/projects";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  /** 在列表中的序号，用于编号显示和入场动画的先后 */
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="ink-rise group relative flex flex-col overflow-hidden rounded-[28px] border border-line bg-card/70 p-2.5 backdrop-blur-[2px] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_24px_60px_-30px_rgb(var(--ink-rgb)/0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      style={{ "--i": index } as React.CSSProperties}
    >
      <span aria-hidden className="ink-wash pointer-events-none absolute inset-0" />

      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-wash">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-ink">
            <Enso
              seed={project.slug}
              className="h-[72%] transition-transform duration-[1.2s] ease-out group-hover:rotate-[24deg] group-hover:scale-105"
            />
          </div>
        )}
        <span className="absolute left-4 top-3 font-mono text-[11px] tracking-[0.2em] text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.status && (
          <span className="absolute right-3 top-3 rounded-full border border-line bg-card/80 px-2.5 py-0.5 text-[11px] text-ink-soft backdrop-blur">
            {statusLabel[project.status]}
          </span>
        )}
      </div>

      <div className="relative flex flex-1 flex-col px-3.5 pb-3 pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[11px] text-muted">{project.date}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-soft">{project.summary}</p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-ink-soft"
              >
                {tag}
              </li>
            ))}
          </ul>
          <span
            aria-hidden
            className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-sm transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
