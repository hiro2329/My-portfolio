const About: React.FC = () => {
  return (
    // ABOUT 영역
    <>
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
        을 믿는 개발자 <span className="font-bold text-violet-500">마준범</span>{" "}
        입니다.
        <br />
        하루하루 배우고 채워가는 과정을 즐기며, 그 안에서{" "}
        <span className="font-semibold underline decoration-2 decoration-pink-200 decoration-wavy underline-offset-4">
          나만의 속도와 방향
        </span>
        을 지켜가고 있습니다.
        <br />
        처음 마주했을 땐 막막했던 개념도, 어느새 익숙해지고 자연스럽게 사용할 수
        있을 때 저는 개발자로서의{" "}
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
    </>
  );
};

export default About;
