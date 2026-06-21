import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Serve prerendered (SSG) pages from Workers static assets. Without an
// incremental cache every request is a cache MISS, which 404s prerendered
// dynamic routes like /news/[slug]. This is a static, no-revalidation site.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
