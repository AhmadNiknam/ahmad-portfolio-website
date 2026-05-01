import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Newcomer Career Portfolio Demo | Ahmad Niknam",
  description:
    "Demo portfolio website concept for newcomers, international students, job seekers, and career changers building a professional path in Canada."
};

const identityTags = ["Customer Service", "Administrative Support", "Microsoft 365"];

const transferableSkills = [
  {
    title: "Communication",
    description: "Clear listening, polite written updates, and confident workplace conversations.",
    color: "bg-rose-50 text-rose-700",
    dot: "bg-rose-400"
  },
  {
    title: "Customer Service",
    description: "Welcoming support, careful intake, practical follow-up, and respectful service.",
    color: "bg-teal-50 text-teal-700",
    dot: "bg-teal-400"
  },
  {
    title: "Administrative Support",
    description: "Organizing details, preparing simple records, tracking tasks, and supporting routines.",
    color: "bg-amber-50 text-amber-700",
    dot: "bg-amber-400"
  },
  {
    title: "Documentation",
    description: "Writing concise notes, summaries, checklists, and clear next-step records.",
    color: "bg-sky-50 text-sky-700",
    dot: "bg-sky-400"
  },
  {
    title: "Team Collaboration",
    description: "Contributing reliably, asking good questions, and sharing updates with context.",
    color: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-400"
  },
  {
    title: "Microsoft Office / Microsoft 365",
    description: "Using documents, spreadsheets, email, shared files, and basic collaboration tools.",
    color: "bg-blue-50 text-blue-700",
    dot: "bg-blue-400"
  },
  {
    title: "Problem Solving",
    description: "Clarifying needs, comparing options, and finding practical ways to move work forward.",
    color: "bg-orange-50 text-orange-700",
    dot: "bg-orange-400"
  },
  {
    title: "Learning Mindset",
    description: "Building Canadian workplace confidence through steady practice and short courses.",
    color: "bg-lime-50 text-lime-700",
    dot: "bg-lime-400"
  }
];

const careerFocus = [
  {
    title: "Workplace Communication",
    description:
      "Practicing clear email updates, service conversations, meeting notes, and professional follow-up."
  },
  {
    title: "Digital Workplace Skills",
    description:
      "Strengthening everyday confidence with Microsoft 365, shared documents, spreadsheets, and online collaboration."
  },
  {
    title: "Professional Readiness",
    description:
      "Preparing a focused Canadian profile with transferable skills, learning evidence, and realistic career goals."
  }
];

const learningEntries = [
  "Microsoft 365 Basics",
  "Google IT Support Certificate",
  "Customer Service Training",
  "WHMIS / Workplace Safety Awareness",
  "Workplace Communication Practice",
  "English Language Development"
];

const practiceWork = [
  {
    title: "Career Transition Portfolio",
    description:
      "A sample online profile that connects previous experience, present learning, and Canadian career goals."
  },
  {
    title: "Customer Service Scenario Documentation",
    description:
      "Practice notes showing how to understand a request, document details, and follow up clearly."
  },
  {
    title: "Microsoft 365 Practice Workspace",
    description:
      "Sample documents, spreadsheets, email drafts, and shared task examples for office readiness."
  },
  {
    title: "Volunteer Coordination Example",
    description:
      "A practical example for organizing tasks, schedules, communication notes, and responsibilities."
  }
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-700">{children}</p>
  );
}

function SectionIntro({
  label,
  title,
  description
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal max-w-3xl">
      <Eyebrow>{label}</Eyebrow>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg leading-8 text-stone-600">{description}</p> : null}
    </div>
  );
}

export default function NewcomerCareerPortfolioDemo() {
  return (
    <>
      <main className="overflow-hidden bg-[#fffaf5] text-stone-950">
        <section className="border-b border-stone-200/70 bg-white/80">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="reveal flex flex-col gap-4 rounded-[1.5rem] border border-stone-200 bg-white px-5 py-4 shadow-sm shadow-stone-200/60 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Eyebrow>Demo Portfolio Concept</Eyebrow>
                <p className="mt-1 text-sm font-semibold leading-6 text-stone-600">
                  This is a sample newcomer career portfolio concept, not a completed client project.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit justify-center rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-bold text-stone-800 transition hover:-translate-y-0.5 hover:border-teal-300 hover:bg-white hover:text-teal-800"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="relative isolate bg-[#fffaf5] py-14 sm:py-20">
          <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center">
            <div className="reveal">
              <div className="mb-7 h-1.5 w-24 rounded-full bg-gradient-to-r from-rose-400 via-amber-300 to-teal-400" />
              <p className="text-sm font-black uppercase tracking-[0.24em] text-stone-500">
                Newcomer Career Portfolio
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-black tracking-[-0.065em] text-stone-950 sm:text-6xl lg:text-7xl">
                Nina Rahman
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-bold leading-8 text-teal-800 sm:text-2xl">
                Newcomer Career Portfolio | Customer Service | Administrative Support | Microsoft 365
              </p>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-10 text-stone-900 sm:text-3xl">
                Building a professional career in Canada through transferable skills, practical
                learning, and clear communication.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
                I am developing my Canadian career path by combining previous professional
                experience, customer service skills, workplace communication, and continuous
                learning.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#transferable-skills"
                  className="inline-flex justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-stone-300/60 transition hover:-translate-y-0.5 hover:bg-teal-900"
                >
                  View Skills
                </a>
                <a
                  href="#learning-journey"
                  className="inline-flex justify-center rounded-full border border-teal-200 bg-white px-6 py-3 text-sm font-bold text-teal-900 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-400"
                >
                  View Learning Journey
                </a>
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-bold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-700"
                >
                  Back to Ahmad&apos;s Portfolio
                </Link>
              </div>
            </div>

            <aside className="reveal">
              <div className="relative rounded-[2rem] border border-stone-200 bg-white p-5 shadow-2xl shadow-stone-200/70">
                <div className="absolute -left-4 top-10 hidden h-20 w-8 rounded-full bg-amber-300 sm:block" />
                <div className="absolute -right-5 bottom-16 hidden h-24 w-10 rounded-full bg-teal-300 sm:block" />
                <div className="rounded-[1.5rem] bg-gradient-to-br from-rose-50 via-amber-50 to-teal-50 p-5">
                  <div className="relative mx-auto flex aspect-[4/5] max-w-[17rem] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-inner">
                    <div className="absolute inset-x-8 top-10 h-28 rounded-full bg-gradient-to-br from-rose-200 to-amber-200" />
                    <div className="absolute bottom-0 h-40 w-56 rounded-t-full bg-gradient-to-br from-teal-500 to-sky-500" />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-8 border-white bg-stone-950 text-3xl font-black text-white shadow-xl">
                      NR
                    </div>
                    <span className="absolute bottom-4 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-stone-600 shadow-sm">
                      Portrait Placeholder
                    </span>
                  </div>
                </div>
                <div className="mt-5 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-600">
                    Current Goal
                  </p>
                  <p className="mt-3 text-lg font-black leading-7 text-stone-950">
                    Administrative support and customer-facing roles in Canada
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {identityTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stone-200 bg-white px-3 py-2 text-xs font-black text-stone-700 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal grid gap-8 border-y border-stone-200 py-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
              <SectionIntro label="Professional Summary" title="Professional Summary" />
              <div className="space-y-5 text-lg leading-8 text-stone-600">
                <p>
                  Nina Rahman is a fictional newcomer profile created to show how a personal career
                  portfolio can present transferable experience with clarity, confidence, and care.
                  The profile highlights communication, reliability, customer-facing strengths,
                  administrative readiness, and an honest direction for building a career in Canada.
                </p>
                <p>
                  This sample keeps the message practical: previous experience matters, current
                  learning is visible, and the portfolio gives employers a clear place to understand
                  career goals, skills, and sample evidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="transferable-skills" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              label="Practical Strengths"
              title="Transferable Skills"
              description="A concise skills layout helps the profile feel approachable while still showing concrete workplace value."
            />
            <div className="reveal mt-10 divide-y divide-stone-200 overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#fffdf9]">
              {transferableSkills.map((skill) => (
                <div
                  key={skill.title}
                  className="grid gap-4 px-5 py-5 transition hover:bg-white sm:grid-cols-[15rem_minmax(0,1fr)] sm:px-7"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${skill.dot}`} />
                    <h3 className="text-lg font-black tracking-tight text-stone-950">{skill.title}</h3>
                  </div>
                  <p className={`rounded-full px-5 py-3 text-sm font-semibold leading-6 ${skill.color}`}>
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              label="Current Direction"
              title="Current Career Focus"
              description="Three focused areas give the portfolio a simple, employer-friendly structure without turning it into a long timeline."
            />
            <div className="reveal mt-10 grid gap-4 lg:grid-cols-3">
              {careerFocus.map((item, index) => (
                <article
                  key={item.title}
                  className="border-l-4 border-stone-950 bg-white px-6 py-7 shadow-sm shadow-stone-200/80"
                >
                  <p className="text-sm font-black text-rose-600">0{index + 1}</p>
                  <h3 className="mt-4 text-2xl font-black tracking-tight text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-stone-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="learning-journey" className="bg-[#f5fbf9] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              label="Learning Path"
              title="Learning and Certifications"
              description="Stacked entries keep learning progress easy to scan and clearly separate from project or client claims."
            />
            <div className="reveal mt-10 max-w-4xl border-y border-teal-200">
              {learningEntries.map((entry, index) => (
                <div
                  key={entry}
                  className="grid gap-3 border-b border-teal-100 py-5 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-center"
                >
                  <span className="text-sm font-black text-teal-700">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-lg font-black text-stone-950">{entry}</p>
                  <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-stone-500 ring-1 ring-teal-100">
                    Sample
                  </span>
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
            <SectionIntro
              label="Portfolio Evidence"
              title="Practice Work and Portfolio Evidence"
              description="Simple showcase blocks present proof-of-learning examples without claiming real client work."
            />
            <div className="reveal mt-10 grid gap-px overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-200 lg:grid-cols-2">
              {practiceWork.map((item) => (
                <article key={item.title} className="bg-white p-7 sm:p-8">
                  <span className="block h-1.5 w-16 rounded-full bg-gradient-to-r from-rose-400 to-teal-400" />
                  <h3 className="mt-6 text-2xl font-black tracking-tight text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-stone-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal relative isolate overflow-hidden rounded-[2rem] border border-amber-200 bg-[#fff6df] p-7 sm:p-10">
              <div className="absolute -right-16 -top-20 -z-10 h-56 w-56 rounded-full bg-rose-200/70 blur-3xl" />
              <div className="absolute -bottom-20 left-8 -z-10 h-56 w-56 rounded-full bg-teal-200/70 blur-3xl" />
              <div className="max-w-4xl">
                <Eyebrow>Clear Online Profile</Eyebrow>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
                  Why a Career Portfolio Helps
                </h2>
                <p className="mt-6 border-l-4 border-rose-400 pl-6 text-xl font-semibold leading-9 text-stone-800">
                  A career portfolio helps newcomers and job seekers show their background,
                  transferable skills, learning progress, sample work, and career direction in one
                  clear online profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 pb-20 sm:py-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal grid gap-8 rounded-[2rem] bg-stone-950 p-7 text-white shadow-2xl shadow-stone-300/50 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-200">
                  Portfolio Website Services
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Need a professional newcomer career portfolio?
                </h2>
                <p className="mt-4 leading-8 text-stone-200">
                  Connect with Ahmad Niknam to discuss a simple portfolio website for your Canadian
                  career journey, transferable skills, learning path, projects, and professional
                  goals.
                </p>
                <p className="mt-4 text-sm font-semibold text-stone-300">
                  Email: {profileLinks.emailLabel}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-teal-50"
                  aria-label="Connect with Ahmad Niknam on LinkedIn"
                >
                  Connect on LinkedIn
                </a>
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
