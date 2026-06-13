import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXContent } from "@/components/blog/MDXContent";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.summary,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent mb-8"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to blog
      </Link>

      <header className="mb-10">
        <time className="font-mono text-sm text-muted">
          {formatDate(post.date)}
        </time>
        <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-accent/80"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <MDXContent source={post.content} />
    </article>
  );
}
