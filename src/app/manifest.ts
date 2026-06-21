import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wylie Christian Care Center",
    short_name: "WCCC",
    description:
      "Wylie Christian Care Center — bridging the gap and restoring hope for families in the Wylie, Texas area.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F1EB",
    theme_color: "#1B3A5C",
    icons: [
      { src: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/favicon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/brand/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
