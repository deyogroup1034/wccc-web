/** Client testimonial over a navy gradient. */
export function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1B3A5C,#0F2840)] px-8 py-20">
      <div
        aria-hidden
        className="absolute top-10 left-10 font-serif text-[200px] leading-none text-gold/[0.06]"
      >
        &ldquo;
      </div>
      <figure className="relative z-10 mx-auto max-w-[760px] text-center">
        <blockquote className="mb-7 font-serif text-2xl leading-[1.7] text-white/90 italic">
          Thank you so much for taking time to help me get off the street and
          get the services I needed. You are a true blessing from God.
        </blockquote>
        <figcaption className="font-sans text-sm font-semibold tracking-[0.08em] text-gold-bright">
          — David
        </figcaption>
      </figure>
    </section>
  );
}
