import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import type { ProjectFrontmatter } from "@/lib/mdx";

type ProjectCardProps = ProjectFrontmatter & {
  content: string;
};

export function ProjectCard({
  title,
  description,
  company,
  impact,
  technologies,
  github,
  demo,
  slug,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/30">
      <div className="flex-1">
        <p className="font-mono text-xs text-accent mb-2">{company}</p>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed">{description}</p>

        <p className="mt-4 rounded-md bg-accent/5 border border-accent/10 px-3 py-2 text-sm text-foreground">
          <span className="font-semibold text-accent">Impact: </span>
          {impact}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-card-border pt-4">
        <Link
          href={`/projects#${slug}`}
          className="text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          Read more
        </Link>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label={`${title} on GitHub`}
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label={`${title} live demo`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}
