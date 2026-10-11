import Link from "next/link";
import ProjectGrid from "@/components/projects/ProjectGrid";
import BrushDivider from "@/components/ui/BrushDivider";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div className="flex flex-col gap-24 sm:gap-32">
      <section className="relative flex min-h-[52vh] items-center">
        <div className="max-w-2xl">
          <p
            className="ink-rise mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-muted"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            Portfolio — Selected Works
          </p>
          <h1
            className="ink-rise font-serif text-6xl font-medium leading-[0.95] tracking-tight sm:text-8xl"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Hi, I&apos;m <em className="font-normal italic">{siteConfig.name}</em>
          </h1>
          <BrushDivider className="my-8 h-4 w-56 text-ink sm:w-72" />
          <p
            className="ink-rise max-w-lg text-lg leading-8 text-ink-soft"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            {siteConfig.intro}
          </p>
          <div
            className="ink-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              View projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          kicker="01 — Selected"
          title="Featured Projects"
          action={{ label: "View all", href: "/projects" }}
        />
        <ProjectGrid projects={featured} />
      </section>
    </div>
  );
}
