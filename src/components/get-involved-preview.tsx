import Link from "next/link";

const CARDS = [
  {
    label: "Volunteer",
    title: "Give your time",
    body: "Sort food, greet families, assist with distributions, or help behind the scenes. There's a role for everyone.",
    cta: "Sign Up to Volunteer →",
    href: "/get-involved",
    accent: "bg-evergreen",
    text: "text-evergreen",
  },
  {
    label: "Donate",
    title: "Fund the mission",
    body: "Every dollar goes directly to serving families. Your gift keeps the lights on for someone who can't.",
    cta: "Make a Donation →",
    href: "/donate",
    accent: "bg-red",
    text: "text-red",
  },
  {
    label: "Partner",
    title: "Rally your church or business",
    body: "Organize a food drive, sponsor a distribution day, or become a recurring partner organization.",
    cta: "Become a Partner →",
    href: "/get-involved",
    accent: "bg-navy",
    text: "text-navy",
  },
];

/** Three ways to get involved: volunteer, donate, partner. */
export function GetInvolvedPreview() {
  return (
    <section className="bg-warm-white px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <div className="mb-3 font-sans text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
            Get Involved
          </div>
          <h2 className="font-serif text-[34px] leading-[1.3] font-bold text-navy">
            Three ways to make a difference
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E4DE] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(27,58,92,0.08)]"
            >
              <div className={"h-[5px] " + card.accent} />
              <div className="flex flex-1 flex-col p-8">
                <div
                  className={
                    "mb-3 font-sans text-[11px] font-bold tracking-[0.15em] uppercase " +
                    card.text
                  }
                >
                  {card.label}
                </div>
                <h3 className="mb-3 font-serif text-[22px] font-bold text-navy">
                  {card.title}
                </h3>
                <p className="mb-6 flex-1 font-sans text-[15px] leading-[1.7] text-[#666]">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className={
                    "inline-flex items-center gap-1.5 font-sans text-sm font-bold " +
                    card.text
                  }
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
