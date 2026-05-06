import { Section } from "@/components/section";
import { ds } from "@/lib/ds";
import { profileLinks } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to IT opportunities and portfolio website conversations."
      description="You can contact me for IT, cloud, infrastructure, and project-related opportunities, or to discuss a simple professional portfolio website for your career, research, or freelance profile."
    >
      <div className="reveal grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
        <div className={ds.cardContact}>
          <h3 className="text-xl font-semibold text-[var(--ds-color-heading)]">Based in Regina, Saskatchewan</h3>
          <p className="mt-4 leading-[1.7] text-[var(--ds-color-muted)]">
            Ahmad is available for conversations with employers, teams, and project contacts about IT support,
            infrastructure, Azure administration, network support, systems administration, and technical
            operations opportunities in Canada. He also discusses simple portfolio website projects for
            professionals, students, researchers, newcomers, consultants, and freelancers.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className={ds.insetSurface}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">IT inquiries</p>
              <p className="mt-2 font-semibold text-[var(--ds-color-heading)]">Canadian IT opportunities</p>
            </div>
            <div className={ds.insetSurface}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                Website inquiries
              </p>
              <p className="mt-2 font-semibold text-[var(--ds-color-heading)]">Portfolio website services</p>
            </div>
          </div>
        </div>
        <div className={ds.surfaceDark}>
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-teal-400/14 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
          <div className="relative">
            <h3 className="text-2xl font-semibold tracking-tight text-white">Connect professionally</h3>
            <p className="mt-4 max-w-xl leading-[1.7] text-slate-200/95">
              LinkedIn is the best place to start a professional conversation about IT support, infrastructure
              administration, Azure operations, practical automation work, or portfolio website design services.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={ds.btnOnDarkPrimary}
                aria-label="Connect with Ahmad Niknam on LinkedIn"
              >
                Connect on LinkedIn
              </a>
              <a
                href={profileLinks.email}
                className={ds.btnOnDarkSecondary}
                aria-label={`Email Ahmad Niknam at ${profileLinks.emailLabel}`}
              >
                Email
              </a>
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={ds.btnOnDarkGhost}
              >
                GitHub
              </a>
              <a href={profileLinks.resumeRequest} className={ds.btnOnDarkGhost}>
                Request Resume
              </a>
            </div>
            <p className="mt-6 text-sm font-medium text-slate-400">
              LinkedIn: linkedin.com/in/ahmad-niknam · Email: {profileLinks.emailLabel}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
