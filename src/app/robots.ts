import type { MetadataRoute } from "next";
import { absoluteUrl, INDEXABLE } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // On the temp *.workers.dev domain, discourage indexing so it doesn't rank.
  // TODO (P1-12): set NEXT_PUBLIC_ALLOW_INDEXING=true on the real domain to
  // flip this to allow-crawl + sitemap.
  if (!INDEXABLE) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
