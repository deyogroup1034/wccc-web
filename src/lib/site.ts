// Canonical origin. Set NEXT_PUBLIC_SITE_URL at build to flip from the temp
// *.workers.dev domain to the real domain (P1-12) without touching code.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wccc-web.deyogroup.workers.dev"
).replace(/\/$/, "");

// While on the temp domain we don't want it indexed. Flip
// NEXT_PUBLIC_ALLOW_INDEXING=true at P1-12 when the real domain goes live.
export const INDEXABLE = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const SITE_NAME = "Wylie Christian Care Center";
// Legal entity behind the WCCC operating/DBA name.
export const LEGAL_NAME = "Wylie Ministerial Alliance";
export const SITE_TAGLINE = "Bridging the Gap and Restoring Hope";
export const SITE_DESCRIPTION =
  "Wylie Christian Care Center is a 501(c)(3) nonprofit providing emergency assistance, food, and clothing to families in crisis across seven communities in the Wylie, Texas area.";

// EIN for the Wylie Ministerial Alliance 501(c)(3).
export const ORG_EIN = "75-2355156";

// Phone: tel: href form, plus a human-readable display string.
export const ORG_PHONE = "+1-972-442-4341";
export const ORG_PHONE_HREF = "tel:+19724424341";
export const ORG_PHONE_DISPLAY = "972-442-4341";

export const ORG_EMAIL = "wyliechristiancare@gmail.com";

// Visit / street address.
export const ORG_ADDRESS = {
  street: "1310 W. Brown St",
  locality: "Wylie",
  region: "TX",
  postalCode: "75098",
  country: "US",
};

// Mailing address — where checks are sent.
export const ORG_MAILING_ADDRESS = {
  poBox: "P.O. Box 262",
  locality: "Wylie",
  region: "TX",
  postalCode: "75098",
};

// Checks are made payable to the operating name, not the legal entity.
export const CHECK_PAYABLE = SITE_NAME;

// Open hours (pantry & clothing). Emergency Bill Assistance is Mon & Wed only.
export const ORG_HOURS: { day: string; time: string }[] = [
  { day: "Monday", time: "10:00 am – 2:00 pm" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "10:00 am – 2:00 pm" },
  { day: "Thursday", time: "Closed" },
  { day: "Friday", time: "Closed" },
  { day: "Saturday", time: "10:00 am – 12:00 pm" },
  { day: "Sunday", time: "Closed" },
];
export const BILL_ASSISTANCE_NOTE =
  "Emergency Bill Assistance is available Monday & Wednesday only.";

// Tactful expectation-setting for phone contact (we're a small walk-in team).
// Everything is walk-in — there are no appointments — so we avoid implying a
// callback and point people to our open hours instead.
export const CALL_NOTE =
  "We're a small team, so the surest way to get help is to visit or call during our open hours. Messages left after hours may not be returned right away.";

// Google Maps embed + directions, pinned to the visit address.
export const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=1310%20W.%20Brown%20St%2C%20Wylie%2C%20TX%2075098&t=&z=15&ie=UTF8&iwloc=&output=embed";
export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=1310+W.+Brown+St%2C+Wylie%2C+TX+75098";

// 2025 impact figures. `note` flags figures tied to a specific year.
export const IMPACT_STATS: {
  icon: string;
  number: string;
  label: string;
  note?: string;
}[] = [
  { icon: "👨‍👩‍👧‍👦", number: "3,475", label: "Families Served", note: "in 2025" },
  { icon: "🤝", number: "13,839", label: "Individuals Served", note: "in 2025" },
  { icon: "📅", number: "50+", label: "Years Serving" },
  { icon: "📍", number: "7", label: "Communities Served" },
];

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
