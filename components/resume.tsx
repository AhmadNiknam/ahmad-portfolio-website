import { Section } from "@/components/section";

export function Resume() {
  const resumeHighlights = [
    "IT Support and Infrastructure Professional based in Regina, Saskatchewan",
    "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    "Windows Server, Active Directory, networking, Microsoft 365, Azure, Intune, and PowerShell",
    "Projects focused on health checks, patch readiness, hybrid troubleshooting, and Azure cost visibility"
  ];

  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Downloadable resume profile"
      description="A PDF-ready resume summary for IT Support, IT Technician, Systems Support, Junior Network Analyst, and Cloud Support opportunities."
    >
      <div className="reveal relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 sm:p-10">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Ahmad Niknam</h3>
            <p className="mt-4 max-w-3xl leading-8 text-slate-200">
              IT Support & Infrastructure Professional and Microsoft Certified Azure Administrator
              Associate based in Regina, Saskatchewan. The downloadable resume is prepared around
              real strengths in Windows Server, Active Directory, networking, Microsoft Azure,
              Microsoft 365, Intune, PowerShell, troubleshooting, documentation, and hybrid
              infrastructure support.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {resumeHighlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold leading-6 text-slate-100">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/Ahmad-Niknam-Resume.pdf"
            download
            className="inline-flex rounded-full bg-sky-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
