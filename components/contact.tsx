import { Section } from "@/components/section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Start a professional conversation"
      description="A simple contact section ready for Ahmad's verified email, LinkedIn, or preferred contact method."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Location</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Regina, Saskatchewan, Canada. Available for IT infrastructure, cloud, and operations
            conversations.
          </p>
        </div>
        <div className="rounded-3xl bg-sky-50 p-7">
          <h3 className="text-xl font-bold text-slate-950">Contact details coming soon</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Add verified contact information here when ready. This initial version intentionally
            avoids fake links or placeholder social profiles.
          </p>
        </div>
      </div>
    </Section>
  );
}
