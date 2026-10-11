import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <p className="rounded-[28px] border border-dashed border-line py-16 text-center font-serif text-lg text-muted">
        Nothing here yet — ink is still drying.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
