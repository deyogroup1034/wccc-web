import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The Cloudflare Workers runtime has no sharp-based image optimizer, so
    // serve images as-is. Revisit with Cloudflare Images in the SEO/launch pass.
    unoptimized: true,
  },
};

export default nextConfig;

// Enables calling `getCloudflareContext()` (Workers bindings) during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
