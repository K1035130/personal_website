export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** URL 中使用的唯一标识，例如 /projects/my-project */
  slug: string;
  title: string;
  /** 卡片上展示的一句话简介 */
  summary: string;
  /** 详情页正文 */
  description: string;
  tags: string[];
  /** 放在 public/images/projects/ 下的封面图路径，例如 "/images/projects/foo.png" */
  cover?: string;
  links?: ProjectLink[];
  /** 是否在首页精选区展示 */
  featured?: boolean;
  /** 形如 "2026-01" */
  date: string;
}
