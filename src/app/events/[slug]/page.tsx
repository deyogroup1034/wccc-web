import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import {
  formatEventDate,
  getPublishedEvent,
  getPublishedEventSlugs,
} from "@/lib/events";

// generateStaticParams prerenders the known events at build; other slugs render
// on demand and 404 via getPublishedEvent → notFound() (so drafts stay private).
// We intentionally do NOT set dynamicParams=false: under OpenNext every request
// is a cache MISS, and dynamicParams=false turns a MISS into a 404 for these
// prerendered dynamic routes.
type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const event = getPublishedEvent(slug);
  if (!event) return {};

  const { title, summary, cover } = event.frontmatter;
  const images = [cover ?? "/og.png"];
  return {
    title,
    description: summary,
    alternates: { canonical: `/events/${slug}` },
    openGraph: {
      title,
      description: summary,
      type: "article",
      url: `/events/${slug}`,
      publishedTime: event.frontmatter.date,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images,
    },
  };
}

/** Date · time · location summary line for the event header. */
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

export default async function EventPage({ params }: Params) {
  const { slug } = await params;
  const event = getPublishedEvent(slug);
  if (!event) notFound();

  const { title, date, cover } = event.frontmatter;

  return (
    <article>
      {/* Header band */}
      <header className="bg-[linear-gradient(135deg,#1B3A5C,#0F2840)] px-8 pt-16 pb-16">
        <div className="mx-auto max-w-[760px]">
          <Link
            href="/events"
            className="font-sans text-sm font-semibold text-gold-bright transition-all hover:underline"
          >
            ← Back to Events
          </Link>
          <time
            dateTime={date}
            className="mt-8 block font-sans text-[12px] font-bold tracking-[0.12em] text-white/60 uppercase"
          >
            {eventMeta(event.frontmatter)}
          </time>
          <h1 className="mt-3 font-serif text-[clamp(30px,4vw,44px)] leading-[1.2] font-bold text-white">
            {title}
          </h1>
        </div>
      </header>

      {/* Optional cover */}
      {cover && (
        <div className="bg-warm-white px-8 pt-12">
          <div className="mx-auto aspect-[16/9] max-w-[860px] overflow-hidden rounded-2xl border border-[#E8E4DE]">
            <Image
              src={cover}
              alt={title}
              width={1600}
              height={900}
              className="size-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="bg-warm-white px-8 py-16">
        <div className="mx-auto max-w-[760px]">
          <MdxContent source={event.content} />

          <div className="mt-14 border-t border-[#E8E4DE] pt-8">
            <Link
              href="/events"
              className="font-sans text-sm font-bold text-evergreen transition-all hover:underline"
            >
              ← Back to all events
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
