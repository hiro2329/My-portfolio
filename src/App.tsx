import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Introduce from "./component/Introduce";
import Projects from "./component/Projects";
import { useRef } from "react";

function App() {
  // useRef를 사용하여 각 섹션에 대한 참조를 생성
  const heroRef = useRef<HTMLElement>(null);
  const introduceRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);

  return (
    <>
      <Header
        heroRef={heroRef}
        introduceRef={introduceRef}
        projectRef={projectRef}
      />
      <Hero sectionRef={heroRef} />
      <Introduce sectionRef={introduceRef} />
      <Projects sectionRef={projectRef} />
    </>
  );
}

export default App;
