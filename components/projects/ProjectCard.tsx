import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-150 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-card-hover">
      {/* Cover image */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.coverImageAlt ?? `${project.title} cover image`}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="select-none text-xs text-muted-foreground">
              {project.title}
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Meta row: category (left) + duration (right) */}
        {(project.category || project.duration) && (
          <div className="flex items-center justify-between gap-3">
            {project.category && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {project.category}
              </span>
            )}

            {project.duration && (
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span className="sr-only">Duration: </span>
                {project.duration}
              </span>
            )}
          </div>
        )}

        {/* Project title */}
        <h3 className="text-base font-semibold leading-snug text-foreground">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Technology tags */}
        {project.technologies.length > 0 && (
          <ul aria-label="Technologies used" className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded bg-surface px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {/* Detail page link */}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex items-center justify-between pt-2 text-sm font-medium text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span>View project</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface text-foreground border border-border/70 transition-all duration-200 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:scale-115 group-hover:-rotate-6" />
          </div>
        </Link>
      </div>
    </article>
  );
}