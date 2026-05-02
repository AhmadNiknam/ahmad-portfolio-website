import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Newcomer Career Portfolio Demo | Ahmad Niknam",
  description:
    "Demo portfolio website concept for newcomers, international students, job seekers, and career changers building a professional path in Canada."
};

const identityItems = [
  "Based in Canada",
  "Customer Service Focus",
  "Microsoft 365 Practice",
  "Career Transition"
];

const careerFocus = [
  {
    title: "Workplace Communication",
    marker: "01",
    description:
      "Clear emails, respectful follow-ups, and confident conversations for Canadian workplace settings."
  },
  {
    title: "Customer-Facing Support",
    marker: "02",
    description:
      "Practical service habits for listening, documenting needs, solving issues, and creating a helpful experience."
  },
  {
    title: "Digital Workplace Skills",
    marker: "03",
    description:
      "Hands-on practice with Microsoft 365, shared documents, calendars, online meetings, and team collaboration."
  }
];

const skillGroups = [
  {
    title: "Communication & Service",
    skills: ["Customer service", "Professional communication", "Team collaboration"]
  },
  {
    title: "Organization & Documentation",
    skills: ["Administrative support", "Documentation", "Scheduling and coordination"]
  },
  {
    title: "Digital Workplace",
    skills: ["Microsoft Office", "Microsoft 365", "Online collaboration tools"]
  },
  {
    title: "Growth & Readiness",
    skills: ["Problem solving", "Adaptability", "Continuous learning"]
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

const evidenceItems = [
  {
    title: "Career Transition Portfolio",
    type: "Profile",
    description:
      "A sample online profile that connects previous experience, present learning, and Canadian career goals."
  },
  {
    title: "Customer Service Scenario Documentation",
    type: "Service Notes",
    description:
      "Practice notes showing how to understand a request, document details, and follow up clearly."
  },
  {
    title: "Microsoft 365 Practice Workspace",
    type: "Workspace",
    description:
      "Sample documents, spreadsheets, email drafts, and shared task examples for office readiness."
  },
  {
    title: "Volunteer Coordination Example",
    type: "Coordination",
    description:
      "A practical example for organizing tasks, schedules, communication notes, and responsibilities."
  }
];

const goals = [
  "Present international experience clearly",
  "Build confidence in the Canadian job market",
  "Improve workplace communication",
  "Create a professional online presence",
  "Support job applications, networking, and interviews"
];

function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="reveal max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#bf6b53]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#22201d] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#6f675d]">{description}</p>
      ) : null}
    </div>
  );
}

export default function NewcomerCareerPortfolioDemo() {
  return (
    <>
      <main className="overflow-hidden bg-[#f7f1e8] text-[#22201d]">
        <section className="relative isolate">
          <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_18%_16%,rgba(244,151,108,0.28),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(93,148,139,0.22),transparent_30%),linear-gradient(180deg,#fffaf3_0%,#f7f1e8_78%)]" />
          <div className="mx-auto max-w-7xl px-5 pb-10 pt-5 sm:px-6 lg:pb-16">
            <div className="reveal flex flex-col gap-3 rounded-full border border-white/80 bg-white/70 px-4 py-3 shadow-sm shadow-[#c9aa8f]/10 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9c6b50]">
                  Demo Portfolio Concept
                </p>
                <p className="mt-1 text-sm leading-6 text-[#6f675d]">
                  This is a sample newcomer career portfolio concept, not a completed client project.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit justify-center rounded-full bg-[#22201d] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#406f69]"
              >
                Back to Portfolio
              </Link>
            </div>

            <div className="grid gap-10 pb-12 pt-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.72fr)] lg:items-center lg:pt-20">
              <div className="reveal">
                <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#406f69] shadow-sm shadow-[#c9aa8f]/10">
                  Newcomer Career Portfolio
                </p>
                <h1 className="mt-7 max-w-4xl text-6xl font-semibold tracking-[-0.085em] text-[#22201d] sm:text-7xl lg:text-8xl">
                  Nina Rahman
                </h1>
                <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-[#4d4740] sm:text-2xl">
                  Customer Service | Administrative Support | Microsoft 365
                </p>
                <p className="mt-8 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.055em] text-[#22201d] sm:text-4xl">
                  Building a professional career in Canada through transferable skills, practical
                  learning, and clear communication.
                </p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f675d] sm:text-lg">
                  A modern portfolio concept showing how newcomers and career changers can present
                  transferable experience, learning progress, and career direction with confidence.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#career-focus"
                    className="inline-flex justify-center rounded-full bg-[#e88466] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#e88466]/20 transition hover:-translate-y-0.5 hover:bg-[#d56f52]"
                  >
                    View Career Focus
                  </a>
                  <a
                    href="#transferable-skills"
                    className="inline-flex justify-center rounded-full border border-[#d9cbb9] bg-white/70 px-6 py-3 text-sm font-semibold text-[#22201d] transition hover:-translate-y-0.5 hover:border-[#406f69] hover:text-[#406f69]"
                  >
                    Explore Skills
                  </a>
                  <Link
                    href="/"
                    className="inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold text-[#6f675d] transition hover:-translate-y-0.5 hover:text-[#22201d]"
                  >
                    Back to Ahmad&apos;s Portfolio
                  </Link>
                </div>
              </div>

              <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full border border-[#e7d7c6] bg-white/40 lg:block" />
                <div className="absolute -right-6 bottom-16 hidden h-36 w-36 rounded-[2.25rem] bg-[#6fa89e]/20 lg:block" />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/72 p-4 shadow-2xl shadow-[#b99678]/20 backdrop-blur">
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] bg-[#f1e4d7]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(232,132,102,0.95),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(111,168,158,0.7),transparent_22%),radial-gradient(circle_at_60%_82%,rgba(242,186,112,0.68),transparent_28%)]" />
                    <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/70" />
                    <div className="absolute right-8 top-20 h-14 w-14 rounded-full bg-white/55" />
                    <div className="absolute bottom-0 h-[54%] w-[78%] rounded-t-[999px] bg-[#406f69]" />
                    <div className="absolute bottom-[31%] flex h-36 w-36 items-center justify-center rounded-full border-[12px] border-[#fffaf3] bg-[#22201d] text-5xl font-semibold tracking-[-0.08em] text-white shadow-2xl shadow-[#22201d]/20">
                      NR
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] bg-white/82 p-4 shadow-sm backdrop-blur">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#bf6b53]">
                        Modern Personal Brand
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-[#4d4740]">
                        A warm, focused profile for career direction and readiness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {identityItems.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/80 bg-white/62 px-5 py-4 text-sm font-semibold text-[#4d4740] shadow-sm shadow-[#c9aa8f]/10 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf3] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
            <SectionHeader eyebrow="Professional Summary" title="A clear career story in one place" />
            <div className="reveal relative rounded-[2rem] bg-[#f7f1e8] p-6 sm:p-8">
              <div className="absolute -left-3 top-8 h-14 w-2 rounded-full bg-[#e88466]" />
              <p className="text-xl font-medium leading-9 tracking-[-0.025em] text-[#3b3631]">
                This sample profile shows how a newcomer or career changer can present previous
                experience, transferable skills, current learning, and career goals in one clear
                online presence.
              </p>
              <p className="mt-5 text-sm font-medium leading-6 text-[#6f675d]">
                The emphasis is confidence, clarity, and readiness, not a traditional resume layout.
              </p>
            </div>
          </div>
        </section>

        <section id="career-focus" className="bg-[#f7f1e8] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-9 lg:grid-cols-[0.34fr_0.66fr]">
              <SectionHeader
                eyebrow="Career Focus"
                title="Focused for practical opportunities"
                description="Three simple directions make the portfolio easy for employers, mentors, and networking contacts to understand."
              />
              <div className="reveal grid gap-4 md:grid-cols-3">
                {careerFocus.map((item) => (
                  <article
                    key={item.title}
                    className="group rounded-[2rem] bg-white/70 p-6 shadow-sm shadow-[#c9aa8f]/10 transition hover:-translate-y-1 hover:bg-white"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2d5c6] text-sm font-semibold text-[#bf6b53] transition group-hover:bg-[#e88466] group-hover:text-white">
                      {item.marker}
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold tracking-[-0.045em] text-[#22201d]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#6f675d]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="transferable-skills" className="bg-[#fffaf3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-9 lg:grid-cols-[0.34fr_0.66fr]">
              <SectionHeader
                eyebrow="Transferable Skills"
                title="Compact skill clusters"
                description="Pill-based groups keep the page scannable while still showing the full range of transferable strengths."
              />
              <div className="reveal grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-[2rem] border border-[#eee2d4] bg-white p-5 shadow-sm shadow-[#c9aa8f]/10"
                  >
                    <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#22201d]">
                      {group.title}
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-[#f7f1e8] px-4 py-2 text-sm font-medium text-[#5c554d]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f1e8] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 sm:px-6 lg:grid-cols-[0.34fr_0.66fr]">
            <SectionHeader
              eyebrow="Learning Journey"
              title="Progress made visible"
              description="A simple progression keeps the learning path personal and current without feeling like an academic transcript."
            />
            <div className="reveal rounded-[2rem] bg-white/72 p-4 shadow-sm shadow-[#c9aa8f]/10">
              <div className="space-y-3">
                {learningEntries.map((entry, index) => (
                  <div
                    key={entry}
                    className="grid gap-4 rounded-[1.4rem] bg-[#fffaf3] p-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:items-center"
                  >
                    <span className="text-sm font-semibold text-[#bf6b53]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg font-semibold tracking-[-0.025em] text-[#22201d]">
                      {entry}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 px-2 text-sm font-medium leading-6 text-[#6f675d]">
                Sample learning items for demonstration purposes only.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-9 lg:grid-cols-[0.34fr_0.66fr]">
              <SectionHeader
                eyebrow="Portfolio Evidence"
                title="Small proof points, clearly presented"
                description="Lightweight showcase rows give the portfolio substance without turning the page into a project dashboard."
              />
              <div className="reveal grid gap-3">
                {evidenceItems.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-4 rounded-[1.6rem] border border-[#eee2d4] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#d8c3ae] sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-start"
                  >
                    <div className="flex items-center gap-3 sm:block">
                      <span className="block h-3 w-3 rounded-full bg-[#6fa89e] sm:mb-5" />
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9c6b50]">
                        {item.type}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#22201d]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#6f675d]">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f1e8] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="reveal overflow-hidden rounded-[2.5rem] bg-[#253f3b] p-6 text-white shadow-2xl shadow-[#253f3b]/15 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f5be94]">
                    Professional Goals
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                    A focused path toward confidence and visibility.
                  </h2>
                </div>
                <div className="grid gap-3">
                  {goals.map((goal, index) => (
                    <div
                      key={goal}
                      className="grid gap-4 rounded-[1.4rem] bg-white/10 p-4 backdrop-blur sm:grid-cols-[3rem_minmax(0,1fr)] sm:items-center"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#253f3b]">
                        {index + 1}
                      </span>
                      <p className="font-medium leading-7 text-[#f6eee4]">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-[#f2dccb] p-7 sm:p-10">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/45" />
              <div className="absolute bottom-6 right-8 hidden h-16 w-16 rounded-full bg-[#e88466]/30 sm:block" />
              <div className="relative max-w-4xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9c6b50]">
                  Why This Portfolio Helps
                </p>
                <p className="mt-6 text-2xl font-semibold leading-10 tracking-[-0.045em] text-[#22201d] sm:text-4xl sm:leading-tight">
                  A career portfolio helps newcomers and job seekers show their background,
                  transferable skills, learning progress, sample work, and career direction in one
                  clear online profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f1e8] py-16 pb-20 sm:py-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="reveal grid gap-9 overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/76 p-7 shadow-2xl shadow-[#c9aa8f]/20 backdrop-blur sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#bf6b53]">
                  Portfolio Website Services
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#22201d] sm:text-5xl">
                  Need a modern personal brand portfolio?
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#6f675d]">
                  Connect with Ahmad Niknam to discuss a simple portfolio website for your Canadian
                  career journey, transferable skills, learning path, projects, and professional
                  goals.
                </p>
                <p className="mt-5 text-sm font-semibold text-[#6f675d]">
                  Email: {profileLinks.emailLabel}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#22201d] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#c9aa8f]/20 transition hover:-translate-y-0.5 hover:bg-[#406f69]"
                  aria-label="Connect with Ahmad Niknam on LinkedIn"
                >
                  Connect on LinkedIn
                </a>
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-[#d9cbb9] bg-[#fffaf3] px-6 py-3 text-sm font-semibold text-[#22201d] transition hover:-translate-y-0.5 hover:border-[#bf6b53] hover:text-[#bf6b53]"
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
