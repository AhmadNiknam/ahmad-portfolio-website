import { Section } from "@/components/section";
import { ds } from "@/lib/ds";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Portfolio projects built around IT support, operations, and secure web systems."
      description="Focused automation, reporting, and web systems projects that demonstrate PowerShell, Azure, Microsoft 365, troubleshooting judgment, and secure deployment support."
    >
      <div className="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`${ds.card} group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[var(--ds-radius-card)] ${ds.cardInteractive}`}
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-teal-100/50 via-cyan-50/30 to-transparent opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <div
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <div className="relative mb-6 flex items-center justify-between gap-3">
              <div className={ds.iconPlate}>0{index + 1}</div>
              <span className={`${ds.chip} ${ds.chipDense}`}>{project.status ?? "Portfolio project"}</span>
            </div>
            <h3 className="relative text-xl font-semibold tracking-tight text-[var(--ds-color-heading)] sm:text-[1.35rem]">
              {project.title}
            </h3>
            {(project.date || project.associatedWith) ? (
              <p className="relative mt-2 text-sm font-semibold text-slate-500">
                {[project.date, project.associatedWith].filter(Boolean).join(" · ")}
              </p>
            ) : null}
            <p className="relative mt-4 leading-[1.7] text-[var(--ds-color-muted)]">{project.description}</p>
            <p className={`${ds.insetSurface} relative mt-5`}>{project.impact}</p>
            {project.contribution ? (
              <p className="relative mt-4 text-sm leading-[1.7] text-[var(--ds-color-muted)]">
                {project.contribution}
              </p>
            ) : null}
            <div className="relative mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className={ds.tag}>
                  {tag}
                </span>
              ))}
            </div>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ds.btnPrimary} relative mt-auto w-fit`}
              >
                View on GitHub
                <span aria-hidden="true" className="ml-1.5 font-normal">
                  →
                </span>
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
