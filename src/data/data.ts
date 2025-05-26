export interface Project {
  id: number;
  title: string;
  content: string;
  skill: string;
  imgSrc: string;
  detail?: string;
  githubUrl?: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Ankara_Messi ",
    content:
      "리오넬 메시의 FC 바르셀로나 시절 득점 데이터를 분석하고 시각화하는 FastAPI 기반 웹 애플리케이션🏟️",
    skill: "Python, FastAPI, Jinja2, Plotly, Render",
    imgSrc: "/projectImg/ankara_messi.png",
  },
  {
    id: 2,
    title: "JB-Portfolio",
    content: "개인 포트폴리오 웹앱",
    skill: "TypeScript, JavaScript , React, Tailwind CSS, Vite",
    imgSrc: "/projectImg/ankara_messi.png",
  },
  {
    id: 3,
    title: "Photo-Gallery",
    content: "📸 Photo Gallery 개인 사진전",
    skill: "HTML, CSS, JavaScript, Bootstrap, AOS (Animate On Scroll)",
    imgSrc: "/projectImg/ankara_messi.png",
  },
];

export default projectData;
