import { Section } from "@/components/section";

export function About() {
  const strengths = [
    {
      title: "Infrastructure that stays dependable",
      description:
        "Ahmad brings a steady, operations-first mindset to Windows Server, Active Directory, networking, and hybrid environments."
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
      title="A practical IT infrastructure professional focused on reliability, clarity, and business continuity."
      description="Ahmad Niknam is based in Regina, Saskatchewan, Canada and brings more than a decade of experience across IT systems, servers, networking, support operations, and infrastructure environments."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl shadow-slate-200 sm:p-10">
          <p className="text-lg leading-8 text-slate-200">
            Ahmad helps organizations keep their technology foundations reliable. His experience
            spans hands-on systems support, server administration, network troubleshooting, Microsoft
            cloud services, and the practical automation work that makes IT operations more visible
            and repeatable.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            He is especially well suited for Canadian employers looking for a calm, accountable IT
            professional who can support users, maintain infrastructure, document clearly, and
            contribute to Azure and hybrid modernization work.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
