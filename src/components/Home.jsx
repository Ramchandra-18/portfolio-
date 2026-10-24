import { useTheme } from "../context/ThemeContext";

import {
  FaMoon,
  FaSun,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import profile from "../assets/profile.jpeg";

export default function Home() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
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
              ? "bg-[radial-gradient(ellipse_at_70%_35%,rgba(14,165,233,0.15),transparent_45%),linear-gradient(180deg,#0b1420_0%,#080d16_70%,#15121a_100%)]"
              : "bg-[radial-gradient(ellipse_at_75%_35%,rgba(59,130,246,0.13),transparent_45%),linear-gradient(180deg,#ffffff_0%,#f5f7fc_75%,#eaf0f9_100%)]"
          }`}
        />

        {/* Grid */}

        <div
          className={`absolute inset-0 bg-[size:65px_65px] ${
            darkMode
              ? "bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,rgba(100,116,139,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.06)_1px,transparent_1px)]"
          }`}
        />

        {/* Ambient lighting */}

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute -right-40 top-40 h-[450px] w-[450px] rounded-full bg-sky-400/10 blur-[140px]" />

        <div
          className={`absolute bottom-0 left-0 h-64 w-full ${
            darkMode
              ? "bg-gradient-to-t from-orange-950/10 to-transparent"
              : "bg-gradient-to-t from-blue-100/40 to-transparent"
          }`}
        />

        {/* Floating 3D-inspired geometric shapes */}

        <div className="absolute left-[10%] top-[20%] hidden h-24 w-24 rotate-[-14deg] animate-pulse sm:block lg:left-[16%]">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-400/20 to-blue-900/40 shadow-2xl shadow-blue-500/10" />

          <div className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-br from-slate-500/20 via-slate-900/50 to-blue-950/80 shadow-[inset_-12px_-12px_25px_rgba(0,0,0,0.25)]" />

          <div className="absolute inset-y-0 right-0 w-5 translate-x-5 skew-y-[-25deg] rounded-r-md bg-gradient-to-b from-orange-400/30 to-orange-900/20" />
        </div>

        <div className="absolute right-[12%] top-[18%] hidden h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_30px_12px_rgba(251,191,36,0.25)] sm:block" />

        <div className="absolute right-[20%] top-[35%] hidden h-14 w-14 rotate-12 rounded-xl border border-sky-300/20 bg-gradient-to-br from-sky-400/20 to-indigo-900/40 shadow-2xl shadow-sky-500/20 sm:block" />

        <div className="absolute bottom-[25%] right-[8%] hidden h-8 w-8 rotate-45 rounded-lg border border-violet-300/20 bg-violet-500/10 sm:block" />
      </div>

      {/* NAVIGATION */}

      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="text-sm font-bold tracking-[0.18em]"
        >
          <span className="mr-2 text-sky-400">{"</>"}</span>
          RAMCHANDRA
        </a>

        <div
          className={`hidden items-center gap-8 text-xs font-medium sm:flex ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <a href="#home" className="transition-colors hover:text-sky-500">
            Home
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-sky-500"
          >
            Projects
          </a>
<a
            href="#skills"
            className="transition-colors hover:text-sky-500"
          >
            Skills
          </a>
          <a
            href="#education"
            className="transition-colors hover:text-sky-500"
          >
            Education
          </a>
           <a
            href="#experience"
            className="transition-colors hover:text-sky-500"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-sky-500"
          >
            Contact
          </a>
        </div>

        {/* EXISTING THEME TOGGLE */}

        <button
          type="button"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setDarkMode(!darkMode)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 hover:scale-110 ${
            darkMode
              ? "border-white/10 bg-white/5 text-amber-300 hover:bg-white/10"
              : "border-slate-200 bg-white/80 text-slate-700 shadow-lg hover:bg-white"
          }`}
        >
          {darkMode ? (
            <FaSun className="text-lg" />
          ) : (
            <FaMoon className="text-lg" />
          )}
        </button>
      </nav>

      {/* HERO SECTION */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-7xl items-center px-5 pb-20 pt-8 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-8">

          {/* INTRODUCTION */}

          <div className="relative z-20 text-center lg:text-left">

            <div
              className={`mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] backdrop-blur-xl sm:text-xs ${
                darkMode
                  ? "border-white/10 bg-white/[0.04] text-slate-300"
                  : "border-slate-200 bg-white/80 text-slate-600 shadow-sm"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

              <span className="text-slate-500"></span>

              Available for Work
            </div>

            <p
              className={`mb-4 text-xs font-medium uppercase tracking-[0.4em] ${
                darkMode ? "text-sky-300" : "text-blue-600"
              }`}
            >
              Hello, I'm
            </p>

            <h1 className="text-6xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-7xl lg:text-[clamp(4rem,7vw,6.8rem)]">
              Ramchandra
            </h1>

            <h2
              className={`mt-5 text-lg font-medium tracking-wide sm:text-2xl ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
               Full Stack Developer
            </h2>

            <p
              className={`mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base lg:mx-0 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
             I build modern web applications using Java, Spring Boot,
React, Node.js, Express.js, and modern web technologies.
Turning ideas into reliable digital experiences through clean code and thoughtful
engineering.
            </p>

            

            <div className="mt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[9px] uppercase tracking-[0.15em] sm:text-[10px] lg:justify-start">
              {["Full Stack Developer", "Software Engineer", "Software Developer"].map(
                (item) => (
                  <span
                    key={item}
                    className={`${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            {/* EXISTING PROJECT AND CONTACT ACTIONS */}

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("projects").offsetTop,
                    behavior: "smooth",
                  });
                }}
                className="group flex items-center justify-center gap-3 rounded-full bg-sky-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_35px_rgba(14,165,233,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_12px_40px_rgba(14,165,233,0.4)]"
              >
                View Projects

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("contact").offsetTop,
                    behavior: "smooth",
                  });
                }}
                className={`flex items-center justify-center rounded-full border px-7 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/10"
                    : "border-slate-300 bg-white/70 text-slate-800 hover:border-slate-400 hover:bg-white"
                }`}
              >
                Contact Me
              </button>
            </div>

            {/* SOCIAL LINKS */}

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              {[
                {
                  href: "https://www.linkedin.com/in/ramchandra-18-/",
                  label: "LinkedIn",
                  Icon: FaLinkedin,
                  color: "hover:text-[#0A66C2]",
                },
                {
                  href: "https://github.com/Ramchandra-18",
                  label: "GitHub",
                  Icon: FaGithub,
                  color: "hover:text-sky-400",
                },
                {
                  href: "mailto:rajalasangi@gmail.com",
                  label: "Email",
                  Icon: FaEnvelope,
                  color: "hover:text-violet-400",
                },
                {
                  href: "https://wa.me/918088237366",
                  label: "WhatsApp",
                  Icon: FaWhatsapp,
                  color: "hover:text-emerald-400",
                },
              ].map(({ href, label, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={
                    label === "Email" ? undefined : "noopener noreferrer"
                  }
                  aria-label={label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10"
                      : "border-slate-200 bg-white/80 text-slate-600 shadow-sm hover:bg-white"
                  } ${color}`}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* PROFILE AND FUTURISTIC VISUAL */}

          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center py-8 lg:min-h-[600px] lg:py-0">

            {/* AMBIENT GLOW */}

            <div
              className={`absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-[360px] sm:w-[360px] ${
                darkMode ? "bg-sky-500/20" : "bg-blue-400/20"
              }`}
            />

            {/* ORBIT RINGS */}

            <div
              className={`absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:h-[410px] sm:w-[410px] ${
                darkMode ? "border-sky-300/15" : "border-blue-300/50"
              }`}
            />

            <div
              className={`absolute left-1/2 top-1/2 h-[240px] w-[360px] -translate-x-1/2 -translate-y-1/2 rotate-[-30deg] rounded-[50%] border ${
                darkMode ? "border-sky-300/20" : "border-blue-300/50"
              }`}
            />

            <div
              className={`absolute left-1/2 top-1/2 h-[360px] w-[210px] -translate-x-1/2 -translate-y-1/2 rotate-[35deg] rounded-[50%] border ${
                darkMode ? "border-indigo-300/10" : "border-indigo-300/40"
              }`}
            />

            {/* FLOATING CODE CUBE */}

            <div className="absolute right-[8%] top-[6%] z-20 hidden h-20 w-20 rotate-[-12deg] sm:block lg:right-[7%] lg:top-[8%]">
              <div
                className={`absolute inset-0 translate-x-3 translate-y-3 rounded-2xl ${
                  darkMode
                    ? "bg-blue-950/80"
                    : "bg-blue-300/70"
                }`}
              />

              <div
                className={`relative flex h-full w-full items-center justify-center rounded-2xl border text-2xl shadow-2xl backdrop-blur-xl ${
                  darkMode
                    ? "border-sky-300/30 bg-gradient-to-br from-sky-400/30 via-blue-600/30 to-slate-950/90 text-sky-300 shadow-blue-500/20"
                    : "border-white bg-gradient-to-br from-white via-blue-100 to-blue-300 text-blue-600 shadow-blue-500/20"
                }`}
              >
                {"</>"}
              </div>
            </div>

            {/* PROFILE IMAGE */}

            <div className="relative z-10 w-[min(76vw,330px)] sm:w-[min(70vw,390px)] lg:w-[min(37vw,410px)]">
              <div
                className={`absolute -inset-3 rounded-[2rem] blur-2xl ${
                  darkMode ? "bg-sky-500/20" : "bg-blue-400/20"
                }`}
              />

              <div
                className={`relative overflow-hidden rounded-[1.75rem] border p-2 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? "border-white/15 bg-slate-900/60 shadow-black/40"
                    : "border-white bg-white/80 shadow-blue-900/10"
                }`}
              >
                <img
                  src={profile}
                  alt="Ramchandra"
                  className="aspect-[4/5] w-full rounded-[1.3rem] object-cover object-center"
                />

                {/* IMAGE OVERLAY */}

                <div className="pointer-events-none absolute inset-2 rounded-[1.3rem] bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* PROFILE CAPTION */}

                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      Ramchandra
                    </h3>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-300 sm:text-xs">
                      Build · Learn · Grow
                    </p>
                  </div>

                  <div className="rounded-full border border-white/20 bg-black/30 px-3 py-2 text-xs text-sky-300 backdrop-blur-xl">
                    {"< />"}
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING TECH CARD */}

            <div
              className={`absolute bottom-[12%] left-0 z-20 hidden -rotate-6 items-center gap-3 rounded-xl border px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex ${
                darkMode
                  ? "border-white/10 bg-slate-900/90 text-slate-200 shadow-black/30"
                  : "border-white bg-white/90 text-slate-700 shadow-blue-900/10"
              }`}
            >
              <span className="text-xl text-sky-400">{"{ }"}</span>

              <div>
               
              
              </div>
            </div>

            {/* FLOATING LEARNING CARD */}

            <div
              className={`absolute right-0 top-[52%] z-20 hidden rotate-3 items-center gap-3 rounded-xl border px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex ${
                darkMode
                  ? "border-white/10 bg-slate-900/90 text-slate-200 shadow-black/30"
                  : "border-white bg-white/90 text-slate-700 shadow-blue-900/10"
              }`}
            >
              <span className="text-xl text-amber-400">✦</span>

              <div>
                <p className="text-xs font-semibold">Always Learning</p>
                <p
                  className={`mt-1 text-[10px] ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Growing every day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 sm:block">
        <div
          className={`flex h-9 w-5 items-start justify-center rounded-full border p-1.5 ${
            darkMode ? "border-white/25" : "border-slate-400/60"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              darkMode ? "bg-white/70" : "bg-slate-500"
            }`}
          />
        </div>
      </div>
    </section>
  );
}