import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllBlogTags, getBlogPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on backend engineering, performance optimization, microservices, and DevOps.",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const tags = getAllBlogTags();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-mono text-sm uppercase tracking-widest text-accent mb-3">
        Blog
      </h1>
      <p className="text-3xl font-bold text-foreground mb-4">
        Writing & insights
      </p>
      <p className="text-muted max-w-2xl mb-8">
        Technical deep-dives on backend architecture, performance engineering,
        and lessons from production systems.
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-card-border bg-card px-3 py-1 font-mono text-xs text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-muted">No posts yet. Check back soon.</p>
      )}
    </div>
  );
}
