import Link from "next/link";
import type { ReactNode } from "react";

const ICON_PROPS = {
  width: 32,
  height: 32,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  "aria-hidden": true,
} as const;

const PROGRAMS: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Emergency Bill Assistance",
    body: "Help with utilities, rent, and essential bills when families face unexpected hardship.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Food Pantry",
    body: "Nutritious groceries and pantry staples for families who need help putting food on the table.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Clothing & Essentials",
    body: "Gently used clothing and household essentials available at no cost to those in need.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M20.38 3.46L16 2 12 3.46 8 2 3.62 3.46A1 1 0 003 4.41v13.18a1 1 0 00.62.95L8 20l4-1.46L16 20l4.38-1.46a1 1 0 00.62-.95V4.41a1 1 0 00-.62-.95z" />
      </svg>
    ),
  },
  {
    title: "Prayer & Support",
    body: "Every visit includes the offer of prayer and connection with a community that cares.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

/** Preview of the four programs; each card links into /get-help. */
export function ProgramsPreview() {
  return (
    <section className="border-t border-[#E8E4DE] bg-white px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
            How We Help
          </div>
          <h2 className="font-serif text-[34px] leading-[1.3] font-bold text-navy">
            Services We Provide
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program) => (
            <Link
              key={program.title}
              href="/get-help"
              className="group flex h-full flex-col rounded-xl border border-[#E8E4DE] bg-cream p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,58,92,0.08)]"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-evergreen/[0.07] text-evergreen">
                {program.icon}
              </div>
              <h3 className="mb-2.5 font-serif text-lg font-bold text-navy">
                {program.title}
              </h3>
              <p className="font-sans text-sm leading-[1.7] text-[#666]">
                {program.body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
