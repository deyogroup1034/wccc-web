import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
};

/** Navy page header band used across the content pages. */
export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="bg-[linear-gradient(135deg,#1B3A5C,#0F2840)] px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        {eyebrow && (
          <div className="mb-4 flex items-center gap-3 font-sans text-xs font-bold tracking-[0.2em] text-gold-bright uppercase">
            <span className="inline-block h-0.5 w-8 bg-gold" />
            {eyebrow}
          </div>
        )}
        <h1 className="max-w-[820px] font-serif text-[clamp(34px,4.5vw,52px)] leading-[1.15] font-bold text-white">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-[680px] font-sans text-lg leading-[1.7] text-white/75">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
