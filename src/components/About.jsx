import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function About() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 md:px-12 py-20 transition-all duration-500 ${
        darkMode
          ? "bg-[#070B1A] text-white"
          : "bg-[#eef2ff] text-gray-900"
      }`}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Mesh Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_25%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_30%)]"></div>

        {/* Glow Orbs */}
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      </div>

      {/* ================= THEME TOGGLE ================= */}
      {/* <button
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-6 right-6 z-20 w-14 h-14 rounded-2xl border backdrop-blur-3xl flex items-center justify-center transition-all duration-500 hover:scale-110 ${
          darkMode
            ? "bg-white/10 border-white/10"
            : "bg-white/70 border-white/40"
        }`}
      >
        {darkMode ? (
          <FaSun className="text-yellow-300 text-xl" />
        ) : (
          <FaMoon className="text-violet-600 text-xl" />
        )}
      </button> */}

      {/* ================= MAIN CARD ================= */}
      <div
        className={`relative z-10 w-full max-w-7xl rounded-[3rem] border backdrop-blur-3xl shadow-2xl overflow-hidden transition-all duration-500 ${
          darkMode
            ? "bg-[#0f172acc] border-white/10"
            : "bg-white/60 border-white/30"
        }`}
      >
        {/* Glow */}
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-violet-500/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-blue-500/20 rounded-full blur-3xl"></div>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center p-8 sm:p-12 lg:p-20">

          {/* ================= LEFT SIDE ================= */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-3 px-5 py-3 rounded-full border backdrop-blur-2xl mb-8 ${
                darkMode
                  ? "bg-white/10 border-white/10"
                  : "bg-white/70 border-white/40"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

              <span className="text-sm uppercase tracking-[3px] font-semibold">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">

              Building

              <br />

              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                Modern
              </span>

              <br />

              Experiences

            </h1>

            {/* Description */}
            <p
              className={`mt-8 text-lg md:text-xl leading-relaxed max-w-2xl ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              Hi, I'm{" "}
              <span className="font-bold text-violet-400">
                Ramchandra
              </span>
              , a passionate{" "}
              <span className="font-semibold">
                Full Stack Developer
              </span>{" "}
              focused on creating scalable web applications,
              futuristic UI experiences, and immersive digital
              products with smooth interactions and premium design.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

              <a
                href="/ramchandra_full_stack_dev_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 text-white font-semibold shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:scale-105 transition-all duration-500"
              >
                <span className="relative z-10">
                  Download CV 📄
                </span>

                
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </a>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex justify-center">

            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-blue-500/20 rounded-[3rem] blur-3xl"></div>

            {/* Glass Card */}
            <div
              className={`relative w-full max-w-md rounded-[2.5rem] border backdrop-blur-3xl p-8 transition-all duration-500 ${
                darkMode
                  ? "bg-white/10 border-white/10"
                  : "bg-white/70 border-white/40"
              }`}
            >
              {/* Mini Heading */}
              <h3 className="text-2xl font-bold mb-6">
                Developer Profile
              </h3>

              {/* Stats */}
              <div className="space-y-5">

                <div
                  className={`p-5 rounded-2xl ${
                    darkMode
                      ? "bg-white/10"
                      : "bg-gray-100"
                  }`}
                >
                  <p className="text-sm opacity-70 mb-1">
                    Experience
                  </p>

                  <h4 className="text-2xl font-bold">
                    Fresher
                  </h4>
                </div>

                <div
                  className={`p-5 rounded-2xl ${
                    darkMode
                      ? "bg-white/10"
                      : "bg-gray-100"
                  }`}
                >
                  <p className="text-sm opacity-70 mb-1">
                    Specialization
                  </p>

                  <h4 className="text-2xl font-bold">
                    Full Stack Development
                  </h4>
                </div>

                <div
                  className={`p-5 rounded-2xl ${
                    darkMode
                      ? "bg-white/10"
                      : "bg-gray-100"
                  }`}
                >
                  <p className="text-sm opacity-70 mb-1">
                    Focus
                  </p>

                  <h4 className="text-2xl font-bold">
                    Modern UI & Scalable Apps
                  </h4>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}