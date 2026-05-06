import type { ReactNode } from "react";
import { ds } from "@/lib/ds";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div
        id={id}
        className="mx-auto max-w-[88rem] scroll-mt-[var(--section-scroll-offset)] px-5 sm:px-8 xl:px-12"
      >
        <div className="reveal mb-10 max-w-3xl">
          <p className={ds.sectionEyebrow}>
            <span className={ds.sectionEyebrowText}>{eyebrow}</span>
          </p>
          <h2 className={ds.sectionTitle}>{title}</h2>
          {description ? <p className={ds.sectionDescription}>{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
