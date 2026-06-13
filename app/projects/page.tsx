import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { MDXContent } from "@/components/blog/MDXContent";
import { getProjects } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering projects — microservices platforms, OTA update servers, hospitality APIs, and performance optimization.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-mono text-sm uppercase tracking-widest text-accent mb-3">
        Projects
      </h1>
      <p className="text-3xl font-bold text-foreground mb-4">
        Selected work
      </p>
      <p className="text-muted max-w-2xl mb-12">
        Production systems I&apos;ve architected and shipped — from
        microservices platforms to 100x performance improvements.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mb-20">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>

      <div className="space-y-20">
        {projects.map((project) => (
          <section key={project.slug} id={project.slug} className="scroll-mt-24">
            <div className="mb-6">
              <p className="font-mono text-xs text-accent">{project.company}</p>
              <h2 className="text-2xl font-bold text-foreground mt-1">
                {project.title}
              </h2>
              <p className="text-muted mt-2">{project.description}</p>
            </div>
            <MDXContent source={project.content} />
          </section>
        ))}
      </div>
    </div>
  );
}
