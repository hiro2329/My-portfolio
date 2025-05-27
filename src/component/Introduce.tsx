import React from "react";
import About from "./About";
import Skills from "./Skills";

interface IntroduceProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Introduce: React.FC<IntroduceProps> = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-white grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-0 md:gap-4"
    >
      {/* 왼쪽: 이미지 + Skills */}
      <div className="flex flex-col items-start justify-center px-4 md:px-6 py-8 md:py-0">
        <div className="w-full max-w-[420px] mx-auto">
          {/* 이미지 영역 */}
          <div className="w-full aspect-square flex items-center justify-center mb-8">
            <img
              src="../Aboutme/MJB.JPG"
              alt="About"
              className="w-full h-full object-cover rounded-[2vw]"
            />
          </div>
          {/* Skills 영역  */}
          <Skills />
        </div>
      </div>
      {/* 오른쪽: 자기소개 */}
      <div className="flex flex-col items-start justify-center px-4 md:px-6 py-8 md:py-0">
        <div className="w-full text-start mx-auto">
          {/* 자기소개 제목 + 내용 */}
          <About />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
