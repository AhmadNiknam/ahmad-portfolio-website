import { Section } from "@/components/section";
import { ds } from "@/lib/ds";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Core technical strengths grouped for infrastructure and support roles."
      description="Recruiter-friendly skill areas across cloud, infrastructure, networking, operations, automation, and practical web systems projects."
    >
      <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className={`${ds.card} group relative overflow-hidden rounded-[var(--ds-radius-card)] ${ds.cardInteractive}`}
          >
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <div className={ds.skillIconPlate}>{group.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--ds-color-heading)]">{group.title}</h3>
            <p className="mt-3 leading-[1.7] text-[var(--ds-color-muted)]">{group.summary}</p>
            <ul className="mt-5 space-y-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2.5 text-sm font-medium leading-snug text-[var(--ds-color-muted)]"
                >
                  <span className={`${ds.listBullet} mt-0.5`} aria-hidden="true">
                    +
                  </span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
