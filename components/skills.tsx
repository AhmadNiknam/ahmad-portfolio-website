import { Section } from "@/components/section";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Core technical strengths grouped for infrastructure and support roles."
      description="Recruiter-friendly skill areas across cloud, infrastructure, networking, operations, and automation."
    >
      <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-2xl hover:shadow-slate-200/80"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-300 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black tracking-tight text-white shadow-lg shadow-slate-950/15 transition group-hover:bg-sky-600">
              {group.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{group.summary}</p>
            <ul className="mt-5 space-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-50 text-xs text-sky-700 ring-1 ring-sky-100" aria-hidden="true">
                    +
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
