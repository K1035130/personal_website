import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BrushDivider from "@/components/ui/BrushDivider";
import Enso from "@/components/ui/Enso";
import {
  getAdjacentProjects,
  getAllProjects,
  getParagraphs,
  getProjectBySlug,
  statusLabel,
} from "@/lib/projects";

// 构建时为每个项目预渲染静态页面
export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  // 读取 params 的部分放进 Suspense，导航时可先显示骨架
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <ProjectDetail params={params} />
    </Suspense>
  );
}

function DetailSkeleton() {
  return (
    <div className="mx-auto max-w-3xl animate-pulse" aria-hidden>
      <div className="h-4 w-24 rounded-full bg-ink/10" />
      <div className="mt-12 h-12 w-2/3 rounded-full bg-ink/10" />
      <div className="mt-6 h-4 w-full rounded-full bg-ink/5" />
      <div className="mt-10 aspect-[16/9] rounded-[28px] bg-ink/5" />
    </div>
  );
}

async function ProjectDetail({ params }: { params: PageProps<"/projects/[slug]">["params"] }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/projects"
        className="ink-rise inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
      >
        ← All projects
      </Link>

      <header className="ink-rise mt-8" style={{ "--i": 1 } as React.CSSProperties}>
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          <span>{project.date}</span>
          {project.status && (
            <>
              <span aria-hidden>·</span>
              <span>{statusLabel[project.status]}</span>
            </>
          )}
        </div>
        <h1 className="mt-4 font-serif text-5xl font-medium leading-tight tracking-tight sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-soft">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-0.5 text-xs text-ink-soft">
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div
        className="ink-rise relative mt-10 aspect-[16/9] overflow-hidden rounded-[28px] border border-line bg-wash"
        style={{ "--i": 2 } as React.CSSProperties}
      >
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover grayscale"
            priority
          />
        ) : (
          <div className="flex h-full items-center justify-center text-ink">
            <Enso seed={project.slug} className="h-3/4" />
          </div>
        )}
      </div>

      <div className="ink-rise mt-12 space-y-5" style={{ "--i": 3 } as React.CSSProperties}>
        {getParagraphs(project).map((para, i) => (
          <p key={i} className="text-[17px] leading-8 text-ink-soft">
            {para}
          </p>
        ))}
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-10 space-y-3 border-l border-line pl-6">
          {project.highlights.map((h) => (
            <li key={h} className="font-serif text-xl leading-snug">
              {h}
            </li>
          ))}
        </ul>
      )}

      {project.links && project.links.length > 0 && (
        <ul className="mt-10 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      )}

      <BrushDivider className="mt-20 h-4 w-full text-ink/30" />

      <nav className="mt-6 grid grid-cols-2 gap-4 text-sm">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="text-muted hover:text-ink">
            <span className="block font-mono text-[11px] uppercase tracking-[0.25em]">Newer</span>
            <span className="mt-1 block font-serif text-xl text-ink">← {prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/projects/${next.slug}`} className="text-right text-muted hover:text-ink">
            <span className="block font-mono text-[11px] uppercase tracking-[0.25em]">Older</span>
            <span className="mt-1 block font-serif text-xl text-ink">{next.title} →</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
