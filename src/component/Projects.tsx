import React from "react";
import projectData from "../data/data";
import Project from "./Project";
import R_Project from "./R_Project";
import { useEffect, useState } from "react";

interface ProjectsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Projects: React.FC<ProjectsProps> = ({ sectionRef }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind sm 기준
    };
    handleResize();
    window.addEventListener("resize", handleResize); // 창 크기가 바뀔 때마다(resize 이벤트)
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-gray-100 py-8 flex flex-col justify-center items-center"
    >
      {isMobile
        ? projectData.map((project) => (
            <Project key={project.id} project={project} />
          ))
        : projectData.map((project) =>
            project.id % 2 === 1 ? (
              <Project key={project.id} project={project} />
            ) : (
              <R_Project key={project.id} project={project} />
            )
          )}
    </section>
  );
};

export default Projects;
