// Canonical origin. Set NEXT_PUBLIC_SITE_URL at build to flip from the temp
// *.workers.dev domain to the real domain (P1-12) without touching code.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wccc-web.deyogroup.workers.dev"
).replace(/\/$/, "");

// While on the temp domain we don't want it indexed. Flip
// NEXT_PUBLIC_ALLOW_INDEXING=true at P1-12 when the real domain goes live.
export const INDEXABLE = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const SITE_NAME = "Wylie Christian Care Center";
export const SITE_TAGLINE = "Bridging the Gap and Restoring Hope";
export const SITE_DESCRIPTION =
  "Wylie Christian Care Center is a 501(c)(3) nonprofit providing emergency assistance, food, and clothing to families in crisis across seven communities in the Wylie, Texas area.";

// TODO (P1-11): confirm real phone/email/address with Audrey + Ron.
export const ORG_PHONE = "+1-972-555-0190";
export const ORG_EMAIL = "info@wyliechristiancare.org";
export const ORG_ADDRESS = {
  street: "123 Main St",
  locality: "Wylie",
  region: "TX",
  postalCode: "75098",
  country: "US",
};

export const SERVICE_AREA = [
  "Wylie",
  "Lavon",
  "Nevada",
  "Josephine",
  "Copeville",
  "Sachse",
  "Murphy",
];

/** Absolute URL helper for a path. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}
