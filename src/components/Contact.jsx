
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { darkMode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rajalasangi@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Message submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      window.alert("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const muted = darkMode ? "text-slate-400" : "text-slate-500";

  const panel = darkMode
    ? "border-white/10 bg-[#101a2b]"
    : "border-slate-200 bg-white";

  const inputStyle = `w-full rounded-xl border px-4 py-3.5 outline-none transition-all duration-300 ${
    darkMode
      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500 focus:border-cyan-400 focus:bg-white/[0.07] focus:ring-4 focus:ring-cyan-400/10"
      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
  }`;

  const contactItems = [
    {
      icon: FaEnvelope,
      label: "EMAIL",
      value: "rajalasangi@gmail.com",
      href: "mailto:rajalasangi@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      label: "PHONE",
      value: "+91 8088237366",
      href: "tel:+918088237366",
    },
    {
      icon: FaMapMarkerAlt,
      label: "LOCATION",
      value: "Bengaluru, Karnataka",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className={`relative isolate overflow-hidden px-4 py-20 transition-colors duration-500 sm:px-6 lg:px-8 lg:py-28 ${
        darkMode
          ? "bg-[#080d18] text-white"
          : "bg-[#f4f7fb] text-slate-900"
      }`}
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.09] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-500" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-cyan-500">
              Let&apos;s connect
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Have an idea?
            <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Let&apos;s build it.
            </span>
          </h2>

          <p className={`mt-5 max-w-xl text-base leading-7 ${muted}`}>
            Have a project, collaboration, or career opportunity in mind?
            Send me a message and let&apos;s discuss what we can create
            together.
          </p>
        </div>

        {/* Main contact workspace */}
        <div
          className={`grid overflow-hidden rounded-[2rem] border shadow-2xl transition-colors duration-500 lg:grid-cols-[0.85fr_1.15fr] ${
            darkMode
              ? "border-white/10 bg-[#0d1524] shadow-black/30"
              : "border-slate-200 bg-white shadow-slate-300/40"
          }`}
        >
          {/* Contact information panel */}
          <aside
            className={`relative flex flex-col justify-between overflow-hidden p-7 transition-colors duration-500 sm:p-10 lg:min-h-[650px] lg:p-12 ${
              darkMode
                ? "bg-[#101f32]"
                : "bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-100/80"
            }`}
          >
            {/* Decorative circles */}
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border ${
                darkMode ? "border-cyan-300/10" : "border-cyan-600/15"
              }`}
            />
            <div
              className={`pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border ${
                darkMode ? "border-cyan-300/15" : "border-cyan-600/15"
              }`}
            />
            <div
              className={`pointer-events-none absolute bottom-24 left-1/3 h-48 w-48 rounded-full blur-3xl ${
                darkMode ? "bg-cyan-400/[0.08]" : "bg-cyan-400/20"
              }`}
            />

            <div className="relative">
              {/* Profile identity */}
              <div className="mb-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-black text-white shadow-lg shadow-cyan-500/20">
                  R.
                </div>

                <div>
                  <h3 className="text-lg font-bold">Ramchandra</h3>
                  <p className={`mt-1 text-sm ${muted}`}>
                    Developer · Problem Solver
                  </p>
                </div>
              </div>

              <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-cyan-500">
                {"// Start a conversation"}
              </p>

              <h3 className="max-w-sm text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Great work starts with{" "}
                <span className="text-cyan-500">a connection.</span>
              </h3>

              <p className={`mt-5 max-w-sm text-sm leading-7 ${muted}`}>
                I&apos;m interested in building useful software, solving
                challenging problems, and connecting with people who have
                exciting ideas.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div
                      className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 ${
                        darkMode
                          ? "border-white/[0.07] bg-white/[0.035] hover:border-cyan-400/30 hover:bg-white/[0.07]"
                          : "border-white/80 bg-white/70 hover:border-cyan-300 hover:bg-white hover:shadow-lg hover:shadow-cyan-900/5"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          darkMode
                            ? "bg-cyan-400/10 text-cyan-300"
                            : "bg-cyan-100 text-cyan-700"
                        }`}
                      >
                        <Icon size={16} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`mb-1 text-[10px] font-bold tracking-[0.2em] ${
                            darkMode ? "text-slate-500" : "text-slate-400"
                          }`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`break-words text-sm font-semibold ${
                            darkMode ? "text-slate-200" : "text-slate-700"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>

                      {item.href && (
                        <FaArrowRight
                          className={`shrink-0 text-xs transition-transform group-hover:translate-x-1 ${
                            darkMode ? "text-cyan-400" : "text-cyan-600"
                          }`}
                        />
                      )}
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Availability indicator */}
            <div
              className={`relative mt-10 flex items-center justify-between gap-3 border-t pt-5 ${
                darkMode ? "border-white/10" : "border-slate-300/70"
              }`}
            >
              <div>
                <p
                  className={`font-mono text-[10px] font-bold tracking-widest ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  OPEN TO OPPORTUNITIES
                </p>
                <p className={`mt-1 text-xs ${muted}`}>
                  Let&apos;s discuss your next project.
                </p>
              </div>

              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
            </div>
          </aside>

          {/* Form panel */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mb-9 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 font-mono text-xs tracking-widest text-cyan-500">
                  CONTACT FORM / 01
                </p>

                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Send me a message
                </h3>

                <p className={`mt-3 max-w-md text-sm leading-6 ${muted}`}>
                  Share a little about yourself and what you&apos;d like to
                  discuss.
                </p>
              </div>

              <span
                className={`hidden rounded-xl border px-3 py-2 font-mono text-xs sm:inline-flex ${
                  darkMode
                    ? "border-white/10 text-slate-500"
                    : "border-slate-200 text-slate-400"
                }`}
              >
                01 — 03
              </span>
            </div>

            {submitted ? (
              <div
                role="status"
                className={`flex min-h-[390px] flex-col items-center justify-center rounded-2xl border p-8 text-center ${
                  darkMode
                    ? "border-emerald-400/20 bg-emerald-400/[0.05]"
                    : "border-emerald-200 bg-emerald-50"
                }`}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                  <FaCheck size={25} />
                </div>

                <h4 className="text-2xl font-bold">Message submitted!</h4>

                <p className={`mt-3 max-w-sm text-sm leading-7 ${muted}`}>
                  Thank you for reaching out. Your message was accepted for
                  processing, and I&apos;ll get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 px-5 py-3 text-sm font-semibold text-cyan-500 transition hover:bg-cyan-500/10"
                >
                  Send another message <FaArrowRight size={12} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit spam protection */}
                <input
                  type="text"
                  name="_honey"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <input type="hidden" name="_captcha" value="false" />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2.5 block text-sm font-semibold"
                    >
                      Your name <span className="text-cyan-500">*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      autoComplete="name"
                      required
                      maxLength={100}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2.5 block text-sm font-semibold"
                    >
                      Email address <span className="text-cyan-500">*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      autoComplete="email"
                      required
                      maxLength={254}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2.5 block text-sm font-semibold"
                  >
                    Your message <span className="text-cyan-500">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your idea, project, or opportunity..."
                    required
                    maxLength={5000}
                    className={`${inputStyle} min-h-[180px] resize-y`}
                  />

                  <p className={`mt-2 text-right text-xs ${muted}`}>
                    Maximum 5,000 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Send message
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className={`text-center text-xs leading-5 ${muted}`}>
                  Your details are used only to respond to your message.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer note */}
        <div
          className={`mt-6 flex flex-col justify-between gap-2 text-xs sm:flex-row sm:items-center ${
            darkMode ? "text-slate-500" : "text-slate-400"
          }`}
        >
          <span>Let&apos;s turn your next idea into something meaningful.</span>
          <span className="font-mono tracking-wide">
            BENGALURU, INDIA · IN
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
