import { Section } from "@/components/section";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Practical IT automation and infrastructure projects"
      description="A focused set of projects that show Ahmad's ability to turn everyday infrastructure problems into clear checks, reports, and support workflows."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex min-h-72 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-6 h-2 w-16 rounded-full bg-sky-500" />
            <h3 className="text-2xl font-bold text-slate-950">{project.title}</h3>
            <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
