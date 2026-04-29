import { Section } from "@/components/section";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Portfolio projects built around real infrastructure support problems."
      description="Focused automation and reporting projects that demonstrate PowerShell, Azure, Microsoft 365, and troubleshooting judgment."
    >
      <div className="reveal grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative flex min-h-96 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-2xl hover:shadow-slate-200/80"
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-sky-50 transition group-hover:bg-sky-100" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-slate-950 via-sky-500 to-blue-300 opacity-0 transition group-hover:opacity-100" />
            <div className="relative mb-7 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15">
                0{index + 1}
              </div>
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Portfolio Project
              </span>
            </div>
            <h3 className="relative text-2xl font-bold tracking-tight text-slate-950">{project.title}</h3>
            <p className="relative mt-4 leading-7 text-slate-600">{project.description}</p>
            <p className="relative mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700 ring-1 ring-slate-100">
              {project.impact}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/60">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              View on GitHub
              <span aria-hidden="true">-&gt;</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
