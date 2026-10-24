
import { useTheme } from "../context/ThemeContext";

import vtu from "../assets/vtu.png";
import cpm from "../assets/cpm.png";
import ssvhs from "../assets/ssvhs.png";

import { FaGraduationCap, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const education = [
  {
    school: "Vishveshwarya Technological University (VTU)",
    logo: vtu,
    degree: "B.Tech in Computer Science",
    period: "2022 - 2026",
    grade: "8.4 CGPA",
    number: "01",
    level: "UNDERGRADUATE",
    accent: "violet",
  },
  {
    school: "Chandrakant Patil Science PU College",
    logo: cpm,
    degree: "Pre-University",
    period: "2020 - 2022",
    grade: "78%",
    number: "02",
    level: "PRE-UNIVERSITY",
    accent: "cyan",
  },
  {
    school: "Swami Vivekananda High School",
    logo: ssvhs,
    degree: "SSLC",
    period: "2016 - 2020",
    grade: "87%",
    number: "03",
    level: "SECONDARY EDUCATION",
    accent: "amber",
  },
];

const accents = {
  violet: {
    text: "text-violet-600 dark:text-violet-300",
    border: "group-hover:border-violet-400/40",
    glow: "bg-violet-500/10",
    marker: "from-violet-400 to-indigo-500",
    chip: "border-violet-400/20 bg-violet-400/10",
    bar: "from-violet-400 to-indigo-500",
  },
  cyan: {
    text: "text-cyan-700 dark:text-cyan-300",
    border: "group-hover:border-cyan-400/40",
    glow: "bg-cyan-500/10",
    marker: "from-cyan-400 to-sky-500",
    chip: "border-cyan-400/20 bg-cyan-400/10",
    bar: "from-cyan-400 to-sky-500",
  },
  amber: {
    text: "text-amber-700 dark:text-amber-300",
    border: "group-hover:border-amber-400/40",
    glow: "bg-amber-500/10",
    marker: "from-amber-400 to-orange-500",
    chip: "border-amber-400/20 bg-amber-400/10",
    bar: "from-amber-400 to-orange-500",
  },
};

function EducationCard({ edu, index, darkMode }) {
  const accent = accents[edu.accent];

  return (
    <article
      className={`group relative ${
        index % 2 === 0
          ? "md:col-start-1 md:pr-12 lg:pr-16"
          : "md:col-start-2 md:pl-12 lg:pl-16"
      }`}
    >
      {/* Connector to central timeline */}
      <div
        className={`absolute top-10 hidden h-px w-12 md:block lg:w-16 ${
          darkMode ? "bg-white/15" : "bg-slate-300"
        } ${
          index % 2 === 0
            ? "right-0"
            : "left-0"
        }`}
      />

      {/* Timeline marker */}
      <div
        className={`absolute top-[26px] z-20 hidden h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br p-[2px] shadow-lg md:flex ${
          accent.marker
        } ${
          index % 2 === 0
            ? "-right-[14px]"
            : "-left-[14px]"
        }`}
      >
        <span
          className={`flex h-full w-full items-center justify-center rounded-full text-[8px] font-bold ${
            darkMode ? "bg-[#0a1020] text-white" : "bg-white text-slate-900"
          }`}
        >
          {edu.number}
        </span>
      </div>

      {/* Main card */}
      <div
        className={`relative h-full overflow-hidden rounded-[26px] border transition-all duration-500 group-hover:-translate-y-1 ${
          darkMode
            ? `border-white/[0.09] bg-[#0d1420]/90 shadow-[0_15px_45px_rgba(0,0,0,0.12)] group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)] ${accent.border}`
            : `border-slate-200 bg-white/90 shadow-[0_15px_45px_rgba(15,23,42,0.04)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)] ${accent.border}`
        }`}
      >
        {/* Top accent */}
        <div className={`h-[3px] bg-gradient-to-r ${accent.marker}`} />

        {/* Ambient glow */}
        <div
          className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[75px] transition-opacity duration-500 group-hover:opacity-100 ${accent.glow} opacity-60`}
        />

        <div className="relative p-5 sm:p-7 lg:p-8">
          {/* Number and education level */}
          <div className="mb-6 flex items-center justify-between gap-3">
            <span
              className={`font-mono text-[10px] tracking-[0.18em] ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              ACADEMIC RECORD / {edu.number}
            </span>

            <span
              className={`rounded-full border px-2.5 py-1 text-[8px] font-bold tracking-[0.12em] sm:text-[9px] ${accent.chip} ${accent.text}`}
            >
              {edu.level}
            </span>
          </div>

          {/* School identity */}
          <div className="flex items-start gap-4 sm:gap-5">
            <div
              className={`relative flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border p-3 transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105 sm:h-[78px] sm:w-[78px] ${
                darkMode
                  ? "border-slate-200/10 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
                  : "border-slate-200 bg-white shadow-md"
              }`}
            >
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0 flex-1 pt-1">
              <h3 className="text-lg font-bold leading-snug tracking-tight sm:text-xl lg:text-[23px]">
                {edu.school}
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {edu.degree}
              </p>
            </div>
          </div>

          {/* Academic details */}
          <div
            className={`mt-7 grid grid-cols-1 gap-3 border-t pt-5 sm:grid-cols-2 ${
              darkMode ? "border-white/[0.08]" : "border-slate-200"
            }`}
          >
            <div
              className={`flex items-center gap-3 rounded-xl border p-3 ${
                darkMode
                  ? "border-white/[0.06] bg-white/[0.025]"
                  : "border-slate-200/80 bg-slate-50/80"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent.chip}`}
              >
                <FaCalendarAlt className={accent.text} />
              </div>

              <div className="min-w-0">
                <p
                  className={`text-[9px] font-semibold uppercase tracking-[0.15em] ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Duration
                </p>
                <p className="mt-1 text-sm font-semibold">{edu.period}</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-3 rounded-xl border p-3 ${
                darkMode
                  ? "border-white/[0.06] bg-white/[0.025]"
                  : "border-slate-200/80 bg-slate-50/80"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent.chip}`}
              >
                <FaGraduationCap className={`text-lg ${accent.text}`} />
              </div>

              <div className="min-w-0">
                <p
                  className={`text-[9px] font-semibold uppercase tracking-[0.15em] ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Academic result
                </p>
                <p className={`mt-1 text-sm font-bold ${accent.text}`}>
                  {edu.grade}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <span
              className={`text-[9px] font-medium uppercase tracking-[0.17em] ${
                darkMode ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Education / {edu.number}
            </span>

            <span
              className={`inline-flex items-center gap-2 text-xs font-semibold transition-transform duration-300 group-hover:translate-x-1 ${accent.text}`}
            >
              Academic journey
              <FaArrowRight className="text-[10px]" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Education() {
  const { darkMode } = useTheme();

  return (
    <section
      id="education"
      className={`relative isolate min-h-screen w-full overflow-hidden px-4 py-20 transition-colors duration-500 sm:px-6 sm:py-24 lg:px-10 lg:py-28 ${
        darkMode
          ? "bg-[#080d16] text-white"
          : "bg-[#f7f9fc] text-slate-950"
      }`}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_10%_12%,rgba(139,92,246,0.12),transparent_35%),radial-gradient(ellipse_at_90%_80%,rgba(14,165,233,0.10),transparent_35%)]"
              : "bg-[radial-gradient(ellipse_at_10%_12%,rgba(139,92,246,0.08),transparent_35%),radial-gradient(ellipse_at_90%_80%,rgba(14,165,233,0.07),transparent_35%)]"
          }`}
        />

        <div
          className={`absolute inset-0 bg-[size:58px_58px] ${
            darkMode
              ? "bg-[linear-gradient(to_right,rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,rgba(100,116,139,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.04)_1px,transparent_1px)]"
          }`}
        />

        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-500/[0.08] blur-[130px]" />
        <div className="absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-sky-500/[0.08] blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Heading */}
        <header className="mb-14 grid gap-7 md:mb-20 md:grid-cols-[minmax(0,1fr)_280px] md:items-end lg:gap-12">
          <div>
            <div
              className={`mb-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] sm:text-xs ${
                darkMode ? "text-violet-300" : "text-violet-700"
              }`}
            >
              <span className="h-px w-9 bg-current" />
              The academic foundation
            </div>

            <h2 className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.93] tracking-[-0.065em]">
              Learning
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
                never stops.
              </span>
            </h2>
          </div>

          <div className="max-w-sm md:justify-self-end">
            <p
              className={`text-sm leading-7 sm:text-base ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              The milestones that shaped my technical foundation, strengthened
              my knowledge, and continue to guide my growth.
            </p>

            <div
              className={`mt-6 flex items-center gap-4 border-t pt-4 ${
                darkMode ? "border-white/10" : "border-slate-200"
              }`}
            >
              <span className="text-3xl font-semibold tracking-tight">03</span>

              <div>
                <p className="text-xs font-semibold">Academic milestones</p>
                <p
                  className={`mt-1 text-[10px] ${
                    darkMode ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  School to university
                </p>
              </div>

              <div className="ml-auto flex items-end gap-1">
                {[20, 29, 23, 38, 30, 47, 35].map((height, index) => (
                  <span
                    key={index}
                    style={{ height: `${height}px` }}
                    className={`w-1.5 rounded-t-sm ${
                      darkMode ? "bg-violet-400/60" : "bg-violet-500/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Education timeline */}
        <div className="relative">
          {/* Central timeline rail on desktop */}
          <div
            className={`absolute bottom-12 left-1/2 top-10 hidden w-px -translate-x-1/2 md:block ${
              darkMode
                ? "bg-gradient-to-b from-violet-400/70 via-cyan-400/50 to-amber-400/30"
                : "bg-gradient-to-b from-violet-500/60 via-cyan-500/50 to-amber-500/40"
            }`}
          />

          {/* Mobile timeline rail */}
          <div
            className={`absolute bottom-8 left-[13px] top-8 w-px md:hidden ${
              darkMode
                ? "bg-gradient-to-b from-violet-400/70 via-cyan-400/50 to-amber-400/30"
                : "bg-gradient-to-b from-violet-500/60 via-cyan-500/50 to-amber-500/40"
            }`}
          />

          <div className="grid grid-cols-1 gap-7 pl-8 sm:gap-9 md:grid-cols-2 md:gap-y-12 md:pl-0">
            {education.map((edu, index) => (
              <EducationCard
                key={edu.school}
                edu={edu}
                index={index}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>

        {/* Closing line */}
        <footer
          className={`mt-12 flex flex-col gap-4 border-t pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between ${
            darkMode ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div>
            <p className="text-sm font-semibold sm:text-base">
              Built on knowledge. Driven by curiosity.
            </p>
            <p
              className={`mt-1 text-xs ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Foundation · Growth · Possibility
            </p>
          </div>

          <span
            className={`inline-flex items-center gap-2 text-xs font-medium ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <FaGraduationCap
              className={darkMode ? "text-violet-300" : "text-violet-600"}
            />
            Always learning, always building
          </span>
        </footer>
      </div>
    </section>
  );
}
