import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <div id={id} className="mx-auto max-w-6xl scroll-mt-[var(--section-scroll-offset)] px-6">
        <div className="reveal mb-10 max-w-3xl">
          <p className="mb-3 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-bold uppercase tracking-[0.24em] text-sky-700 ring-1 ring-sky-100">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
