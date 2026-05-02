import Image from "next/image";
import { heroBadges, profileLinks } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#06111f] text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,_rgba(56,189,248,0.18),_transparent_28rem),radial-gradient(circle_at_86%_22%,_rgba(14,165,233,0.12),_transparent_24rem),linear-gradient(135deg,_#06111f_0%,_#0a1930_48%,_#07111e_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-slate-50 via-slate-50/70 to-transparent" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-[min(76rem,calc(100%-3rem))] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-200/25 to-transparent" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-14 sm:pb-20 sm:pt-[4.5rem] md:pt-20 lg:min-h-[calc(100dvh-88px)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-12 xl:max-w-7xl xl:gap-16 xl:py-14 2xl:min-h-[720px]">
        <div className="max-w-3xl animate-rise">
          <p className="mb-4 inline-flex rounded-full border border-sky-200/15 bg-sky-100/[0.06] px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sky-100/90 shadow-sm shadow-sky-950/20 backdrop-blur">
            Personal IT Portfolio + Portfolio Website Services
          </p>
          <h1
            id="hero-title"
            className="max-w-[44rem] text-[clamp(2.25rem,9vw,3.05rem)] font-semibold leading-[1.03] tracking-[-0.05em] text-balance text-white sm:text-[clamp(2.9rem,6.2vw,3.45rem)] lg:text-[clamp(3.15rem,4.2vw,3.65rem)] xl:text-[3.85rem]"
          >
            IT Support & Cloud Operations with Portfolio Website Services
          </h1>
          <p className="mt-5 max-w-[40rem] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I am an IT support and cloud operations professional based in Regina, Saskatchewan.
            Alongside my technical portfolio, I help professionals create clean, practical
            portfolio websites that present their skills, projects, experience, and career
            direction clearly.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-xs font-semibold tracking-[0.01em] text-slate-200 shadow-sm shadow-slate-950/10 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="rounded-full bg-sky-300 px-6 py-3.5 text-center text-sm font-bold text-slate-950 shadow-[0_18px_45px_rgba(14,165,233,0.18)] transition hover:-translate-y-0.5 hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
            >
              View IT Projects
            </a>
            <a
              href="#web-services"
              className="rounded-full border border-white/15 bg-white/[0.08] px-6 py-3.5 text-center text-sm font-bold text-white shadow-sm shadow-slate-950/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-100/35 hover:bg-white/[0.12] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f]"
            >
              Portfolio Website Services
            </a>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-2 py-3 text-center text-sm font-semibold text-sky-100/90 underline decoration-sky-200/35 underline-offset-4 transition hover:text-white hover:decoration-sky-100/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06111f] sm:px-4"
            >
              Connect on LinkedIn{" "}
              <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[20.5rem] animate-float-in sm:max-w-[22rem] lg:ml-auto lg:mr-0 lg:max-w-[21.5rem] xl:max-w-[22.5rem]">
          <div className="absolute -inset-8 -z-10 rounded-full bg-sky-300/[0.09] blur-3xl" />
          <div className="relative rounded-[2.25rem] border border-white/[0.11] bg-white/[0.055] p-2.5 shadow-[0_28px_80px_rgba(2,8,23,0.42)] ring-1 ring-white/[0.05] backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-slate-900">
              <Image
                src="/profile-ahmad-2026.jpg"
                alt="Ahmad Niknam professional profile photo"
                fill
                sizes="(min-width: 1280px) 22.5rem, (min-width: 1024px) 21.5rem, (min-width: 640px) 22rem, calc(100vw - 3rem)"
                priority
                className="object-cover object-center saturate-[0.96]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/22 via-transparent to-white/[0.03]" />
            </div>
            <div className="mt-4 rounded-[1.5rem] border border-white/[0.08] bg-slate-950/35 px-5 py-4 backdrop-blur">
              <p className="text-base font-semibold tracking-[-0.02em] text-white">Ahmad Niknam</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                IT Support Specialist | Network & Systems Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
