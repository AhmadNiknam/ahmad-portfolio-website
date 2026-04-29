import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.3),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_32%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(30,41,59,0.96))]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-sky-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-sky-100">
            IT Infrastructure Professional | Azure Administrator | Regina, SK
          </p>
          <h1
            id="hero-title"
            className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Helping Businesses Build Reliable IT Infrastructure
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Experienced IT professional combining hands-on infrastructure knowledge with modern
            cloud and automation solutions.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-300"
            >
              View Projects
            </a>
            <a
              href="/Ahmad-Niknam-Resume.pdf"
              download
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-slate-100"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-sky-200 hover:text-sky-100"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-niknam/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-sky-200 hover:text-sky-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.25rem] bg-sky-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur">
            <Image
              src="/ahmad-niknam-profile.jpg"
              alt="Professional profile photo of Ahmad Niknam"
              width={720}
              height={860}
              priority
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-b-[1.5rem] bg-slate-950/82 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                Ahmad Niknam
              </p>
              <p className="mt-2 text-lg font-bold">
                Azure Administrator & Systems Support Professional
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white/10 p-3">
                  <dt className="text-slate-300">Experience</dt>
                  <dd className="mt-1 font-semibold text-white">10+ years</dd>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <dt className="text-slate-300">Based in</dt>
                  <dd className="mt-1 font-semibold text-white">Regina, Canada</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
