import { Section } from "@/components/section";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Resume overview"
      description="Use this section for a downloadable resume once the final file is ready."
    >
      <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="text-2xl font-bold">Professional resume placeholder</h3>
            <p className="mt-4 max-w-3xl leading-8 text-slate-200">
              Add Ahmad&apos;s final resume summary, target roles, and a verified download link
              here. No placeholder external links have been added.
            </p>
          </div>
          <span className="inline-flex rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-slate-200">
            Resume link coming soon
          </span>
        </div>
      </div>
    </Section>
  );
}
