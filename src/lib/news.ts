import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

// MDX posts live here. Authoring = drop a new `.mdx` file in this folder and push.
const NEWS_DIR = path.join(process.cwd(), "src/content/news");

const frontmatterSchema = z.object({
  title: z.string().min(1),
  date: z.string().min(1), // ISO date, e.g. "2026-06-20"
  summary: z.string().min(1),
  cover: z.string().optional(),
  draft: z.boolean().optional().default(false),
});

export type NewsFrontmatter = z.infer<typeof frontmatterSchema>;

export type NewsPost = {
  slug: string;
  frontmatter: NewsFrontmatter;
  content: string;
};

function readPost(fileName: string): NewsPost {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(NEWS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in src/content/news/${fileName}: ${parsed.error.message}`,
    );
  }
  return { slug, frontmatter: parsed.data, content };
}

/** All posts (including drafts), newest first. Build-time only. */
function getAllPostsIncludingDrafts(): NewsPost[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(readPost)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

/** Published posts only (drafts excluded), newest first. */
export function getPublishedPosts(): NewsPost[] {
  return getAllPostsIncludingDrafts().filter((p) => !p.frontmatter.draft);
}

/** Slugs of published posts — used by generateStaticParams. */
export function getPublishedSlugs(): string[] {
  return getPublishedPosts().map((p) => p.slug);
}

/** A single published post by slug, or null (drafts are treated as not found). */
export function getPublishedPost(slug: string): NewsPost | null {
  return getPublishedPosts().find((p) => p.slug === slug) ?? null;
}

/** Format an ISO date for display, e.g. "June 20, 2026". */
export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
