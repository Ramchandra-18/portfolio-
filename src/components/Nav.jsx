
import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/your-username",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-1.04-.01-1.89-2.76.61-3.34-1.2-3.34-1.2-.41-1.07-1.01-1.35-1.01-1.35-.83-.58.06-.57.06-.57.92.07 1.4.97 1.4.97.81 1.41 2.12 1.01 2.65.77.08-.6.32-1.01.58-1.25-2.2-.26-4.51-1.13-4.51-5 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.02A9.2 9.2 0 0112 6.79a9.2 9.2 0 012.51.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.88-2.31 4.74-4.52 4.99.33.28.62.83.62 1.69 0 1.22-.01 2.2-.01 2.5 0 .27.18.58.69.48A10 10 0 0022 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  // Add more social links here when needed.
];

function ThemeIcon({ darkMode }) {
  return darkMode ? (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
      />
    </svg>
  ) : (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.9 13A8.5 8.5 0 0111 3.1 8.5 8.5 0 1020.9 13z"
      />
    </svg>
  );
}

export default function Nav() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav
      aria-label="Social links and appearance settings"
      className="fixed left-1/2 top-5 z-50 w-max max-w-[calc(100%-2rem)] -translate-x-1/2"
    >
      <div
        className={`relative flex items-center gap-1 rounded-full border p-1.5 shadow-2xl backdrop-blur-2xl transition-all duration-300 sm:gap-2 sm:p-2 ${
          darkMode
            ? "border-white/10 bg-slate-950/75 shadow-black/30"
            : "border-slate-200/80 bg-white/80 shadow-slate-300/40"
        }`}
      >
        {/* Brand mark */}
        <a
          href="#home"
          aria-label="Go to homepage"
          className={`group flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black transition-all duration-300 hover:rotate-6 hover:scale-105 ${
            darkMode
              ? "bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950"
              : "bg-gradient-to-br from-cyan-500 to-blue-600 text-white"
          }`}
        >
          R<span className="text-[10px]">.</span>
        </a>

        {/* Divider */}
        <span
          className={`mx-1 h-6 w-px ${
            darkMode ? "bg-white/10" : "bg-slate-200"
          }`}
        />

        {/* Social links */}
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            aria-label={`Open ${link.name} in a new tab`}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
              darkMode
                ? "text-slate-300 hover:bg-white/10 hover:text-cyan-300"
                : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-700"
            }`}
          >
            {link.icon}
          </a>
        ))}

        {/* Theme switch */}
        <button
          type="button"
          onClick={() => setDarkMode((prev) => !prev)}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={darkMode}
          className={`group relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full transition-all duration-300 hover:rotate-6 ${
            darkMode
              ? "bg-amber-300/10 text-amber-300 hover:bg-amber-300/20"
              : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
          }`}
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            <ThemeIcon darkMode={darkMode} />
          </span>
        </button>
      </div>

      {/* Subtle accent underneath */}
      <div className="mx-auto mt-1 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </nav>
  );
}
