import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getPublishedPosts } from "@/lib/news";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/get-help",
  "/get-involved",
  "/donate",
  "/contact",
  "/news",
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

  return [...staticEntries, ...postEntries];
}
