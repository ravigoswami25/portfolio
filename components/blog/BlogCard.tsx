import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { BlogFrontmatter } from "@/lib/mdx";

type BlogCardProps = BlogFrontmatter;

export function BlogCard({ title, date, summary, tags, slug }: BlogCardProps) {
  return (
    <article className="group rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/30">
      <time className="font-mono text-xs text-muted">{formatDate(date)}</time>
      <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-accent/80"
          >
            #{tag}
          </span>
        ))}
      </div>
      <Link
        href={`/blog/${slug}`}
        className="mt-4 inline-block text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        Read article →
      </Link>
    </article>
  );
}
