import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";

import ProjectSections from "@/components/projects/ProjectSections";
import { projects } from "@/data/projects";
import { technologyLogos } from "@/data/technologies";

export const instant = false;

type Project = (typeof projects)[number];
type Technology = Project["technologies"][number];


interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

// The page's single accent colour. Swap the hue (green -> emerald, sky, ...) here.
const categoryBadge =
  "inline-flex rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground";

// Staggers the page-load reveal (see globals.css).
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/* -------------------------------------------------------------------------- */
/* Data helpers                                                               */
/* -------------------------------------------------------------------------- */

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return next.slug === slug ? undefined : next;
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);
  const hasTechnologies = project.technologies.length > 0;
  const hasLinks = Boolean(project.links && project.links.length > 0);
  const hasFacts = Boolean(
    project.category || project.duration || hasTechnologies,
  );

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      {/* Header: the one page-load sequence */}
      <header>
        <BackLink />

        <h1
          style={delay(0)}
          className="reveal mt-8 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          {project.title}
        </h1>

        <p
          style={delay(90)}
          className="reveal mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
        >
          {project.shortDescription}
        </p>

        {hasLinks && (
          <ul
            style={delay(180)}
            className="reveal mt-8 flex flex-wrap gap-3"
          >
            {project.links?.map((link, index) => (
              <li key={`${link.label}-${link.url}`}>
                <ProjectLink
                  label={link.label}
                  url={link.url}
                  primary={index === 0}
                />
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Cover image */}
      {project.coverImage && (
        <div
          style={delay(270)}
          className="reveal mt-12 overflow-hidden rounded-xl border border-border bg-surface"
        >
          <Image
            src={project.coverImage}
            alt={project.coverImageAlt || `${project.title} cover image`}
            width={1600}
            height={900}
            priority
            unoptimized
            sizes="(min-width: 1024px) 960px, 100vw"
            className="settle h-auto max-h-[75vh] w-full object-contain"
          />
        </div>
      )}

      {/* Overview + project facts */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <section aria-labelledby="overview-heading">
          <h2
            id="overview-heading"
            className="text-xl font-semibold tracking-tight text-foreground"
          >
            Overview
          </h2>
          <p className="mt-4 max-w-prose text-pretty leading-8 text-muted-foreground">
            {project.description}
          </p>
        </section>

        {hasFacts && (
          <dl className="grid grid-cols-2 content-start gap-6 text-sm lg:grid-cols-1">
            {project.category && (
              <Fact label="Category">
                <span className={categoryBadge}>{project.category}</span>
              </Fact>
            )}

            {project.duration && (
              <Fact label="Duration">{project.duration}</Fact>
            )}

            {hasTechnologies && (
              <Fact label="Built with" className="col-span-2 lg:col-span-1">
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechnologyChip key={tech} name={tech} />
                  ))}
                </ul>
              </Fact>
            )}
          </dl>
        )}
      </div>

      {/* Flexible project sections */}
      <div className="mt-16 border-t border-border pt-12">
        <ProjectSections sections={project.sections} />
      </div>

      {/* Footer navigation */}
      <footer className="mt-20 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <BackLink />

        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className={`group rounded-md sm:text-right ${focusRing}`}
          >
            <span className="block text-sm text-muted-foreground">
              Next project
            </span>
            <span className="mt-1 flex items-center gap-2 text-lg font-medium text-foreground sm:justify-end">
              {nextProject.title}
              <span
                aria-hidden="true"
                className="inline-block text-muted-foreground transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
              >
                →
              </span>
            </span>
          </Link>
        )}
      </footer>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Local components                                                           */
/* -------------------------------------------------------------------------- */

function BackLink() {
  return (
    <Link
      href="/projects"
      className={`group -mx-1 inline-flex items-center gap-2 rounded-md px-1 text-sm text-muted-foreground transition-colors hover:text-foreground ${focusRing}`}
    >
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-200 motion-safe:group-hover:-translate-x-0.5"
      >
        ←
      </span>
      All projects
    </Link>
  );
}

function Fact({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="mt-1.5 font-medium text-foreground">{children}</dd>
    </div>
  );
}

function TechnologyChip({ name }: { name: Technology }) {
  const logoSrc = technologyLogos[name];

  return (
    <li className="inline-flex items-center gap-2 rounded-md border border-border bg-card py-1.5 pl-2 pr-2.5 text-sm font-medium text-foreground">
      {logoSrc ? (
        // Local SVGs, always rendered black & white
        <Image
          src={logoSrc}
          alt=""
          width={16}
          height={16}
          unoptimized
          className="h-4 w-4 shrink-0 object-contain grayscale contrast-125"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-surface text-[10px] font-semibold text-muted-foreground"
        >
          {name.charAt(0)}
        </span>
      )}
      {name}
    </li>
  );
}

function ProjectLink({
  label,
  url,
  primary,
}: {
  label: string;
  url: string;
  primary: boolean;
}) {
  const isExternal = /^https?:\/\//i.test(url);

  const className = [
    "group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium",
    "transition-[color,background-color,transform] duration-200 motion-safe:active:scale-[0.98]",
    focusRing,
    primary
      ? "bg-foreground text-background hover:bg-foreground/90"
      : "border border-border bg-card text-foreground hover:bg-surface",
  ].join(" ");

  if (isExternal) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
        <span
          aria-hidden="true"
          className="inline-block opacity-70 transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
        >
          ↗
        </span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={url} className={className}>
      {label}
    </Link>
  );
}