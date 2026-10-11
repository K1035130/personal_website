"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function NavLinks() {
  const pathname = usePathname();
  return <NavList isCurrent={(href) => isActive(pathname, href)} />;
}

/** 也作为 Suspense fallback 使用（不高亮任何项） */
export function NavList({ isCurrent = () => false }: { isCurrent?: (href: string) => boolean }) {
  return (
    <ul className="flex gap-1 text-sm">
      {siteConfig.nav.map((item) => {
        const active = isCurrent(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative block px-3 py-1.5 transition-colors ${
                active ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
              <svg
                viewBox="0 0 60 8"
                preserveAspectRatio="none"
                aria-hidden
                className={`absolute inset-x-2 -bottom-0.5 h-1.5 w-[calc(100%-1rem)] transition-opacity duration-500 ${
                  active ? "opacity-100" : "opacity-0"
                }`}
              >
                <path
                  d="M2 5 C 18 2, 40 6, 58 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  filter="url(#ink-rough)"
                />
              </svg>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
