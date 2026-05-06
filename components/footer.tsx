export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 xl:px-12">
        <p>© {new Date().getFullYear()} Ahmad Niknam. Regina, Saskatchewan.</p>
        <p className="text-slate-500">
          IT Support Specialist · Azure Administrator · Infrastructure Support
        </p>
      </div>
    </footer>
  );
}
