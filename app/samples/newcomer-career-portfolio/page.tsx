import type { Metadata } from "next";
import type { ReactNode } from "react";
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
    number: "01",
    stage: "Previous Experience",
    description:
      "Built professional experience before moving to Canada and developed practical workplace skills."
  },
  {
    number: "02",
    stage: "Transition to Canada",
    description:
      "Learning how to present international experience in a clear Canadian-style professional format."
  },
  {
    number: "03",
    stage: "Current Focus",
    description:
      "Strengthening workplace communication, customer service, Microsoft 365, and administrative support skills."
  },
  {
    number: "04",
    stage: "Career Goal",
    description:
      "Preparing for roles where reliability, organization, communication, and problem-solving are important."
  }
];

const transferableSkills = [
  {
    group: "Communication & Service",
    accent: "bg-rose-100 text-rose-950 ring-rose-200",
    skills: ["Communication", "Customer Service", "Team Collaboration"]
  },
  {
    group: "Organization & Documentation",
    accent: "bg-amber-100 text-amber-950 ring-amber-200",
    skills: ["Documentation", "Administrative Support", "Project Coordination"]
  },
  {
    group: "Digital Workplace Skills",
    accent: "bg-sky-100 text-sky-950 ring-sky-200",
    skills: ["Microsoft Office / Microsoft 365", "Basic Troubleshooting", "Online Collaboration Tools"]
  },
  {
    group: "Growth Mindset",
    accent: "bg-emerald-100 text-emerald-950 ring-emerald-200",
    skills: ["Problem Solving", "Learning Mindset", "Adaptability"]
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
    type: "Story profile",
    description:
      "A sample online profile that organizes previous experience, current learning, and Canadian career goals."
  },
  {
    title: "Customer Service Scenario Documentation",
    type: "Service notes",
    description:
      "Sample notes showing how to receive a request, clarify details, document the issue, and follow up."
  },
  {
    title: "Microsoft 365 Practice Workspace",
    type: "Digital practice",
    description:
      "A sample practice setup using documents, spreadsheets, email drafts, and shared task tracking."
  },
  {
    title: "Volunteer Coordination Example",
    type: "Community example",
    description:
      "A sample project outline for organizing tasks, schedules, communication notes, and responsibilities."
  }
];

function StoryLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.26em] text-emerald-800">{children}</p>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="reveal max-w-3xl">
      <StoryLabel>{eyebrow}</StoryLabel>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-stone-700">{description}</p> : null}
    </div>
  );
}

export default function NewcomerCareerPortfolioDemo() {
  return (
    <>
      <main className="overflow-hidden bg-[#fbf3e6] text-stone-950">
        <section className="relative isolate border-b border-amber-200/70 bg-[#fbf3e6]">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_12%_18%,#fed7aa_0%,transparent_28%),radial-gradient(circle_at_84%_10%,#bfdbfe_0%,transparent_24%),radial-gradient(circle_at_78%_78%,#bbf7d0_0%,transparent_30%)] opacity-70" />
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="reveal flex flex-col gap-4 border-l-4 border-emerald-700 bg-white/70 px-5 py-4 shadow-sm shadow-amber-200/50 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div>
                <StoryLabel>Demo Portfolio Concept</StoryLabel>
                <p className="mt-1 text-sm font-semibold leading-6 text-stone-700">
                  This is a sample newcomer career portfolio concept, not a completed client
                  project.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit justify-center rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-bold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-600 hover:text-emerald-800"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="relative isolate bg-[#fbf3e6] py-14 sm:py-20">
          <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/60 to-transparent" />
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.72fr)] lg:items-start">
            <div className="reveal rounded-[2rem] border border-amber-200/80 bg-[#fffaf1]/90 p-7 shadow-xl shadow-amber-200/30 sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-12 bg-emerald-700" />
                <StoryLabel>Newcomer Career Portfolio</StoryLabel>
              </div>
              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.055em] text-stone-950 sm:text-6xl">
                Nina Rahman
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-black leading-8 text-emerald-950 sm:text-2xl">
                Newcomer Career Portfolio | Customer Service | Administrative Support | Microsoft
                365
              </p>
              <p className="mt-8 max-w-3xl border-l border-amber-400 pl-5 text-2xl font-semibold leading-10 text-stone-900">
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
                  href="#career-journey"
                  className="inline-flex justify-center rounded-full bg-emerald-900 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-950"
                >
                  Follow the Journey
                </a>
                <a
                  href="#transferable-skills"
                  className="inline-flex justify-center rounded-full border border-amber-300 bg-white/85 px-6 py-3 text-sm font-bold text-stone-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-amber-500"
                >
                  View Transferable Skills
                </a>
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-sky-200 bg-white/85 px-6 py-3 text-sm font-bold text-stone-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-400"
                >
                  Back to Ahmad&apos;s Portfolio
                </Link>
              </div>
            </div>

            <aside className="reveal lg:sticky lg:top-8">
              <div className="rounded-[2rem] border border-emerald-200 bg-[#ecf7ef] p-6 shadow-xl shadow-emerald-900/10">
                <div className="rounded-[1.5rem] bg-white/80 p-5 ring-1 ring-emerald-100">
                  <StoryLabel>Career Direction</StoryLabel>
                  <h2 className="mt-3 text-2xl font-black tracking-tight text-emerald-950">
                    Current Goal
                  </h2>
                  <p className="mt-4 leading-8 text-stone-700">
                    Present international experience in a clear Canadian format while building
                    evidence of communication, service, digital workplace, and administrative skills.
                  </p>
                </div>
                <div className="mt-5 space-y-4">
                  {["Customer service", "Administrative support", "Microsoft 365 practice"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-full bg-white px-4 py-3"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                        <span className="text-sm font-black text-stone-800">{item}</span>
                      </div>
                    )
                  )}
                </div>
                <p className="mt-5 rounded-[1.25rem] bg-amber-100/80 p-4 text-sm font-bold leading-6 text-amber-950">
                  Fictional sample content showing how a career transition can be presented with
                  confidence, honesty, and practical next steps.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="career-journey" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Guided Pathway"
              title="Career Journey"
              description="A simple timeline helps employers understand the path from previous experience to current Canadian career goals."
            />
            <div className="reveal relative mt-12 max-w-4xl">
              <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-amber-400 via-emerald-500 to-sky-400 sm:block" />
              {careerStory.map((item, index) => (
                <article
                  key={item.stage}
                  className={`relative mb-6 sm:pl-16 ${index % 2 === 1 ? "lg:ml-24" : ""}`}
                >
                  <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#fbf3e6] bg-emerald-800 text-xs font-black text-white shadow-lg shadow-emerald-900/20 sm:flex">
                    {item.number}
                  </div>
                  <div className="rounded-[1.75rem] border border-amber-200 bg-white/85 p-6 shadow-sm shadow-amber-200/60">
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-700">
                      Milestone {item.number}
                    </p>
                    <h3 className="mt-3 text-2xl font-black tracking-tight text-stone-950">
                      {item.stage}
                    </h3>
                    <p className="mt-4 leading-8 text-stone-700">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="transferable-skills" className="bg-[#fffaf1] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Practical Strengths"
              title="Transferable Skills"
              description="Skill clusters connect previous experience with the expectations of Canadian workplace roles."
            />
            <div className="reveal mt-10 grid gap-5 lg:grid-cols-2">
              {transferableSkills.map((cluster) => (
                <article
                  key={cluster.group}
                  className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm shadow-amber-100/50"
                >
                  <h3 className="text-xl font-black tracking-tight text-stone-950">{cluster.group}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {cluster.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full px-4 py-2 text-sm font-black ring-1 ${cluster.accent}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="reveal rounded-[2rem] bg-emerald-900 p-7 text-white shadow-2xl shadow-emerald-900/20 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-100">
                Readiness Path
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Canadian Career Readiness
              </h2>
              <p className="mt-4 text-lg leading-8 text-emerald-50">
                A portfolio can show practical steps, not only a final destination. This makes the
                career transition clearer and more realistic.
              </p>
            </div>
            <div className="reveal space-y-3">
              {preparationItems.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[1.25rem] border border-amber-200 bg-white/80 p-5 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-black text-amber-900 ring-1 ring-amber-200">
                    {index + 1}
                  </span>
                  <p className="font-bold leading-7 text-stone-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef7f1] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Sample Portfolio Content"
              title="Learning and Certifications"
              description="These sample entries demonstrate how a newcomer portfolio can present learning progress without overstating experience."
            />
            <div className="reveal mt-10 overflow-hidden rounded-[2rem] border border-emerald-200 bg-white/80 shadow-sm">
              {learningEntries.map((entry, index) => (
                <div
                  key={entry}
                  className="flex flex-col gap-2 border-b border-emerald-100 px-6 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-900">
                      {index + 1}
                    </span>
                    <p className="font-black text-emerald-950">{entry}</p>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Sample learning item
                  </p>
                </div>
              ))}
            </div>
            <p className="reveal mt-4 text-sm font-semibold leading-6 text-stone-600">
              Sample learning items for demonstration purposes only.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="Practice Work"
              title="Sample Practice Work"
              description="These are proof-of-learning examples for demonstration purposes, not real client work."
            />
            <div className="reveal mt-10 grid gap-5 lg:grid-cols-2">
              {practiceProjects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[1.75rem] border border-stone-200 bg-[#fffdf8] p-0 shadow-sm shadow-amber-100/70"
                >
                  <div className="border-b border-dashed border-amber-300 px-6 py-4">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-700">
                      Portfolio evidence
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-sky-900">
                      {project.type}
                    </p>
                    <h3 className="mt-5 text-2xl font-black tracking-tight text-stone-950">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-8 text-stone-700">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal rounded-[2rem] border border-amber-200 bg-[#fffaf1] p-7 shadow-xl shadow-amber-100/70 sm:p-10">
              <div className="mx-auto max-w-4xl text-center">
                <StoryLabel>Clear Online Profile</StoryLabel>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
                  Why a Career Portfolio Helps
                </h2>
                <p className="mt-6 text-xl font-semibold leading-9 text-stone-800">
                  &ldquo;A career portfolio helps newcomers and job seekers show their background,
                  transferable skills, learning progress, sample work, and career direction in one
                  clear online profile.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 pb-20 sm:py-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-emerald-950 p-7 text-white shadow-2xl shadow-emerald-900/25 sm:p-10">
              <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />
              <div className="absolute -bottom-24 left-10 -z-10 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-100">
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
                    className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-950 shadow-xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-amber-50"
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
