import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { personal, heroStats } from "@/data/resume";
import { ProfileAvatar } from "@/components/sections/ProfileAvatar";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="animate-fade-in-up">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="flex-1">
            <p className="font-mono text-sm text-accent mb-4">
              Hi, I&apos;m{" "}
              <span className="text-foreground">{personal.name}</span>
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {personal.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
              {personal.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent-dim"
              >
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-card-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-card-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Contact
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <ProfileAvatar />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-card-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-accent/20"
            >
              <p className="font-mono text-2xl font-bold text-accent sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
