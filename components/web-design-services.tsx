import { Section } from "@/components/section";
import { ds } from "@/lib/ds";
import { profileLinks } from "@/lib/portfolio-data";

const serviceAudiences = [
  {
    title: "IT Professionals",
    description:
      "Technical profile, certifications, projects, GitHub or LinkedIn links, and contact information.",
    actionLabel: "View IT Demo",
    href: "/samples/it-professional-portfolio"
  },
  {
    title: "Students & Researchers",
    description:
      "Education, research work, publications, academic projects, thesis topic, and professional contact details.",
    actionLabel: "View Researcher Demo",
    href: "/samples/graduate-researcher-portfolio"
  },
  {
    title: "Job Seekers & Newcomers",
    description:
      "Canadian-style professional summary, transferable skills, selected experience, projects, and LinkedIn connection.",
    actionLabel: "View Career Demo",
    href: "/samples/newcomer-career-portfolio"
  },
  {
    title: "Project Managers & Consultants",
    description:
      "Services, certifications, case studies, tools, project outcomes, and inquiry call to action.",
    actionLabel: "View Consultant Demo",
    href: "/samples/project-manager-consultant-portfolio"
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
            className={`${ds.card} group relative flex flex-col overflow-hidden rounded-[var(--ds-radius-card)] ${ds.cardInteractive} sm:min-h-[20rem]`}
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-teal-100/45 to-cyan-50/25 opacity-80 blur-2xl transition-opacity group-hover:opacity-100"
              aria-hidden
            />
            <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-sm font-bold tracking-tight text-[var(--ds-color-heading)] shadow-[var(--ds-shadow-chip)]">
              0{index + 1}
            </div>
            <h3 className="relative text-xl font-semibold tracking-tight text-[var(--ds-color-heading)]">
              {audience.title}
            </h3>
            <p className="relative mt-4 flex-1 leading-[1.7] text-slate-600">{audience.description}</p>
            <div className="relative mt-6">
              <a
                href={audience.href}
                className={`${ds.btnSecondary} min-h-[44px] px-6 py-2.5 text-sm`}
                aria-label={`${audience.actionLabel} for ${audience.title}`}
              >
                {audience.actionLabel}
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className={`${ds.card} reveal mt-8 sm:mt-10`}>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[var(--ds-color-heading)]">
            Simple Portfolio Website Process
          </h3>
          <p className="mt-3 max-w-3xl leading-[1.7] text-slate-600">
            A simple planning and build process keeps the website focused, practical, and easy to review
            before publishing.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200/85 bg-gradient-to-b from-slate-50/95 to-white/90 p-5 shadow-[var(--ds-shadow-chip)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-800">
                Step {index + 1}
              </p>
              <h4 className="mt-3 text-lg font-semibold tracking-tight text-[var(--ds-color-heading)]">
                {step.title}
              </h4>
              <p className="mt-3 leading-[1.7] text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={`${ds.surfaceDark} reveal mt-8 sm:mt-10`}>
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal-400/12 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Interested in a simple professional portfolio website?
            </h3>
            <p className="mt-3 leading-[1.7] text-slate-200/95">
              Connect with me on LinkedIn or contact me to discuss your idea.
            </p>
          </div>
          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ds.btnOnDarkPrimary} w-full shrink-0 md:w-auto`}
            aria-label="Connect with Ahmad Niknam on LinkedIn"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
