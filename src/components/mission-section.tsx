import Image from "next/image";
import Link from "next/link";

/** Mission statement with a "Learn Our Story" link to /about. */
export function MissionSection() {
  return (
    <section className="bg-warm-white px-8 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-2.5 font-sans text-[11px] font-bold tracking-[0.2em] text-evergreen uppercase">
            <span className="inline-block h-0.5 w-6 bg-evergreen" />
            Our Mission
          </div>
          <h2 className="mb-6 font-serif text-[34px] leading-[1.3] font-bold text-navy">
            Restoring dignity and hope to families in their hardest season
          </h2>
          <p className="mb-5 font-sans text-base leading-[1.8] text-charcoal">
            Serving the Wylie community by bridging the gap between crisis and
            stability. We walk with families to provide emergency assistance,
            food, and clothing — meeting immediate needs while restoring dignity
            and hope through the compassion of Christ.
          </p>
          <p className="font-sans text-[15px] leading-[1.8] text-[#666]">
            Since our founding, we&apos;ve been a neighbor to those who need one
            most — funded by local churches, businesses, and individuals who
            believe that generosity can change a family&apos;s story.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 font-sans text-sm font-bold tracking-[0.02em] text-evergreen transition-all hover:gap-3"
          >
            Learn Our Story →
          </Link>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E8E4DE]">
          <Image
            src="/food-pantry.jpg"
            alt="Volunteers stocking the Wylie Christian Care Center food pantry"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute right-0 bottom-0 size-[120px] rounded-tl-[80px] bg-gold opacity-15" />
        </div>
      </div>
    </section>
  );
}
