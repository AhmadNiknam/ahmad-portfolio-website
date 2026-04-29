import { Section } from "@/components/section";
import { experienceItems } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      description="A timeline structure for Ahmad's verified roles, accomplishments, and responsibilities."
    >
      <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-slate-200">
        {experienceItems.map((item) => (
          <article key={`${item.role}-${item.period}`} className="relative pl-12">
            <span className="absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-white bg-sky-500 shadow" />
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{item.role}</h3>
                  <p className="mt-1 text-slate-600">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 leading-7 text-slate-600">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
