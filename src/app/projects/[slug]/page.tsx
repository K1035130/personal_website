import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

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

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="mt-2 text-sm opacity-70">{project.date}</p>
      </header>

      {project.cover && (
        <Image
          src={project.cover}
          alt={project.title}
          width={1200}
          height={630}
          className="rounded-lg"
        />
      )}

      <p className="leading-7">{project.description}</p>

      {project.links && project.links.length > 0 && (
        <ul className="flex gap-4 text-sm">
          {project.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer" className="underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
