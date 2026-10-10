import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-semibold">Projects</h1>
      <ProjectGrid projects={getAllProjects()} />
    </div>
  );
}
