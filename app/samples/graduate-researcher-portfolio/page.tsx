import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Graduate Student Researcher Portfolio Demo | Ahmad Niknam",
  description:
    "Demo portfolio website concept for graduate students, researchers, teaching assistants, and academic professionals."
};

const researchInterests = [
  "Life Cycle Assessment",
  "Renewable Energy Systems",
  "Geothermal Energy",
  "Environmental Impact Modelling",
  "Data Analysis",
  "Sustainability Decision Support"
];

const academicProjects = [
  {
    title: "Life Cycle Assessment of Renewable Energy Pathways",
    description:
      "A sample academic portfolio item comparing energy pathway assumptions, system boundaries, and environmental indicators for research communication.",
    methods: ["Scenario comparison", "Impact categories", "Research summary"]
  },
  {
    title: "Uncertainty Analysis for Environmental Performance",
    description:
      "A fictional research project card showing how sensitivity ranges, assumptions, and model limitations can be explained clearly.",
    methods: ["Uncertainty framing", "Model assumptions", "Result interpretation"]
  },
  {
    title: "Data Visualization for Research Communication",
    description:
      "A sample project presenting charts, figure notes, and visual summaries for non-specialist academic and policy audiences.",
    methods: ["Figure design", "Plain-language notes", "Presentation support"]
  }
];

const sampleAcademicEntries = [
  {
    type: "Conference presentation sample",
    title:
      "Scenario-Based Environmental Assessment of Emerging Community Energy Systems",
    note: "Fictional presentation entry included only to demonstrate academic portfolio structure."
  },
  {
    type: "Research poster sample",
    title:
      "Visualizing Uncertainty in Life Cycle Assessment for Early-Stage Energy Technologies",
    note: "Sample poster listing, not a real publication or conference claim."
  },
  {
    type: "Literature review sample",
    title:
      "Decision Support Methods for Sustainable Energy Technology Evaluation",
    note: "Placeholder literature review entry for demo content only."
  }
];

const academicSupport = [
  "Teaching assistant support",
  "Student mentoring",
  "Research documentation",
  "Technical presentation preparation"
];

const toolsAndMethods = [
  "Literature Review",
  "Life Cycle Assessment",
  "Excel / Data Analysis",
  "Python basics",
  "Visualization",
  "Academic Writing",
  "Research Communication"
];

function SectionHeading({
  label,
  title,
  description
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-700">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

export default function GraduateResearcherPortfolioDemo() {
  return (
    <>
      <main className="bg-[#f8faf7] text-slate-950">
        <section className="border-b border-slate-200 bg-[#fdfdf8] py-6">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-teal-100 bg-teal-50/80 px-5 py-4 text-sm leading-6 text-teal-950 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-teal-800">
                  Demo Portfolio Concept
                </p>
                <p className="mt-1 font-medium">
                  This is a sample portfolio concept, not a completed client project.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-900 transition hover:-translate-y-0.5 hover:border-teal-400"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fdfdf8_0%,#f4f7ef_100%)] py-16 sm:py-24">
          <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-teal-100/80 blur-3xl" />
          <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-amber-100/70 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="reveal">
              <p className="mb-6 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-700 shadow-sm">
                Graduate Research Profile
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
                Maya Reynolds
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-teal-900 sm:text-2xl">
                PhD Candidate | Energy Systems Research | Life Cycle Assessment
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                I study how emerging energy systems can be evaluated through environmental
                performance, uncertainty analysis, and practical decision-making frameworks.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#research-areas"
                  className="inline-flex justify-center rounded-full bg-teal-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800"
                >
                  View Research Areas
                </a>
                <a
                  href="#sample-projects"
                  className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-900"
                >
                  View Sample Projects
                </a>
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Back to Ahmad&apos;s Portfolio
                </Link>
              </div>
            </div>

            <aside className="reveal">
              <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur">
                <div className="border-b border-slate-200 pb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
                    Academic Snapshot
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    Sustainable Energy Research
                  </h2>
                </div>
                <dl className="mt-6 grid gap-5">
                  {[
                    ["Program", "PhD candidate in sustainable energy systems"],
                    ["Research lens", "Life cycle assessment, uncertainty, decision support"],
                    ["Audience", "Academic committees, collaborators, employers, and students"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                      <dt className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        {label}
                      </dt>
                      <dd className="mt-2 font-medium leading-7 text-slate-800">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <SectionHeading
                label="Research Profile"
                title="A calm academic profile for research, teaching, and collaboration."
              />
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                <p className="text-lg leading-8 text-slate-700">
                  Maya Reynolds is a fictional graduate researcher profile created to demonstrate
                  how an academic portfolio can organize research focus, sample projects, teaching
                  support, and professional contact information without presenting client work.
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  This concept is designed for a graduate student, researcher, or teaching assistant
                  who wants a clean online presence for sustainable energy systems, life cycle
                  assessment, data-driven analysis, and environmental decision support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="research-areas" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal">
              <SectionHeading
                label="Research Interests"
                title="Research themes organized for quick review."
                description="A portfolio for an academic audience should make research areas easy to scan while still feeling thoughtful and credible."
              />
            </div>
            <div className="reveal mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {researchInterests.map((interest) => (
                <article
                  key={interest}
                  className="rounded-[1.5rem] border border-slate-200 bg-[#fbfcf8] p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-slate-200/70"
                >
                  <div className="mb-5 h-1.5 w-14 rounded-full bg-teal-700" />
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{interest}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal rounded-[2rem] border border-teal-100 bg-[#edf7f2] p-7 shadow-sm sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <SectionHeading
                  label="Current Research Focus"
                  title="Evaluating emerging energy technologies with practical decision frameworks."
                />
                <p className="text-xl leading-9 text-slate-700">
                  Evaluating the environmental performance of emerging energy technologies using
                  life cycle assessment, uncertainty analysis, and scenario-based comparison.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="sample-projects" className="bg-[#fdfdf8] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal">
              <SectionHeading
                label="Selected Academic Projects"
                title="Sample portfolio items for research communication."
                description="These examples are fictional academic portfolio items for this demo page, not real client work or completed research claims."
              />
            </div>
            <div className="reveal mt-9 grid gap-5 lg:grid-cols-3">
              {academicProjects.map((project) => (
                <article
                  key={project.title}
                  className="flex min-h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-200/80"
                >
                  <p className="w-fit rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-800 ring-1 ring-amber-100">
                    Sample academic item
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.methods.map((method) => (
                      <span
                        key={method}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionHeading
                label="Publications / Presentations"
                title="Clearly marked sample academic entries."
                description="The structure shows how publications, posters, and presentations could be listed without claiming real publications."
              />
              <div className="grid gap-4">
                {sampleAcademicEntries.map((entry) => (
                  <article
                    key={entry.title}
                    className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                      {entry.type}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                      {entry.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{entry.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal grid gap-8 lg:grid-cols-2">
              <div>
                <SectionHeading
                  label="Teaching and Academic Support"
                  title="A practical view of academic contribution."
                />
                <div className="mt-8 grid gap-3">
                  {academicSupport.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-[#fbfcf8] p-5 font-medium text-slate-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading
                  label="Tools and Methods"
                  title="Methods and communication skills grouped together."
                />
                <div className="mt-8 flex flex-wrap gap-3 rounded-[2rem] border border-slate-200 bg-[#f8faf7] p-6">
                  {toolsAndMethods.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 pb-20 sm:py-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-300/40 sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-teal-200">
                    Build Something Similar
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Need a clean academic portfolio website?
                  </h2>
                  <p className="mt-4 max-w-3xl leading-7 text-slate-200">
                    Connect with Ahmad Niknam to discuss a simple professional portfolio website
                    for your research profile, academic projects, publications, and career goals.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-teal-100">
                    Email: {profileLinks.emailLabel}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-50"
                    aria-label="Connect with Ahmad Niknam on LinkedIn"
                  >
                    Connect on LinkedIn
                  </a>
                  <Link
                    href="/"
                    className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Back to Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
