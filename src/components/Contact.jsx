import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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
      // REPLACE "YOUR_EMAIL_ADDRESS" BELOW WITH YOUR REAL EMAIL
      const response = await fetch("https://formsubmit.co/ajax/rajalasangi@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setLoading(false);
        e.target.reset(); // Clear the form
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
      className={`py-12 px-6 flex flex-col items-center text-center rounded-lg shadow-md max-w-full mx-auto transition-colors ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
      }`}
      id="contact"
    >
      <h2 className="text-teal-400 font-bold text-3xl mb-2">Contact</h2>
      <p className={`mb-6 text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        Want to collaborate, ask a question, or just say hello?
        <br />
        Drop me a message below and I’ll get in touch!
      </p>

      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="flex flex-1 flex-col items-start gap-4 mx-auto mb-8 mt-10 md:mb-0">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-teal-400 text-xl" />
            <a href="mailto:rajalasangi@gmail.com" className="hover:underline text-base">
              rajalasangi@gmail.com
            </a>
          </div>
          <div className="flex items-center mt-10 gap-3">
            <FaPhoneAlt className="text-teal-400 text-xl" />
            <a href="tel:+918088237366" className="hover:underline text-base">
              +91 8088237366
            </a>
          </div>
          <div className="flex items-center mt-10 gap-3">
            <FaMapMarkerAlt className="text-teal-400 text-xl" />
            <span className="text-base">Kalaburagi, Karnataka, India</span>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 mx-auto w-full">
          {!submitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Honeypot to prevent spam (keep hidden) */}
              <input type="text" name="_honey" className="hidden" style={{ display: 'none' }} />

              {/* Disable Captcha if you want (optional) */}
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name" 
                placeholder="Your Name"
                required
                className={`w-full border outline-none px-4 py-2 rounded ${
                  darkMode ? "bg-gray-800 border-gray-700 text-gray-50" : "bg-gray-50 border-gray-200"
                }`}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className={`w-full border outline-none px-4 py-2 rounded ${
                  darkMode ? "bg-gray-800 border-gray-700 text-gray-50" : "bg-gray-50 border-gray-200"
                }`}
              />
              <textarea
                name="message"
                placeholder="Type your message here..."
                rows={4}
                required
                className={`w-full border outline-none px-4 py-2 rounded ${
                  darkMode ? "bg-gray-800 border-gray-700 text-gray-50" : "bg-gray-50 border-gray-200"
                }`}
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-teal-400 shadow transition ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-lg bg-teal-50 text-teal-700 dark:bg-gray-800 dark:text-teal-300 shadow text-lg font-semibold">
              Thank you! I received your message.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;