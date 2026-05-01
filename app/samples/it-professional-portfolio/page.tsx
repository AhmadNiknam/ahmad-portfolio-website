import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Alex Carter IT Portfolio Demo | Ahmad Niknam",
  description:
    "A light, modern demo portfolio concept for an IT support and systems administration professional."
};

const coreSkills = [
  "Microsoft 365 Administration",
  "Windows Server Support",
  "Azure Administration",
  "User Support & Troubleshooting",
  "PowerShell Automation",
  "Network Fundamentals",
  "Documentation",
  "Endpoint Support"
];

const certifications = [
  "Microsoft Certified: Azure Administrator Associate",
  "Microsoft 365 Fundamentals",
  "IT Support and Systems Administration Credential"
];

const featuredProjects = [
  {
    title: "Microsoft 365 User Support Optimization",
    tag: "Sample project",
    description:
      "Mapped common user requests, improved onboarding documentation, and created support checklists for account, email, and Teams issues.",
    details: ["M365 admin workflows", "Knowledge base updates", "Ticket triage support"]
  },
  {
    title: "Windows Server Maintenance and Access Review",
    tag: "Sample project",
    description:
      "Created a practical maintenance rhythm for file shares, user groups, patch checks, and routine Active Directory access reviews.",
    details: ["AD group review", "Patch readiness", "File service support"]
  },
  {
    title: "Small Office Network Support and Documentation",
    tag: "Sample project",
    description:
      "Documented a small office network, clarified device ownership, and prepared troubleshooting notes for connectivity and printer issues.",
    details: ["Network inventory", "Troubleshooting guide", "Endpoint notes"]
  }
];

const experienceSnapshots = [
  {
    period: "User Support",
    title: "Responsive help desk support",
    description: "Clear communication, careful intake, and practical troubleshooting for staff and remote users."
  },
  {
    period: "Systems",
    title: "Server and identity administration",
    description: "Routine account management, permissions reviews, documentation, and system maintenance tasks."
  },
  {
    period: "Cloud",
    title: "Microsoft cloud operations",
    description: "Microsoft 365 and Azure fundamentals applied to secure, reliable, and organized daily operations."
  }
];

export default function ItProfessionalPortfolioDemo() {
  return (
    <>
      <main className="bg-[#f7f2ea] text-stone-950">
        <section className="relative isolate overflow-hidden border-b border-stone-200 bg-[linear-gradient(135deg,#fffaf0_0%,#eef7f1_52%,#edf4ff_100%)] py-8 sm:py-10">
          <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href="/"
              className="inline-flex rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-sm font-bold text-stone-700 shadow-sm shadow-stone-200/60 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-800"
            >
              Back to Portfolio
            </Link>

            <div className="mt-8 rounded-[2rem] border border-white/80 bg-white/75 p-4 shadow-2xl shadow-stone-300/30 backdrop-blur sm:p-6">
              <div className="flex flex-col gap-3 rounded-[1.5rem] border border-amber-200/80 bg-amber-50 px-5 py-4 text-sm font-semibold leading-6 text-amber-900 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-amber-800 ring-1 ring-amber-200">
                  Demo Portfolio Concept
                </span>
                <span>This is a sample portfolio concept, not a completed client project.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fffaf0_0%,#eef7f1_52%,#edf4ff_100%)] py-16 sm:py-20">
          <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="reveal">
              <p className="mb-5 inline-flex rounded-full bg-emerald-900 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-50 shadow-lg shadow-emerald-900/10">
                Available for IT Support Roles
              </p>
              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-stone-950 sm:text-6xl lg:text-7xl">
                Alex Carter
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-bold leading-8 text-emerald-900 sm:text-2xl">
                IT Support Specialist | Systems Administration | Microsoft 365 | Azure
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                I help organizations support users, maintain reliable systems, and improve
                day-to-day IT operations across cloud and on-premise environments.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-stone-400/30 transition hover:-translate-y-0.5 hover:bg-emerald-950"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-800"
                >
                  Contact / Connect
                </a>
              </div>
            </div>

            <div className="animate-float-in">
              <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-stone-300/40">
                <div className="bg-stone-950 px-6 py-5 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                        Profile Snapshot
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight">IT Operations</h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-300 text-lg font-black text-stone-950">
                      AC
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 p-6">
                  {[
                    ["Focus", "User support, systems administration, cloud operations"],
                    ["Tools", "Microsoft 365, Azure, Windows Server, PowerShell"],
                    ["Style", "Calm troubleshooting, clear documentation, steady follow-through"]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-800">
                        {label}
                      </p>
                      <p className="mt-2 font-semibold leading-7 text-stone-800">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="reveal">
                <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-emerald-800 ring-1 ring-stone-200">
                  About
                </p>
                <h2 className="text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
                  Practical IT support with a calm, organized approach.
                </h2>
              </div>
              <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm sm:p-8">
                <p className="text-lg leading-8 text-stone-700">
                  Alex Carter is a fictional IT professional profile created to demonstrate how a
                  portfolio website can present technical experience, certifications, project
                  examples, and professional communication in a clear Canadian-market format.
                </p>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  This sample emphasizes reliability, user support, documentation, and steady
                  improvement across Microsoft 365, Windows Server, Azure fundamentals, and
                  endpoint support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-emerald-800 ring-1 ring-stone-200">
                Core Skills
              </p>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
                Technical strengths presented at a glance.
              </h2>
            </div>
            <div className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {coreSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-stone-200 bg-white p-5 font-bold text-stone-900 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-stone-300/30"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal grid gap-6 rounded-[2rem] border border-stone-200 bg-stone-950 p-7 text-white shadow-2xl shadow-stone-300/30 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-emerald-200 ring-1 ring-white/15">
                  Certifications
                </p>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Credentials that support the technical story.
                </h2>
              </div>
              <div className="grid gap-3">
                {certifications.map((certification) => (
                  <div
                    key={certification}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 font-bold text-stone-50"
                  >
                    {certification}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-emerald-800 ring-1 ring-stone-200">
                Featured Projects
              </p>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
                Sample project cards for an IT portfolio.
              </h2>
              <p className="mt-4 leading-7 text-stone-700">
                These examples are fictional portfolio content, not client claims.
              </p>
            </div>
            <div className="reveal grid gap-5 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="flex min-h-full flex-col rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-stone-300/30"
                >
                  <p className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-emerald-800 ring-1 ring-emerald-100">
                    {project.tag}
                  </p>
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-stone-950">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-stone-700">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full bg-stone-100 px-3 py-1 text-sm font-semibold text-stone-700"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-black uppercase tracking-[0.2em] text-emerald-800 ring-1 ring-stone-200">
                Experience Snapshot
              </p>
              <h2 className="text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">
                A simple overview of experience areas.
              </h2>
            </div>
            <div className="reveal grid gap-4 lg:grid-cols-3">
              {experienceSnapshots.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-800">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-xl font-black tracking-tight text-stone-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-stone-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-14 pb-20 sm:py-18 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#064e3b_0%,#172554_100%)] p-7 text-white shadow-2xl shadow-stone-300/40 sm:p-8">
              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-emerald-200">
                    Build Something Similar
                  </p>
                  <h2 className="text-3xl font-black tracking-tight">
                    Want a similar portfolio website?
                  </h2>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-200">
                    Connect with Ahmad Niknam on LinkedIn to discuss a clean professional portfolio
                    website for your background, projects, and career goals.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-emerald-100">
                    Email: {profileLinks.emailLabel}
                  </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:flex-col">
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-50"
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
