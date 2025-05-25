const About = () => {
  return (
    // ABOUT 영역
    <div className="w-full flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-8 w-full grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:text-6xl md:text-7xl lg:text-8xl">
            ABOUT
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed break-keep">
            끊임없이 도전하는 개발자,
            <br />
            더미데이터 더미데이터 더미데이터
            <br />
            더미데이터더미데이터더미데이터 더미데이터
            <br />
            더미데이터더미데이터더미데이터 더미데이터
            <br />
            더미데이터더미데이터더미데이터 더미데이터
            <br />
            더미데이터더미데이터더미데이터 더미데이터
            <br />
            더미데이터더미데이터더미데이터 더미데이터
            <br />
            더미데이터더미데이터더미데이터 더미데이터
            <br />
          </p>
        </div>
        {/* Right: Image Placeholder */}
        <div className="w-full h-40 sm:h-56 md:h-64 bg-gray-200 bg-[repeating-linear-gradient(45deg,_#e5e7eb_0px,_#e5e7eb_1px,_transparent_1px,_transparent_20px)] rounded-lg shadow-inner" />
      </div>
    </div>
  );
};

export default About;
