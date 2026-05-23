import { useTheme } from "../context/ThemeContext";

import {
  FaArrowRight,
  FaExternalLinkAlt,
 
} from "react-icons/fa";

const projects = [
  {
    title: "e-Virtual Study Assistant",

    description:
      "An intelligent virtual study assistant platform designed to help students improve learning and academic performance. Features include voice assistant integration, coding labs access, educational resources, and online course platforms in one unified ecosystem.",

    tech: ["HTML", "CSS", "JavaScript"],

    link: "#",



    gradient: "from-violet-500 to-fuchsia-500",
  },

  {
    title: "MedSync: Healthcare Platform",

    description:
      "A blockchain-powered healthcare supply chain platform connecting patients, doctors, pharmacies, and staff. Ensures secure, transparent, and tamper-proof tracking of medicines, medical records, and healthcare transactions.",

    tech: ["React", "Flask", "Supabase", "Tailwind CSS"],

    link: "#",

  

    gradient: "from-blue-500 to-cyan-500",
  },
  {
  title: "BookMyTicket – Movie Ticket Booking System",

  description:
    "A full stack movie ticket booking platform enabling users to browse movies, select showtimes, choose seats, and complete secure online payments. Built using Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate ORM, and Thymeleaf with MySQL database integration. Integrated Razorpay for secure payments, Cloudinary for cloud image storage, JavaMailSender for OTP-based email verification, and QR code generation for unique ticket verification.",

  tech: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "Thymeleaf",
    "MySQL",
    "Razorpay",
    "Cloudinary"
  ],

  link: "#",



  gradient: "from-red-500 via-orange-500 to-yellow-500",
},
];

export default function Projects() {
  const { darkMode } = useTheme();

  return (
     <section
      id="projects"
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
              Projects
            </h2>

            <p
              className={`mt-4 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              A collection of innovative projects focused on
              modern web technologies, immersive UI, scalability,
              and solving real-world problems with elegant digital
              experiences.
            </p>

          </div>

          {/* ================= PROJECT GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

            {projects.map((proj) => (
              <div
                key={proj.title}
                className={`group relative overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] border backdrop-blur-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white/70 border-white/40"
                }`}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br ${proj.gradient}/10 via-transparent to-transparent`}
                ></div>

                {/* Top Gradient Bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${proj.gradient}`}
                ></div>

                {/* Floating Glow */}
                <div
                  className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-r ${proj.gradient}`}
                ></div>

                {/* ================= CONTENT ================= */}
                <div className="relative z-10">

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-5 leading-relaxed text-sm sm:text-base lg:text-lg ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    {proj.description}
                  </p>

                  {/* ================= TECH STACK ================= */}
                  <div className="flex flex-wrap gap-3 mt-8">

                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold backdrop-blur-2xl ${
                          darkMode
                            ? "bg-white/10 text-gray-200"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* ================= BUTTONS ================= */}
                  <div className="flex flex-wrap gap-4 mt-10">

                    {/* View Project */}
                    <a
                      href={proj.link}
                      className={`group/btn inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-2xl bg-gradient-to-r ${proj.gradient} text-white text-sm sm:text-base font-semibold shadow-lg hover:scale-105 transition-all duration-500`}
                    >
                      View Project

                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-all duration-300" />

                      <FaExternalLinkAlt size={12} />
                    </a>

                    {/* Github */}
                   

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}