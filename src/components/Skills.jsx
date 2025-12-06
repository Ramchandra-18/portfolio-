import { useTheme } from "../context/ThemeContext";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaGit, FaSass } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiFigma } from "react-icons/si";

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 w-12 h-12" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 w-12 h-12" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 w-12 h-12" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 w-12 h-12" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300 w-12 h-12" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-900 w-12 h-12" /> },
  { name: 'SQL', icon: <SiMysql className="text-blue-700 w-12 h-12" /> },
  { name: 'UI/UX Design', icon: <SiFigma className="text-pink-500 w-12 h-12" /> },
  { name: 'Web Design', icon: <FaSass className="text-purple-400 w-12 h-12" /> },
  { name: 'Git', icon: <FaGit className="text-orange-500 w-12 h-12" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600 w-12 h-12" /> },
];

export default function Skills() {
  const { darkMode } = useTheme();

  return (
    <section className={`px-6 py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-yellow-400" : "text-teal-600"}`}>What I do</h2>
      <p className={`mb-10 text-center ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
        Full-stack development, UI/UX design, and scalable, creative web solutions. Always striving to build elegant user experiences.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {skills.map(skill => (
          <div className={`flex flex-col items-center p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-950" : "bg-gray-100"}`} key={skill.name}>
            {skill.icon}
            <span className={`mt-3 text-sm font-semibold ${darkMode ? "text-gray-200" : "text-gray-900"}`}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
