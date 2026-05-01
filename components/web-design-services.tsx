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
  {
    title: "IT Professional Portfolio",
    href: "/samples/it-professional-portfolio"
  },
  {
    title: "Graduate Student / Researcher Portfolio"
  },
  {
    title: "Project Manager Portfolio"
  },
  {
    title: "Newcomer Career Portfolio"
  }
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "Understand the client's background, goals, audience, and the type of portfolio website they need."
  },
  {
    title: "Content Structure",
    description:
      "Organize the key sections such as About, Skills, Projects, Services, Experience, and Contact."
  },
  {
    title: "Design & Build",
    description:
      "Create a clean, responsive, mobile-friendly website using a simple and professional layout."
  },
  {
    title: "Review & Publish",
    description:
      "Review the content, test the website on different screen sizes, and prepare it for publishing and LinkedIn sharing."
  }
];

export function WebDesignServices() {
  return (
    <Section
      id="web-services"
      eyebrow="Web Services"
      title="Portfolio Website Design Services"
      description="I help professionals, students, researchers, newcomers, job seekers, consultants, and freelancers create clean portfolio websites that present their background, projects, and services clearly."
    >
      <div className="reveal grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {serviceAudiences.map((audience, index) => (
          <article
            key={audience.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-2xl hover:shadow-slate-200/80 sm:min-h-72"
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
            concept.href ? (
              <a
                key={concept.title}
                href={concept.href}
                className="rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700 hover:shadow-lg"
                aria-label={`View ${concept.title} demo concept`}
              >
                {concept.title}
              </a>
            ) : (
              <div
                key={concept.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-900 shadow-sm"
              >
                {concept.title}
              </div>
            )
          ))}
        </div>
      </div>

      <div className="reveal mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-950">
            Simple Portfolio Website Process
          </h3>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            A simple planning and build process keeps the website focused, practical, and easy to
            review before publishing.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
                Step {index + 1}
              </p>
              <h4 className="mt-3 text-lg font-bold tracking-tight text-slate-950">
                {step.title}
              </h4>
              <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
            </article>
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
            className="inline-flex w-full shrink-0 justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300 sm:w-auto"
            aria-label="Connect with Ahmad Niknam on LinkedIn"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
