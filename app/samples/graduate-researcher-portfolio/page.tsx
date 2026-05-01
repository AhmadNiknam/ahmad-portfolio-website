import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Graduate Student Researcher Portfolio Demo | Ahmad Niknam",
  description:
    "Demo portfolio website concept for graduate students, researchers, teaching assistants, and academic professionals."
};

type DemoSearchParams = Promise<{ preview?: string | string[] }>;

const researchInterests = [
  "Life Cycle Assessment",
  "Renewable Energy",
  "Geothermal Systems",
  "Uncertainty Analysis",
  "Environmental Modelling",
  "Decision Support"
];

const quickProfile = [
  "PhD Candidate",
  "Energy Systems Research",
  "Life Cycle Assessment",
  "Sustainability Analysis"
];

const academicProjects = [
  {
    title: "Life Cycle Assessment of Renewable Energy Pathways",
    description:
      "Sample academic portfolio item focused on comparing environmental indicators, assumptions, and system boundaries across renewable technologies."
  },
  {
    title: "Uncertainty Analysis for Environmental Performance",
    description:
      "Sample research note showing how sensitivity testing, scenario comparison, and model limitations can support clearer technical decisions."
  },
  {
    title: "Data Visualization for Research Communication",
    description:
      "Sample portfolio item focused on presenting complex research findings through clear figures, captions, and plain-language summaries."
  }
];

const sampleAcademicEntries = [
  {
    type: "Sample conference presentation",
    title: "Environmental Performance of Emerging Energy Systems"
  },
  {
    type: "Sample research poster",
    title: "Lifecycle Hotspots in Renewable Energy Pathways"
  },
  {
    type: "Sample literature review",
    title: "LCA Methods for Sustainable Energy Assessment"
  }
];

const academicSupport = [
  "Teaching assistant support",
  "Student mentoring",
  "Research documentation",
  "Technical presentation preparation",
  "Academic writing support"
];

const toolsAndMethods = [
  "Literature Review",
  "LCA Modelling",
  "Scenario Analysis",
  "Excel / Data Analysis",
  "Python Basics",
  "Research Communication"
];

function SectionHeading({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return (
    <div className="border-b border-stone-300 pb-4">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em] text-stone-950 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function SidebarSection({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="border-t border-stone-300 pt-6">
      <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
        {title}
      </h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function GraduateResearcherPortfolioDemo({
  searchParams
}: {
  searchParams?: DemoSearchParams;
}) {
  const params = await searchParams;
  const isHeroPreview = Array.isArray(params?.preview)
    ? params.preview.includes("hero")
    : params?.preview === "hero";

  if (isHeroPreview) {
    return (
      <main className="h-screen overflow-hidden bg-[#f7f3ea] text-stone-950">
        <section className="min-h-screen border-b border-stone-300 bg-[#fbf8f0]">
          <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
            <div className="max-w-4xl">
              <p className="w-fit border-l-4 border-stone-800 bg-[#fffdf7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-600 shadow-sm">
                Demo Portfolio Concept
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Academic Research Profile
              </p>
              <h1 className="mt-5 font-serif text-6xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-7xl lg:text-8xl">
                Maya Reynolds
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-stone-800 sm:text-2xl">
                PhD Candidate | Energy Systems Research | Life Cycle Assessment
              </p>
              <p className="mt-8 max-w-3xl border-l border-stone-400 pl-6 text-lg leading-8 text-stone-700">
                I study how emerging energy systems can be evaluated through environmental
                performance, uncertainty analysis, and practical decision-making frameworks.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {quickProfile.map((item) => (
                  <span
                    key={item}
                    className="border border-stone-300 bg-[#fffdf7] px-4 py-2 text-sm font-semibold text-stone-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <main className="bg-[#f7f3ea] text-stone-950">
        <section className="border-b border-stone-300 bg-[#fbf8f0]">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="flex flex-col gap-3 border-l-4 border-stone-800 bg-[#fffdf7] px-5 py-4 text-sm leading-6 text-stone-700 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold uppercase tracking-[0.2em] text-stone-950">
                  Demo Portfolio Concept
                </p>
                <p className="mt-1">
                  This is a sample academic portfolio concept, not a completed client project.
                </p>
              </div>
              <Link
                href="/"
                className="w-fit border-b border-stone-900 pb-0.5 text-sm font-semibold text-stone-950 transition hover:text-stone-600"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-300 bg-[#fbf8f0]">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
            <div className="reveal max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Academic Research Profile
              </p>
              <h1 className="mt-5 font-serif text-6xl font-semibold tracking-[-0.06em] text-stone-950 sm:text-7xl lg:text-8xl">
                Maya Reynolds
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-stone-800 sm:text-2xl">
                PhD Candidate | Energy Systems Research | Life Cycle Assessment
              </p>
              <p className="mt-8 max-w-3xl border-l border-stone-400 pl-6 text-lg leading-8 text-stone-700">
                I study how emerging energy systems can be evaluated through environmental
                performance, uncertainty analysis, and practical decision-making frameworks.
              </p>
              <div className="mt-10 flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:flex-wrap">
                <a
                  href="#research-focus"
                  className="inline-flex w-fit border-b border-stone-900 pb-1 text-stone-950 transition hover:text-stone-600"
                >
                  Research Focus
                </a>
                <a
                  href="#sample-publications"
                  className="inline-flex w-fit border-b border-stone-900 pb-1 text-stone-950 transition hover:text-stone-600 sm:ml-5"
                >
                  Sample Publications
                </a>
                <Link
                  href="/"
                  className="inline-flex w-fit border-b border-stone-900 pb-1 text-stone-950 transition hover:text-stone-600 sm:ml-5"
                >
                  Back to Ahmad&apos;s Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3ea]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-14 lg:py-16">
            <aside className="reveal space-y-8 lg:sticky lg:top-8 lg:self-start">
              <div>
                <p className="font-serif text-2xl font-semibold text-stone-950">Maya Reynolds</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Fictional academic profile for a graduate researcher portfolio demo.
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <a
                    href={profileLinks.email}
                    className="block border-b border-stone-300 pb-2 text-stone-700 transition hover:text-stone-950"
                  >
                    {profileLinks.emailLabel}
                  </a>
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-b border-stone-300 pb-2 text-stone-700 transition hover:text-stone-950"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <SidebarSection title="Quick Profile" items={quickProfile} />
              <SidebarSection title="Research Keywords" items={researchInterests} />
              <SidebarSection title="Methods & Tools" items={toolsAndMethods} />
            </aside>

            <div className="reveal space-y-14">
              <section>
                <SectionHeading eyebrow="Profile" title="Research Profile" />
                <div className="mt-6 space-y-5 text-lg leading-8 text-stone-700">
                  <p>
                    Maya is a fictional graduate researcher focused on sustainable energy systems,
                    life cycle assessment, environmental performance modelling, and research
                    communication.
                  </p>
                  <p>
                    This sample content demonstrates how an academic portfolio can organize research
                    focus, sample projects, teaching support, and contact details without claiming
                    real publications, private information, or completed client work.
                  </p>
                </div>
              </section>

              <section id="research-focus">
                <SectionHeading eyebrow="Current Work" title="Current Research Focus" />
                <div className="mt-6 border-l border-stone-400 pl-6">
                  <p className="text-xl leading-9 text-stone-800">
                    Evaluating the environmental performance of emerging energy technologies using
                    life cycle assessment, uncertainty analysis, and scenario-based comparison.
                  </p>
                  <ul className="mt-6 space-y-3 text-stone-700">
                    <li>Compare environmental impacts across energy pathways</li>
                    <li>Identify major lifecycle hotspots</li>
                    <li>Communicate results for technical and non-technical audiences</li>
                  </ul>
                </div>
              </section>

              <section>
                <SectionHeading
                  eyebrow="Portfolio Notes"
                  title="Selected Academic Projects"
                />
                <div className="mt-6 divide-y divide-stone-300 border-y border-stone-300">
                  {academicProjects.map((project, index) => (
                    <article key={project.title} className="grid gap-4 py-6 sm:grid-cols-[4rem_1fr]">
                      <p className="font-serif text-2xl text-stone-400">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                          Sample academic portfolio item
                        </p>
                        <h3 className="mt-2 font-serif text-2xl font-semibold tracking-[-0.02em] text-stone-950">
                          {project.title}
                        </h3>
                        <p className="mt-3 leading-7 text-stone-700">{project.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="sample-publications">
                <SectionHeading
                  eyebrow="Publications & Presentations"
                  title="Sample Publications & Presentations"
                />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Sample entries for demonstration purposes only.
                </p>
                <div className="mt-5 space-y-5">
                  {sampleAcademicEntries.map((entry) => (
                    <article key={entry.title} className="border-l border-stone-400 pl-5">
                      <p className="text-sm font-semibold text-stone-500">{entry.type}</p>
                      <h3 className="mt-1 text-lg font-semibold leading-7 text-stone-950">
                        {entry.title}
                      </h3>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading
                  eyebrow="Academic Support"
                  title="Teaching & Academic Support"
                />
                <ol className="mt-6 divide-y divide-stone-300 border-y border-stone-300">
                  {academicSupport.map((item) => (
                    <li key={item} className="flex gap-4 py-4 text-stone-700">
                      <span className="font-serif text-stone-400">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </section>

        <section className="border-t border-stone-300 bg-[#fbf8f0] py-16 pb-20 sm:py-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal border border-stone-900 bg-stone-950 p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-300">
                Academic Portfolio Websites
              </p>
              <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    Need a clean academic portfolio website?
                  </h2>
                  <p className="mt-5 leading-8 text-stone-200">
                    Connect with Ahmad Niknam to discuss a simple professional portfolio website for
                    your research profile, academic projects, publications, and career goals.
                  </p>
                  <p className="mt-4 text-sm font-semibold text-stone-300">
                    Email: {profileLinks.emailLabel}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center border border-white bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-100"
                    aria-label="Connect with Ahmad Niknam on LinkedIn"
                  >
                    Connect on LinkedIn
                  </a>
                  <Link
                    href="/"
                    className="inline-flex justify-center border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
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
