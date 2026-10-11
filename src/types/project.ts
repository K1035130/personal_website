export interface ProjectLink {
  label: string;
  href: string;
}

export type ProjectStatus = "wip" | "active" | "archived";

export interface Project {
  /** URL 中使用的唯一标识，例如 /projects/my-project */
  slug: string;
  title: string;
  /** 卡片上展示的一句话简介 */
  summary: string;
  /** 详情页正文，数组中每一项渲染为一个段落 */
  description: string | string[];
  tags: string[];
  /** 放在 public/images/projects/ 下的封面图路径，例如 "/images/projects/foo.png"；不填则显示水墨圆相占位 */
  cover?: string;
  links?: ProjectLink[];
  /** 是否在首页精选区展示 */
  featured?: boolean;
  /** 形如 "2026-01" */
  date: string;
  /** 项目状态，显示在卡片角标上 */
  status?: ProjectStatus;
  /** 详情页中的要点列表 */
  highlights?: string[];
}
