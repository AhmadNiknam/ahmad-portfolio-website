import { Section } from "@/components/section";

export function About() {
  const strengths = [
    {
      title: "Infrastructure that stays dependable",
      description:
        "Ahmad brings a steady, operations-first mindset to Windows Server, Active Directory, networking, Microsoft 365, Azure, and hybrid environments."
    },
    {
      title: "Cloud administration with practical judgment",
      description:
        "He works with Microsoft Azure, Microsoft 365, and Intune in ways that support real business needs, not unnecessary complexity."
    },
    {
      title: "Automation that improves daily support",
      description:
        "PowerShell, health checks, reporting, and readiness workflows help reduce repetitive manual work and make issues easier to see."
    },
    {
      title: "Clear documentation for better handoffs",
      description:
        "Technical documentation, runbooks, and service notes are treated as part of the solution, especially in busy support environments."
    }
  ];

  return (
    <Section
      id="about"
      eyebrow="About"
      title="IT support and infrastructure professional focused on reliable systems, clear troubleshooting, and practical operations."
      description="Ahmad Niknam is based in Regina, Saskatchewan, Canada and brings hands-on experience across systems support, Windows Server, networking, Microsoft 365, Azure, Intune, PowerShell, and technical documentation."
    >
      <div className="reveal grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 sm:p-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="relative">
          <p className="text-lg leading-8 text-slate-200">
            Ahmad helps organizations keep technology dependable through hands-on systems support,
            Windows Server administration, network troubleshooting, Microsoft 365 and Azure support,
            endpoint operations, and clear documentation.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            He is well suited for employers looking for a calm, accountable IT professional who can
            support users, maintain infrastructure, troubleshoot carefully, document clearly, and
            contribute to hybrid Microsoft environments.
          </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-sky-400 transition group-hover:w-16" />
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
