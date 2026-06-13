import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export type ProjectFrontmatter = {
  title: string;
  description: string;
  company: string;
  impact: string;
  technologies: string[];
  github?: string;
  demo?: string;
  slug: string;
};

export type BlogFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
};

function getMdxFiles(dir: string) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(dir, file));
}

export function getProjects(): (ProjectFrontmatter & { content: string })[] {
  const dir = path.join(contentRoot, "projects");
  return getMdxFiles(dir)
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      return {
        ...(data as Omit<ProjectFrontmatter, "slug">),
        slug: data.slug ?? path.basename(filePath, ".mdx"),
        content,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getProjectBySlug(slug: string) {
  return getProjects().find((project) => project.slug === slug) ?? null;
}

export function getBlogPosts(): (BlogFrontmatter & { content: string })[] {
  const dir = path.join(contentRoot, "blog");
  return getMdxFiles(dir)
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      return {
        ...(data as Omit<BlogFrontmatter, "slug">),
        slug: data.slug ?? path.basename(filePath, ".mdx"),
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug) ?? null;
}

export function getAllBlogTags() {
  const tags = new Set<string>();
  getBlogPosts().forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}
