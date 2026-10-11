import type { Project } from "@/types/project";

// 在这里添加 / 修改你的项目，页面会自动生成
// 以下均为占位数据，之后替换成真实项目即可
export const projects: Project[] = [
  {
    slug: "example-project",
    title: "Example Project",
    summary: "A placeholder project. Replace it with your own.",
    description: [
      "Describe what the project does, the tech stack, and what you learned.",
      "Each string in this array becomes its own paragraph.",
    ],
    tags: ["TypeScript", "Next.js"],
    links: [{ label: "GitHub", href: "https://github.com/K1035130" }],
    featured: true,
    date: "2026-10",
    status: "active",
    highlights: ["Highlight one", "Highlight two"],
  },
  {
    slug: "placeholder-two",
    title: "Placeholder Two",
    summary: "Another placeholder to preview the card layout.",
    description: "Replace with real content.",
    tags: ["Python"],
    featured: true,
    date: "2026-07",
    status: "wip",
  },
  {
    slug: "placeholder-three",
    title: "Placeholder Three",
    summary: "A third placeholder card.",
    description: "Replace with real content.",
    tags: ["Design"],
    featured: true,
    date: "2025-12",
    status: "archived",
  },
];
