"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, pageLinks, personal } from "@/data/resume";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const allLinks = [...navLinks, ...pageLinks];

  return (
    <header className="sticky top-0 z-50 border-b border-card-border/60 bg-background/80 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-lg border border-card-border bg-card/80 px-3.5 py-2 font-mono text-sm font-semibold tracking-tight text-foreground shadow-sm transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent hover:shadow-accent/10 active:scale-[0.98]"
        >
          {personal.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {allLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground hover:bg-surface"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-muted hover:text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-card-border/60 bg-background md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {allLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-accent"
              onClick={() => setOpen(false)}
            >
              <Download className="h-4 w-4" aria-hidden />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
