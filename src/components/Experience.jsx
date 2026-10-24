
import { useTheme } from "../context/ThemeContext";

import code from "../assets/codealpha.png";
import jsp from "../assets/jsp.png";
import codemate from "../assets/codemate.jpeg";

import { FaBriefcase, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    company: "JSpiders Rajajinagar",
    logo: jsp,
    role: "Java Full Stack Developer Intern",
    period: "Present",
    status: "Currently Learning",
    number: "01",
    category: "INTERNSHIP",
    accent: "cyan",
    summary:
      "Building a strong foundation in Java full stack development through practical training and application development.",
    details: [
      "Currently undergoing intensive training in Java Full Stack Development.",
      "Gaining hands-on experience in Core Java, JDBC, Servlets, and Spring Framework.",
      "Working with HTML, CSS, JavaScript, and React.js for frontend development.",
      "Learning database integration using MySQL and PostgreSQL.",
      "Developing real-time applications and improving problem-solving skills.",
      "Collaborating on mini-projects to strengthen full stack development knowledge.",
    ],
  },
  {
    company: "CodeAlpha",
    logo: code,
    role: "Full Stack Developer Intern",
    period: "May 01 – May 30, 2025",
    number: "02",
    category: "INTERNSHIP",
    accent: "violet",
    summary:
      "Worked on practical web development projects spanning e-commerce, social platforms, and team collaboration tools.",
    details: [
      "Developed scalable e-commerce platforms with secure payment gateways and real-time inventory management using React, Node.js, and Supabase.",
      "Engineered user-focused social media platforms featuring messaging, post sharing, and notification systems.",
      "Built collaborative project management tools supporting task tracking, team roles, and automated workflow integrations.",
    ],
  },
  {
    company: "CodeMates India",
    logo: codemate,
    role: "Full Stack Developer",
    period: "Jan 2025 – Dec 2025",
    number: "03",
    category: "PROFESSIONAL EXPERIENCE",
    accent: "emerald",
    summary:
      "Developed full-stack business applications and worked across frontend interfaces, backend services, databases, and client requirements.",
    details: [
      "Designed and developed responsive full-stack web applications using React.js, Spring Boot, MySQL, and PostgreSQL.",
      "Built secure RESTful APIs with JWT authentication, role-based authorization, and CRUD operations.",
      "Developed scalable business solutions including finance, hospital management, e-commerce, and event management systems.",
      "Integrated third-party services such as payment gateways, email notifications, and cloud-based media storage.",
      "Optimized database performance, application security, and backend architecture following MVC and clean coding principles.",
      "Collaborated with clients to gather requirements, deliver custom software solutions, and deploy production-ready applications.",
    ],
  },
];

const accents = {
  cyan: {
    text: "text-cyan-500 dark:text-cyan-300",
    line: "from-cyan-400 to-sky-500",
    border: "group-hover:border-cyan-400/40",
    glow: "bg-cyan-400/10",
    marker: "border-cyan-400/40 bg-cyan-400/10",
    bullet: "bg-cyan-400",
  },
  violet: {
    text: "text-violet-600 dark:text-violet-300",
    line: "from-violet-400 to-indigo-500",
    border: "group-hover:border-violet-400/40",
    glow: "bg-violet-400/10",
    marker: "border-violet-400/40 bg-violet-400/10",
    bullet: "bg-violet-400",
  },
  emerald: {
    text: "text-emerald-600 dark:text-emerald-300",
    line: "from-emerald-400 to-teal-500",
    border: "group-hover:border-emerald-400/40",
    glow: "bg-emerald-400/10",
    marker: "border-emerald-400/40 bg-emerald-400/10",
    bullet: "bg-emerald-400",
  },
};

function ExperienceCard({ exp, darkMode }) {
  const accent = accents[exp.accent];

  return (
    <article className="group relative grid gap-5 sm:grid-cols-[54px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[68px_minmax(0,1fr)] lg:gap-8">
      {/* Timeline marker */}
      <div className="relative z-10 hidden justify-center pt-8 sm:flex">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:shadow-lg lg:h-14 lg:w-14 ${accent.marker} ${
            darkMode ? "shadow-black/20" : "shadow-slate-200/70"
          }`}
        >
          <span className={`font-mono text-sm font-bold ${accent.text}`}>
            {exp.number}
          </span>
        </div>
      </div>

      {/* Main card */}
      <div
        className={`relative overflow-hidden rounded-[26px] border transition-all duration-500 group-hover:-translate-y-1 ${
          darkMode
            ? `border-white/[0.09] bg-[#0d1420]/90 shadow-[0_14px_45px_rgba(0,0,0,0.12)] group-hover:bg-[#101a29] group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)] ${accent.border}`
            : `border-slate-200/90 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.035)] group-hover:shadow-[0_25px_65px_rgba(15,23,42,0.09)] ${accent.border}`
        }`}
      >
        {/* Accent rail */}
        <div
          className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accent.line}`}
        />

        {/* Decorative light */}
        <div
          className={`pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full blur-[90px] transition-opacity duration-500 group-hover:opacity-100 ${accent.glow} opacity-60`}
        />

        <div className="relative p-5 sm:p-7 lg:p-9">
          {/* Company identity */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex min-w-0 items-start gap-4 sm:gap-5">
              {/* Logo */}
              <div
                className={`relative flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border p-3 transition-transform duration-500 group-hover:scale-[1.04] sm:h-[82px] sm:w-[82px] ${
                  darkMode
                    ? "border-white/10 bg-white"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1 pt-0.5">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span
                    className={`text-[9px] font-bold uppercase tracking-[0.19em] sm:text-[10px] ${accent.text}`}
                  >
                    {exp.category}
                  </span>

                  <span
                    className={`h-1 w-1 rounded-full ${
                      darkMode ? "bg-slate-600" : "bg-slate-300"
                    }`}
                  />

                  <span
                    className={`font-mono text-[10px] ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    EXP_{exp.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-[28px]">
                  {exp.company}
                </h3>

                <p
                  className={`mt-2 text-sm font-medium leading-6 sm:text-base ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {exp.role}
                </p>
              </div>
            </div>

            {/* Period and status */}
            <div className="flex flex-wrap items-center gap-2 lg:flex-col lg:items-end">
              <span
                className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-[10px] font-medium sm:text-xs ${
                  darkMode
                    ? "border-white/10 bg-white/[0.035] text-slate-300"
                    : "border-slate-200 bg-slate-50 text-slate-600"
                }`}
              >
                <FaCalendarAlt className={accent.text} />
                {exp.period}
              </span>

              {exp.status && (
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                    darkMode
                      ? "bg-cyan-400/[0.08] text-cyan-300"
                      : "bg-cyan-50 text-cyan-700"
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
                  </span>
                  {exp.status}
                </span>
              )}
            </div>
          </div>

          {/* Role summary */}
          <div
            className={`mt-6 rounded-xl border-l-2 px-4 py-3 ${
              darkMode
                ? "border-white/15 bg-white/[0.025]"
                : "border-slate-300 bg-slate-50/80"
            }`}
          >
            <p
              className={`text-sm leading-7 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {exp.summary}
            </p>
          </div>

          {/* Divider */}
          <div
            className={`my-6 h-px ${
              darkMode ? "bg-white/[0.08]" : "bg-slate-200"
            }`}
          />

          {/* Responsibilities */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <h4
              className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Key contributions
            </h4>

            <span
              className={`font-mono text-[10px] ${
                darkMode ? "text-slate-600" : "text-slate-400"
              }`}
            >
              {String(exp.details.length).padStart(2, "0")} ITEMS
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {exp.details.map((detail, index) => (
              <div key={detail} className="flex items-start gap-3">
                <span
                  className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125 ${accent.bullet}`}
                />

                <p
                  className={`text-sm leading-7 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>

          {/* Card footer */}
          <div
            className={`mt-7 flex items-center justify-between border-t pt-4 ${
              darkMode ? "border-white/[0.08]" : "border-slate-200"
            }`}
          >
            <span
              className={`font-mono text-[10px] tracking-wide ${
                darkMode ? "text-slate-600" : "text-slate-400"
              }`}
            >
              CAREER_LOG / {exp.number}
            </span>

            <FaBriefcase
              className={`text-sm opacity-70 transition-transform duration-300 group-hover:rotate-12 ${accent.text}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  const { darkMode } = useTheme();

  return (
    <section
      id="experience"
      className={`relative isolate min-h-screen w-full overflow-hidden px-4 py-20 transition-colors duration-500 sm:px-6 sm:py-24 lg:px-10 lg:py-28 ${
        darkMode
          ? "bg-[#080d16] text-white"
          : "bg-[#f7f9fc] text-slate-950"
      }`}
    >
      {/* Background environment */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_12%_12%,rgba(14,165,233,0.11),transparent_34%),radial-gradient(ellipse_at_92%_72%,rgba(139,92,246,0.09),transparent_34%)]"
              : "bg-[radial-gradient(ellipse_at_12%_12%,rgba(14,165,233,0.075),transparent_34%),radial-gradient(ellipse_at_92%_72%,rgba(139,92,246,0.055),transparent_34%)]"
          }`}
        />

        <div
          className={`absolute inset-0 bg-[size:52px_52px] ${
            darkMode
              ? "bg-[linear-gradient(to_right,rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,rgba(100,116,139,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.045)_1px,transparent_1px)]"
          }`}
        />

        <div className="absolute -left-40 top-52 h-96 w-96 rounded-full bg-sky-500/[0.07] blur-[130px]" />
        <div className="absolute -right-40 bottom-32 h-96 w-96 rounded-full bg-violet-500/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <header className="mb-12 grid gap-7 md:mb-16 md:grid-cols-[minmax(0,1fr)_300px] md:items-end lg:gap-12">
          <div>
            <div
              className={`mb-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] sm:text-xs ${
                darkMode ? "text-sky-300" : "text-blue-700"
              }`}
            >
              <span className="h-px w-9 bg-current" />
              Career / Experience
              <span
                className={`rounded-full border px-2 py-1 text-[9px] tracking-wider ${
                  darkMode
                    ? "border-white/10 text-slate-500"
                    : "border-slate-200 text-slate-500"
                }`}
              >
                2025 — NOW
              </span>
            </div>

            <h2 className="max-w-4xl text-[clamp(2.7rem,7vw,6.6rem)] font-semibold leading-[0.96] tracking-[-0.065em]">
              Where I&apos;ve
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                made an impact.
              </span>
            </h2>
          </div>

          <div className="max-w-sm md:justify-self-end">
            <p
              className={`text-sm leading-7 sm:text-base ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              A timeline of hands-on experience, real-world development work,
              and continuous growth as a full stack developer.
            </p>

            <div
              className={`mt-6 flex items-center gap-4 border-t pt-4 ${
                darkMode ? "border-white/10" : "border-slate-200"
              }`}
            >
              <span className="text-3xl font-semibold tracking-tight">
                03
              </span>

              <div>
                <p className="text-xs font-semibold">Experience entries</p>
                <p
                  className={`mt-1 text-[10px] ${
                    darkMode ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  Internships & development
                </p>
              </div>

              <div className="ml-auto flex items-end gap-1">
                {[18, 28, 20, 38, 25, 46, 32, 54].map((height, index) => (
                  <span
                    key={index}
                    style={{ height: `${height}px` }}
                    className={`w-1.5 rounded-t-sm ${
                      darkMode ? "bg-sky-400/50" : "bg-blue-500/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Timeline */}
        <div className="relative">
          <div
            className={`absolute bottom-8 left-[26px] top-8 hidden w-px sm:block lg:left-[33px] ${
              darkMode
                ? "bg-gradient-to-b from-cyan-400/50 via-violet-400/30 to-transparent"
                : "bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent"
            }`}
          />

          <div className="space-y-7 sm:space-y-9">
            {experiences.map((exp) => (
              <ExperienceCard
                key={exp.company}
                exp={exp}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <footer
          className={`mt-12 flex flex-col gap-5 border-t pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between ${
            darkMode ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div>
            <p className="text-base font-semibold tracking-tight sm:text-lg">
              Every experience is another opportunity to build better.
            </p>

            <p
              className={`mt-2 text-xs ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Learning · Building · Collaborating
            </p>
          </div>

          <div
            className={`inline-flex items-center gap-3 self-start rounded-full border px-4 py-3 text-xs font-medium sm:self-auto ${
              darkMode
                ? "border-white/10 bg-white/[0.025] text-slate-300"
                : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                darkMode ? "bg-cyan-300" : "bg-emerald-500"
              }`}
            />
            Focused on full stack development
            <FaArrowRight
              className={darkMode ? "text-sky-300" : "text-blue-600"}
            />
          </div>
        </footer>
      </div>
    </section>
  );
}
