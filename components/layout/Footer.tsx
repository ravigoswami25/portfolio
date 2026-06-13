import Link from "next/link";
import { Mail, Phone, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/data/resume";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border/60 bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground">
            {personal.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {personal.title} · {personal.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="text-muted transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={`tel:${personal.phone}`}
            className="text-muted transition-colors hover:text-accent"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-card-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            Resume
          </a>
        </div>
      </div>

      <div className="border-t border-card-border/40 px-6 py-4 text-center text-xs text-muted">
        <p>
          © {year}{" "}
          <Link href="/" className="hover:text-accent transition-colors">
            {personal.name}
          </Link>
          . Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
