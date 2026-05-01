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

const demoPortfolioStyles = [
  {
    title: "IT Professional Portfolio",
    label: "Modern Tech Portfolio",
    description:
      "A portfolio concept for IT support, systems administration, cloud operations, and technical project experience.",
    href: "/samples/it-professional-portfolio",
    previewHref: "/samples/it-professional-portfolio?preview=hero",
    previewTitle: "IT Professional Portfolio live preview",
    badgeClass: "bg-cyan-100 text-cyan-800",
    preview: ["Cloud", "Systems", "Support"]
  },
  {
    title: "Graduate Researcher Portfolio",
    label: "Academic Research Profile",
    description:
      "A clean research-focused portfolio for graduate students, researchers, publications, academic projects, and teaching work.",
    href: "/samples/graduate-researcher-portfolio",
    previewHref: "/samples/graduate-researcher-portfolio?preview=hero",
    previewTitle: "Graduate Researcher Portfolio live preview",
    badgeClass: "bg-violet-100 text-violet-800",
    preview: ["Research", "Publications", "Teaching"]
  },
  {
    title: "Project Manager Portfolio",
    label: "Vibrant Consultant Style",
    description:
      "A modern project and consultant portfolio for services, case studies, delivery support, and stakeholder communication.",
    href: "/samples/project-manager-consultant-portfolio",
    previewHref: "/samples/project-manager-consultant-portfolio?preview=hero",
    previewTitle: "Project Manager Portfolio live preview",
    badgeClass: "bg-orange-100 text-orange-800",
    preview: ["Services", "Case Studies", "Delivery"]
  },
  {
    title: "Newcomer Career Portfolio",
    label: "Modern Career Portfolio",
    description:
      "A portfolio concept for newcomers, job seekers, international students, and career changers building a professional path in Canada.",
    href: "/samples/newcomer-career-portfolio",
    previewHref: "/samples/newcomer-career-portfolio?preview=hero",
    previewTitle: "Newcomer Career Portfolio live preview",
    status: "Coming Soon",
    badgeClass: "bg-emerald-100 text-emerald-800",
    preview: ["Career Path", "Skills", "Canada"]
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
  const renderDemoStyleCard = (
    style: (typeof demoPortfolioStyles)[number],
    isDuplicate = false
  ) => {
    const isComingSoon = style.status === "Coming Soon";
    const actionClasses =
      "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition";
    const previewActionClasses =
      "absolute bottom-3 right-3 rounded-full px-4 py-2 text-xs font-black shadow-lg ring-1 transition";

    return (
      <article className="group flex h-full min-h-[33rem] w-[min(21rem,84vw)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl sm:w-[21.5rem] md:w-[22rem] lg:w-[23rem] xl:w-[24rem]">
        <div className="relative m-3 h-56 overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-inner shadow-slate-200/70 sm:h-60">
          <div className="absolute left-1/2 top-0 h-[28rem] w-[44rem] -translate-x-1/2 origin-top scale-[0.47] sm:scale-[0.54] md:scale-[0.56] lg:scale-[0.58]">
            <iframe
              src={style.previewHref}
              title={style.previewTitle}
              loading="lazy"
              scrolling="no"
              className="pointer-events-none h-full w-full border-0"
              tabIndex={-1}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/10" />
          {isComingSoon ? (
            <span
              className={`${previewActionClasses} bg-white/95 text-slate-500 ring-slate-200`}
              aria-label={`${style.title} coming soon`}
            >
              Coming Soon
            </span>
          ) : (
            <a
              href={style.href}
              className={`${previewActionClasses} bg-white/95 text-slate-950 ring-slate-200 hover:-translate-y-0.5 hover:bg-sky-50 hover:text-sky-700`}
              aria-label={`View ${style.title} demo`}
              tabIndex={isDuplicate ? -1 : undefined}
            >
              View Demo
            </a>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`w-fit rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${style.badgeClass}`}
            >
              {style.label}
            </span>
            {isComingSoon ? (
              <span className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Coming Soon
              </span>
            ) : null}
          </div>
          <h4 className="mt-4 text-xl font-bold tracking-tight text-slate-950">{style.title}</h4>
          <p className="mt-3 flex-1 leading-7 text-slate-600">{style.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {style.preview.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
          {isComingSoon ? (
            <span
              className={`${actionClasses} mt-6 cursor-not-allowed bg-slate-200 text-slate-500`}
              aria-disabled="true"
            >
              Coming Soon
            </span>
          ) : (
            <a
              href={style.href}
              className={`${actionClasses} mt-6 bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-sky-700`}
              aria-label={`View ${style.title} demo`}
              tabIndex={isDuplicate ? -1 : undefined}
            >
              View Demo
            </a>
          )}
        </div>
      </article>
    );
  };

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

      <div className="reveal mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-700">
              Showcase
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Demo Portfolio Styles
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Explore different portfolio website styles designed for different professional
              goals, backgrounds, and audiences.
            </p>
          </div>
          <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
            Auto-sliding preview
          </p>
        </div>

        <div className="demo-style-slider relative -mx-2 mt-7 overflow-x-auto px-2 pb-3 pt-1 md:-mx-4 md:overflow-hidden md:px-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-gradient-to-r from-white to-transparent md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 bg-gradient-to-l from-white to-transparent md:block" />
          <div className="demo-style-track flex w-max snap-x snap-mandatory gap-5 pr-5 sm:gap-6 sm:pr-6 md:gap-7 md:pr-7">
            {demoPortfolioStyles.map((style) => (
              <div key={style.title} className="shrink-0 snap-start">
                {renderDemoStyleCard(style)}
              </div>
            ))}
            {demoPortfolioStyles.map((style) => (
              <div
                key={`${style.title}-duplicate`}
                className="hidden shrink-0 md:block"
                aria-hidden="true"
              >
                {renderDemoStyleCard(style, true)}
              </div>
            ))}
          </div>
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
