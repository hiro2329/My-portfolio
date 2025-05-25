import About from "./About";
import Skills from "./Skills";

import React from "react";

interface IntroduceProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Introduce: React.FC<IntroduceProps> = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center relative isolate"
    >
      <About />
      <Skills />
    </section>
  );
};
export default Introduce;
