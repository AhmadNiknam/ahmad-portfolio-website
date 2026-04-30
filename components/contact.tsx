import { Section } from "@/components/section";
import { profileLinks } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to IT opportunities and portfolio website conversations."
      description="Open to IT infrastructure, cloud support, systems administration, technical operations, and simple portfolio website design inquiries in Canada."
    >
      <div className="reveal grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/80">
          <h3 className="text-xl font-bold text-slate-950">Based in Regina, Saskatchewan</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Ahmad is available for conversations with employers and teams hiring for IT support,
            infrastructure, Azure administration, network support, systems administration, and
            technical operations opportunities in Canada. He also discusses simple portfolio
            website projects for professionals, students, researchers, newcomers, consultants, and
            freelancers.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Availability</p>
              <p className="mt-2 font-bold text-slate-950">Canadian IT opportunities</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Also available</p>
              <p className="mt-2 font-bold text-slate-950">Portfolio website services</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-2xl shadow-slate-200 sm:p-8">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight">Connect professionally</h3>
            <p className="mt-4 leading-7 text-slate-200">
              Use the resume request, email, GitHub portfolio, or LinkedIn profile to start a
              conversation about IT support, infrastructure administration, Azure operations,
              practical automation work, or portfolio website design services.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={profileLinks.resumeRequest}
                className="rounded-full bg-sky-400 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                Request Resume
              </a>
              <a
                href={profileLinks.email}
                className="rounded-full border border-white/15 bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                aria-label={`Email Ahmad Niknam at ${profileLinks.emailLabel}`}
              >
                Email
              </a>
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white/10"
              >
                GitHub
              </a>
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white/10"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-300">
              Email: {profileLinks.emailLabel} · GitHub: github.com/AhmadNiknam
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
