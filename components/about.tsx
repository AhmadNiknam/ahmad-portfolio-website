import { Section } from "@/components/section";

export function About() {
  const strengths = [
    {
      title: "Infrastructure Support",
      description:
        "Windows Server, Active Directory, Microsoft 365, network services, monitoring, and daily technical operations."
    },
    {
      title: "Hybrid Operations",
      description:
        "Practical support across on-prem systems, Azure resources, users, endpoints, and multi-site environments."
    },
    {
      title: "Practical Automation",
      description:
        "PowerShell and Azure-focused tools that improve visibility, reliability, reporting, and repeatable checks."
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
      description="Concise background for recruiters hiring IT Support Specialists, Systems Administrators, Infrastructure Support, Azure Administrators, and Network Support Analysts."
    >
      <div className="reveal grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 sm:p-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="relative">
            <p className="text-lg leading-8 text-slate-200">
              Ahmad Niknam is an IT professional with extensive hands-on experience in
              infrastructure support, Windows Server administration, Active Directory, networking,
              Microsoft 365, and technical operations.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              He has supported multi-site environments, end users, enterprise systems, and
              operational continuity. He also builds automation projects using PowerShell and
              Azure-focused tools to improve visibility, reliability, and efficiency.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Based in Regina, Saskatchewan, he is available for IT support, infrastructure, cloud,
              and operations opportunities.
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
