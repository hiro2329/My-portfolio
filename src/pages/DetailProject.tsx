import type { Project } from "../data/data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projectData from "../data/data";

const DetailProject: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      const found = projectData.find((p) => p.id === Number(id));
      setProject(found || null);
    }
  }, [id]);

  if (!project)
    return (
      <div className="text-center py-20 text-lg">
        프로젝트를 찾을 수 없습니다.
      </div>
    );

  return (
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
              className="inline-block bg-gray-900 text-white px-5 py-2 rounded hover:bg-gray-700 transition mb-2"
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
  );
};

export default DetailProject;
