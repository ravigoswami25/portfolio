import { skills } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-3">
        Skills
      </h2>
      <p className="text-2xl font-semibold text-foreground mb-12">
        Technical toolkit
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-card-border bg-card p-6"
          >
            <h3 className="font-mono text-sm font-semibold text-foreground mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-card-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
