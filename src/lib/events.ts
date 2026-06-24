import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

// MDX events live here. Authoring = drop a new `.mdx` file in this folder and
// push. Mirrors src/lib/news.ts, with event-specific fields + upcoming filter.
const EVENTS_DIR = path.join(process.cwd(), "src/content/events");

const frontmatterSchema = z.object({
  title: z.string().min(1),
  date: z.string().min(1), // ISO start date, e.g. "2026-07-04"
  endDate: z.string().optional(), // ISO end date for multi-day events
  time: z.string().optional(), // e.g. "10:00 AM – 2:00 PM"
  location: z.string().optional(),
  summary: z.string().min(1),
  cover: z.string().optional(),
  draft: z.boolean().optional().default(false),
});

export type EventFrontmatter = z.infer<typeof frontmatterSchema>;

export type EventItem = {
  slug: string;
  frontmatter: EventFrontmatter;
  content: string;
};

function readEvent(fileName: string): EventItem {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(EVENTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in src/content/events/${fileName}: ${parsed.error.message}`,
    );
  }
  return { slug, frontmatter: parsed.data, content };
}

/** All events (including drafts), soonest first. Build-time only. */
function getAllEventsIncludingDrafts(): EventItem[] {
  if (!fs.existsSync(EVENTS_DIR)) return [];
  return fs
    .readdirSync(EVENTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(readEvent)
    .sort(
      (a, b) =>
        new Date(a.frontmatter.date).getTime() -
        new Date(b.frontmatter.date).getTime(),
    );
}

/**
 * Published events only (drafts excluded), soonest first. Includes past events
 * so their detail pages stay reachable — used by generateStaticParams + sitemap.
 */
export function getPublishedEvents(): EventItem[] {
  return getAllEventsIncludingDrafts().filter((e) => !e.frontmatter.draft);
}

/**
 * Today's date (YYYY-MM-DD) in Central time. The site is statically generated,
 * so "upcoming" is evaluated at build time; computing the cutoff in
 * America/Chicago (not the UTC build server) avoids a same-day event flipping
 * to "past" in the hours around UTC midnight. A daily scheduled rebuild
 * (.github/workflows/deploy.yml) re-runs this so expired events drop off.
 */
function todayInCentral(): string {
  // en-CA gives ISO-style YYYY-MM-DD, which compares lexicographically.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/** Published, not-yet-past events (end date >= today, Central), soonest first. */
export function getUpcomingEvents(): EventItem[] {
  const cutoff = todayInCentral();
  return getPublishedEvents().filter((e) => {
    const effectiveDate = (e.frontmatter.endDate ?? e.frontmatter.date).slice(
      0,
      10,
    );
    return effectiveDate >= cutoff;
  });
}

/** Slugs of published events — used by generateStaticParams. */
export function getPublishedEventSlugs(): string[] {
  return getPublishedEvents().map((e) => e.slug);
}

/** A single published event by slug, or null (drafts are treated as not found). */
export function getPublishedEvent(slug: string): EventItem | null {
  return getPublishedEvents().find((e) => e.slug === slug) ?? null;
}

/** Format an ISO date for display, e.g. "July 4, 2026". */
export function formatEventDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
