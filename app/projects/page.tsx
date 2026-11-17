import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Boubkeur Bouchama",
  description: "All professional and technical projects in Data Science, Machine Learning, and Software Engineering.",
};

export default function ProjectsPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Page header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Portfolio
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            All Projects
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            A comprehensive list of engineering projects, machine learning systems,
            and research internships.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
