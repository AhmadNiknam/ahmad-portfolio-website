import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Newcomer Career Portfolio Demo | Ahmad Niknam",
  description:
    "Demo portfolio website concept for newcomers, international students, job seekers, and career changers building a professional path in Canada."
};

const careerStory = [
  {
    stage: "Previous Experience",
    description:
      "Built professional experience before moving to Canada and developed practical workplace skills."
  },
  {
    stage: "Transition to Canada",
    description:
      "Learning how to present international experience in a clear Canadian-style professional format."
  },
  {
    stage: "Current Focus",
    description:
      "Strengthening workplace communication, customer service, Microsoft 365, and administrative support skills."
  },
  {
    stage: "Career Goal",
    description:
      "Preparing for roles where reliability, organization, communication, and problem-solving are important."
  }
];

const transferableSkills = [
  {
    title: "Communication",
    description: "Explaining needs clearly, asking practical questions, and following up with care."
  },
  {
    title: "Customer Service",
    description: "Listening to people, responding respectfully, and helping solve day-to-day issues."
  },
  {
    title: "Documentation",
    description: "Keeping notes, checklists, and simple process records organized and easy to review."
  },
  {
    title: "Problem Solving",
    description: "Breaking situations into steps, checking facts, and finding realistic next actions."
  },
  {
    title: "Team Collaboration",
    description: "Working with different people, sharing updates, and supporting group priorities."
  },
  {
    title: "Microsoft Office / Microsoft 365",
    description: "Using Word, Excel, Outlook, Teams, and shared files for common workplace tasks."
  },
  {
    title: "Project Coordination",
    description: "Tracking small tasks, deadlines, responsibilities, and progress in a structured way."
  },
  {
    title: "Learning Mindset",
    description: "Building confidence through practice, feedback, short courses, and steady improvement."
  }
];

const preparationItems = [
  "Canadian-style resume and LinkedIn profile",
  "Workplace communication practice",
  "Interview preparation",
  "Certifications and short courses",
  "Volunteer or community experience",
  "Portfolio projects and practice work"
];

const learningEntries = [
  "Microsoft 365 Basics",
  "Google IT Support Certificate",
  "Customer Service Training",
  "WHMIS / Workplace Safety Awareness",
  "Workplace Communication Practice",
  "English Language Development"
];

const practiceProjects = [
  {
    title: "Career Transition Portfolio",
    description:
      "A sample online profile that organizes previous experience, current learning, and Canadian career goals."
  },
  {
    title: "Customer Service Scenario Documentation",
    description:
      "Sample notes showing how to receive a request, clarify details, document the issue, and follow up."
  },
  {
    title: "Microsoft 365 Practice Workspace",
    description:
      "A sample practice setup using documents, spreadsheets, email drafts, and shared task tracking."
  },
  {
    title: "Volunteer Coordination Example",
    description:
      "A sample project outline for organizing tasks, schedules, communication notes, and responsibilities."
  }
];

function SectionIntro({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-stone-700">{description}</p>
      ) : null}
    </div>
  );
}

export default function NewcomerCareerPortfolioDemo() {
  return (
    <>
      <main className="overflow-hidden bg-[#fff8ed] text-stone-950">
        <section className="relative isolate border-b border-orange-100 bg-[linear-gradient(135deg,#fff8ed_0%,#fef3d8_36%,#edf8f2_72%,#eaf4ff_100%)]">
          <div className="absolute -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl" />
          <div className="absolute right-0 top-24 -z-10 h-80 w-80 rounded-full bg-teal-200/35 blur-3xl" />
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="flex flex-col gap-4 rounded-[1.75rem] border border-white/80 bg-white/75 px-5 py-4 shadow-xl shadow-orange-200/30 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-700">
                  Demo Portfolio Concept
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-stone-700">
                  This is a sample newcomer career portfolio concept, not a completed client
                  project.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit justify-center rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-400 hover:text-orange-800"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="relative isolate bg-[linear-gradient(135deg,#fff8ed_0%,#fef3d8_38%,#edf8f2_74%,#eaf4ff_100%)] py-16 sm:py-20">
          <div className="absolute left-1/2 top-16 -z-10 h-40 w-40 -translate-x-1/2 rounded-full border border-white/70 bg-white/30 shadow-2xl shadow-orange-200/50" />
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="reveal">
              <p className="mb-5 inline-flex rounded-full bg-orange-900 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-50 shadow-xl shadow-orange-900/15">
                Newcomer Career Portfolio
              </p>
              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-stone-950 sm:text-6xl lg:text-7xl">
                Nina Rahman
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-black leading-8 text-teal-900 sm:text-2xl">
                Newcomer Career Portfolio | Customer Service | Administrative Support | Microsoft
                365
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-700">
                Building a professional career in Canada through transferable skills, practical
                learning, and clear communication.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
                I am developing my Canadian career path by combining previous professional
                experience, customer service skills, workplace communication, and continuous
                learning.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#career-story"
                  className="inline-flex justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-stone-400/25 transition hover:-translate-y-0.5 hover:bg-orange-950"
                >
                  View Career Story
                </a>
                <a
                  href="#transferable-skills"
                  className="inline-flex justify-center rounded-full border border-teal-200 bg-white/85 px-6 py-3 text-sm font-bold text-teal-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-teal-500"
                >
                  See Transferable Skills
                </a>
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-orange-200 bg-white/85 px-6 py-3 text-sm font-bold text-stone-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-400"
                >
                  Back to Ahmad&apos;s Portfolio
                </Link>
              </div>
            </div>

            <div className="reveal">
              <div className="rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-2xl shadow-orange-200/40 backdrop-blur">
                <div className="rounded-[1.5rem] bg-[#2f4f46] p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-100">
                        Profile Snapshot
                      </p>
                      <h2 className="mt-3 text-2xl font-black tracking-tight">
                        A clear career pathway
                      </h2>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-200 text-lg font-black text-stone-950">
                      NR
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      ["Focus", "Customer service, admin support, workplace readiness"],
                      ["Tools", "Microsoft 365, documentation, email, scheduling"],
                      ["Direction", "Reliable support roles in a Canadian workplace"]
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-100">
                          {label}
                        </p>
                        <p className="mt-2 font-semibold leading-7 text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="-mt-3 ml-auto mr-4 rounded-[1.5rem] border border-orange-100 bg-orange-50 p-5 shadow-xl shadow-orange-200/30 sm:max-w-sm">
                  <p className="text-sm font-bold leading-6 text-orange-950">
                    Fictional sample content showing how a portfolio can present career transition
                    with confidence and honesty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career-story" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              eyebrow="Guided Journey"
              title="Career Story"
              description="A simple timeline helps employers understand the path from previous experience to current Canadian career goals."
            />
            <div className="reveal mt-10 grid gap-5 lg:grid-cols-4">
              {careerStory.map((item, index) => (
                <article
                  key={item.stage}
                  className="relative rounded-[1.75rem] border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/60"
                >
                  <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-orange-200 text-sm font-black text-orange-950 ring-4 ring-[#fff8ed]">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-xl font-black tracking-tight text-stone-950">
                    {item.stage}
                  </h3>
                  <p className="mt-4 leading-7 text-stone-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="transferable-skills" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              eyebrow="Practical Strengths"
              title="Transferable Skills"
              description="Friendly skill cards connect previous experience with the expectations of Canadian workplace roles."
            />
            <div className="reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {transferableSkills.map((skill) => (
                <article
                  key={skill.title}
                  className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100"
                >
                  <h3 className="text-lg font-black tracking-tight text-teal-950">{skill.title}</h3>
                  <p className="mt-3 leading-7 text-stone-700">{skill.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="reveal rounded-[2rem] bg-[#2f4f46] p-7 text-white shadow-2xl shadow-teal-900/20 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-100">
                Career Readiness
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Canadian Career Preparation
              </h2>
              <p className="mt-4 text-lg leading-8 text-teal-50">
                A portfolio can show practical steps, not only a final destination. This makes the
                career transition clearer and more realistic.
              </p>
            </div>
            <div className="reveal grid gap-3 sm:grid-cols-2">
              {preparationItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[1.5rem] border border-orange-100 bg-white p-5 shadow-sm"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-800">
                    OK
                  </span>
                  <p className="font-bold leading-7 text-stone-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              eyebrow="Sample Portfolio Content"
              title="Learning and Certifications"
              description="These sample entries demonstrate how a newcomer portfolio can present learning progress without overstating experience."
            />
            <div className="reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {learningEntries.map((entry) => (
                <div
                  key={entry}
                  className="rounded-[1.5rem] border border-teal-100 bg-teal-50/70 p-5 font-black text-teal-950 shadow-sm"
                >
                  {entry}
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                    Sample entry
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-700">
                  Practice Work
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
                  Sample Practice Projects
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-700">
                  These are sample portfolio examples for demonstration purposes, not real client
                  work.
                </p>
              </div>
              <p className="rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4 text-sm font-bold leading-6 text-orange-950">
                Fictional examples only.
              </p>
            </div>
            <div className="reveal grid gap-5 sm:grid-cols-2">
              {practiceProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100/60"
                >
                  <p className="w-fit rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-orange-800">
                    Sample project
                  </p>
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-stone-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-stone-700">{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal rounded-[2rem] border border-white bg-[linear-gradient(135deg,#fef3d8_0%,#ffffff_42%,#edf8f2_100%)] p-7 shadow-2xl shadow-orange-100/70 sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-700">
                    Clear Online Profile
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
                    Why a Career Portfolio Helps
                  </h2>
                </div>
                <p className="text-lg leading-8 text-stone-700">
                  A portfolio can help newcomers and job seekers show their background,
                  transferable skills, learning progress, sample work, and career direction in one
                  clear online profile. It gives employers a practical view of the person behind the
                  resume while keeping the message professional and focused.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 pb-20 sm:py-18 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-[#2f4f46] p-7 text-white shadow-2xl shadow-teal-900/25 sm:p-9">
              <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-orange-200/25 blur-3xl" />
              <div className="absolute -bottom-24 left-10 -z-10 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-orange-100">
                    Portfolio Website Services
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                    Need a professional newcomer career portfolio?
                  </h2>
                  <p className="mt-4 leading-8 text-teal-50">
                    Connect with Ahmad Niknam to discuss a simple portfolio website for your
                    Canadian career journey, transferable skills, learning path, projects, and
                    professional goals.
                  </p>
                  <p className="mt-4 text-sm font-semibold text-teal-50">
                    Email: {profileLinks.emailLabel}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-950 shadow-xl shadow-teal-950/20 transition hover:-translate-y-0.5 hover:bg-orange-50"
                    aria-label="Connect with Ahmad Niknam on LinkedIn"
                  >
                    Connect on LinkedIn
                  </a>
                  <Link
                    href="/"
                    className="inline-flex justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
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
