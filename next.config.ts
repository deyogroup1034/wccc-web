import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images as-is for now. Revisit enabling Vercel's image optimizer
    // in a follow-up pass — flipping this changes every <Image> URL.
    unoptimized: true,
  },
  async redirects() {
    // Legacy domain → new domain, permanent. Order matters: first match wins,
    // so the donate deep-link maps before the catch-all sends the rest home.
    const legacyHost = [
      { type: "host", value: "(www\\.)?wyliecommunitychristiancare\\.org" },
    ] as const;
    return [
      {
        source: "/how-to-donate.html",
        has: [...legacyHost],
        destination: "https://wyliechristiancare.org/donate",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [...legacyHost],
        destination: "https://wyliechristiancare.org/",
        permanent: true,
      },
    ];
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
