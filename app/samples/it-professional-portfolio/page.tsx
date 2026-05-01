import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { profileLinks } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "IT Professional Portfolio Demo | Ahmad Niknam",
  description:
    "Demo portfolio website concept for IT support, network, cloud, and systems administration professionals."
};

const audiences = [
  "IT Support Specialists",
  "Help Desk Technicians",
  "Network Analysts",
  "Cloud Administrators",
  "Systems Administrators"
];

const suggestedSections = [
  "Professional Summary",
  "Technical Skills",
  "Certifications",
  "Technical Projects",
  "Work Experience Highlights",
  "Contact and LinkedIn"
];

const contentAreas = [
  {
    title: "Microsoft 365 Support",
    description:
      "Show experience supporting users, accounts, email, licensing, collaboration tools, and common service requests."
  },
  {
    title: "Windows Server Administration",
    description:
      "Present practical server administration work such as Active Directory, DNS, DHCP, file services, and routine maintenance."
  },
  {
    title: "Azure Administration",
    description:
      "Highlight cloud administration knowledge through virtual machines, identity, monitoring, storage, and resource organization."
  },
  {
    title: "PowerShell Automation",
    description:
      "Include examples of scripts or reports that reduce repetitive tasks and improve support visibility."
  },
  {
    title: "Network Troubleshooting",
    description:
      "Describe structured troubleshooting across connectivity, VPN access, switching, routing, and user impact."
  },
  {
    title: "Documentation and User Support",
    description:
      "Show communication skills through knowledge base articles, handoff notes, user guides, and support summaries."
  }
];

export default function ItProfessionalPortfolioDemo() {
  return (
    <>
      <main>
        <section className="overflow-hidden py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Link
              href="/"
              className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700"
            >
              Back to Portfolio
            </Link>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="reveal">
                <p className="mb-4 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-bold uppercase tracking-[0.24em] text-sky-700 ring-1 ring-sky-100">
                  Demo Portfolio Concept
                </p>
                <h1 className="max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                  IT Professional Portfolio Demo
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
                  A sample portfolio website concept for IT support specialists, network analysts,
                  cloud administrators, and technical professionals who want to present their
                  skills, certifications, and projects clearly.
                </p>
                <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-6 text-amber-900">
                  This is a sample portfolio concept, not a completed client project.
                </p>
              </div>

              <div className="animate-float-in rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
                <div className="rounded-2xl bg-slate-950 p-6 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-300">
                    Sample Profile
                  </p>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight">
                    Technical Skills, Certifications, Projects
                  </h2>
                  <p className="mt-4 leading-7 text-slate-200">
                    A clean online profile can organize experience and make it easier for employers,
                    recruiters, and professional contacts to understand a technical background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-3 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-bold uppercase tracking-[0.24em] text-sky-700 ring-1 ring-sky-100">
                Audience
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Who This Portfolio Is For
              </h2>
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {audiences.map((audience) => (
                <article
                  key={audience}
                  className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-950 shadow-sm"
                >
                  {audience}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-8">
              <div className="max-w-3xl">
                <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-bold uppercase tracking-[0.24em] text-sky-700 ring-1 ring-slate-200">
                  Structure
                </p>
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                  Suggested Portfolio Sections
                </h2>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {suggestedSections.map((section) => (
                  <div
                    key={section}
                    className="rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-900 shadow-sm"
                  >
                    {section}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-3 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-bold uppercase tracking-[0.24em] text-sky-700 ring-1 ring-sky-100">
                Content
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Example Content Areas
              </h2>
            </div>
            <div className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {contentAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/80"
                >
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">{area.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="mb-3 inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-bold uppercase tracking-[0.24em] text-sky-700 ring-1 ring-sky-100">
                Value
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Why This Type of Portfolio Helps
              </h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                A focused portfolio helps technical professionals show practical experience,
                certifications, troubleshooting ability, project work, and communication skills in
                one clear online profile.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 pb-20 sm:py-16 sm:pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-2xl shadow-slate-200 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Want a similar portfolio website?
                  </h2>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-200">
                    Connect with me on LinkedIn to discuss a simple professional portfolio website
                    for your background, projects, and career goals.
                  </p>
                </div>
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full shrink-0 justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300 sm:w-auto"
                  aria-label="Connect with Ahmad Niknam on LinkedIn"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
