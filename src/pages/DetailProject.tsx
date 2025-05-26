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
        <div className="max-w-5xl mx-auto mt-16 px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* 이미지 */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="rounded-2xl shadow-2xl w-full max-w-xl object-cover border border-gray-100"
              />
            </div>
            {/* 상세 정보 */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 break-words">
                {project.title}
              </h1>
              {/* 날짜/태그 */}
              <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                {project.date && (
                  <span className="inline-block bg-violet-100 text-violet-600 text-base md:text-lg px-4 py-2 rounded-full font-bold">
                    {project.date}
                  </span>
                )}
                {project.tags &&
                  project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-pink-100 text-pink-500 text-base md:text-lg px-4 py-2 rounded-full font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
              </div>
              {/* 한줄 설명 */}
              <p className="text-gray-700 text-xl md:text-2xl mb-6 break-words font-semibold">
                {project.content}
              </p>
              {/* 상세 설명 */}
              {project.detail && (
                <div className="mt-3 text-gray-700 text-lg md:text-xl mb-8 break-words text-left w-full leading-relaxed">
                  {project.detail}
                </div>
              )}
              {/* 기술스택 */}
              <div className="mb-8 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="font-bold text-gray-800 text-lg md:text-xl">
                  기술스택:
                </span>
                {Array.isArray(project.skill) ? (
                  project.skill.map((sk) => (
                    <span
                      key={sk}
                      className="inline-block bg-blue-50 text-blue-700 text-base md:text-lg px-3 py-1 rounded font-semibold"
                    >
                      {sk}
                    </span>
                  ))
                ) : (
                  <span className="text-blue-600 text-base md:text-lg">
                    {project.skill}
                  </span>
                )}
              </div>
              {/* 링크 */}
              <div className="flex flex-wrap gap-4 mb-2 justify-center md:justify-start">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-900 text-white text-lg md:text-xl px-6 py-3 rounded-lg hover:bg-gray-700 transition font-bold shadow-md"
                  >
                    GitHub 바로가기
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-pink-400 to-indigo-400 text-white text-lg md:text-xl px-6 py-3 rounded-lg hover:opacity-90 transition font-bold shadow-md"
                  >
                    데모 바로가기
                  </a>
                )}
              </div>
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
