import { Section } from "@/components/section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Start a professional conversation"
      description="For infrastructure support, Azure administration, systems operations, and practical automation opportunities in Regina or remote-friendly Canadian teams."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">Based in Regina, Saskatchewan</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Ahmad is available for conversations with employers and teams looking for dependable
            IT infrastructure, Azure, Microsoft 365, systems support, and documentation capability.
          </p>
        </div>
        <div className="rounded-3xl bg-sky-50 p-7">
          <h3 className="text-xl font-bold text-slate-950">Connect professionally</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Use the resume download or LinkedIn profile to start a conversation about systems
            support, infrastructure administration, Azure operations, or IT automation work.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/Ahmad-Niknam-Resume.pdf"
              download
              className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-niknam/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:border-sky-400 hover:text-sky-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
