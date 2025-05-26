import type { Project } from "../data/data";
import { useParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import projectData from "../data/data";
import gsap from "gsap";

const DetailProject: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id) {
      const found = projectData.find((p) => p.id === Number(id));
      setProject(found || null);
    }
  }, [id]);

  // GSAP 애니메이션
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [project]);

  if (!project)
    return (
      <div className="text-center py-20 text-lg">
        프로젝트를 찾을 수 없습니다.
      </div>
    );

  return (
    // <div className="max-w-5xl mx-auto mt-10 px-4">
    //   <div className="flex flex-col md:flex-row gap-8 items-center">
    //     <div className="w-full md:w-1/2 flex justify-center">
    //       <img
    //         src={project.imgSrc}
    //         alt={project.title}
    //         className="rounded-lg shadow-lg w-full max-w-md object-cover"
    //       />
    //     </div>
    //     <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
    //       <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
    //       <p className="text-gray-600 mb-4">{project.content}</p>
    //       <div className="mb-4">
    //         <span className="font-semibold text-gray-800">기술스택: </span>
    //         <span className="text-blue-600">{project.skill}</span>
    //       </div>
    //       {project.githubUrl && (
    //         <a
    //           href={project.githubUrl}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="inline-block bg-gray-700 text-black px-5 py-2 rounded hover:bg-gray-700 transition mb-2"
    //         >
    //           GitHub 바로가기
    //         </a>
    //       )}
    //       {project.detail && (
    //         <div className="mt-3 text-gray-700">{project.detail}</div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <section className="min-h-screen bg-white flex items-center">
      <div ref={containerRef} className="relative isolate px-6 w-full">
        {/* 상단 배경 */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="max-w-5xl mx-auto mt-10 px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.content}</p>
              <div className="mb-4">
                <span className="font-semibold text-gray-800">기술스택: </span>
                <span className="text-blue-600">{project.skill}</span>
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-700 text-black px-5 py-2 rounded hover:bg-gray-700 transition mb-2"
                >
                  GitHub 바로가기
                </a>
              )}
              {project.detail && (
                <div className="mt-3 text-gray-700">{project.detail}</div>
              )}
            </div>
          </div>
        </div>
        {/* 하단 배경 */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default DetailProject;
