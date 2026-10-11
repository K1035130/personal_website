import { projects } from "@/data/projects";
import type { Project, ProjectStatus } from "@/types/project";

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** 按时间顺序取相邻项目，用于详情页底部的上一篇 / 下一篇 */
export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const all = getAllProjects();
  const i = all.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: all[i - 1], next: all[i + 1] };
}

export function getParagraphs(project: Project): string[] {
  return Array.isArray(project.description) ? project.description : [project.description];
}

export const statusLabel: Record<ProjectStatus, string> = {
  wip: "In progress",
  active: "Active",
  archived: "Archived",
};
