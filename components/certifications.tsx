import { Section } from "@/components/section";
import { certifications } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications and professional credentials"
      description="Credentials that reinforce Ahmad's IT support, Azure administration, technical troubleshooting, and workplace safety background."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <div
            key={certification}
            className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
              IT
            </span>
            <p className="font-semibold text-slate-800">{certification}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
