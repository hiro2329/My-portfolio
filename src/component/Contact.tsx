import { useState } from "react";
import LottiePlayer from "./LottiePlayer";

interface ContactProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hiro2329@naver.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-white grid grid-cols-1 md:grid-cols-2"
    >
      {/* 왼쪽: 연락처 정보 */}
      <div className="flex flex-col justify-center items-start px-8 md:px-16 py-12">
        <h2 className="text-4xl md:text-7xl font-bold mb-8 text-gray-800">
          CONTACT
        </h2>
        <div className="space-y-8">
          <div>
            <span className="block text-lg font-semibold text-gray-700 mb-2">
              이메일
            </span>
            <span
              className="text-2xl text-blue-600 break-all select-text cursor-pointer hover:underline"
              onClick={handleCopyEmail}
              title="클릭 시 복사"
            >
              hiro2329@naver.com
            </span>
            {copied && (
              <span className="ml-3 text-green-600 text-base font-semibold">
                복사됨!
              </span>
            )}
          </div>
          <div>
            <span className="block text-lg font-semibold text-gray-700 mb-2">
              GitHub
            </span>
            <a
              href="https://github.com/hiro2329"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:underline break-all"
            >
              https://github.com/hiro2329
            </a>
          </div>
          <div>
            <span className="block text-lg font-semibold text-gray-700 mb-2">
              velog
            </span>
            <a
              href="https://velog.io/@hiro2329/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:underline break-all"
            >
              https://velog.io/@hiro2329/posts
            </a>
          </div>
        </div>
      </div>
      {/* 오른쪽: Lottie 애니메이션 */}
      <div className="flex justify-center items-center bg-gray-100">
        <LottiePlayer
          path="/animations/ContactAnimation.json"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
};

export default Contact;
