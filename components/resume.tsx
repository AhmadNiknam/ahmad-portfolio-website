import { Section } from "@/components/section";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Resume overview"
      description="A concise profile for infrastructure, Azure administrator, systems support, and hybrid IT roles."
    >
      <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl shadow-slate-200 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-2xl font-bold">Ahmad Niknam</h3>
            <p className="mt-4 max-w-3xl leading-8 text-slate-200">
              IT Infrastructure Professional, Azure Administrator, Systems Support specialist,
              and practical IT automation builder based in Regina, Saskatchewan. Ahmad brings
              10+ years of experience across Windows Server, Active Directory, networking,
              Microsoft Azure, Microsoft 365, Intune, PowerShell, troubleshooting, and technical
              documentation.
            </p>
          </div>
          <a
            href="/Ahmad-Niknam-Resume.pdf"
            download
            className="inline-flex rounded-full bg-sky-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
