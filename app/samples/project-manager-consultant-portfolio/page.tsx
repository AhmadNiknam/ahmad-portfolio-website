import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Project Manager Consultant Portfolio Demo | Ahmad Niknam",
  description:
    "Demo portfolio website concept for project managers, consultants, business analysts, and professionals who want to present services, case studies, and project outcomes."
};

const valueHighlights = [
  {
    label: "Delivery Planning",
    detail: "Structured roadmaps, milestones, ownership, and practical delivery checkpoints."
  },
  {
    label: "Risk Management",
    detail: "Visible risks, issues, dependencies, decisions, and escalation paths."
  },
  {
    label: "Stakeholder Alignment",
    detail: "Clear updates and shared understanding across business and technical teams."
  },
  {
    label: "Agile & Hybrid Projects",
    detail: "Flexible delivery routines for teams using Scrum, Kanban, or hybrid governance."
  }
];

const services = [
  "Project Planning and Coordination",
  "Business Requirements Analysis",
  "Risk and Issue Management",
  "Agile / Scrum Facilitation",
  "Stakeholder Communication",
  "Reporting and Decision Support"
];

const caseStudies = [
  {
    title: "Digital Workflow Improvement",
    focus:
      "Clarifying requirements, mapping process gaps, and supporting a structured implementation plan.",
    details: ["Current-state review", "Requirements workshops", "Implementation planning"]
  },
  {
    title: "IT Project Governance Setup",
    focus:
      "Creating project tracking, issue visibility, risk reporting, and stakeholder update routines.",
    details: ["Project dashboard", "Risk and issue logs", "Status reporting rhythm"]
  },
  {
    title: "Agile Delivery Support",
    focus:
      "Supporting backlog organization, sprint planning, team coordination, and delivery reporting.",
    details: ["Backlog refinement", "Sprint planning", "Delivery communication"]
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

const professionalAreas = [
  "PMP-style project management knowledge",
  "Scrum / Agile delivery knowledge",
  "Business analysis fundamentals",
  "Risk management practices"
];

const communicationStyle = [
  "Clear stakeholder updates",
  "Practical documentation",
  "Meeting follow-up summaries",
  "Risk and decision tracking",
  "Business-friendly technical communication"
];

function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-black uppercase tracking-[0.24em] ${
          tone === "dark" ? "text-amber-300" : "text-amber-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-lg leading-8 ${
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function ProjectManagerConsultantPortfolioDemo() {
  return (
    <>
      <main className="bg-[#f4f1ea] text-slate-950">
        <section className="border-b border-slate-300 bg-[#efe9dd]">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-300 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-700">
                  Demo Portfolio Concept
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">
                  This is a sample portfolio concept, not a completed client project.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-amber-700 hover:text-amber-800"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-300 bg-[#efe9dd]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="reveal">
              <p className="mb-5 inline-flex rounded-full border border-amber-700/30 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-amber-800">
                Consultant Portfolio Sample
              </p>
              <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
                Jordan Blake
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-bold leading-8 text-slate-800 sm:text-2xl">
                Project Manager | Business Analyst | Agile Delivery Consultant
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">
                I help teams clarify requirements, manage delivery, reduce project risk, and turn
                complex business needs into structured project outcomes.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#case-studies"
                  className="inline-flex justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-slate-400/25 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  View Case Studies
                </a>
                <a
                  href="#services"
                  className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-amber-700 hover:text-amber-800"
                >
                  Services
                </a>
                <Link
                  href="/"
                  className="inline-flex justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-600"
                >
                  Back to Ahmad&apos;s Portfolio
                </Link>
              </div>
            </div>

            <div className="reveal rounded-[2rem] border border-slate-300 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-400/25">
              <div className="border-b border-white/15 pb-5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                  Executive Snapshot
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight">
                  Delivery clarity for business teams
                </h2>
              </div>
              <div className="grid gap-4 py-6 sm:grid-cols-2">
                {["Requirements", "Governance", "Delivery", "Reporting"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm font-bold text-slate-100">{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white p-5 text-slate-950">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700">
                  Sample Profile Note
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  Fictional consultant profile content for demonstrating a professional service
                  portfolio layout.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {valueHighlights.map((highlight) => (
                <article
                  key={highlight.label}
                  className="rounded-[1.75rem] border border-slate-300 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">
                    {highlight.label}
                  </p>
                  <p className="mt-4 leading-7 text-slate-600">{highlight.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal grid gap-8 rounded-[2rem] border border-slate-300 bg-white p-7 shadow-sm sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionIntro eyebrow="Consultant Profile" title="Professional Summary" />
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  Jordan is a fictional project professional focused on business analysis, project
                  coordination, stakeholder communication, agile delivery, and practical governance
                  for technology and operational projects.
                </p>
                <p>
                  This demo content is intentionally generic and sample-based, showing how a
                  consultant portfolio can present services, methods, case study examples, and
                  communication style without using private information or client claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mb-8">
              <SectionIntro
                eyebrow="Services"
                title="Services and Support Areas"
                description="A service-based structure helps visitors quickly understand where the consultant can support planning, delivery, reporting, and team coordination."
              />
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service}
                  className="rounded-[1.75rem] border border-slate-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-600 hover:shadow-lg hover:shadow-slate-300/30"
                >
                  <p className="text-sm font-black text-amber-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950">
                    {service}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="bg-slate-950 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <SectionIntro
                eyebrow="Selected Case Studies"
                title="Business outcomes presented with context."
                description="Sample case studies for demonstration purposes only."
                tone="dark"
              />
              <p className="max-w-sm text-sm font-semibold leading-6 text-slate-300">
                These cards show how project work can be framed around problem clarity, delivery
                support, and stakeholder value.
              </p>
            </div>
            <div className="reveal grid gap-5 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.title}
                  className="flex min-h-full flex-col rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-xl shadow-slate-950/20"
                >
                  <p className="w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-amber-800">
                    Sample case study
                  </p>
                  <h3 className="mt-5 text-2xl font-black tracking-tight">{study.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-slate-700">{study.focus}</p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Focus Areas
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {study.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
                        >
                          {detail}
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
          <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="reveal rounded-[2rem] border border-slate-300 bg-white p-7 shadow-sm sm:p-9">
              <SectionIntro
                eyebrow="Tools and Methods"
                title="A practical delivery toolkit."
                description="Organized badges make tools, delivery methods, and planning artifacts easy to scan."
              />
              <div className="mt-7 flex flex-wrap gap-3">
                {toolsAndMethods.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-300 bg-[#f8f5ef] px-4 py-2 text-sm font-bold text-slate-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal rounded-[2rem] border border-slate-300 bg-[#efe9dd] p-7 shadow-sm sm:p-9">
              <SectionIntro
                eyebrow="Professional Areas"
                title="Certification-style knowledge areas."
              />
              <div className="mt-7 space-y-3">
                {professionalAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-slate-300 bg-white p-4 font-bold text-slate-800"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal grid gap-8 rounded-[2rem] border border-slate-300 bg-white p-7 shadow-sm sm:p-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <SectionIntro
                eyebrow="Communication"
                title="Project Communication Style"
                description="A consultant portfolio can make soft skills visible by showing the habits that help teams stay aligned."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {communicationStyle.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-bold text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 pb-20 sm:py-18 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-400/25 sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-300">
                    Portfolio Website Services
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                    Need a professional project or consultant portfolio?
                  </h2>
                  <p className="mt-4 leading-8 text-slate-200">
                    Connect with Ahmad Niknam to discuss a clean portfolio website for your
                    services, case studies, certifications, project background, and professional
                    goals.
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-300">
                    Email: {profileLinks.emailLabel}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-100"
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
