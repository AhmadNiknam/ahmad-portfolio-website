import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Newcomer Career Portfolio Demo | Ahmad Niknam",
  description:
    "Demo portfolio website concept for newcomers, international students, job seekers, and career changers building a professional path in Canada."
};

const quickProfile = [
  ["Location", "Canada"],
  ["Career Focus", "Customer Service & Administrative Support"],
  ["Skills Direction", "Microsoft 365, documentation, communication"],
  ["Portfolio Goal", "Present transferable skills and Canadian career readiness"]
];

const strengths = [
  { label: "Reliable communication", level: "w-[92%]" },
  { label: "Customer-focused mindset", level: "w-[88%]" },
  { label: "Organized documentation", level: "w-[84%]" },
  { label: "Adaptability", level: "w-[90%]" },
  { label: "Learning mindset", level: "w-[95%]" }
];

const careerDirection = [
  "Building Canadian workplace communication",
  "Strengthening digital workplace skills",
  "Preparing for administrative and customer-facing roles",
  "Presenting transferable experience clearly"
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
    type: "Profile Document",
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
    type: "Digital Workspace",
    description:
      "Sample documents, spreadsheets, email drafts, and shared task examples for office readiness."
  },
  {
    title: "Volunteer Coordination Example",
    type: "Coordination Sample",
    description:
      "A practical example for organizing tasks, schedules, communication notes, and responsibilities."
  }
];

const goals = [
  "Build confidence in the Canadian job market",
  "Present international experience clearly",
  "Develop practical workplace communication",
  "Create a professional online presence",
  "Support applications, networking, and interviews"
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#a24d2d]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-[#25211d] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function NewcomerCareerPortfolioDemo() {
  return (
    <>
      <main className="overflow-hidden bg-[#f8efe3] text-[#25211d]">
        <section className="border-b border-[#d9c7b4] bg-[#fffaf2]">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
            <div className="reveal flex flex-col gap-4 rounded-[1.25rem] border border-[#d9c7b4] bg-[#fffaf2] px-5 py-4 shadow-sm shadow-[#c49a77]/10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#a24d2d]">
                  Demo Portfolio Concept
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#67584c]">
                  This is a sample newcomer career portfolio concept, not a completed client project.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit justify-center rounded-full border border-[#d9c7b4] bg-white px-4 py-2 text-sm font-bold text-[#25211d] transition hover:-translate-y-0.5 hover:border-[#a24d2d] hover:text-[#a24d2d]"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="relative isolate border-b border-[#d9c7b4] bg-[#f8efe3] py-10 sm:py-14 lg:py-16">
          <div className="absolute left-[-8rem] top-20 -z-10 h-72 w-72 rounded-full bg-[#dc8f56]/30 blur-3xl" />
          <div className="absolute bottom-8 right-[-8rem] -z-10 h-80 w-80 rounded-full bg-[#26736a]/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.08fr_0.92fr] lg:items-stretch">
            <aside className="reveal order-2 flex flex-col gap-5 lg:order-1">
              <div className="rounded-[1.75rem] border border-[#d9c7b4] bg-[#fffaf2] p-6 shadow-sm shadow-[#c49a77]/10">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#26736a]">
                  Profile Details
                </p>
                <div className="mt-5 divide-y divide-[#eadbcb]">
                  {quickProfile.map(([label, value]) => (
                    <div key={label} className="grid gap-1 py-4 first:pt-0 last:pb-0">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9a8371]">
                        {label}
                      </p>
                      <p className="text-base font-bold leading-7 text-[#25211d]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[#d9c7b4] bg-[#d96f32] p-6 text-white shadow-xl shadow-[#c49a77]/20">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ffe1c7]">
                  Strengths
                </p>
                <div className="mt-5 space-y-4">
                  {strengths.map((strength) => (
                    <div key={strength.label}>
                      <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffe1c7]" />
                        <p className="text-sm font-bold">{strength.label}</p>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/25">
                        <div className={`h-full rounded-full bg-white ${strength.level}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <section className="reveal order-1 rounded-[2.25rem] border border-[#d9c7b4] bg-[#fffaf2] p-5 shadow-2xl shadow-[#c49a77]/20 lg:order-2">
              <div className="flex min-h-full flex-col">
                <div className="rounded-[1.8rem] bg-[#25211d] px-5 py-4 text-[#fffaf2] sm:px-6">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f2b477]">
                    Newcomer Career Portfolio
                  </p>
                  <h1 className="mt-4 text-6xl font-black tracking-[-0.08em] sm:text-7xl lg:text-8xl">
                    Nina Rahman
                  </h1>
                  <p className="mt-4 max-w-2xl text-xl font-bold leading-8 text-[#f8d8bc] sm:text-2xl">
                    Customer Service | Administrative Support | Microsoft 365
                  </p>
                </div>

                <div className="mt-5 flex flex-1 flex-col justify-between rounded-[1.8rem] border border-[#eadbcb] bg-[#f6e6d4] p-5 sm:p-6">
                  <div className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center overflow-hidden rounded-[1.6rem] border border-[#d6b999] bg-[#fffaf2]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_18%,#f4b26f_0%,transparent_27%),radial-gradient(circle_at_82%_80%,#26736a_0%,transparent_25%)] opacity-75" />
                    <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-[#d9c7b4] bg-[#f7d9bd]" />
                    <div className="absolute bottom-0 h-[52%] w-[72%] rounded-t-full bg-[#26736a]" />
                    <div className="absolute bottom-[33%] flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-[#fffaf2] bg-[#25211d] text-4xl font-black text-[#fffaf2] shadow-2xl">
                      NR
                    </div>
                    <span className="absolute bottom-5 rounded-full bg-[#fffaf2]/95 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#67584c] shadow-sm">
                      Portrait Placeholder
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-[#fffaf2] p-4">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a24d2d]">
                        Title
                      </p>
                      <p className="mt-2 font-black">Newcomer Career Portfolio</p>
                    </div>
                    <div className="rounded-2xl bg-[#fffaf2] p-4">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a24d2d]">
                        Focus
                      </p>
                      <p className="mt-2 font-black">Career readiness in Canada</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <aside className="reveal order-3 flex flex-col gap-5">
              <div className="rounded-[1.75rem] border border-[#d9c7b4] bg-[#fffaf2] p-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#a24d2d]">
                  Main Statement
                </p>
                <p className="mt-5 text-2xl font-black leading-9 tracking-[-0.035em] text-[#25211d]">
                  Building a professional career in Canada through transferable skills, practical
                  learning, and clear communication.
                </p>
                <p className="mt-5 text-base leading-8 text-[#67584c]">
                  Nina is a fictional newcomer profile created to show how international experience,
                  workplace communication, learning progress, and career goals can be presented
                  clearly in a modern online portfolio.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[#b8d8d2] bg-[#e8f2ef] p-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#26736a]">
                  Career Direction
                </p>
                <ul className="mt-5 space-y-3">
                  {careerDirection.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-bold leading-6 text-[#294b48]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#26736a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-[#fffaf2] py-14 sm:py-18">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.42fr_0.58fr]">
            <SectionTitle eyebrow="Professional Summary" title="Clear career story" />
            <div className="reveal border-l-0 border-[#d9c7b4] text-lg leading-9 text-[#67584c] lg:border-l lg:pl-8">
              <p>
                A clear summary explaining that this fictional profile shows how a newcomer or career
                changer can present previous experience, transferable skills, learning progress, and
                current career direction in a Canadian-style portfolio.
              </p>
            </div>
          </div>
        </section>

        <section id="transferable-skills" className="bg-[#f8efe3] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
              <SectionTitle eyebrow="Transferable Skills" title="Skills grouped for quick review" />
              <div className="reveal grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group, index) => (
                  <article
                    key={group.title}
                    className="min-h-64 border border-[#d9c7b4] bg-[#fffaf2] p-6 shadow-sm shadow-[#c49a77]/10"
                  >
                    <p className="text-sm font-black text-[#d96f32]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#25211d]">
                      {group.title}
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="border-t border-[#eadbcb] pt-3 text-sm font-bold leading-6 text-[#67584c]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf2] py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.32fr_0.68fr]">
            <SectionTitle eyebrow="Learning and Certifications" title="Visible learning path" />
            <div className="reveal">
              <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[#d9c7b4] bg-[#d9c7b4] sm:grid-cols-2">
                {learningEntries.map((entry) => (
                  <div key={entry} className="bg-[#fffaf2] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a8371]">
                      Sample Learning
                    </p>
                    <p className="mt-3 text-lg font-black tracking-[-0.02em] text-[#25211d]">
                      {entry}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#67584c]">
                Sample learning items for demonstration purposes only.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f8efe3] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
              <SectionTitle eyebrow="Portfolio Evidence" title="Sample work as proof of direction" />
              <div className="reveal space-y-4">
                {evidenceItems.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-5 border border-[#d9c7b4] bg-[#fffaf2] p-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:p-6"
                  >
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a24d2d]">
                        {item.type}
                      </p>
                      <div className="mt-4 h-2 w-20 rounded-full bg-[#d96f32]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.04em] text-[#25211d]">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-8 text-[#67584c]">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf2] py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.32fr_0.68fr]">
            <SectionTitle eyebrow="Professional Goals" title="Practical next steps" />
            <div className="reveal grid gap-3 sm:grid-cols-2">
              {goals.map((goal) => (
                <div
                  key={goal}
                  className="flex min-h-24 items-center gap-4 rounded-[1.25rem] border border-[#d9c7b4] bg-[#f8efe3] p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#26736a] text-sm font-black text-white">
                    +
                  </span>
                  <p className="font-bold leading-7 text-[#25211d]">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8efe3] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="reveal relative overflow-hidden rounded-[2rem] border border-[#d9c7b4] bg-[#25211d] p-7 text-[#fffaf2] sm:p-10">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-[#d96f32]" />
              <div className="relative max-w-4xl">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f2b477]">
                  Why This Portfolio Helps
                </p>
                <p className="mt-6 border-l-4 border-[#f2b477] pl-6 text-2xl font-black leading-10 tracking-[-0.04em] sm:text-3xl">
                  A career portfolio helps newcomers and job seekers show their background,
                  transferable skills, learning progress, sample work, and career direction in one
                  clear online profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf2] py-14 pb-20 sm:py-20 sm:pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="reveal grid gap-8 rounded-[2rem] border border-[#d9c7b4] bg-[#f6e6d4] p-7 shadow-2xl shadow-[#c49a77]/20 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#a24d2d]">
                  Portfolio Website Services
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.045em] text-[#25211d] sm:text-5xl">
                  Need a professional personal brand portfolio?
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#67584c]">
                  Connect with Ahmad Niknam to discuss a simple portfolio website for your Canadian
                  career journey, transferable skills, learning path, projects, and professional
                  goals.
                </p>
                <p className="mt-5 text-sm font-bold text-[#67584c]">
                  Email: {profileLinks.emailLabel}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#25211d] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-[#c49a77]/20 transition hover:-translate-y-0.5 hover:bg-[#26736a]"
                  aria-label="Connect with Ahmad Niknam on LinkedIn"
                >
                  Connect on LinkedIn
                </a>
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-[#c7aa8d] bg-[#fffaf2] px-6 py-3 text-sm font-bold text-[#25211d] transition hover:-translate-y-0.5 hover:border-[#a24d2d] hover:text-[#a24d2d]"
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
