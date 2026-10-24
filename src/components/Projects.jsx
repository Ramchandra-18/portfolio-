
import { useTheme } from "../context/ThemeContext";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaLeaf,
  FaShoppingCart,
  FaGraduationCap,
  FaHeartbeat,
  FaFilm,
  FaMoneyBillWave,
  FaBriefcase,
  FaStore,
} from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Carbon Calculator",
    subtitle: "Carbon Emissions Management System",
    description:
      "A carbon tracking platform for calculating and monitoring organizational emissions across Scope 1, 2, and 3. Implements emission-factor calculations, validation, and data integrity controls, with 20 REST API operations across 13 resource paths.",
    details:
      "JWT authentication · Organization-level isolation · Allocation validation",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React.js",
      "Hibernate",
      "MySQL",
      "REST APIs",
      "Swagger/OpenAPI",
    ],
    link: "https://github.com/Ramchandra-18",
    category: "CLIMATE TECH",
    featured: true,
    Icon: FaLeaf,
    accent: "emerald",
    metric: "01 / 03",
    visual: "carbon",
  },
  {
    number: "02",
    title: "Enterprise E-Commerce",
    subtitle: "Microservices Platform",
    description:
      "A distributed e-commerce platform designed around authentication, users, products, orders, inventory, payments, and notifications. Uses Spring Cloud Gateway, Netflix Eureka, OpenFeign, and Kafka to support service discovery, communication, and asynchronous event processing.",
    details:
      "API Gateway · Service Discovery · Event-Driven Architecture",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "JWT",
      "JPA",
      "Hibernate",
      "MySQL",
      "OpenFeign",
      "Apache Kafka",
      "Docker",
    ],
    link: "https://github.com/Ramchandra-18",
    category: "DISTRIBUTED SYSTEMS",
    featured: true,
    Icon: FaShoppingCart,
    accent: "violet",
    metric: "02 / 03",
    visual: "microservices",
  },
  {
    number: "03",
    title: "FinancePro",
    subtitle: "Loan Management System",
    description:
      "A full-stack enterprise loan management platform for customer onboarding, KYC verification, loan processing, EMI tracking, payments, and reporting, with secure authentication and role-based access control.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "JWT",
      "Apache Kafka",
      "Docker",
    ],
    link: "https://github.com/Ramchandra-18/financePro.git",
    category: "FINTECH",
    Icon: FaMoneyBillWave,
    accent: "emerald",
  },
  {
    number: "04",
    title: "MedSync",
    subtitle: "Blockchain Healthcare Platform",
    description:
      "A blockchain-powered healthcare supply chain platform connecting patients, doctors, pharmacies, and staff. Designed for transparent tracking of medicines, medical records, and healthcare transactions.",
    tech: ["React", "Flask", "Supabase", "Tailwind CSS"],
    link: "https://github.com/Ramchandra-18/MEDSYNC.git",
    category: "HEALTHTECH",
    Icon: FaHeartbeat,
    accent: "cyan",
  },
  {
    number: "05",
    title: "BookMyTicket",
    subtitle: "Movie Ticket Booking System",
    description:
      "A movie booking application for browsing movies, selecting showtimes and seats, and completing payments. Includes Razorpay integration, Cloudinary image storage, email OTP verification, and QR code ticket generation.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "Thymeleaf",
      "MySQL",
      "Razorpay",
      "Cloudinary",
    ],
    link: "https://github.com/Ramchandra-18/BookMyTicket-Movie-Ticket-Booking-System-.git",
    category: "BOOKING & PAYMENTS",
    Icon: FaFilm,
    accent: "orange",
  },
  {
    number: "06",
    title: "HireNest",
    subtitle: "Online Job Portal",
    description:
      "A recruitment platform connecting job seekers, recruiters, and administrators. Features job posting, resume management, email OTP verification, recruiter dashboards, applicant tracking, and cloud-based resume storage.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Thymeleaf",
      "Bootstrap",
      "MySQL",
      "Cloudinary",
      "Maven",
    ],
    link: "https://github.com/Ramchandra-18/HireNest---Job-Portal",
    category: "RECRUITMENT",
    Icon: FaBriefcase,
    accent: "blue",
  },
  {
    number: "07",
    title: "ShopEase",
    subtitle: "E-Commerce Web Application",
    description:
      "An e-commerce application for product discovery, inventory management, shopping carts, online orders, and delivery tracking. Includes role-based authentication, payment integration, and cloud image storage.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Thymeleaf",
      "MySQL",
      "Razorpay",
      "Cloudinary",
      "Maven",
    ],
    link: "https://github.com/Ramchandra-18/ShopEase---E-Commerce-Web-Application",
    category: "E-COMMERCE",
    Icon: FaStore,
    accent: "amber",
  },
  {
    number: "08",
    title: "e-Virtual Study Assistant",
    subtitle: "Student Learning Platform",
    description:
      "An educational platform designed to bring study resources, coding lab access, voice assistant integration, and online learning resources into one unified experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Ramchandra-18/e-virtual_assistant",
    category: "EDTECH",
    Icon: FaGraduationCap,
    accent: "pink",
  },
];

const accents = {
  emerald: {
    text: "text-emerald-400",
    lightText: "text-emerald-700",
    border: "border-emerald-400/20",
    glow: "bg-emerald-400/20",
    gradient: "from-emerald-400 to-teal-500",
    surface: "bg-emerald-400/10",
  },
  violet: {
    text: "text-violet-400",
    lightText: "text-violet-700",
    border: "border-violet-400/20",
    glow: "bg-violet-400/20",
    gradient: "from-violet-400 to-indigo-500",
    surface: "bg-violet-400/10",
  },
  cyan: {
    text: "text-cyan-400",
    lightText: "text-cyan-700",
    border: "border-cyan-400/20",
    glow: "bg-cyan-400/20",
    gradient: "from-cyan-400 to-blue-500",
    surface: "bg-cyan-400/10",
  },
  orange: {
    text: "text-orange-400",
    lightText: "text-orange-700",
    border: "border-orange-400/20",
    glow: "bg-orange-400/20",
    gradient: "from-orange-400 to-rose-500",
    surface: "bg-orange-400/10",
  },
  blue: {
    text: "text-blue-400",
    lightText: "text-blue-700",
    border: "border-blue-400/20",
    glow: "bg-blue-400/20",
    gradient: "from-blue-400 to-indigo-500",
    surface: "bg-blue-400/10",
  },
  amber: {
    text: "text-amber-400",
    lightText: "text-amber-700",
    border: "border-amber-400/20",
    glow: "bg-amber-400/20",
    gradient: "from-amber-400 to-orange-500",
    surface: "bg-amber-400/10",
  },
  pink: {
    text: "text-pink-400",
    lightText: "text-pink-700",
    border: "border-pink-400/20",
    glow: "bg-pink-400/20",
    gradient: "from-pink-400 to-fuchsia-500",
    surface: "bg-pink-400/10",
  },
};

function ProjectVisual({ project, darkMode, accent }) {
  const isCarbon = project.visual === "carbon";

  return (
    <div
      className={`relative min-h-[210px] overflow-hidden rounded-2xl border p-5 sm:min-h-[250px] sm:p-7 ${
        darkMode
          ? "border-white/[0.08] bg-[#080d16]"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      {/* Technical grid */}
      <div
        className={`pointer-events-none absolute inset-0 bg-[size:28px_28px] ${
          darkMode
            ? "bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(100,116,139,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.07)_1px,transparent_1px)]"
        }`}
      />

      <div
        className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-[65px] ${accent.glow}`}
      />

      {isCarbon ? (
        <>
          <div className="relative flex items-center justify-between">
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${accent.text}`}
            >
              Emissions analytics
            </span>
            <span
              className={`rounded-full border px-2.5 py-1 text-[9px] ${
                darkMode
                  ? "border-white/10 text-slate-400"
                  : "border-slate-200 text-slate-500"
              }`}
            >
              SCOPE 01—03
            </span>
          </div>

          {/* Isometric-inspired data blocks */}
          <div className="relative mt-8 flex h-[105px] items-end justify-center gap-3 sm:mt-9">
            {[48, 78, 60, 96, 70].map((height, i) => (
              <div
                key={height}
                className="relative w-9 transition-transform duration-300 hover:-translate-y-2 sm:w-12"
                style={{ height: `${height}px` }}
              >
                <div
                  className={`absolute inset-0 skew-y-[-10deg] rounded-t-md border ${accent.border} bg-gradient-to-t ${accent.gradient} opacity-70`}
                />
                <div
                  className={`absolute -top-2 left-1 h-3 w-full skew-x-[-35deg] rounded-sm bg-gradient-to-r ${accent.gradient}`}
                />
              </div>
            ))}
            <div
              className={`absolute bottom-0 left-[8%] right-[8%] h-px ${
                darkMode ? "bg-white/20" : "bg-slate-300"
              }`}
            />
          </div>

          <div className="relative mt-4 flex items-center justify-between gap-2">
            <span
              className={`text-[10px] ${darkMode ? "text-slate-500" : "text-slate-500"}`}
            >
              Organizational footprint
            </span>
            <span className={`text-xs font-semibold ${accent.text}`}>
              Emission factors
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="relative flex items-center justify-between">
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${accent.text}`}
            >
              Service architecture
            </span>
            <span
              className={`rounded-full border px-2.5 py-1 text-[9px] ${
                darkMode
                  ? "border-white/10 text-slate-400"
                  : "border-slate-200 text-slate-500"
              }`}
            >
              EVENT DRIVEN
            </span>
          </div>

          <div className="relative mt-6 grid grid-cols-[1fr_36px_1fr] items-center gap-2 sm:mt-7">
            <div className="space-y-2">
              {["API Gateway", "Discovery"].map((label) => (
                <div
                  key={label}
                  className={`rounded-lg border p-2.5 text-center text-[10px] font-medium sm:p-3 sm:text-xs ${
                    darkMode
                      ? "border-white/10 bg-white/[0.04] text-slate-300"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>

            <div className={`flex flex-col items-center gap-3 ${accent.text}`}>
              <span className="text-xl">⇄</span>
              <span className="text-xl">⇄</span>
            </div>

            <div className="space-y-2">
              {["Products", "Orders"].map((label) => (
                <div
                  key={label}
                  className={`rounded-lg border p-2.5 text-center text-[10px] font-medium sm:p-3 sm:text-xs ${
                    darkMode
                      ? `border-white/10 ${accent.surface} text-slate-200`
                      : `border-slate-200 ${accent.surface} text-slate-700`
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative mt-4 flex items-center justify-center gap-2 rounded-lg border py-2 text-[10px] ${
              darkMode
                ? "border-white/10 bg-white/[0.03] text-slate-400"
                : "border-slate-200 bg-white/80 text-slate-500"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${accent.glow}`} />
            Kafka · OpenFeign · Docker
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const { darkMode } = useTheme();

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className={`relative isolate min-h-screen overflow-hidden px-4 py-20 transition-colors duration-500 sm:px-6 sm:py-24 lg:px-10 ${
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
              ? "bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.12),transparent_45%),radial-gradient(ellipse_at_100%_70%,rgba(99,102,241,0.08),transparent_35%)]"
              : "bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.10),transparent_45%),radial-gradient(ellipse_at_100%_70%,rgba(99,102,241,0.07),transparent_35%)]"
          }`}
        />
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-[130px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <header className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div
              className={`mb-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] sm:text-xs ${
                darkMode ? "text-sky-300" : "text-blue-600"
              }`}
            >
              <span className="h-px w-8 bg-current" />
              Portfolio / Selected Work
            </div>

            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
              Turning ideas
              <br />
              into{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                software.
              </span>
            </h2>
          </div>

          <div className="max-w-xs md:pb-2">
            <p
              className={`text-sm leading-7 sm:text-base ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              A collection of applications and engineering experiments built
              around real-world problems, thoughtful architecture, and
              reliable user experiences.
            </p>

            <div
              className={`mt-5 flex items-center gap-3 text-xs ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              <span className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                08
              </span>
              Selected projects
              <span className="h-px flex-1 bg-current opacity-20" />
            </div>
          </div>
        </header>

        {/* FEATURED ENGINEERING PROJECTS */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Featured engineering
            </span>
            <div className={`h-px flex-1 ${darkMode ? "bg-white/10" : "bg-slate-200"}`} />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => {
              const accent = accents[project.accent];

              return (
                <article
                  key={project.title}
                  className={`group relative overflow-hidden rounded-3xl border p-4 transition-all duration-500 hover:-translate-y-1 sm:p-6 lg:p-7 ${
                    darkMode
                      ? "border-white/10 bg-[#0d1420] hover:border-white/20"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/5"
                  }`}
                >
                  <div className={`absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[90px] ${accent.glow}`} />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className={`text-[10px] font-semibold tracking-[0.2em] ${accent.text}`}>
                        FEATURED / {project.number}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] ${
                          darkMode
                            ? "border-white/10 text-slate-400"
                            : "border-slate-200 text-slate-500"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    <ProjectVisual
                      project={project}
                      darkMode={darkMode}
                      accent={accent}
                    />

                    <div className="mt-6 flex items-start gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${accent.border} ${accent.surface} ${accent.text}`}>
                        <project.Icon className="text-xl" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                          {project.title}
                        </h3>
                        <p className={`mt-1 text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className={`mt-5 text-sm leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {project.description}
                    </p>

                    <p className={`mt-4 border-l-2 pl-3 text-xs leading-6 ${accent.border} ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {project.details}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-md border px-2.5 py-1.5 text-[10px] font-medium ${
                            darkMode
                              ? "border-white/[0.08] bg-white/[0.025] text-slate-300"
                              : "border-slate-200 bg-slate-50 text-slate-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`mt-6 border-t pt-5 ${darkMode ? "border-white/10" : "border-slate-200"}`}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className={`inline-flex items-center gap-3 text-sm font-semibold transition-colors ${accent.text}`}
                      >
                        Explore repository
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* OTHER PROJECTS */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              More projects
            </span>
            <div className={`h-px flex-1 ${darkMode ? "bg-white/10" : "bg-slate-200"}`} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project) => {
              const accent = accents[project.accent];

              return (
                <article
                  key={project.title}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6 ${
                    darkMode
                      ? "border-white/[0.09] bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
                      : "border-slate-200 bg-white/80 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
                  }`}
                >
                  <div className={`absolute right-0 top-0 h-24 w-24 rounded-full opacity-50 blur-[45px] ${accent.glow}`} />

                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-7 flex items-center justify-between">
                      <span className={`text-xs font-semibold tracking-[0.18em] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                        / {project.number}
                      </span>

                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accent.border} ${accent.surface} ${accent.text}`}>
                        <project.Icon className="text-lg" />
                      </div>
                    </div>

                    <span className={`mb-3 text-[9px] font-semibold tracking-[0.18em] ${accent.text}`}>
                      {project.category}
                    </span>

                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <p className={`mt-1 text-xs ${darkMode ? "text-slate-500" : "text-slate-500"}`}>
                      {project.subtitle}
                    </p>

                    <p className={`mt-4 flex-1 text-sm leading-7 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-md border px-2 py-1 text-[10px] ${
                            darkMode
                              ? "border-white/[0.08] text-slate-400"
                              : "border-slate-200 text-slate-500"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`mt-6 border-t pt-4 ${darkMode ? "border-white/10" : "border-slate-200"}`}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className={`inline-flex items-center gap-2 text-xs font-semibold ${accent.text}`}
                      >
                        View repository
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        <FaExternalLinkAlt className="text-[9px]" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* FOOTER */}
        <footer className={`mt-14 flex flex-col gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between ${darkMode ? "border-white/10" : "border-slate-200"}`}>
          <div>
            <p className="text-sm font-semibold">
              Built with curiosity. Driven by engineering.
            </p>
            <p className={`mt-1 text-xs ${darkMode ? "text-slate-500" : "text-slate-500"}`}>
              Software development · Architecture · Continuous learning
            </p>
          </div>

          <a
            href="https://github.com/Ramchandra-18"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-950"
            }`}
          >
            <FaGithub className="text-lg" />
            GitHub Profile
            <FaExternalLinkAlt className="text-[10px]" />
          </a>
        </footer>
      </div>
    </section>
  );
}
