import { useTheme } from "../context/ThemeContext";
import vtu from "../assets/vtu.png"
import cpm from "../assets/cpm.png"
import ssvhs from "../assets/ssvhs.png"


import {
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";

const education = [
  {
    school: "Vishveshwarya Technological University (VTU)",
    logo: vtu,
    degree: "B.Tech in Computer Science",
    period: "2022 - 2026",
    grade: "8.4 CGPA",
  },
  {
    school: "Chandrakant Patil Science PU College",
    logo: "/cpm.png",
    degree: "Pre-University",
    period: "2020 - 2022",
    grade: "78%",
  },
  {
    school: "Swami Vivekananda High School",
    logo: ssvhs,
    degree: "SSLC",
    period: "2016 - 2020",
    grade: "87%",
  },
];

export default function Education() {
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
          <div className="text-center mb-12 lg:mb-16">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Education
            </h2>

            <p
              className={`mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              My academic journey, achievements, and learning
              experiences throughout the years.
            </p>

          </div>

          {/* ================= TIMELINE ================= */}
          <div className="relative max-w-6xl mx-auto">

            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-blue-500"></div>

            {/* Mobile Line */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-blue-500"></div>

            <div className="space-y-10 sm:space-y-14">

              {education.map((edu, index) => (
                <div
                  key={edu.school}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } items-center gap-6 lg:gap-10`}
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 shadow-[0_0_30px_rgba(139,92,246,0.6)] z-20"></div>

                  {/* ================= CARD ================= */}
                  <div
                    className={`ml-10 md:ml-0 w-full md:w-[45%] rounded-[1.8rem] sm:rounded-[2rem] border backdrop-blur-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 ${
                      darkMode
                        ? "bg-white/10 border-white/10"
                        : "bg-white/70 border-white/40"
                    }`}
                  >
                    {/* Top */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="w-16 h-16 rounded-2xl object-cover bg-white p-2 shadow-lg"
                      />

                      <div>

                        <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                          {edu.school}
                        </h3>

                        <p
                          className={`mt-2 text-sm sm:text-base ${
                            darkMode
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`}
                        >
                          {edu.degree}
                        </p>

                      </div>

                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">

                      {/* Period */}
                      <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                          darkMode
                            ? "bg-white/10"
                            : "bg-gray-100"
                        }`}
                      >
                        <FaCalendarAlt className="text-violet-400" />

                        <span className="text-xs sm:text-sm font-medium">
                          {edu.period}
                        </span>

                      </div>

                      {/* Grade */}
                      <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                          darkMode
                            ? "bg-white/10"
                            : "bg-gray-100"
                        }`}
                      >
                        <FaGraduationCap className="text-blue-400" />

                        <span className="text-xs sm:text-sm font-medium">
                          {edu.grade}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}