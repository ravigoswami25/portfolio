import { Sparkles } from "lucide-react";
import { summary } from "@/data/resume";

export function About() {
  const paragraphs = summary.split("\n\n").filter(Boolean);

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-3">
        About
      </h2>
      <p className="text-2xl font-semibold text-foreground mb-8">
        Building scalable systems that perform under pressure
      </p>

      <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
        <div className="space-y-4 text-muted leading-relaxed">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="flex h-fit items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-5 lg:max-w-xs">
          <Sparkles className="h-5 w-5 shrink-0 text-accent mt-0.5" aria-hidden />
          <div>
            <p className="text-sm font-semibold text-foreground">
              AI-Augmented Developer
            </p>
            <p className="mt-1 text-sm text-muted">
              Certified in Claude Code in Action (Anthropic). Uses Claude and
              Cursor daily to accelerate development, reviews, and documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
