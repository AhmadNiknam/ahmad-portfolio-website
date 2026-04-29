import Image from "next/image";
import { profileLinks } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,_rgba(56,189,248,0.28),_transparent_32%),radial-gradient(circle_at_88%_10%,_rgba(147,197,253,0.16),_transparent_26%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(30,41,59,0.98)_54%,_rgba(15,23,42,1))]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="animate-rise">
          <p className="mb-5 inline-flex rounded-full border border-sky-200/25 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-100 shadow-lg shadow-slate-950/10 backdrop-blur">
            IT Support & Infrastructure Professional · Regina, Saskatchewan
          </p>
          <h1
            id="hero-title"
            className="max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Reliable IT infrastructure support for modern Canadian teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            I help keep systems dependable by combining Windows Server, Azure, Microsoft 365,
            networking fundamentals, careful troubleshooting, and practical automation.
          </p>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              ["Azure", "Administrator Associate"],
              ["Focus", "Infrastructure Support"],
              ["Location", "Regina, SK"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">{label}</p>
                <p className="mt-2 font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-xl shadow-sky-950/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              View Projects
            </a>
            <a
              href="/Ahmad-Niknam-Resume.pdf"
              download
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white/10 hover:text-sky-100"
            >
              Contact Me
            </a>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white/10 hover:text-sky-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="relative animate-float-in">
          <div className="absolute -inset-4 rounded-[2.75rem] bg-sky-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/[0.12] bg-white/10 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <Image
              src="/profile.jpg"
              alt="Ahmad Niknam professional profile photo"
              width={720}
              height={860}
              sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 100vw"
              priority
              className="aspect-[4/5] h-auto w-full rounded-[1.65rem] object-cover object-center"
            />
            <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-950 shadow-xl">
              Open to IT roles
            </div>
            <div className="absolute inset-x-3 bottom-3 rounded-b-[1.65rem] bg-slate-950/[0.86] p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                Ahmad Niknam
              </p>
              <p className="mt-2 text-lg font-bold sm:text-xl">
                Azure Administrator Associate & Systems Support Professional
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white/10 p-3">
                  <dt className="text-slate-300">Focus</dt>
                  <dd className="mt-1 font-semibold text-white">IT Operations</dd>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <dt className="text-slate-300">Based in</dt>
                  <dd className="mt-1 font-semibold text-white">Regina, SK</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
