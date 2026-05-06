import { Section } from "@/components/section";
import { ds } from "@/lib/ds";

export function About() {
  const strengths = [
    {
      title: "IT & Systems Support",
      description:
        "IT support across Windows Server, Active Directory, Microsoft 365, end users, monitoring, and daily technical operations."
    },
    {
      title: "Network & Azure Administration",
      description:
        "Practical network and systems support across on-prem environments, Azure resources, endpoints, and multi-site operations."
    },
    {
      title: "Practical Automation",
      description:
        "PowerShell automation and Azure-focused tools that improve visibility, reliability, reporting, and repeatable checks."
    },
    {
      title: "Reliable Service",
      description:
        "Calm troubleshooting, clear documentation, and a support mindset built around uptime and continuity."
    }
  ];

  return (
    <Section
      id="about"
      eyebrow="About"
      title="A dependable IT professional for support, infrastructure, cloud, and operations teams."
      description="Concise background for recruiters hiring IT Support Specialists, Systems Administrators, Azure Administrators, and Network & Systems Support professionals."
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
              Ahmad Niknam is an IT Support Specialist with extensive hands-on experience in Microsoft 365,
              Windows Server administration, Active Directory, network and systems support, Azure
              administration, and technical operations.
            </p>
            <p className={ds.bodyMuted}>
              He has supported multi-site environments, end users, enterprise systems, and operational
              continuity. He also builds PowerShell automation projects and Azure-focused tools to improve
              visibility, reliability, and efficiency.
            </p>
            <p className={ds.bodyMuted}>
              Based in Regina, Saskatchewan, he is available for IT support, infrastructure, cloud, and
              operations opportunities.
            </p>
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
