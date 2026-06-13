import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/data/resume";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-3">
        Contact
      </h2>
      <p className="text-2xl font-semibold text-foreground mb-4">
        Let&apos;s build something together
      </p>
      <p className="text-muted mb-10 max-w-xl">
        Open to senior engineering roles, tech lead opportunities, and
        consulting on backend architecture and performance optimization.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href={`mailto:${personal.email}`}
          className="group flex items-center gap-4 rounded-xl border border-card-border bg-card p-5 transition-colors hover:border-accent/40"
        >
          <Mail className="h-5 w-5 text-accent" aria-hidden />
          <div>
            <p className="text-xs text-muted">Email</p>
            <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              {personal.email}
            </p>
          </div>
        </a>

        <a
          href={`tel:${personal.phone}`}
          className="group flex items-center gap-4 rounded-xl border border-card-border bg-card p-5 transition-colors hover:border-accent/40"
        >
          <Phone className="h-5 w-5 text-accent" aria-hidden />
          <div>
            <p className="text-xs text-muted">Phone</p>
            <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              +91 {personal.phone}
            </p>
          </div>
        </a>

        <div className="flex items-center gap-4 rounded-xl border border-card-border bg-card p-5">
          <MapPin className="h-5 w-5 text-accent" aria-hidden />
          <div>
            <p className="text-xs text-muted">Location</p>
            <p className="text-sm font-medium text-foreground">
              {personal.location}
            </p>
          </div>
        </div>

        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-card-border bg-card p-5 transition-colors hover:border-accent/40"
        >
          <LinkedInIcon className="h-5 w-5 text-accent" />
          <div>
            <p className="text-xs text-muted">LinkedIn</p>
            <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              /in/goswamiravi
            </p>
          </div>
        </a>

        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-card-border bg-card p-5 transition-colors hover:border-accent/40"
        >
          <GitHubIcon className="h-5 w-5 text-accent" />
          <div>
            <p className="text-xs text-muted">GitHub</p>
            <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              /ravigoswami25
            </p>
          </div>
        </a>

        <a
          href={`mailto:${personal.email}?subject=Let's connect`}
          className="flex items-center justify-center rounded-xl border border-accent/30 bg-accent/10 p-5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20 sm:col-span-2 lg:col-span-1"
        >
          Send an email
        </a>
      </div>
    </section>
  );
}
