import { Section } from "@/components/section";
import { certifications } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications and professional development"
      description="Credentials that support Azure administration, IT support, endpoint management, workplace readiness, and professional IT membership."
    >
      <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((certification) => (
          <div
            key={certification.name}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-200/80"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-950 via-sky-400 to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15">
              {certification.badge}
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
              {certification.issuer}
            </p>
            <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-950">{certification.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{certification.detail}</p>
            <p className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
              {certification.category}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
