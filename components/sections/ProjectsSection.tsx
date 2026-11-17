import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  // Show at most 3 real project cards; terminal CTA only appears when there are more than 3
  const displayedProjects = featuredProjects.slice(0, 3);
  const hasMore = featuredProjects.length > 3;

  return (
    <section
      id="projects"
      aria-label="Professional Projects"
      className="border-t border-border py-12 sm:py-15"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Work &amp; Experience
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
          >
            <span>View all projects</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background border border-foreground transition-colors group-hover:bg-background group-hover:text-foreground group-hover:border-border">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:scale-115 group-hover:-rotate-6" />
            </div>
          </Link>
        </div>

        {/*
          2-column grid.
          Line 1: project 1 + project 2
          Line 2: project 3 + terminal CTA slot (only if more than 3 projects exist)
        */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

          {/* Terminal CTA slot — only rendered when featuredProjects.length > 3 */}
          {hasMore && (
            <Link
              href="/projects"
              className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border/60 px-8 py-12 text-center transition-all duration-200 hover:border-foreground/30 hover:bg-surface/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-200 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                <ArrowUpRight className="h-5 w-5 transition-transform duration-200 ease-out group-hover:-rotate-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  See all projects
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  More in the full archive
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
