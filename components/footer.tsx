export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ahmad Niknam. All rights reserved.</p>
        <p>IT Infrastructure · Azure Administration · Regina, Saskatchewan</p>
      </div>
    </footer>
  );
}
