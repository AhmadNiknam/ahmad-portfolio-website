import Image from "next/image";
import {
  heroBadges,
  heroCard,
  heroEyebrow,
  heroHeadlineLines,
  heroProfileImageSrc,
  profileLinks
} from "@/lib/portfolio-data";

function BadgeIcon({ label }: { label: string }) {
  const common = "h-4 w-4 shrink-0 text-teal-600/90";
  if (label.includes("AZ-104")) {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M12 18h.01M17 18a4 4 0 0 0 0-8 5 5 0 0 0-9.9-1"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    );
  }
  if (label.includes("Microsoft")) {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden>
        <path fill="currentColor" d="M3 3h8.5v8.5H3V3zm9.5 0H21v8.5h-8.5V3zM3 12.5h8.5V21H3v-8.5zm9.5 0H21V21h-8.5v-8.5z" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="12" r="2.25" fill="currentColor" />
      <circle cx="18" cy="7" r="2.25" fill="currentColor" opacity="0.55" />
      <circle cx="18" cy="17" r="2.25" fill="currentColor" opacity="0.55" />
      <path
        d="M8 12h6M14 12l3.5-5M14 12l3.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroNetworkGraphic() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-slate-400/50"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-net-fade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.95" />
          <stop offset="35%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <g opacity="0.42" stroke="currentColor" strokeWidth="0.85" fill="none">
        <path d="M-2 18 L42 52 L88 28 L132 62 L180 22 L230 48 L280 14 L340 44" />
        <path d="M12 120 L58 88 L104 132 L158 96 L212 138 L268 102 L318 152 L380 118" />
        <path d="M420 -10 L462 38 L520 12 L568 48 L612 18 L668 52" />
        <path d="M520 220 L568 188 L630 212 L690 176 L748 198" />
      </g>
      <g fill="currentColor" opacity="0.55">
        <circle cx="42" cy="52" r="2.5" />
        <circle cx="132" cy="62" r="2.5" />
        <circle cx="230" cy="48" r="2.5" />
        <circle cx="58" cy="88" r="2.5" />
        <circle cx="158" cy="96" r="2.5" />
        <circle cx="268" cy="102" r="2.5" />
        <circle cx="668" cy="52" r="2.5" />
        <circle cx="568" cy="188" r="2.5" />
        <circle cx="92%" cy="18%" r="2.25" />
        <circle cx="96%" cy="42%" r="2.25" />
        <circle cx="88%" cy="72%" r="2.25" />
        <circle cx="78%" cy="58%" r="2.25" />
      </g>
      <rect width="100%" height="100%" fill="url(#hero-net-fade)" />
    </svg>
  );
}

function ScrollCue() {
  return (
    <div
      className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-1 motion-safe:animate-[hero-scroll-nudge_2.2s_ease-in-out_infinite]">
        <span className="flex h-9 w-6 rounded-full border border-slate-300/90 bg-white/40 shadow-inner shadow-slate-200/80 backdrop-blur-[2px]">
          <span className="mx-auto mt-2 block h-1.5 w-1 rounded-full bg-slate-400/90" />
        </span>
        <svg className="h-4 w-4 opacity-80" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 5v10m0 0 4-4m-4 4-4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#f4f6f9] text-slate-900"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#fafbfc_0%,#f1f4f8_45%,#eef1f6_100%)]" />
      <HeroNetworkGraphic />
      <div className="absolute -left-24 top-1/4 -z-10 h-[min(42rem,85vw)] w-[min(42rem,85vw)] rounded-full bg-gradient-to-br from-cyan-100/35 via-transparent to-transparent blur-3xl" />
      <div className="absolute -right-16 bottom-0 -z-10 h-[min(36rem,75vw)] w-[min(36rem,75vw)] rounded-full bg-gradient-to-tl from-teal-100/25 via-sky-50/20 to-transparent blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-112px)] w-full max-w-[88rem] grid-cols-1 items-center gap-12 px-5 py-14 sm:min-h-[calc(100svh-88px)] sm:gap-14 sm:px-8 sm:py-16 lg:min-h-[calc(100svh-73px)] lg:grid-cols-[minmax(0,1fr)_minmax(360px,420px)] lg:gap-x-16 lg:gap-y-10 lg:py-12 xl:gap-x-24 xl:px-12 xl:py-14">
        <div className="order-2 flex min-w-0 flex-1 flex-col lg:order-1 lg:max-w-[52rem] animate-rise">
          <div className="mb-6 inline-flex w-fit max-w-full items-center rounded-full border border-slate-200/90 bg-white/70 px-3.5 py-2 shadow-[0_1px_0_rgba(255,255,255,0.85)_inset,0_8px_28px_-12px_rgba(15,23,42,0.12)] backdrop-blur-md sm:mb-7">
            <p className="text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-700 sm:text-[0.7rem]">
              {heroEyebrow}
            </p>
          </div>

          <h1
            id="hero-title"
            className="max-w-[46rem] text-pretty font-semibold tracking-[-0.035em] text-[var(--ds-color-heading)] text-[clamp(2rem,4.2vw+1rem,3.35rem)] leading-[1.12] sm:leading-[1.1]"
          >
            {heroHeadlineLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < heroHeadlineLines.length - 1 ? (
                  <>
                    <br />
                  </>
                ) : null}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[40rem] text-[0.95rem] leading-[1.65] text-slate-600 sm:mt-7 sm:text-[1.05rem] sm:leading-[1.7]">
            I am an IT support and cloud operations professional based in Regina, Saskatchewan.
            Alongside my technical portfolio, I build clean, practical{" "}
            <strong className="font-semibold text-slate-800">portfolio websites</strong> that help
            professionals present their skills, projects, and experience clearly.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/95 bg-white/85 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-[0_6px_22px_-14px_rgba(15,23,42,0.35),0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-sm"
              >
                <BadgeIcon label={badge} />
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex min-w-0 flex-col gap-3 sm:mt-9 md:flex-row md:flex-wrap md:items-center md:gap-x-3 md:gap-y-3">
            <a
              href="#projects"
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-[var(--ds-cta-primary)] px-7 py-3 text-center text-sm font-semibold text-white shadow-[var(--ds-shadow-primary)] ring-1 ring-white/10 transition hover:bg-[var(--ds-cta-primary-hover)] hover:shadow-[var(--ds-shadow-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-ring-offset)]"
            >
              View IT Projects
            </a>
            <a
              href="#web-services"
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full border border-slate-300/95 bg-white px-7 py-3 text-center text-sm font-semibold text-[var(--ds-color-heading)] shadow-[var(--ds-shadow-secondary)] transition hover:border-slate-400 hover:bg-slate-50/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-ring-offset)]"
            >
              Portfolio Website Services
            </a>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1 self-start rounded-lg px-1 py-2 text-sm font-semibold text-slate-600 underline-offset-4 transition hover:text-teal-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-ring-offset)] md:self-center md:px-2"
            >
              Connect on LinkedIn
              <span aria-hidden="true" className="text-base font-normal">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="order-1 mx-auto flex w-full max-w-[21rem] shrink-0 items-center sm:max-w-[22.75rem] lg:order-2 lg:mx-0 lg:ml-auto lg:mr-0 lg:max-w-[26.25rem] xl:max-w-[26.5rem] animate-float-in">
          <div className="relative mx-auto">
            <div
              className="absolute -inset-6 -z-10 rounded-[2.15rem] bg-[radial-gradient(ellipse_at_50%_35%,rgba(45,212,191,0.16),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(148,163,184,0.22),transparent_50%)] opacity-90 blur-2xl"
              aria-hidden
            />
            <div className="rounded-[1.85rem] bg-gradient-to-br from-white via-slate-100/95 to-slate-200/90 p-[2px] shadow-[0_28px_60px_-28px_rgba(15,23,42,0.45),0_14px_36px_-22px_rgba(15,23,42,0.28)] ring-1 ring-white/80">
              <div className="rounded-[1.75rem] bg-gradient-to-b from-white/98 to-slate-50/95 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm sm:p-6">
                <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-slate-200/90 shadow-inner ring-1 ring-slate-200/80">
                  <Image
                    src={heroProfileImageSrc}
                    alt={`${heroCard.name} — IT Support Specialist`}
                    fill
                    sizes="(min-width: 1280px) 26.5rem, (min-width: 1024px) 26.25rem, (min-width: 640px) 22.75rem, calc(100vw - 2.5rem)"
                    priority
                    className="object-cover object-[center_18%] saturate-[0.97]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/[0.14] via-transparent to-transparent" />
                </div>

                <div className="text-center">
                  <h2 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-[var(--ds-color-heading)]">
                    {heroCard.name}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{heroCard.role}</p>
                  <p className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-slate-600">
                    <svg className="h-4 w-4 shrink-0 text-teal-600/85" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M12 21s-6.2-4.35-8.5-8.5C2.5 10.45 4.6 6 9 6c2.2 0 3 1 3 1s.8-1 3-1c4.4 0 6.5 4.45 5.5 6.5C18.2 16.65 12 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="1.65"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10.25" r="2.25" stroke="currentColor" strokeWidth="1.65" />
                    </svg>
                    {heroCard.location}
                  </p>
                </div>

                <div className="mt-5 rounded-full border border-slate-200/90 bg-gradient-to-b from-slate-50/98 to-slate-100/90 px-4 py-2.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                  <span className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-700">
                    <span className="relative flex h-2.5 w-2.5" aria-hidden>
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/70 opacity-75 motion-safe:animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.65)]" />
                    </span>
                    {heroCard.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
