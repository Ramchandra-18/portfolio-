import { useTheme } from "../context/ThemeContext";

const experiences = [
  {
    company: "CodeAlpha",
    logo: "/codealpha.png",
    role: "Fullstack Developer intern",
    period: "May 01 – May 30 2025",
    details: [
      "Developed scalable e-commerce platforms with secure payment gateways and real-time inventory management (React, Node, Supabase).",
      "Engineered user-focused social media platforms featuring messaging, post sharing, and notification systems.",
      "Built collaborative project management tools supporting task tracking, team roles, and automated workflow integrations.",
    ],
  },
  {
    company: "JSpiders Rajajinagar ",
    logo: "/jsp.jpeg",
    role: "Java Full Stack Developer Intern",
    period: "Present",
    details: [
      "Currently undergoing training in Java Full Stack Development ",
"	Gaining hands-on experience in Core Java, JDBC, Servlets, and Spring Framework ",
"Working with HTML, CSS, JavaScript, and React.js for frontend development",
"Learning database integration using MySQL and PostgreSQL ",
"Developing real-time applications and improving problem-solving and coding skills ",
"Collaborating on mini-projects and assignments to strengthen full stack development knowledge "

    ],
  },
];

export default function Experience() {
  const { darkMode } = useTheme();

  return (
    <section className={`${darkMode ? "bg-gray-900" : "bg-white"} px-6 py-16 transition-colors duration-500`}>
      <h2 className={`${darkMode ? "text-teal-400" : "text-teal-600"} text-3xl font-bold mb-8 text-center`}>Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-6 rounded-xl shadow-md flex flex-col transition-colors`}
          >
            <div className="flex items-center mb-4">
              <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full bg-gray-200 object-cover mr-4" />
              <div>
                <div className={`${darkMode ? "text-white" : "text-gray-900"} text-xl font-bold`}>{exp.company}</div>
                <div className={`${darkMode ? "text-teal-400" : "text-teal-600"} font-bold`}>{exp.role}</div>
                <div className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>{exp.period}</div>
              </div>
            </div>
            <ul className={`${darkMode ? "text-gray-200" : "text-gray-900"} list-disc ml-5 flex-1`}>
              {exp.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
