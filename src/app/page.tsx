import Link from "next/link";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { siteConfig } from "@/config/site";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div className="flex flex-col gap-12">
      <section>
        <h1 className="text-3xl font-semibold">Hi, I&apos;m {siteConfig.name}</h1>
        <p className="mt-3 opacity-80">{siteConfig.description}</p>
      </section>

      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm hover:underline">
            View all →
          </Link>
        </div>
        <ProjectGrid projects={featured} />
      </section>
    </div>
  );
}
