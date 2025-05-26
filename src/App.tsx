import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Introduce from "./component/Introduce";
import Projects from "./component/Projects";
import Timeline from "./component/Timeline";
import DetailProject from "./pages/DetailProject";
import Contact from "./component/Contact";
import { useRef } from "react";

import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  // useRef를 사용하여 각 섹션에 대한 참조를 생성
  const heroRef = useRef<HTMLElement>(null);
  const introduceRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <>
      <Header
        heroRef={heroRef}
        introduceRef={introduceRef}
        projectRef={projectRef}
        timelineRef={timelineRef}
        contactRef={contactRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero sectionRef={heroRef} />
              <Introduce sectionRef={introduceRef} />
              <Projects sectionRef={projectRef} />
              <Timeline sectionRef={timelineRef} />
              <Contact sectionRef={contactRef} />
            </>
          }
        />
        <Route path="/detail/:id" element={<DetailProject />} />
      </Routes>
    </>
  );
};

export default App;
