import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The Cloudflare Workers runtime has no sharp-based image optimizer, so
    // serve images as-is. Revisit with Cloudflare Images in the SEO/launch pass.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;

// Enables calling `getCloudflareContext()` (Workers bindings) during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
