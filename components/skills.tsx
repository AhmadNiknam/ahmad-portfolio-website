import { Section } from "@/components/section";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Infrastructure and cloud capabilities"
      description="Core strengths across Microsoft infrastructure, cloud administration, support operations, and practical automation."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
            <ul className="mt-5 space-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
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
