
import { useTheme } from "../context/ThemeContext";
import pdf from "../assets/resume.pdf";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <section
      id="about"
      className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-20 transition-colors duration-500 sm:px-8 lg:px-12 ${
        darkMode
          ? "bg-[#080d16] text-white"
          : "bg-[#f7f9fc] text-slate-950"
      }`}
    >
      {/* CINEMATIC BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_75%_30%,rgba(14,165,233,0.14),transparent_45%),linear-gradient(180deg,#0b1420_0%,#080d16_100%)]"
              : "bg-[radial-gradient(ellipse_at_75%_30%,rgba(59,130,246,0.13),transparent_45%),linear-gradient(180deg,#ffffff_0%,#f1f5fb_100%)]"
          }`}
        />

        <div
          className={`absolute inset-0 bg-[size:65px_65px] ${
            darkMode
              ? "bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,rgba(100,116,139,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.05)_1px,transparent_1px)]"
          }`}
        />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />
        <div className="absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

        {/* 3D-INSPIRED GEOMETRY */}
        <div className="absolute left-[8%] top-[18%] hidden h-24 w-24 rotate-[-15deg] sm:block">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-blue-950/60" />
          <div
            className={`absolute inset-0 rounded-xl border ${
              darkMode
                ? "border-sky-300/20 bg-gradient-to-br from-sky-400/20 to-slate-950/80"
                : "border-blue-200 bg-gradient-to-br from-white to-blue-200/80"
            } shadow-2xl`}
          />
        </div>

        <div className="absolute right-[12%] top-[20%] hidden h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_30px_12px_rgba(251,191,36,0.25)] sm:block" />

        <div
          className={`absolute bottom-[18%] right-[8%] hidden h-16 w-16 rotate-12 rounded-2xl border shadow-2xl sm:block ${
            darkMode
              ? "border-sky-300/20 bg-gradient-to-br from-sky-400/20 to-blue-950/70"
              : "border-white bg-gradient-to-br from-white to-blue-200 shadow-blue-900/10"
          }`}
        />
      </div>

      {/* MAIN CONTENT */}
      <div
        className={`relative z-10 w-full max-w-7xl overflow-hidden rounded-[2rem] border shadow-2xl transition-colors duration-500 sm:rounded-[2.5rem] ${
          darkMode
            ? "border-white/10 bg-slate-950/45 shadow-black/20"
            : "border-white bg-white/65 shadow-slate-900/5"
        }`}
      >
        {/* CARD AMBIENT LIGHT */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-[100px]" />
          <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />
        </div>

        <div className="relative grid items-center gap-12 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:p-16 xl:p-20">
          {/* LEFT: INTRODUCTION */}
          <div className="relative z-10">
            <div
              className={`mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] sm:text-xs ${
                darkMode
                  ? "border-white/10 bg-white/[0.04] text-slate-300"
                  : "border-slate-200 bg-white/80 text-slate-600"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              About Me
            </div>

            <p
              className={`mb-4 text-xs uppercase tracking-[0.4em] ${
                darkMode ? "text-sky-300" : "text-blue-600"
              }`}
            >
              A little about my journey
            </p>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Building
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Modern
              </span>
              <br />
              Experiences<span className="text-sky-400">.</span>
            </h1>

            <p
              className={`mt-7 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Hi, I'm{" "}
              <span
                className={`font-semibold ${
                  darkMode ? "text-sky-300" : "text-blue-600"
                }`}
              >
                Ramchandra
              </span>
              , a passionate{" "}
              <span className={darkMode ? "text-white" : "text-slate-900"}>
                Full Stack Developer
              </span>{" "}
              focused on creating scalable web applications, futuristic UI
              experiences, and digital products with thoughtful interactions
              and polished design.
            </p>

            {/* TECHNICAL INTERESTS */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React", "SQL","Node.js","Express.js","MongoDB"].map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    darkMode
                      ? "border-white/10 bg-white/[0.04] text-slate-300"
                      : "border-slate-200 bg-white/80 text-slate-600"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CV LINK - ORIGINAL DESTINATION PRESERVED */}
            <div className="mt-9">
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_35px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_12px_40px_rgba(14,165,233,0.35)]"
              >
                Download CV
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: DEVELOPER PROFILE */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* ORBIT RINGS */}
            <div
              className={`absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border sm:h-80 sm:w-80 ${
                darkMode ? "border-sky-300/15" : "border-blue-300/50"
              }`}
            />

            <div
              className={`absolute left-1/2 top-1/2 h-56 w-80 -translate-x-1/2 -translate-y-1/2 rotate-[-28deg] rounded-[50%] border ${
                darkMode ? "border-indigo-300/15" : "border-indigo-300/40"
              }`}
            />

            <div
              className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px] ${
                darkMode ? "bg-sky-500/15" : "bg-blue-400/20"
              }`}
            />

            {/* PROFILE CARD */}
            <div
              className={`relative z-10 rounded-[1.75rem] border p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 sm:rounded-[2rem] sm:p-7 ${
                darkMode
                  ? "border-white/10 bg-slate-900/80 shadow-black/30"
                  : "border-white bg-white/85 shadow-blue-900/10"
              }`}
            >
              <div className="mb-7 flex items-center justify-between gap-3">
                <div>
                  <p
                    className={`text-[10px] uppercase tracking-[0.3em] ${
                      darkMode ? "text-sky-300" : "text-blue-600"
                    }`}
                  >
                    Profile Overview
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Developer Profile
                  </h2>
                </div>

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xl ${
                    darkMode
                      ? "border-sky-300/20 bg-sky-400/10 text-sky-300"
                      : "border-blue-200 bg-blue-50 text-blue-600"
                  }`}
                >
                  {"</>"}
                </div>
              </div>

              <div className="space-y-3">
                {/* EXPERIENCE */}
                <div
                  className={`group rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                    darkMode
                      ? "border-white/[0.07] bg-white/[0.035] hover:border-sky-300/20 hover:bg-white/[0.06]"
                      : "border-slate-200/80 bg-slate-50/80 hover:border-blue-200 hover:bg-blue-50/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        darkMode
                          ? "bg-sky-400/10 text-sky-300"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <span className="text-lg">✦</span>
                    </div>

                    <div>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        Experience
                      </p>
                      <h3 className="mt-1 text-base font-semibold">
                        Fresher
                      </h3>
                    </div>
                  </div>
                </div>

                {/* SPECIALIZATION */}
                <div
                  className={`group rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                    darkMode
                      ? "border-white/[0.07] bg-white/[0.035] hover:border-sky-300/20 hover:bg-white/[0.06]"
                      : "border-slate-200/80 bg-slate-50/80 hover:border-blue-200 hover:bg-blue-50/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        darkMode
                          ? "bg-indigo-400/10 text-indigo-300"
                          : "bg-indigo-100 text-indigo-600"
                      }`}
                    >
                      <span className="text-lg">⌘</span>
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-xs ${
                          darkMode ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        Specialization
                      </p>
                      <h3 className="mt-1 text-base font-semibold sm:text-lg">
                        Full Stack Development
                      </h3>
                    </div>
                  </div>
                </div>

                {/* FOCUS */}
                <div
                  className={`group rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                    darkMode
                      ? "border-white/[0.07] bg-white/[0.035] hover:border-sky-300/20 hover:bg-white/[0.06]"
                      : "border-slate-200/80 bg-slate-50/80 hover:border-blue-200 hover:bg-blue-50/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        darkMode
                          ? "bg-amber-400/10 text-amber-300"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      <span className="text-lg">◇</span>
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-xs ${
                          darkMode ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        Focus
                      </p>
                      <h3 className="mt-1 text-base font-semibold sm:text-lg">
                        Modern UI &amp; Scalable Apps
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM SIGNATURE */}
              <div
                className={`mt-5 flex items-center justify-between border-t pt-5 ${
                  darkMode ? "border-white/10" : "border-slate-200"
                }`}
              >
                <span
                  className={`text-[10px] uppercase tracking-[0.2em] ${
                    darkMode ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  Build · Learn · Grow
                </span>

                <span
                  className={`text-xs font-semibold ${
                    darkMode ? "text-sky-300" : "text-blue-600"
                  }`}
                >
                  {"</>"} Developer
                </span>
              </div>
            </div>

           

            <div
              className={`absolute -bottom-4 right-5 z-20 rounded-xl border px-4 py-2.5 text-xs shadow-xl backdrop-blur-xl ${
                darkMode
                  ? "border-white/10 bg-slate-900/90 text-slate-300"
                  : "border-white bg-white/90 text-slate-600"
              }`}
            >
              Always Learning <span className="text-amber-400">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
