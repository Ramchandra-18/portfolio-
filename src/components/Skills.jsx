
import { useTheme } from "../context/ThemeContext";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaNodeJs,
  FaCode,
  FaLock,
  FaServer,
  FaShieldAlt,
  FaDatabase,
  FaTools,
  FaCloud,
} from "react-icons/fa";

import {
  SiSpring,
  SiHibernate,
  SiMysql,
  SiPostgresql,
  SiApachekafka,
  SiKubernetes,
  SiPostman,
  SiIntellijidea,
  SiEclipseide,
  SiBootstrap,
  SiThymeleaf,
  SiApachemaven,
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiJenkins,
  SiSwagger,
} from "react-icons/si";

import { MdStorage } from "react-icons/md";

const skills = [
  // PROGRAMMING LANGUAGES
  { name: "Java", category: "Languages", Icon: FaJava, color: "text-red-500" },
  { name: "JavaScript", category: "Languages", Icon: FaJsSquare, color: "text-yellow-400" },

  // FRONTEND DEVELOPMENT
  { name: "React.js", category: "Frontend", Icon: FaReact, color: "text-cyan-400" },
  { name: "HTML5", category: "Frontend", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", category: "Frontend", Icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Tailwind CSS", category: "Frontend", Icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Bootstrap", category: "Frontend", Icon: SiBootstrap, color: "text-purple-500" },
  { name: "Vite", category: "Frontend", Icon: SiVite, color: "text-purple-400" },

  // BACKEND DEVELOPMENT
  { name: "Spring Boot", category: "Backend", Icon: SiSpring, color: "text-green-500" },
  { name: "Spring MVC", category: "Backend", Icon: SiSpring, color: "text-green-600" },
  { name: "Spring Security", category: "Backend", Icon: FaShieldAlt, color: "text-green-400" },
  { name: "Node.js", category: "Backend", Icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", category: "Backend", Icon: FaServer, color: "text-slate-400" },
  { name: "Servlets", category: "Backend", Icon: FaCode, color: "text-blue-400" },
  { name: "JSP", category: "Backend", Icon: FaCode, color: "text-indigo-400" },
  { name: "Thymeleaf", category: "Backend", Icon: SiThymeleaf, color: "text-green-600" },
  { name: "RESTful APIs", category: "Backend", Icon: FaCloud, color: "text-sky-400" },
  { name: "Microservices", category: "Backend", Icon: FaServer, color: "text-violet-400" },

  // DATABASES & ORM
  { name: "MySQL", category: "Database", Icon: SiMysql, color: "text-sky-500" },
  { name: "PostgreSQL", category: "Database", Icon: SiPostgresql, color: "text-blue-400" },
  { name: "MongoDB", category: "Database", Icon: SiMongodb, color: "text-green-500" },
  { name: "JPA", category: "Database", Icon: FaDatabase, color: "text-indigo-400" },
  { name: "Spring Data JPA", category: "Database", Icon: SiSpring, color: "text-green-500" },
  { name: "ORM", category: "Database", Icon: MdStorage, color: "text-sky-400" },
  { name: "Hibernate", category: "Database", Icon: SiHibernate, color: "text-yellow-500" },
  { name: "JDBC", category: "Database", Icon: MdStorage, color: "text-blue-400" },

  // SECURITY
  { name: "JWT Authentication", category: "Security", Icon: FaLock, color: "text-amber-400" },
  { name: "RBAC", category: "Security", Icon: FaShieldAlt, color: "text-blue-400" },
  { name: "BCrypt", category: "Security", Icon: FaLock, color: "text-emerald-400" },
  { name: "OAuth 2.0", category: "Security", Icon: FaShieldAlt, color: "text-violet-400" },
  { name: "Authentication", category: "Security", Icon: FaLock, color: "text-sky-400" },
  { name: "Authorization", category: "Security", Icon: FaShieldAlt, color: "text-indigo-400" },

  // TESTING & API TOOLS
  { name: "Postman", category: "Testing", Icon: SiPostman, color: "text-orange-500" },
  { name: "Swagger", category: "Testing", Icon: SiSwagger, color: "text-green-500" },
  { name: "OpenAPI", category: "Testing", Icon: FaCode, color: "text-emerald-400" },
  { name: "API Testing", category: "Testing", Icon: FaTools, color: "text-orange-400" },

  // DEVOPS & DEVELOPMENT TOOLS
  { name: "Git", category: "DevOps", Icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", category: "DevOps", Icon: FaGithub, color: "text-slate-400" },
  { name: "Maven", category: "DevOps", Icon: SiApachemaven, color: "text-red-500" },
  { name: "Docker", category: "DevOps", Icon: FaDocker, color: "text-sky-400" },
  { name: "Docker Compose", category: "DevOps", Icon: FaDocker, color: "text-blue-400" },
  { name: "Kubernetes", category: "DevOps", Icon: SiKubernetes, color: "text-blue-500" },
  { name: "Jenkins", category: "DevOps", Icon: SiJenkins, color: "text-red-400" },
  { name: "Apache Kafka", category: "DevOps", Icon: SiApachekafka, color: "text-amber-400" },
  { name: "IntelliJ IDEA", category: "DevOps", Icon: SiIntellijidea, color: "text-pink-400" },
  { name: "Eclipse", category: "DevOps", Icon: SiEclipseide, color: "text-indigo-400" },
];

const categories = [
  { name: "Programming Languages", subtitle: "Core languages", key: "Languages" },
  { name: "Frontend Development", subtitle: "Interfaces & experiences", key: "Frontend" },
  { name: "Backend Development", subtitle: "Frameworks & APIs", key: "Backend" },
  { name: "Databases & ORM", subtitle: "Data persistence", key: "Database" },
  { name: "Security", subtitle: "Application protection", key: "Security" },
  { name: "Testing & API Tools", subtitle: "Testing & documentation", key: "Testing" },
  { name: "DevOps & Development Tools", subtitle: "Build, version control & deployment", key: "DevOps" },
];

export default function Skills() {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`relative isolate min-h-screen w-full overflow-hidden px-4 py-20 transition-colors duration-500 sm:px-6 sm:py-24 lg:px-10 ${
        darkMode
          ? "bg-[#080d16] text-white"
          : "bg-[#f7f9fc] text-slate-950"
      }`}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.12),transparent_48%)]"
              : "bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.10),transparent_48%)]"
          }`}
        />

        <div
          className={`absolute inset-0 bg-[size:64px_64px] ${
            darkMode
              ? "bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,rgba(100,116,139,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.045)_1px,transparent_1px)]"
          }`}
        />

        <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />

        <div
          className={`absolute left-[8%] top-[18%] hidden h-20 w-20 rotate-12 rounded-2xl border lg:block ${
            darkMode
              ? "border-sky-300/15 bg-gradient-to-br from-sky-400/10 to-blue-950/40"
              : "border-blue-200/70 bg-gradient-to-br from-white to-blue-100/70"
          }`}
        />

        <div
          className={`absolute right-[9%] top-[28%] hidden h-12 w-12 -rotate-12 rounded-xl border lg:block ${
            darkMode
              ? "border-indigo-300/20 bg-indigo-400/10"
              : "border-indigo-200 bg-indigo-100/70"
          }`}
        />
      </div>

      {/* MAIN CONTAINER */}
      <div
        className={`relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] border shadow-2xl sm:rounded-[2.5rem] ${
          darkMode
            ? "border-white/10 bg-slate-950/50 shadow-black/20"
            : "border-white bg-white/70 shadow-slate-900/5"
        }`}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[100px]" />

        <div className="relative p-6 sm:p-10 lg:p-14 xl:p-16">
          {/* HEADING */}
          <div className="mb-12 text-center sm:mb-16">
            <div
              className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs ${
                darkMode
                  ? "border-white/10 bg-white/[0.04] text-slate-300"
                  : "border-slate-200 bg-white/80 text-slate-600"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Technical Arsenal
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              Skills &{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p
              className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              The technologies, frameworks, and tools I use to build modern
              applications, develop reliable backend systems, and create
              polished user experiences.
            </p>
          </div>

          {/* SKILL CATEGORIES */}
          <div className="space-y-10 sm:space-y-14">
            {categories.map((category, index) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category.key
              );

              return (
                <div key={category.key}>
                  <div className="mb-5 flex items-center gap-4 sm:mb-6">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-bold ${
                        darkMode
                          ? "border-sky-300/20 bg-sky-400/10 text-sky-300"
                          : "border-blue-200 bg-blue-50 text-blue-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                        {category.name}
                      </h3>
                      <p className={`mt-1 text-xs ${
                        darkMode ? "text-slate-500" : "text-slate-500"
                      }`}>
                        {category.subtitle}
                      </p>
                    </div>

                    <div className={`hidden h-px flex-1 sm:block ${
                      darkMode ? "bg-white/10" : "bg-slate-200"
                    }`} />
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {categorySkills.map(({ name, Icon, color }) => (
                      <div
                        key={name}
                        className={`group relative flex min-h-[118px] flex-col items-center justify-center overflow-hidden rounded-2xl border p-4 text-center transition-all duration-300 hover:-translate-y-1 ${
                          darkMode
                            ? "border-white/[0.08] bg-white/[0.025] hover:border-sky-300/25 hover:bg-white/[0.055] hover:shadow-[0_12px_35px_rgba(14,165,233,0.08)]"
                            : "border-slate-200/80 bg-white/75 hover:border-blue-200 hover:bg-white hover:shadow-[0_12px_35px_rgba(37,99,235,0.08)]"
                        }`}
                      >
                        <div
                          className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                            darkMode
                              ? "bg-gradient-to-br from-sky-400/[0.08] to-transparent"
                              : "bg-gradient-to-br from-blue-400/[0.07] to-transparent"
                          }`}
                        />

                        <Icon
                          aria-hidden="true"
                          className={`relative z-10 h-8 w-8 sm:h-10 sm:w-10 ${color} transition-transform duration-300 group-hover:scale-110`}
                        />

                        <span className={`relative z-10 mt-3 text-xs font-semibold leading-5 sm:text-sm ${
                          darkMode ? "text-slate-200" : "text-slate-700"
                        }`}>
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FOOTER */}
          <div
            className={`mt-12 flex flex-col items-center justify-between gap-3 rounded-2xl border p-5 text-center sm:mt-16 sm:flex-row sm:text-left ${
              darkMode
                ? "border-white/10 bg-white/[0.025]"
                : "border-slate-200 bg-slate-50/80"
            }`}
          >
            <div>
              <p className="text-sm font-semibold">
                Always learning. Always building.
              </p>
              <p className={`mt-1 text-xs leading-5 ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}>
                Exploring better ways to build maintainable, secure, and scalable software.
              </p>
            </div>

            <span className={`shrink-0 text-sm font-semibold ${
              darkMode ? "text-sky-300" : "text-blue-600"
            }`}>
              {"</>"} Full Stack
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
