import type { ReactNode } from "react";
import { ds } from "@/lib/ds";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

const backToHeroClassName =
  "inline-flex min-h-[40px] shrink-0 items-center justify-center gap-1 rounded-full border border-slate-200/90 bg-white/85 px-3.5 py-2 text-xs font-medium text-[var(--ds-color-heading)] shadow-[var(--ds-shadow-chip)] transition hover:border-teal-200/90 hover:bg-teal-50/60 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-ring-offset)] sm:text-[0.8125rem]";

function BackToHeroLink() {
  return (
    <a href="#hero" className={backToHeroClassName} aria-label="Back to hero section">
      Back to Hero
      <span aria-hidden="true">↑</span>
    </a>
  );
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div
        id={id}
        className="mx-auto max-w-[88rem] scroll-mt-[var(--section-scroll-offset)] px-5 sm:px-8 xl:px-12"
      >
        <div className="reveal mb-10">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <p className={`${ds.sectionEyebrow} mb-0`}>
              <span className={ds.sectionEyebrowText}>{eyebrow}</span>
            </p>
            <BackToHeroLink />
          </div>
          <div className="mt-4 max-w-3xl">
            <h2 className={ds.sectionTitle}>{title}</h2>
            {description ? <p className={ds.sectionDescription}>{description}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
