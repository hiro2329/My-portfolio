import LottiePlayer from "./LottiePlayer";

interface ContactProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-white grid grid-cols-1 md:grid-cols-2"
    >
      {/* 왼쪽: 연락처 정보 */}
      <div className="flex flex-col justify-center items-start px-8 md:px-16 py-12">
        <h2 className="text-7xl font-bold mb-8 text-gray-800">CONTACT</h2>
        <div className="space-y-8">
          <div>
            <span className="block text-lg font-semibold text-gray-700 mb-2">
              이메일
            </span>
            <a
              href="mailto:your.email@example.com"
              className="text-2xl text-blue-600 hover:underline break-all"
            >
              your.email@example.com
            </a>
          </div>
          <div>
            <span className="block text-lg font-semibold text-gray-700 mb-2">
              GitHub
            </span>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:underline break-all"
            >
              github.com/your-github
            </a>
          </div>
          <div>
            <span className="block text-lg font-semibold text-gray-700 mb-2">
              LinkedIn
            </span>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 hover:underline break-all"
            >
              linkedin.com/in/your-linkedin
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
