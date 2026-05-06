import { Section } from "@/components/section";
import { ds } from "@/lib/ds";
import { experienceItems } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience across IT support, systems administration, and infrastructure operations."
      description="A clear timeline focused on support outcomes, multi-site operations, Windows infrastructure, Microsoft 365, networking, and remote technical support."
    >
      <div className={`reveal relative space-y-6 ${ds.timelineLine}`}>
        {experienceItems.map((item, index) => (
          <article key={`${item.role}-${item.period}`} className="relative pl-12">
            <span className={ds.timelineDot}>{index + 1}</span>
            <div className={`${ds.card} ${ds.cardInteractive} rounded-[var(--ds-radius-card)]`}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--ds-color-heading)]">
                    {item.role}
                  </h3>
                  <p className="mt-2 font-semibold text-slate-700">{item.company}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                </div>
                <span className={ds.datePill}>{item.period}</span>
              </div>
              <p className="mt-5 leading-[1.7] text-slate-600">{item.summary}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className={ds.insetSurface}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
