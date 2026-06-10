import { Section } from "@/components/section";
import { ds } from "@/lib/ds";
import { supportingCredentials } from "@/lib/portfolio-data";

export function About() {
  const strengths = [
    {
      title: "IT & Systems Support",
      description:
        "Hands-on support across Microsoft 365, Windows Server, Active Directory, end users, monitoring, and daily technical operations."
    },
    {
      title: "Network & Azure Administration",
      description:
        "Practical administration across Azure, Intune, DNS, DHCP, VPN, endpoints, connectivity, and multi-site support needs."
    },
    {
      title: "Practical Automation",
      description:
        "PowerShell automation, reporting, documentation, and repeatable checks that improve support visibility and reliability."
    },
    {
      title: "Web Systems Projects",
      description:
        "Support for secure web portals, admin workflows, cloud deployment, documentation, and practical user-facing systems."
    }
  ];

  return (
    <Section
      id="about"
      eyebrow="About"
      title="A dependable IT professional for support, infrastructure, cloud, and operations teams."
      description="Concise background for IT support, systems and network support, Azure administration, and practical web systems project conversations."
    >
      <div className="reveal grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        <div className={ds.cardHighlight}>
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-teal-200/25 blur-3xl"
            aria-hidden
          />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-sky-200/20 blur-3xl" aria-hidden />
          <div className="relative space-y-6">
            <p className={ds.bodyMuted}>
              Ahmad Niknam is an IT Support Specialist with over a decade of experience across IT support,
              systems support, and network support. His hands-on work spans Windows Server, Microsoft 365,
              Active Directory, DNS/DHCP, VPN, printers, workstations, monitoring, and user support.
            </p>
            <p className={ds.bodyMuted}>
              He completed Canadian IT training and workplace readiness through Saskatchewan Polytechnic and
              has supported remote and multi-site environments through practical troubleshooting, documentation,
              and clear communication.
            </p>
            <p className={ds.bodyMuted}>
              Ahmad currently supports web systems at the University of Regina—websites, forms, GitHub, Vercel,
              documentation, and technical coordination—alongside practical automation and reporting projects.
            </p>
            <div className="pt-2">
              <div className="mb-3 h-px w-full bg-gradient-to-r from-slate-200 via-slate-200/70 to-transparent" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                Supporting credential
              </p>
              <ul className="mt-3 space-y-3">
                {supportingCredentials.map((credential) => (
                  <li key={credential.title} className={ds.insetSurface}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-[var(--ds-color-heading)]">{credential.title}</span>
                      <span className="text-slate-500">{credential.issued}</span>
                    </div>
                    <p className="mt-1 text-slate-600">{credential.issuer}</p>
                    <p className="mt-2 text-slate-600">{credential.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {strengths.map((item) => (
            <div
              key={item.title}
              className={`${ds.card} ${ds.cardInteractive} group`}
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-teal-400/90 via-teal-500/50 to-transparent transition-[width] duration-300 group-hover:w-14" />
              <h3 className="text-lg font-semibold text-[var(--ds-color-heading)]">{item.title}</h3>
              <p className="mt-3 leading-[1.7] text-[var(--ds-color-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
