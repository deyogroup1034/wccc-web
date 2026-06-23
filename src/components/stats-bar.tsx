import { IMPACT_STATS } from "@/lib/site";

/** Floating stats bar that overlaps the bottom of the hero. */
export function StatsBar() {
  return (
    <section className="relative z-10 bg-warm-white">
      <div className="mx-auto -mt-10 grid max-w-[1200px] grid-cols-2 overflow-hidden rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:grid-cols-4">
        {IMPACT_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={
              "border-[#E8E4DE] bg-white px-6 py-9 text-center " +
              (i < IMPACT_STATS.length - 1 ? "md:border-r" : "")
            }
          >
            <div className="mb-2 text-[28px]">{stat.icon}</div>
            <div className="mb-1 font-serif text-[32px] font-bold text-navy">
              {stat.number}
            </div>
            <div className="font-sans text-[13px] font-semibold tracking-[0.04em] text-[#666] uppercase">
              {stat.label}
            </div>
            {stat.note ? (
              <div className="mt-1 font-sans text-[11px] tracking-[0.04em] text-[#999]">
                {stat.note}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
