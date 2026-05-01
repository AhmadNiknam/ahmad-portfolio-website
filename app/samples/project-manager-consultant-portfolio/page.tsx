import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Project Manager Consultant Portfolio Demo | Ahmad Niknam",
  description:
    "Demo portfolio website concept for project managers, consultants, business analysts, and professionals who want to present services, case studies, and project outcomes."
};

const deliverySnapshot = [
  {
    label: "Delivery Planning",
    description: "Roadmaps, milestones, ownership, and working rhythms that keep projects moving.",
    accent: "from-blue-500 to-cyan-400",
    chip: "Scope ready"
  },
  {
    label: "Risk Visibility",
    description: "Practical logs for risks, issues, decisions, dependencies, and escalation paths.",
    accent: "from-amber-400 to-orange-500",
    chip: "Watch list"
  },
  {
    label: "Stakeholder Alignment",
    description: "Shared context across sponsors, business teams, technical teams, and vendors.",
    accent: "from-violet-500 to-fuchsia-500",
    chip: "Aligned"
  },
  {
    label: "Agile Coordination",
    description: "Backlog support, sprint planning, meeting cadence, and follow-through routines.",
    accent: "from-emerald-400 to-teal-500",
    chip: "In motion"
  }
];

const services = [
  {
    title: "Project Planning and Coordination",
    description: "Shape scope, milestones, owners, dependencies, and practical delivery checkpoints.",
    color: "bg-blue-50 text-blue-950 ring-blue-200"
  },
  {
    title: "Business Requirements Analysis",
    description: "Clarify business needs, process gaps, acceptance criteria, and stakeholder priorities.",
    color: "bg-violet-50 text-violet-950 ring-violet-200"
  },
  {
    title: "Risk and Issue Management",
    description: "Create visible routines for tracking blockers, decisions, impacts, and next actions.",
    color: "bg-amber-50 text-amber-950 ring-amber-200"
  },
  {
    title: "Agile / Scrum Facilitation",
    description: "Support sprint rituals, backlog refinement, team coordination, and progress review.",
    color: "bg-emerald-50 text-emerald-950 ring-emerald-200"
  },
  {
    title: "Stakeholder Communication",
    description: "Turn project complexity into clear updates, tradeoffs, meeting notes, and decisions.",
    color: "bg-cyan-50 text-cyan-950 ring-cyan-200"
  },
  {
    title: "Reporting and Decision Support",
    description: "Prepare business-friendly summaries that highlight status, risk, options, and action.",
    color: "bg-rose-50 text-rose-950 ring-rose-200"
  }
];

const roadmap = [
  {
    step: "01",
    title: "Discover",
    description: "Clarify goals, stakeholders, constraints, and current process gaps."
  },
  {
    step: "02",
    title: "Plan",
    description: "Structure scope, priorities, risks, tasks, and delivery expectations."
  },
  {
    step: "03",
    title: "Coordinate",
    description: "Support meetings, backlog organization, issue tracking, and team follow-up."
  },
  {
    step: "04",
    title: "Report",
    description: "Prepare clear updates, decision points, risks, and progress summaries."
  }
];

const caseStudies = [
  {
    title: "Digital Workflow Improvement",
    focus:
      "Clarifying requirements, mapping process gaps, and supporting a structured implementation plan.",
    tags: ["Requirements", "Process mapping", "Implementation plan"],
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "IT Project Governance Setup",
    focus:
      "Creating project tracking, issue visibility, risk reporting, and stakeholder update routines.",
    tags: ["Governance", "Risk reporting", "Status rhythm"],
    gradient: "from-violet-600 to-fuchsia-500"
  },
  {
    title: "Agile Delivery Support",
    focus:
      "Supporting backlog organization, sprint planning, team coordination, and delivery reporting.",
    tags: ["Backlog", "Sprint planning", "Delivery updates"],
    gradient: "from-emerald-500 to-teal-500"
  }
];

const toolsAndMethods = [
  "Jira",
  "Azure DevOps",
  "Microsoft Project",
  "Power BI",
  "Excel",
  "Scrum",
  "Kanban",
  "Risk Register",
  "Stakeholder Matrix",
  "Process Mapping"
];

const communicationStyle = [
  "Clear stakeholder updates",
  "Practical documentation",
  "Meeting follow-up summaries",
  "Risk and decision tracking",
  "Business-friendly technical communication"
];

function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  light = false
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-xs font-black uppercase tracking-[0.24em] ${
          light ? "text-cyan-200" : "text-blue-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg leading-8 ${light ? "text-slate-200" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function ProjectManagerConsultantPortfolioDemo() {
  return (
    <>
      <main className="overflow-hidden bg-slate-50 text-slate-950">
        <section className="relative isolate border-b border-white/50 bg-[radial-gradient(circle_at_top_left,#c7d2fe_0%,transparent_32%),linear-gradient(135deg,#eff6ff_0%,#ecfeff_36%,#f5f3ff_68%,#fff7ed_100%)]">
          <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
          <div className="absolute bottom-0 left-10 -z-10 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col gap-4 rounded-[1.5rem] border border-white/80 bg-white/75 px-5 py-4 shadow-xl shadow-blue-200/30 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-700">
                  Demo Portfolio Concept
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                  This is a sample portfolio concept, not a completed client project.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit justify-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-700"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="relative isolate bg-[radial-gradient(circle_at_18%_20%,#bfdbfe_0%,transparent_28%),radial-gradient(circle_at_88%_12%,#f0abfc_0%,transparent_25%),linear-gradient(135deg,#eff6ff_0%,#ecfeff_38%,#f5f3ff_70%,#fff7ed_100%)] py-16 sm:py-20">
          <div className="absolute left-1/2 top-14 -z-10 h-44 w-44 -translate-x-1/2 rotate-12 rounded-[2rem] bg-white/40 shadow-2xl shadow-blue-200/40" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="reveal">
              <p className="mb-5 inline-flex rounded-full bg-blue-950 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100 shadow-xl shadow-blue-900/20">
                Consultant Portfolio Sample
              </p>
              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl">
                Jordan Blake
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-black leading-8 text-blue-900 sm:text-2xl">
                Project Manager | Business Analyst | Agile Delivery Consultant
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">
                I help teams clarify priorities, organize delivery, reduce project risk, and turn
                complex business needs into practical project outcomes.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#case-studies"
                  className="inline-flex justify-center rounded-full bg-blue-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-blue-900/25 transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  View Case Studies
                </a>
                <a
                  href="#services"
                  className="inline-flex justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-cyan-400/20 transition hover:-translate-y-0.5"
                >
                  Explore Services
                </a>
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-blue-200 bg-white/80 px-6 py-3 text-sm font-bold text-blue-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-500"
                >
                  Back to Ahmad&apos;s Portfolio
                </Link>
              </div>
            </div>

            <div className="reveal">
              <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-2xl shadow-blue-300/30 backdrop-blur">
                <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
                        Delivery Command Center
                      </p>
                      <h2 className="mt-3 text-2xl font-black tracking-tight">
                        Organized project momentum
                      </h2>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-400 px-4 py-3 text-center text-sm font-black text-slate-950">
                      JB
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {["Scope", "Risks", "Backlog", "Updates"].map((item, index) => (
                      <div key={item} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                          Track {index + 1}
                        </p>
                        <p className="mt-2 text-lg font-black">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="-mt-3 ml-auto mr-4 max-w-sm rounded-[1.5rem] border border-white bg-white p-5 shadow-xl shadow-slate-300/30">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700">
                    Sample Profile Note
                  </p>
                  <p className="mt-3 leading-7 text-slate-700">
                    Fictional consultant profile content for demonstrating a modern professional
                    service portfolio layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mb-8">
              <SectionHeader
                eyebrow="Active Delivery Snapshot"
                title="A project dashboard visitors can understand quickly."
                description="Capability cards present how the consultant works without implying fake client performance claims."
              />
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {deliverySnapshot.map((item) => (
                <article
                  key={item.label}
                  className="group overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200/40"
                >
                  <div className={`h-2 bg-gradient-to-r ${item.accent}`} />
                  <div className="p-6">
                    <span
                      className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white ${item.accent}`}
                    >
                      {item.chip}
                    </span>
                    <h3 className="mt-5 text-xl font-black tracking-tight text-slate-950">
                      {item.label}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal grid gap-8 rounded-[2rem] border border-blue-100 bg-white p-7 shadow-xl shadow-blue-100/60 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHeader eyebrow="Consultant Profile" title="Fictional profile, practical positioning." />
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Jordan is a fictional project professional focused on business analysis, project
                  coordination, stakeholder communication, agile delivery, practical governance, and
                  clear project reporting.
                </p>
                <p>
                  This sample/demo content shows how a consultant portfolio can explain services,
                  methods, case study examples, and communication habits without using private
                  information or claiming real client results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                eyebrow="Services"
                title="Services and support areas"
                description="Color-coded service blocks make delivery support feel organized, active, and consultant-focused."
              />
              <div className="rounded-2xl bg-blue-950 px-5 py-4 text-sm font-semibold leading-6 text-cyan-50 shadow-xl shadow-blue-900/15">
                Built for planning, coordination, decisions, and reporting.
              </div>
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={`rounded-[1.75rem] p-6 shadow-sm ring-1 transition hover:-translate-y-1 hover:shadow-xl ${service.color}`}
                >
                  <p className="text-sm font-black">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-xl font-black tracking-tight">{service.title}</h3>
                  <p className="mt-3 leading-7 opacity-80">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mb-10">
              <SectionHeader
                eyebrow="Delivery Roadmap"
                title="A clear route from discovery to reporting."
                description="The roadmap reinforces an active project management style with visible stages and handoffs."
                light
              />
            </div>
            <div className="reveal grid gap-4 lg:grid-cols-4">
              {roadmap.map((item) => (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-xl shadow-slate-950/20"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-cyan-400/40 to-violet-500/40" />
                  <p className="text-sm font-black text-cyan-200">{item.step}</p>
                  <h3 className="mt-5 text-2xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                eyebrow="Selected Case Studies"
                title="Sample project stories with business context."
                description="Sample case studies for demonstration purposes only."
              />
              <p className="max-w-sm rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-6 text-amber-900">
                These examples demonstrate portfolio structure, not real client outcomes.
              </p>
            </div>
            <div className="reveal grid gap-5 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.title}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70"
                >
                  <div className={`h-24 bg-gradient-to-br ${study.gradient} p-5`}>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white ring-1 ring-white/30">
                      Sample case study
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black tracking-tight text-slate-950">
                      {study.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-700">{study.focus}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="reveal rounded-[2rem] bg-gradient-to-br from-blue-950 via-violet-950 to-slate-950 p-7 text-white shadow-2xl shadow-blue-900/20 sm:p-9">
              <SectionHeader
                eyebrow="Tools and Methods"
                title="A colorful delivery toolkit."
                description="A badge grid gives methods, tools, and project artifacts a quick, modern scan pattern."
                light
              />
              <div className="mt-7 flex flex-wrap gap-3">
                {toolsAndMethods.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 sm:p-9">
              <SectionHeader
                eyebrow="Communication Style"
                title="Professional habits that keep work visible."
                description="Soft skills are presented as operating behaviors, not a plain checklist."
              />
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {communicationStyle.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="mt-4 font-black leading-7 text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 pb-20 sm:py-18 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-violet-700 to-teal-600 p-7 text-white shadow-2xl shadow-blue-500/25 sm:p-9">
              <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 left-10 -z-10 h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl" />
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-100">
                    Portfolio Website Services
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                    Need a professional project or consultant portfolio?
                  </h2>
                  <p className="mt-4 leading-8 text-blue-50">
                    Connect with Ahmad Niknam to discuss a clean portfolio website for your
                    services, case studies, certifications, project background, and professional
                    goals.
                  </p>
                  <p className="mt-4 text-sm font-semibold text-blue-50">
                    Email: {profileLinks.emailLabel}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-950 shadow-xl shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
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
