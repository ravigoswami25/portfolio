import { Award, GraduationCap } from "lucide-react";
import { certifications, education, languages } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-3">
        Education & Certifications
      </h2>
      <p className="text-2xl font-semibold text-foreground mb-12">
        Credentials & learning
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-card-border bg-card p-6">
          <div className="flex items-start gap-3">
            <GraduationCap
              className="h-5 w-5 shrink-0 text-accent mt-0.5"
              aria-hidden
            />
            <div>
              <h3 className="font-semibold text-foreground">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted">{education.institution}</p>
            </div>
          </div>

          <div className="mt-6 border-t border-card-border pt-6">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Languages
            </h4>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex justify-between text-sm text-muted"
                >
                  <span>{lang.name}</span>
                  <span className="text-foreground/70">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-card-border bg-card p-6">
          <div className="flex items-center gap-2 mb-5">
            <Award className="h-5 w-5 text-accent" aria-hidden />
            <h3 className="font-semibold text-foreground">Certifications</h3>
          </div>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li
                key={cert.credentialId}
                className="border-b border-card-border/60 pb-4 last:border-0 last:pb-0"
              >
                <p className="text-sm font-medium text-foreground">{cert.name}</p>
                <p className="text-xs text-muted mt-0.5">
                  {cert.issuer} · Issued {cert.issued}
                </p>
                <p className="font-mono text-xs text-muted/70 mt-1">
                  ID: {cert.credentialId}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
