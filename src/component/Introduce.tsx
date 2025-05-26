import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPython,
} from "react-icons/si";

interface IntroduceProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

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
];

const Introduce: React.FC<IntroduceProps> = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4"
    >
      {/* 왼쪽: 이미지 + Skills */}
      <div className="flex flex-col items-start justify-center px-4 md:px-6 py-8 md:py-0">
        <div className="w-full max-w-[420px] mx-auto">
          {/* 이미지 영역 */}
          <div className="w-full aspect-square flex items-center justify-center mb-8">
            <img
              src="../projectImg/ankara_messi.png"
              alt="About"
              className="w-full h-full object-cover rounded-[2vw]"
            />
          </div>
          {/* Skills 영역  */}
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
        </div>
      </div>
      {/* 오른쪽: 자기소개 */}
      <div className="flex flex-col items-start justify-center px-4 md:px-6 py-8 md:py-0">
        <div className="w-full text-start mx-auto">
          {/* 자기소개 제목 + 내용 */}
          <h2 className="text-3xl md:text-6xl text-gray-800 mb-6 font-bold leading-tight">
            안녕하세요.
          </h2>
          <p className="text-base md:text-2xl text-gray-600 leading-relaxed">
            <span className="font-semibold underline decoration-2 decoration-pink-200 decoration-wavy underline-offset-4">
              작은 성취에서 큰 기쁨
            </span>
            을 찾고,{" "}
            <span className="font-semibold underline decoration-2 decoration-violet-200 decoration-wavy underline-offset-4">
              꾸준히 쌓아가는 힘
            </span>
            을 믿는 개발자{" "}
            <span className="font-bold text-violet-500">마준범</span> 입니다.
            <br />
            하루하루 배우고 채워가는 과정을 즐기며, 그 안에서{" "}
            <span className="font-semibold underline decoration-2 decoration-pink-200 decoration-wavy underline-offset-4">
              나만의 속도와 방향
            </span>
            을 지켜가고 있습니다.
            <br />
            처음 마주했을 땐 막막했던 개념도, 어느새 익숙해지고 자연스럽게
            사용할 수 있을 때 저는 개발자로서의{" "}
            <span className="font-semibold underline decoration-2 decoration-violet-200 decoration-wavy underline-offset-4">
              ‘성장’
            </span>
            을 느낍니다.
            <br />
            저는 단순히 기능을 구현하는 것을 넘어, 기술 속에{" "}
            <span className="font-semibold underline decoration-2 decoration-pink-200 decoration-wavy underline-offset-4">
              섬세한 감각
            </span>
            과{" "}
            <span className="font-semibold underline decoration-2 decoration-violet-200 decoration-wavy underline-offset-4">
              따뜻한 시선
            </span>
            도 함께 담고 싶습니다.
            <br />
            사용자에게{" "}
            <span className="font-semibold underline decoration-2 decoration-pink-200 decoration-wavy underline-offset-4">
              의미 있는 경험
            </span>
            을 전할 수 있는 개발자가 되는 것이 제 목표입니다.
            <br />
            앞으로도{" "}
            <span className="font-semibold underline decoration-2 decoration-violet-200 decoration-wavy underline-offset-4">
              매 순간을 놓치지 않고
            </span>
            , 성실하게, 그리고 단단하게 성장해나가겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
