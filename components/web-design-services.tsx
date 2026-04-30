import { Section } from "@/components/section";
import { profileLinks } from "@/lib/portfolio-data";

const serviceAudiences = [
  {
    title: "IT Professionals",
    description:
      "Technical profile, certifications, projects, GitHub or LinkedIn links, and contact information."
  },
  {
    title: "Students & Researchers",
    description:
      "Education, research work, publications, academic projects, thesis topic, and professional contact details."
  },
  {
    title: "Job Seekers & Newcomers",
    description:
      "Canadian-style professional summary, transferable skills, selected experience, projects, and LinkedIn connection."
  },
  {
    title: "Project Managers & Consultants",
    description:
      "Services, certifications, case studies, tools, project outcomes, and inquiry call to action."
  }
];

const demoConcepts = [
  "IT Professional Portfolio",
  "Graduate Student / Researcher Portfolio",
  "Project Manager Portfolio",
  "Newcomer Career Portfolio"
];

export function WebDesignServices() {
  return (
    <Section
      id="web-services"
      eyebrow="Web Services"
      title="Portfolio Website Design Services"
      description="I help professionals, students, researchers, newcomers, job seekers, consultants, and freelancers create clean portfolio websites that present their background, projects, and services clearly."
    >
      <div className="reveal grid gap-6 lg:grid-cols-4">
        {serviceAudiences.map((audience, index) => (
          <article
            key={audience.title}
            className="group relative flex min-h-72 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-2xl hover:shadow-slate-200/80"
          >
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-sky-50 transition group-hover:bg-sky-100" />
            <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15">
              0{index + 1}
            </div>
            <h3 className="relative text-xl font-bold tracking-tight text-slate-950">
              {audience.title}
            </h3>
            <p className="relative mt-4 leading-7 text-slate-600">{audience.description}</p>
          </article>
        ))}
      </div>

      <div className="reveal mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">
              Demo Portfolio Website Concepts
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              These are sample website concepts only, included to show the types of portfolios that
              can be planned and built.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {demoConcepts.map((concept) => (
            <div
              key={concept}
              className="rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-900 shadow-sm"
            >
              {concept}
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-8 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-2xl shadow-slate-200 sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">
              Interested in a simple professional portfolio website?
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-200">
              Connect with me on LinkedIn or contact me to discuss your idea.
            </p>
          </div>
          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
