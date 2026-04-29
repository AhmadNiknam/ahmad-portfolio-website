export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.28),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(30,41,59,0.96))]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-sky-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-sky-100">
            IT Infrastructure & Cloud Professional in Regina, Saskatchewan
          </p>
          <h1
            id="hero-title"
            className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building reliable, secure, and modern technology foundations.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Ahmad Niknam helps organizations support dependable infrastructure, cloud adoption,
            and practical IT operations with a calm, professional approach.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-sky-200 hover:text-sky-100"
            >
              Contact Ahmad
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
          <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-bold text-white">
              AN
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Portfolio Focus
            </p>
            <h2 className="mt-3 text-2xl font-bold">Cloud, infrastructure, and service reliability</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Placeholder profile card for a polished professional summary, selected metrics, or a
              current career objective.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-slate-100 p-4">
                <dt className="text-slate-500">Base</dt>
                <dd className="mt-1 font-semibold text-slate-900">Regina, SK</dd>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <dt className="text-slate-500">Focus</dt>
                <dd className="mt-1 font-semibold text-slate-900">Cloud IT</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
