/**
 * Design system class bundles — derived from Hero visual language.
 * Hero remains the strongest emphasis; these tokens tune calmer sections + Contact elevation.
 */
export const ds = {
  /** Section label pill — Hero family; softer shadow than Hero eyebrow so Hero stays primary. */
  sectionEyebrow:
    "mb-4 inline-flex max-w-full items-center rounded-full border border-slate-200/90 bg-white/70 px-3.5 py-2 shadow-[var(--ds-shadow-eyebrow)] backdrop-blur-md",
  sectionEyebrowText:
    "text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-700",

  sectionTitle:
    "text-pretty text-3xl font-semibold tracking-[-0.03em] text-[var(--ds-color-heading)] sm:text-[2.15rem] sm:leading-[1.15]",

  sectionDescription: "mt-4 max-w-3xl text-[1.05rem] leading-[1.7] text-[var(--ds-color-muted)]",

  /** Long-form section body — matches Hero supporting copy tone. */
  bodyMuted: "text-[1.05rem] leading-[1.75] text-[var(--ds-color-muted)]",

  /** Standard content card — soft surface, subtle depth (calmer than Hero). */
  card:
    "rounded-[var(--ds-radius-card)] border border-slate-200/90 bg-white/95 p-6 shadow-[var(--ds-shadow-card)] sm:p-7",

  cardInteractive:
    "transition duration-300 hover:-translate-y-0.5 hover:border-slate-300/95 hover:shadow-[var(--ds-shadow-card-hover)]",

  /** Contact highlight column — elevated like Hero card frame, calmer than profile chrome. */
  cardContact:
    "rounded-[var(--ds-radius-card)] border border-slate-200/90 bg-white/95 p-6 shadow-[var(--ds-shadow-elevated)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300/95 hover:shadow-[var(--ds-shadow-elevated-hover)] sm:p-7",

  /** Highlight / intro panel on light backgrounds. */
  cardHighlight:
    "relative overflow-hidden rounded-[var(--ds-radius-card)] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 p-7 shadow-[var(--ds-shadow-elevated)] ring-1 ring-white/80 sm:p-9",

  /** Dark editorial surfaces (Contact secondary panel, Web Services CTA). */
  surfaceDark:
    "relative overflow-hidden rounded-[var(--ds-radius-card)] bg-[var(--ds-color-surface-dark)] p-7 text-white shadow-[var(--ds-shadow-dark-panel)] ring-1 ring-white/10 sm:p-8",

  /** Impact / inset blocks inside cards. */
  insetSurface:
    "rounded-2xl border border-slate-200/80 bg-slate-50/90 p-4 text-sm font-medium leading-6 text-[var(--ds-color-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]",

  /** Metadata / tag chip — family of Hero badges, quieter. */
  chip:
    "inline-flex items-center rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ds-color-muted)] shadow-[var(--ds-shadow-chip)]",

  chipDense: "px-2.5 py-1 text-[0.7rem] tracking-[0.14em]",

  tag:
    "inline-flex items-center rounded-full border border-slate-200/85 bg-white/80 px-3 py-1 text-xs font-medium text-[var(--ds-color-muted)] shadow-[var(--ds-shadow-chip)]",

  /** Nested grid tiles (e.g. process steps) — same family as cards, lighter depth. */
  cardNested:
    "rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white via-white to-slate-50/85 p-5 shadow-[var(--ds-shadow-chip)] ring-1 ring-white/55",

  /** Primary CTA — matches Hero primary button. */
  btnPrimary:
    "inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-[var(--ds-cta-primary)] px-7 py-3 text-center text-sm font-semibold text-white shadow-[var(--ds-shadow-primary)] ring-1 ring-white/10 transition hover:bg-[var(--ds-cta-primary-hover)] hover:shadow-[var(--ds-shadow-primary-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-ring-offset)]",

  /** Secondary CTA — matches Hero secondary button. */
  btnSecondary:
    "inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full border border-slate-300/95 bg-white px-7 py-3 text-center text-sm font-semibold text-[var(--ds-color-heading)] shadow-[var(--ds-shadow-secondary)] transition hover:border-slate-400 hover:bg-slate-50/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-ring-offset)]",

  /** On dark panels: filled light button. */
  btnOnDarkPrimary:
    "inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[var(--ds-cta-primary)] shadow-[var(--ds-shadow-light-pill)] transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",

  btnOnDarkSecondary:
    "inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",

  btnOnDarkGhost:
    "inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/18 bg-transparent px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-teal-200/55 hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",

  /** Text-style CTA */
  linkInline:
    "inline-flex min-h-[44px] items-center gap-1 rounded-lg px-1 py-2 text-sm font-semibold text-[var(--ds-color-muted)] underline-offset-4 transition hover:text-teal-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ds-ring-offset)]",

  /** Icon numeral plate — softer than pure black. */
  iconPlate:
    "flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ds-cta-primary)] text-sm font-bold tracking-tight text-white shadow-[var(--ds-shadow-icon)]",

  skillIconPlate:
    "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--ds-cta-primary)] text-sm font-bold tracking-tight text-white shadow-[var(--ds-shadow-icon)] transition group-hover:bg-teal-700",

  listBullet:
    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-teal-200/80 bg-teal-50/90 text-xs font-semibold text-teal-800 shadow-[var(--ds-shadow-chip)]",

  timelineLine:
    "before:absolute before:left-4 before:top-4 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-teal-300/90 before:via-slate-200 before:to-transparent",

  timelineDot:
    "absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-teal-600 text-[0.65rem] font-bold text-white shadow-[var(--ds-shadow-timeline)]",

  datePill:
    "inline-flex shrink-0 items-center rounded-full border border-teal-100/90 bg-gradient-to-b from-teal-50/95 to-cyan-50/85 px-4 py-2 text-sm font-semibold text-teal-950 shadow-[var(--ds-shadow-chip)]"
} as const;
