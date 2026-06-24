import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { formatEventDate, getUpcomingEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  alternates: { canonical: "/events" },
  description:
    "Upcoming events at Wylie Christian Care Center — drives, distributions, and ways to serve alongside us across the Wylie, Texas area.",
};

export const dynamic = "force-static";

/** Date · time · location summary line for an event card/header. */
function eventMeta(frontmatter: {
  date: string;
  endDate?: string;
  time?: string;
  location?: string;
}): string {
  const { date, endDate, time, location } = frontmatter;
  const dateLabel = endDate
    ? `${formatEventDate(date)} – ${formatEventDate(endDate)}`
    : formatEventDate(date);
  return [dateLabel, time, location].filter(Boolean).join(" · ");
}

export default function EventsPage() {
  const events = getUpcomingEvents();

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Upcoming events"
        intro="Drives, distributions, and chances to serve alongside us — here's what's coming up at the center."
      />

      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto max-w-[820px]">
          {events.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-navy/20 bg-white p-12 text-center">
              <h2 className="mb-3 font-serif text-2xl font-bold text-navy">
                No upcoming events just yet
              </h2>
              <p className="mx-auto max-w-[420px] font-sans text-base leading-[1.7] text-[#666]">
                We&apos;re planning what&apos;s next. Check back soon — or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-evergreen hover:underline"
                >
                  reach out
                </Link>{" "}
                to find other ways to help in the meantime.
              </p>
            </div>
          ) : (
            <ul className="space-y-7">
              {events.map((event) => (
                <li key={event.slug}>
                  <Link
                    href={`/events/${event.slug}`}
                    className="group block rounded-2xl border border-[#E8E4DE] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,58,92,0.08)]"
                  >
                    <time
                      dateTime={event.frontmatter.date}
                      className="font-sans text-[12px] font-bold tracking-[0.12em] text-gold-ink uppercase"
                    >
                      {eventMeta(event.frontmatter)}
                    </time>
                    <h2 className="mt-2 mb-3 font-serif text-[26px] leading-[1.3] font-bold text-navy">
                      {event.frontmatter.title}
                    </h2>
                    <p className="mb-4 font-sans text-base leading-[1.7] text-[#666]">
                      {event.frontmatter.summary}
                    </p>
                    <span className="font-sans text-sm font-bold text-evergreen">
                      Details →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
