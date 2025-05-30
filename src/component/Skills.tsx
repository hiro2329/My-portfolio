import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPython,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
  { name: "Render", icon: <SiRender className="text-blue-400" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
];

const Skills: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-4">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-[Comic Sans MS, Comic Sans, cursive]">
        Skills
      </h3>
      <div className="w-full grid grid-cols-4 gap-3 md:gap-4 px-2 md:px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center text-xs md:text-sm font-semibold text-gray-700 hover:scale-110 transition-transform"
          >
            <span className="text-2xl md:text-3xl mb-1 drop-shadow-lg">
              {skill.icon}
            </span>
            <span className="text-[0.8rem] md:text-sm text-gray-500 mt-1">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
