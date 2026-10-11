import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div>
      <SectionHeading kicker={`${projects.length} works`} title="Projects" />
      <ProjectGrid projects={projects} />
    </div>
  );
}
