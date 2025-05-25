const R_Project = () => {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto  px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left:  Image Placeholder */}
        <div className="w-full h-64 bg-gray-200 bg-[repeating-linear-gradient(45deg,_#e5e7eb_0px,_#e5e7eb_1px,_transparent_1px,_transparent_20px)] rounded-lg shadow-inner" />

        {/* Right: Text Content */}
        <div className="text-right">
          <h2 className="text-7xl font-bold text-gray-900 mb-4">PROJECT</h2>
          <p className="text-gray-600 text-lg mb-6">
            끊임없이 도전하는 개발자,
            <br />
            더미데이터 더미데이터 더미데이터
            <br />
            더미데이터더미데이터더미데이터 더미데이터
          </p>
        </div>
      </div>
    </section>
  );
};

export default R_Project;
