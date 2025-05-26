import { Link } from "react-router-dom";
import type { Project } from "../data/data"; // data.ts에서 export한 타입

interface ProjectProps {
  project: Project; // data.ts에서 export한 타입
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <section className="w-full py-8 my-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="break-words w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 break-words max-w-full text-balance">
            {project.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 break-words max-w-full">
            <span className="block mb-2">{project.content}</span>
            <span className="inline-block font-semibold text-gray-500 bg-[#e3defc] px-2 py-1 rounded">
              기술스택:{" "}
              <span className="bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
                {project.skill}
              </span>
            </span>
          </p>
          <div className="linkto">
            <Link to={`/detail/${project.id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                자세히 보기
              </button>
            </Link>
          </div>
        </div>
        {/* Right: Image Placeholder */}
        <div className="w-full h-64 bg-gray-200 bg-[repeating-linear-gradient(45deg,_#e5e7eb_0px,_#e5e7eb_1px,_transparent_1px,_transparent_20px)] rounded-lg shadow-inner" />
      </div>
    </section>
  );
};

export default Project;
