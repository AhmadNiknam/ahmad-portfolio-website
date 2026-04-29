import { Section } from "@/components/section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A practical technology partner for dependable IT environments."
      description="This section uses placeholder content and can be refined with Ahmad's exact background, career story, and measurable achievements."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-slate-950 p-8 text-white">
          <p className="text-lg leading-8 text-slate-200">
            Based in Regina, Saskatchewan, Ahmad Niknam works across infrastructure, cloud
            services, and operational support. His portfolio highlights steady execution,
            thoughtful documentation, and secure systems thinking.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Cloud readiness", "Infrastructure reliability", "Secure operations", "Clear communication"].map(
            (item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{item}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Placeholder copy describing Ahmad&apos;s approach to {item.toLowerCase()}.
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
}
