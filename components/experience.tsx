import { Section } from "@/components/section";
import { experienceItems } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience across IT support, systems administration, and infrastructure operations."
      description="A clear timeline focused on support outcomes, multi-site operations, Windows infrastructure, Microsoft 365, networking, and remote technical support."
    >
      <div className="reveal relative space-y-7 before:absolute before:left-4 before:top-4 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-sky-400 before:via-slate-200 before:to-transparent">
        {experienceItems.map((item, index) => (
          <article key={`${item.role}-${item.period}`} className="relative pl-12">
            <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-sky-500 text-[0.65rem] font-black text-white shadow-lg shadow-sky-900/15">
              {index + 1}
            </span>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/80">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">{item.role}</h3>
                  <p className="mt-2 font-semibold text-slate-700">{item.company}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.location}
                  </p>
                </div>
                <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-800 ring-1 ring-sky-100">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 leading-7 text-slate-600">{item.summary}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700 ring-1 ring-slate-100">
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
