import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import {
  formatPostDate,
  getPublishedPost,
  getPublishedSlugs,
} from "@/lib/news";

// generateStaticParams prerenders the known posts at build; other slugs render
// on demand and 404 via getPublishedPost → notFound() (so drafts stay private).
// We intentionally do NOT set dynamicParams=false: under OpenNext every request
// is a cache MISS, and dynamicParams=false turns a MISS into a 404 for these
// prerendered dynamic routes.
type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) return {};

  const { title, summary, cover } = post.frontmatter;
  const images = [cover ?? "/og.png"];
  return {
    title,
    description: summary,
    alternates: { canonical: `/news/${slug}` },
    openGraph: {
      title,
      description: summary,
      type: "article",
      url: `/news/${slug}`,
      publishedTime: post.frontmatter.date,
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

export default async function NewsPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();

  const { title, date, cover } = post.frontmatter;

  return (
    <article>
      {/* Header band */}
      <header className="bg-[linear-gradient(135deg,#1B3A5C,#0F2840)] px-8 pt-16 pb-16">
        <div className="mx-auto max-w-[760px]">
          <Link
            href="/news"
            className="font-sans text-sm font-semibold text-gold-bright transition-all hover:underline"
          >
            ← Back to News
          </Link>
          <time
            dateTime={date}
            className="mt-8 block font-sans text-[12px] font-bold tracking-[0.12em] text-white/60 uppercase"
          >
            {formatPostDate(date)}
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
          <MdxContent source={post.content} />

          <div className="mt-14 border-t border-[#E8E4DE] pt-8">
            <Link
              href="/news"
              className="font-sans text-sm font-bold text-evergreen transition-all hover:underline"
            >
              ← Back to all news
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
