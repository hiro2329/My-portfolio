import type { Project } from "../data/data"; // data.ts에서 export한 타입

interface ProjectProps {
  project: Project; // data.ts에서 export한 타입
}
const R_Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <section className="w-full py-16 my-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image Placeholder */}
        <div className="w-full h-64 bg-gray-200 bg-[repeating-linear-gradient(45deg,_#e5e7eb_0px,_#e5e7eb_1px,_transparent_1px,_transparent_20px)] rounded-lg shadow-inner" />
        {/* Right: Text Content */}
        <div className="break-words w-full text-right">
          <h2 className="text-5xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 break-words truncate max-w-full">
            {project.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 break-words max-w-full">
            <span className="block mb-2">{project.content}</span>
            <span className="inline-block font-semibold text-gray-800 bg-blue-100 px-2 py-1 rounded">
              기술스택: <span className="text-blue-600">{project.skill}</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default R_Project;
