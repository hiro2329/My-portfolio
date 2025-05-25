import { useState, useEffect } from "react";

import type { RefObject } from "react";

interface HeroProps {
  sectionRef: RefObject<HTMLElement | null>;
}

const Hero: React.FC<HeroProps> = ({ sectionRef }) => {
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
      className="min-h-screen bg-white flex items-center"
    >
      <div className="relative isolate px-6 w-full">
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
        {/* 중앙 텍스트 영역 */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh]">
          {/* <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-relaxed sm:leading-[1.15] break-keep text-center max-w-xl">
                        성취하며 느낀 행복을 오랫동안 기억하고, <br />
                        차근차근 꾸준하게 성장 중인<br />
                        프론트엔드 개발자 마준범 입니다.
                    </div> */}
          <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10 sm:leading-[1.15] break-keep text-center w-full max-w-5xl px-2">
            {isMobile ? (
              <>
                작은 성취에서 큰 기쁨을 찾고,
                <br />
                꾸준한 걸음으로 성장해나가는
                <br />
                풀스택 개발자 마준범 입니다.
              </>
            ) : (
              <>
                작은 성취에서 큰 기쁨을 찾고,
                <br />
                꾸준한 걸음으로 성장해나가는
                <br />
                풀스택 개발자 마준범입니다.
              </>
            )}
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
export default Hero;
