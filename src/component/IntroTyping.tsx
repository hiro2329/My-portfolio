import React, { useEffect, useRef, useState } from "react";

const typingLines = [
  "작은 성취에서 큰 기쁨을 찾고,",
  "꾸준한 걸음으로 성장해나가는",
  "풀스택 개발자 마준범 입니다.",
];

const TYPING_SPEED = 100;
const LINE_DELAY = 600;

const IntroTyping: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [printedLines, setPrintedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  // Intersection Observer
  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;
    let observer: IntersectionObserver | null = null;
    observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowTypewriter(true);
          } else {
            setShowTypewriter(false);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(ref);
    return () => observer && observer.disconnect();
  }, []);

  // showTypewriter가 false가 될 때 상태 초기화
  useEffect(() => {
    if (!showTypewriter) {
      setPrintedLines([]);
      setCurrentLine(0);
      setCurrentText("");
    }
  }, [showTypewriter]);

  // 타이핑 효과
  useEffect(() => {
    if (!showTypewriter) return;
    if (currentLine >= typingLines.length) return;

    setCurrentText("");
    let charIdx = 0;
    let timeoutId: number;
    const typeChar = () => {
      setCurrentText(typingLines[currentLine].slice(0, charIdx + 1));
      if (charIdx < typingLines[currentLine].length - 1) {
        charIdx++;
        timeoutId = setTimeout(typeChar, TYPING_SPEED);
      } else {
        timeoutId = setTimeout(() => {
          setPrintedLines((prev) => [...prev, typingLines[currentLine]]);
          setCurrentLine((prev) => prev + 1);
        }, LINE_DELAY);
      }
    };
    typeChar();
    return () => clearTimeout(timeoutId);
  }, [showTypewriter, currentLine]);

  const highlightName = (text: string) => {
    return text.replace(
      /마준범/,
      '<span class="text-violet-500 font-bold">마준범</span>'
    );
  };

  return (
    <div
      ref={containerRef}
      className="text-4xl md:text-6xl font-bold p-5 min-h-[60px]"
    >
      {printedLines.map((line, idx) => (
        <div key={idx} dangerouslySetInnerHTML={{ __html: highlightName(line) }} />
      ))}
      {showTypewriter && currentLine < typingLines.length && (
        <div>
          <span dangerouslySetInnerHTML={{ __html: highlightName(currentText) }} />
          <span className="animate-pulse">|</span>
        </div>
      )}
    </div>
  );
};

export default IntroTyping;
