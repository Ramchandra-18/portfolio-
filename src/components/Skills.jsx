import { useTheme } from "../context/ThemeContext";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGit,
  FaJava,
} from "react-icons/fa";

import {
  SiMysql,
  SiFigma,
  SiSpring,
} from "react-icons/si";

import { MdDesignServices } from "react-icons/md";

import { GiGearHammer } from "react-icons/gi";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="w-12 h-12 sm:w-14 sm:h-14 text-orange-500" />,
  },

  {
    name: "CSS",
    icon: <FaCss3Alt className="w-12 h-12 sm:w-14 sm:h-14 text-blue-500" />,
  },

  {
    name: "JavaScript",
    icon: <FaJsSquare className="w-12 h-12 sm:w-14 sm:h-14 text-yellow-400" />,
  },

  {
    name: "React",
    icon: <FaReact className="w-12 h-12 sm:w-14 sm:h-14 text-cyan-400" />,
  },

  {
    name: "Java",
    icon: <FaJava className="w-12 h-12 sm:w-14 sm:h-14 text-red-500" />,
  },

  {
    name: "Spring",
    icon: <SiSpring className="w-12 h-12 sm:w-14 sm:h-14 text-green-500" />,
  },

  {
    name: "GitHub",
    icon: <FaGithub className="w-12 h-12 sm:w-14 sm:h-14 text-white" />,
  },

  {
    name: "SQL",
    icon: <SiMysql className="w-12 h-12 sm:w-14 sm:h-14 text-blue-600" />,
  },

  {
    name: "UI/UX",
    icon: <SiFigma className="w-12 h-12 sm:w-14 sm:h-14 text-pink-500" />,
  },

  {
    name: "Web Design",
    icon: <MdDesignServices className="w-12 h-12 sm:w-14 sm:h-14 text-violet-500" />,
  },

  {
    name: "Git",
    icon: <FaGit className="w-12 h-12 sm:w-14 sm:h-14 text-orange-500" />,
  },

  {
    name: "Servlet",
    icon: <GiGearHammer className="w-12 h-12 sm:w-14 sm:h-14 text-gray-400" />,
  },
];

export default function Skills() {
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
              What I Do
            </h2>

            <p
              className={`mt-4 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Full Stack Development, UI/UX Design, scalable
              applications, and immersive digital experiences
              focused on creativity, performance, and modern
              user interaction.
            </p>

          </div>

          {/* ================= SKILLS GRID ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">

            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`group relative overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] border backdrop-blur-3xl p-5 sm:p-6 lg:p-8 flex flex-col items-center justify-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white/70 border-white/40"
                }`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Floating Glow */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {skill.icon}
                </div>

                {/* Text */}
                <span
                  className={`relative z-10 mt-4 sm:mt-5 text-xs sm:text-sm md:text-base font-semibold tracking-wide text-center ${
                    darkMode
                      ? "text-gray-200"
                      : "text-gray-800"
                  }`}
                >
                  {skill.name}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}