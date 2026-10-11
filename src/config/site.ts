export const siteConfig = {
  name: "Kevin",
  title: "Kevin | Personal Website",
  description: "A personal website to show my projects.",
  /** 首页大标题下的介绍 */
  intro: "I build things with code and care. Here are some of them.",
  /** 印章上的字 */
  seal: "墨",
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
  socials: [{ label: "GitHub", href: "https://github.com/K1035130" }],
} as const;
