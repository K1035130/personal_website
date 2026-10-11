import { Suspense } from "react";
import Link from "next/link";
import Seal from "@/components/ui/Seal";
import { siteConfig } from "@/config/site";
import NavLinks, { NavList } from "./NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Seal
            text={siteConfig.seal}
            className="size-8 text-lg transition-transform duration-500 group-hover:-rotate-6"
          />
          <span className="font-serif text-xl font-medium tracking-wide">{siteConfig.name}</span>
        </Link>
        {/* usePathname 在未预渲染的动态路由下会挂起，需要 Suspense 兜底 */}
        <Suspense fallback={<NavList />}>
          <NavLinks />
        </Suspense>
      </nav>
    </header>
  );
}
