import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getPublishedPosts } from "@/lib/news";
import { getPublishedEvents } from "@/lib/events";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/get-help",
  "/get-involved",
  "/donate",
  "/contact",
  "/news",
  "/events",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = getPublishedPosts().map(
    (post) => ({
      url: absoluteUrl(`/news/${post.slug}`),
      lastModified: new Date(post.frontmatter.date),
      changeFrequency: "yearly",
      priority: 0.5,
    }),
  );

  const eventEntries: MetadataRoute.Sitemap = getPublishedEvents().map(
    (event) => ({
      url: absoluteUrl(`/events/${event.slug}`),
      lastModified: new Date(event.frontmatter.date),
      changeFrequency: "yearly",
      priority: 0.5,
    }),
  );

  return [...staticEntries, ...postEntries, ...eventEntries];
}
