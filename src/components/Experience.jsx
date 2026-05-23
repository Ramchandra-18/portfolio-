import { useTheme } from "../context/ThemeContext";
import code from "../assets/CodeAlpha.png"
import jsp from "../assets/jsp.png"

import {
  FaBriefcase,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

const experiences = [
  {
    company: "CodeAlpha",
    logo: code,
    role: "Full Stack Developer Intern",
    period: "May 01 – May 30 2025",
    details: [
      "Developed scalable e-commerce platforms with secure payment gateways and real-time inventory management using React, Node.js, and Supabase.",
      "Engineered user-focused social media platforms featuring messaging, post sharing, and notification systems.",
      "Built collaborative project management tools supporting task tracking, team roles, and automated workflow integrations.",
    ],
  },

  {
    company: "JSpiders Rajajinagar",
    logo: jsp,
    role: "Java Full Stack Developer Intern",
    period: "Present",
    details: [
      "Currently undergoing intensive training in Java Full Stack Development.",
      "Gaining hands-on experience in Core Java, JDBC, Servlets, and Spring Framework.",
      "Working with HTML, CSS, JavaScript, and React.js for frontend development.",
      "Learning database integration using MySQL and PostgreSQL.",
      "Developing real-time applications and improving problem-solving skills.",
      "Collaborating on mini-projects to strengthen full stack development knowledge.",
    ],
  },
];

export default function Experience() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10 sm:py-16 transition-all duration-500 ${
        darkMode
          ? "bg-[#070B1A] text-white"
          : "bg-[#eef2ff] text-gray-900"
      }`}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-[-150px] left-[-120px] w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]"></div>

        {/* Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_25%)]"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div
        className={`relative z-10 w-full max-w-7xl rounded-[2rem] sm:rounded-[3rem] border backdrop-blur-3xl shadow-2xl overflow-hidden ${
          darkMode
            ? "bg-[#0f172acc] border-white/10"
            : "bg-white/60 border-white/30"
        }`}
      >
        {/* Inner Glow */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-violet-500/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-blue-500/20 rounded-full blur-3xl"></div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">

          {/* ================= HEADING ================= */}
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Experience
            </h2>

            <p
              className={`mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              My professional journey, internships, and
              hands-on experience in full stack development
              and modern technologies.
            </p>

          </div>

          {/* ================= EXPERIENCE GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

            {experiences.map((exp) => (
              <div
                key={exp.company}
                className={`group relative overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] border backdrop-blur-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white/70 border-white/40"
                }`}
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Floating Icon */}
                <div className="absolute top-6 right-6 opacity-10">

                  <FaBriefcase
                    size={70}
                    className="text-violet-400"
                  />

                </div>

                {/* ================= TOP ================= */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">

                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-16 h-16 rounded-2xl object-cover bg-white p-2 shadow-xl"
                  />

                  <div>

                    <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                      {exp.company}
                    </h3>

                    <p className="mt-2 text-violet-400 font-semibold text-base sm:text-lg">
                      {exp.role}
                    </p>

                    {/* Period */}
                    <div
                      className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl ${
                        darkMode
                          ? "bg-white/10"
                          : "bg-gray-100"
                      }`}
                    >
                      <FaCalendarAlt className="text-blue-400" />

                      <span className="text-xs sm:text-sm font-medium">
                        {exp.period}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Divider */}
                <div
                  className={`my-6 h-[1px] w-full ${
                    darkMode
                      ? "bg-white/10"
                      : "bg-gray-200"
                  }`}
                ></div>

                {/* ================= DETAILS ================= */}
                <div className="relative z-10 space-y-4">

                  {exp.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 text-violet-400 flex-shrink-0">
                        <FaArrowRight size={12} />
                      </div>

                      <p
                        className={`leading-relaxed text-sm sm:text-base ${
                          darkMode
                            ? "text-gray-300"
                            : "text-gray-700"
                        }`}
                      >
                        {detail}
                      </p>

                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}