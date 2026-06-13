import { experience } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-3">
        Experience
      </h2>
      <p className="text-2xl font-semibold text-foreground mb-12">
        6+ years shipping production systems
      </p>

      <div className="relative space-y-8">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-card-border hidden md:block"
          aria-hidden
        />

        {experience.map((job, index) => (
          <article
            key={`${job.company}-${job.period}`}
            className="relative md:pl-10 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-background md:block"
              aria-hidden
            />

            <div className="rounded-xl border border-card-border bg-card p-6 md:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-accent font-medium">{job.company}</p>
                  <p className="text-sm text-muted">{job.location}</p>
                </div>
                <time className="shrink-0 font-mono text-sm text-muted">
                  {job.period}
                </time>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight.slice(0, 50)}
                    className="flex gap-2 text-sm text-muted leading-relaxed"
                  >
                    <span className="text-accent mt-1.5 shrink-0" aria-hidden>
                      ▸
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
