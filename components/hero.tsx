import Image from "next/image";
import { heroBadges, profileLinks } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,_rgba(56,189,248,0.28),_transparent_32%),radial-gradient(circle_at_88%_10%,_rgba(147,197,253,0.16),_transparent_26%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(30,41,59,0.98)_54%,_rgba(15,23,42,1))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-6xl items-center gap-10 px-6 py-12 sm:py-14 lg:-translate-y-3 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-12 xl:py-14">
        <div className="animate-rise">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.26em] text-sky-200">
            Ahmad Niknam
          </p>
          <p className="mb-4 inline-flex rounded-full border border-sky-200/25 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-100 shadow-lg shadow-slate-950/10 backdrop-blur">
            IT Infrastructure Support | Azure Administrator | Windows Server | PowerShell Automation
          </p>
          <h1
            id="hero-title"
            className="max-w-4xl text-[2.05rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-[2.7rem] lg:text-[3.375rem]"
          >
            Reliable IT support and infrastructure expertise for modern organizations.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200/95 sm:text-xl">
            Hands-on IT professional with 10+ years of experience supporting servers, networks,
            users, Microsoft 365, and hybrid environments. Focused on uptime, troubleshooting,
            documentation, and practical automation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.075] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-950/10 ring-1 ring-white/[0.04] backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-xl shadow-sky-950/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              View Projects
            </a>
            <a
              href={profileLinks.resumeRequest}
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Request Resume
            </a>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white/10 hover:text-sky-100"
            >
              LinkedIn
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white/10 hover:text-sky-100"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[25rem] animate-float-in sm:max-w-[27rem] lg:ml-auto lg:mr-0 lg:max-w-[24.5rem] lg:pl-4 xl:max-w-[26rem]">
          <div className="absolute -inset-3 rounded-[2.75rem] bg-sky-400/[0.16] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.12] bg-white/[0.08] p-2 shadow-2xl shadow-slate-950/45 ring-1 ring-white/[0.06] backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/profile.jpg"
                alt="Ahmad Niknam professional profile photo"
                fill
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 100vw"
                priority
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-x-2 bottom-2 rounded-b-[2rem] bg-slate-950/[0.88] px-6 py-5 backdrop-blur-md">
              <p className="text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">Ahmad Niknam</p>
              <p className="mt-1 text-sm font-semibold text-sky-100 sm:text-base">
                IT Infrastructure Support | Azure Administrator
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-200">
                <span>Regina, SK</span>
                <span className="text-sky-200">AZ-104 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
