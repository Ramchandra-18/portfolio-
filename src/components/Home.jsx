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
import profile from "../assets/profile.JPG"

export default function Home() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <section
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-[#060816] text-white"
          : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Mesh Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_25%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.15),transparent_30%)]"></div>

        {/* Blur Circles */}
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[140px]"></div>

        <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      </div>

      {/* ================= THEME TOGGLE ================= */}
      <div className="fixed top-6 right-6 z-50">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`w-14 h-14 rounded-2xl border backdrop-blur-3xl flex items-center justify-center transition-all duration-500 hover:scale-110 ${
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
        </button>

      </div>

      {/* ================= HERO ================= */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 md:px-12 flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">

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

              <span className="text-sm tracking-[3px] uppercase font-semibold">
                Available for Work
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">

              Ramchandra

              <br />

              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>

            </h1>

            {/* Description */}
            <p
              className={`mt-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              I'm{" "}
              <span className="font-bold text-violet-400">
                Ramchandra
              </span>
              , a full stack developer crafting immersive web
              experiences with modern UI, scalable systems,
              futuristic aesthetics, and premium interactions.
            </p>

            {/* Buttons */}
           {/* Buttons */}
{/* Buttons */}
<div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

  {/* Projects Button */}
  <button
    type="button"
    onClick={() => {
      window.scrollTo({
        top: document.getElementById("projects").offsetTop,
        behavior: "smooth",
      });
    }}
    className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 text-white font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(139,92,246,0.35)]"
  >
    View Projects

    <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
  </button>

  {/* Contact Button */}
  <button
    type="button"
    onClick={() => {
      window.scrollTo({
        top: document.getElementById("contact").offsetTop,
        behavior: "smooth",
      });
    }}
    className={`px-8 py-4 rounded-2xl border backdrop-blur-2xl font-semibold transition-all duration-500 hover:scale-105 ${
      darkMode
        ? "bg-white/10 border-white/10 hover:bg-white/20"
        : "bg-white/70 border-white/40 hover:bg-white"
    }`}
  >
    Contact Me
  </button>

</div>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-5 flex-wrap">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ramchandra-18-/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 rounded-2xl border backdrop-blur-3xl flex items-center justify-center transition-all duration-500 hover:scale-110 overflow-hidden ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white/70 border-white/40"
                }`}
              >
                <div className="absolute inset-0 bg-[#0A66C2]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <FaLinkedin className="relative z-10 text-2xl text-[#0A66C2] group-hover:scale-125 transition-all duration-300" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Ramchandra-18"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 rounded-2xl border backdrop-blur-3xl flex items-center justify-center transition-all duration-500 hover:scale-110 overflow-hidden ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white/70 border-white/40"
                }`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <FaGithub className="relative z-10 text-2xl group-hover:scale-125 transition-all duration-300" />
              </a>

              {/* Email */}
              <a
                href="mailto:rajalasangi@gmail.com"
                className={`group relative w-14 h-14 rounded-2xl border backdrop-blur-3xl flex items-center justify-center transition-all duration-500 hover:scale-110 overflow-hidden ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white/70 border-white/40"
                }`}
              >
                <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <FaEnvelope className="relative z-10 text-2xl text-violet-400 group-hover:scale-125 transition-all duration-300" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918088237366"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-14 h-14 rounded-2xl border backdrop-blur-3xl flex items-center justify-center transition-all duration-500 hover:scale-110 overflow-hidden ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white/70 border-white/40"
                }`}
              >
                <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <FaWhatsapp className="relative z-10 text-2xl text-green-500 group-hover:scale-125 transition-all duration-300" />
              </a>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex justify-center">

            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-blue-500/20 rounded-[3rem] blur-3xl"></div>

            {/* Glass Card */}
            <div
              className={`relative p-5 sm:p-6 rounded-[3rem] border backdrop-blur-3xl overflow-hidden ${
                darkMode
                  ? "bg-white/10 border-white/10"
                  : "bg-white/60 border-white/40"
              }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10"></div>

              {/* Image Container */}
              <div className="relative">

                {/* Image */}
                <img
                  src={profile}
                  alt="Ramchandra"
                  className="relative z-10 w-[300px] sm:w-[420px] lg:w-[480px] h-auto rounded-[2.5rem] object-cover shadow-2xl"
                />

                {/* Bottom Name Card */}
                <div className="mt-6 flex justify-center">

                  <div
                    className={`px-6 sm:px-8 py-5 rounded-[2rem] border backdrop-blur-3xl text-center ${
                      darkMode
                        ? "bg-[#0f172acc] border-white/10"
                        : "bg-white/80 border-white/40"
                    }`}
                  >
                    <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                      Ramchandra
                    </h2>

                    <p className="text-sm sm:text-base opacity-70 mt-2">
                      Full Stack Developer • UI/UX Designer
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}