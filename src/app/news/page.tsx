import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { formatPostDate, getPublishedPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Events",
  alternates: { canonical: "/news" },
  description:
    "Updates, needs, and events from Wylie Christian Care Center — how we're serving families across the Wylie, Texas area.",
};

export const dynamic = "force-static";

export default function NewsPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <PageHeader
        eyebrow="News & Events"
        title="What's happening at WCCC"
        intro="Updates, current needs, and ways to get involved — straight from the center."
      />

      <section className="bg-warm-white px-8 py-24">
        <div className="mx-auto max-w-[820px]">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-navy/20 bg-white p-12 text-center">
              <h2 className="mb-3 font-serif text-2xl font-bold text-navy">
                No posts just yet
              </h2>
              <p className="mx-auto max-w-[420px] font-sans text-base leading-[1.7] text-[#666]">
                We&apos;re just getting started here. Check back soon for
                updates and events — or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-evergreen hover:underline"
                >
                  reach out
                </Link>{" "}
                in the meantime.
              </p>
            </div>
          ) : (
            <ul className="space-y-7">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/news/${post.slug}`}
                    className="group block rounded-2xl border border-[#E8E4DE] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,58,92,0.08)]"
                  >
                    <time
                      dateTime={post.frontmatter.date}
                      className="font-sans text-[12px] font-bold tracking-[0.12em] text-gold-ink uppercase"
                    >
                      {formatPostDate(post.frontmatter.date)}
                    </time>
                    <h2 className="mt-2 mb-3 font-serif text-[26px] leading-[1.3] font-bold text-navy">
                      {post.frontmatter.title}
                    </h2>
                    <p className="mb-4 font-sans text-base leading-[1.7] text-[#666]">
                      {post.frontmatter.summary}
                    </p>
                    <span className="font-sans text-sm font-bold text-evergreen">
                      Read more →
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
