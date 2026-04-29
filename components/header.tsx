import { navItems } from "@/lib/portfolio-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between"
        aria-label="Primary navigation"
      >
        <a href="#hero" className="text-sm font-bold uppercase tracking-[0.22em] text-slate-950">
          Ahmad Niknam
        </a>
        <div className="flex w-full items-center gap-5 overflow-x-auto pb-1 md:w-auto md:gap-6 md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm font-medium text-slate-600 transition hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
