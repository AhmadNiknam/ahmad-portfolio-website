"use client";

import { navItems } from "@/lib/portfolio-data";
import { useCallback, useEffect, useMemo, useState } from "react";

export function Header() {
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  const updateActiveSection = useCallback(() => {
    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const activationPoint = headerHeight + 32;
    const scrollBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

    if (scrollBottom) {
      setActiveSection(sectionIds[sectionIds.length - 1]);
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    let currentSection = sections[0];

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= activationPoint) {
        currentSection = section;
      }
    }

    if (currentSection?.id) {
      setActiveSection(currentSection.id);
    }
  }, [sectionIds]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/[0.72] shadow-[var(--ds-shadow-header)] backdrop-blur-xl backdrop-saturate-150">
      <nav
        className="mx-auto flex max-w-[88rem] flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between xl:px-12"
        aria-label="Primary navigation"
      >
        <a
          href="#hero"
          className="text-[0.8125rem] font-bold uppercase tracking-[0.22em] text-[var(--ds-color-heading)] transition hover:text-slate-700"
        >
          AHMAD NIKNAM
        </a>
        <div className="flex w-full items-center gap-1 overflow-x-auto rounded-full border border-white/70 bg-white/45 p-1 shadow-[var(--ds-shadow-nav-shell)] backdrop-blur-xl backdrop-saturate-150 md:w-auto md:overflow-visible md:gap-0.5 md:pr-1 md:pl-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveSection(item.href.replace("#", ""))}
              className={`shrink-0 rounded-full px-3 py-2 text-sm font-semibold transition md:px-3.5 ${
                activeSection === item.href.replace("#", "")
                  ? "bg-gradient-to-b from-teal-50/98 to-cyan-50/88 text-teal-950 shadow-[var(--ds-shadow-nav-active)]"
                  : "text-[var(--ds-color-muted)] hover:bg-white/55 hover:text-[var(--ds-color-heading)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
