"use client";

import { navItems } from "@/lib/portfolio-data";
import { useEffect, useMemo, useState } from "react";

export function Header() {
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.08, 0.2, 0.45]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/[0.82] shadow-sm shadow-slate-950/[0.03] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#hero"
          className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-slate-950"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950 text-[0.7rem] tracking-normal text-white shadow-lg shadow-slate-900/15 transition group-hover:bg-sky-600">
            AN
          </span>
          <span>Ahmad Niknam</span>
        </a>
        <div className="flex w-full items-center gap-2 overflow-x-auto rounded-full border border-slate-200 bg-white/70 p-1 md:w-auto md:overflow-visible">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-3 py-2 text-sm font-semibold transition ${
                activeSection === item.href.replace("#", "")
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-600 hover:bg-sky-50 hover:text-sky-700"
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
