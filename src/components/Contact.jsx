import React, { useState } from "react";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { darkMode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rajalasangi@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setLoading(false);
        e.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
              Contact Me
            </h2>

            <p
              className={`mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2 leading-relaxed ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Have a project idea, collaboration opportunity,
              or just want to say hello? Let’s connect and build
              something amazing together.
            </p>

          </div>

          {/* ================= GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">

            {/* ================= LEFT SIDE ================= */}
            <div
              className={`h-full rounded-[1.8rem] sm:rounded-[2rem] border backdrop-blur-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:scale-[1.01] ${
                darkMode
                  ? "bg-white/10 border-white/10"
                  : "bg-white/70 border-white/40"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6 sm:space-y-8">

                {/* Email */}
                <div className="flex items-center gap-4 sm:gap-5">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <FaEnvelope className="text-white text-lg sm:text-xl" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`text-sm ${
                        darkMode
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      Email
                    </p>

                    <a
                      href="mailto:rajalasangi@gmail.com"
                      className="text-base sm:text-lg font-semibold hover:text-violet-400 transition-all duration-300 break-all"
                    >
                      rajalasangi@gmail.com
                    </a>
                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 sm:gap-5">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <FaPhoneAlt className="text-white text-lg sm:text-xl" />
                  </div>

                  <div>
                    <p
                      className={`text-sm ${
                        darkMode
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      Phone
                    </p>

                    <a
                      href="tel:+918088237366"
                      className="text-base sm:text-lg font-semibold hover:text-blue-400 transition-all duration-300"
                    >
                      +91 8088237366
                    </a>
                  </div>

                </div>

                {/* Location */}
                <div className="flex items-center gap-4 sm:gap-5">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-lg flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
                  </div>

                  <div>
                    <p
                      className={`text-sm ${
                        darkMode
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      Location
                    </p>

                    <p className="text-base sm:text-lg font-semibold">
                      Kalaburagi, Karnataka
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div
              className={`h-full rounded-[1.8rem] sm:rounded-[2rem] border backdrop-blur-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:scale-[1.01] ${
                darkMode
                  ? "bg-white/10 border-white/10"
                  : "bg-white/70 border-white/40"
              }`}
            >
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_honey"
                    className="hidden"
                  />

                  <input
                    type="hidden"
                    name="_captcha"
                    value="false"
                  />

                  {/* Name */}
                  <div>

                    <label className="block mb-2 font-medium text-sm sm:text-base">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border outline-none backdrop-blur-2xl transition-all duration-300 focus:scale-[1.01] text-sm sm:text-base ${
                        darkMode
                          ? "bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                          : "bg-white/70 border-white/40 text-gray-900 placeholder:text-gray-500"
                      }`}
                    />

                  </div>

                  {/* Email */}
                  <div>

                    <label className="block mb-2 font-medium text-sm sm:text-base">
                      Your Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border outline-none backdrop-blur-2xl transition-all duration-300 focus:scale-[1.01] text-sm sm:text-base ${
                        darkMode
                          ? "bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                          : "bg-white/70 border-white/40 text-gray-900 placeholder:text-gray-500"
                      }`}
                    />

                  </div>

                  {/* Message */}
                  <div>

                    <label className="block mb-2 font-medium text-sm sm:text-base">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Write your message..."
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border outline-none resize-none backdrop-blur-2xl transition-all duration-300 focus:scale-[1.01] text-sm sm:text-base ${
                        darkMode
                          ? "bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                          : "bg-white/70 border-white/40 text-gray-900 placeholder:text-gray-500"
                      }`}
                    />

                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`group w-full py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 text-white text-sm sm:text-base font-semibold shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-3 ${
                      loading
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message

                        <FaPaperPlane className="group-hover:translate-x-1 transition-all duration-300" />
                      </>
                    )}
                  </button>

                </form>
              ) : (
                <div
                  className={`h-full min-h-[350px] sm:min-h-[400px] flex flex-col items-center justify-center text-center rounded-[2rem] p-6 sm:p-10 ${
                    darkMode
                      ? "bg-white/10"
                      : "bg-white/70"
                  }`}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center shadow-2xl mb-6">

                    <FaPaperPlane className="text-white text-3xl" />

                  </div>

                  <h3 className="text-3xl font-bold mb-4">
                    Message Sent!
                  </h3>

                  <p
                    className={`max-w-md ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    Thank you for reaching out. I’ll get back
                    to you as soon as possible.
                  </p>

                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;