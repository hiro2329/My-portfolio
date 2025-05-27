export interface Project {
  id: number;
  title: string;
  content: string;
  skill: string[];
  imgSrc: string;
  detail?: string;
  githubUrl?: string;
  demoUrl?: string;
  date?: string;
  tags?: string[];
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Ankara_Messi",
    content:
      "리오넬 메시의 FC 바르셀로나 시절 득점 데이터를 분석하고 시각화하는 FastAPI 기반 웹 애플리케이션🏟️",
    skill: ["Python", "FastAPI", "Jinja2", "Plotly", "Render"],
    imgSrc: "/projectImg/ankara_messi.png",
    githubUrl: "https://github.com/hiro2329/Ankara_Messi",
    demoUrl: "https://ankara-messi.onrender.com/",
    detail:
      "리오넬 메시의 FC 바르셀로나 시절 득점 데이터를 분석하고 시각화하는 FastAPI 기반 웹 애플리케이션입니다. 이 프로젝트는 메시의 득점 패턴, 득점 유형, 홈/원정 비율, 어시스트 분석 등을 시각적으로 보여줍니다.",
    date: "2025-04",
    tags: ["데이터분석", "시각화", "축구"],
  },
  {
    id: 2,
    title: "JB-Portfolio",
    content: "개인 포트폴리오 웹앱",
    skill: ["TypeScript", "JavaScript", "React", "Tailwind CSS", "Vite"],
    imgSrc: "/projectImg/Portfolio.png",
    githubUrl: "https://github.com/hiro2329/My-portfolio",
    demoUrl: "https://my-portfolio-pi-topaz-10.vercel.app/",
    detail:
      "타입스크립트+리액트로 만든 개인 포트폴리오 웹앱입니다. Tailwind CSS를 사용하여 반응형 디자인을 구현하였으며, Vite로 빌드하여 빠른 로딩 속도를 자랑합니다. 이 포트폴리오는 저의 기술 스택과 프로젝트 경험을 소개합니다.",
    date: "2024-05",
    tags: ["포트폴리오", "웹앱"],
  },
  {
    id: 3,
    title: "Photo-Gallery",
    content: "📸 Photo Gallery 개인 사진전",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "AOS (Animate On Scroll)",
    ],
    imgSrc: "/projectImg/Photo-Gallery.png",
    githubUrl: "https://github.com/hiro2329/Photo-Gallery",
    demoUrl: "https://hiro2329.github.io/Photo-Gallery/",
    detail:
      "Photo Gallery는 아름다운 순간들을 담은 사진들을 전시하는 개인 웹 갤러리입니다. 제주, 삿포로, 오사카, 헝가리, 그리고 동물 사진까지 다양한 테마로 구성된 작품들을 감상할 수 있습니다. 심플한 디자인과 반응형 레이아웃으로 어디서든 편리하게 즐길 수 있습니다.",
    date: "2025-03",
    tags: ["사진", "갤러리", "반응형"],
  },
];

export default projectData;
