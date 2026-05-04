import Image from "next/image";
import { heroBadges, profileLinks } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#f8f9fb] text-slate-900"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f8f9fb] via-[#f1f4f8] to-[#e8ecf2]" />
      <div className="absolute right-1/4 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-100/50 blur-3xl sm:h-[36rem] sm:w-[36rem]" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-[22rem] w-[22rem] rounded-full bg-slate-200/60 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-[min(76rem,calc(100%-3rem))] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-12 sm:pb-20 sm:pt-16 md:pt-20 lg:min-h-[calc(100dvh-82px)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-12 xl:max-w-7xl xl:gap-20 xl:py-14 2xl:min-h-[720px]">
        <div className="order-2 max-w-3xl animate-rise lg:order-1">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm shadow-slate-200/70 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            <p className="text-sm font-medium tracking-wide text-slate-600">
              Personal IT Portfolio + Portfolio Website Services
            </p>
          </div>

          <h1
            id="hero-title"
            className="max-w-[45rem] text-[clamp(2.25rem,9vw,3.05rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-balance text-slate-950 sm:text-[clamp(2.85rem,6vw,3.45rem)] lg:text-[clamp(3.05rem,4.05vw,3.5rem)] xl:text-[3.65rem]"
          >
            IT Support, Cloud Operations, and Practical Portfolio Websites
          </h1>

          <p className="mt-6 max-w-[40rem] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I am an IT support and cloud operations professional based in Regina, Saskatchewan.
            Alongside my technical portfolio, I build clean, practical portfolio websites that help
            professionals present their skills, projects, and experience clearly.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-md border border-slate-200 bg-white/75 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/70 backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f9fb]"
            >
              View IT Projects
            </a>
            <a
              href="#web-services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f9fb]"
            >
              Portfolio Website Services
            </a>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 rounded-lg py-3 text-center text-sm font-medium text-slate-500 transition hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f9fb] sm:px-2"
            >
              Connect on LinkedIn
              <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[20.5rem] animate-float-in sm:max-w-[22rem] lg:order-2 lg:ml-auto lg:mr-0 lg:max-w-[21.5rem] xl:max-w-[22.5rem]">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-100/70 via-slate-100/50 to-transparent blur-2xl" />
            <div className="relative rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xl shadow-slate-200/60 backdrop-blur-md sm:p-6">
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/profile-ahmad-2026-v2.jpg"
                  alt="Ahmad Niknam - IT Support Specialist"
                  fill
                  sizes="(min-width: 1280px) 22.5rem, (min-width: 1024px) 21.5rem, (min-width: 640px) 22rem, calc(100vw - 3rem)"
                  priority
                  className="object-cover object-center saturate-[0.96]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>

              <div className="text-center">
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
                  Ahmad Niknam
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  IT Support Specialist | Network & Systems Support
                </p>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50/80 px-4 py-2.5">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm text-slate-600">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
