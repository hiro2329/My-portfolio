import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2020.06",
    title: "축구 독립구단 선수 활동 시작",
    description:
      "군 전역 후 어릴때부터 도전하고 싶었던 축구선수의 길에 1년간 도전해보았습니다. ",
  },
  {
    year: "2022.02",
    title: "인천일보 아카데미 수료",
    description:
      "HTML과 CSS, JS, Oracle를 공부하면서 처음 웹 개발에 입문했습니다. Riot Games의 API를 활용한 웹앱을 만들었습니다.",
  },
  {
    year: "2023.02",
    title: "프론트엔드 부트캠프 수료",
    description:
      "React, Git, API 등 실무 기술을 익히고 팀 프로젝트를 경험했습니다.",
  },
  {
    year: "2023.06",
    title: "첫 API 연동",
    description:
      "OpenWeather API를 연동한 날씨 앱을 만들며 API를 처음으로 사용해봤습니다.",
  },
  {
    year: "2025 ~ 현재",
    title: "KOSTA Node.js 과정 수료중",
    description:
      "KOSTA에서 Node.js와 React,TypeScript 등을 배우며 풀스택 개발에 대한 이해도를 높이고 있습니다.",
  },
];

interface TimelineProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Timeline: React.FC<TimelineProps> = ({ sectionRef }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionLocalRef = useRef<HTMLElement>(null);

  // GSAP 애니메이션: 데스크톱 타임라인이 왼쪽에서 오른쪽으로 나타남
  // sectionRef와 local ref 동기화
  useEffect(() => {
    if (
      sectionRef &&
      typeof sectionRef === "object" &&
      "current" in sectionRef
    ) {
      sectionRef.current = sectionLocalRef.current;
    }
  }, [sectionRef]);

  useEffect(() => {
    const sectionEl = sectionLocalRef.current;
    if (!sectionEl) return;

    let hasAnimated = false;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && timelineRef.current && !hasAnimated) {
            gsap.fromTo(
              timelineRef.current.children,
              { opacity: 0, x: -60 },
              {
                opacity: 1,
                x: 0,
                stagger: 0.18,
                duration: 0.7,
                ease: "power2.out",
              }
            );
            hasAnimated = true;
          }
          // 아래 주석을 해제하면 영역을 벗어났다가 다시 들어올 때마다 애니메이션 반복
          else if (!entry.isIntersecting) {
            hasAnimated = false;
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionLocalRef}
      className="min-h-screen bg-white flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl sm:text-7xl md:text-8xl font-bold text-gray-900 mb-8 text-center w-full px-4 mt-16 md:mt-24">
        Timeline
      </h2>
      <div className="w-full py-10 flex-1 flex flex-col justify-center">
        {/* 데스크탑: 가로 타임라인 */}
        <div
          className="hidden md:flex items-center px-10 relative justify-center"
          ref={timelineRef}
        >
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2 z-0" />
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative z-10 w-1/5 flex flex-col items-center"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg cursor-pointer z-10" />
              <div className="mt-2 text-sm text-gray-600">{item.year}</div>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute top-12 w-56 bg-white p-4 rounded-xl shadow-xl border border-indigo-100"
                >
                  <h3 className="text-indigo-700 font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* 모바일: 세로 타임라인, md:hidden tailwind 반응형 클래스로 화면크기에 따라 보여주거나 숨겨주기  */}
        <div className="flex flex-col md:hidden px-6 space-y-8 relative items-center justify-center">
          <div className="absolute left-4 top-0 bottom-0 w-1" />
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-10">
              <div className="absolute left-1 top-1 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-lg" />
              <div className="text-sm text-gray-500">{item.year}</div>
              <h3 className="text-md font-semibold text-indigo-700 mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
