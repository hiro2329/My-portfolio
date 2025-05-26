import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottiePlayerProps {
  path: string;
  loop?: boolean;
  autoplay?: boolean;
  width?: number | string;
  height?: number | string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({
  path,
  loop = true,
  autoplay = true,
  width = "100%",
  height = "100%",
}) => {
  const container = useRef<HTMLDivElement>(null);
  const anim = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (container.current) {
      anim.current = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop,
        autoplay,
        path,
      });
    }

    return () => {
      anim.current?.destroy();
    };
  }, [path, loop, autoplay]);

  return (
    <div ref={container} className="w-full h-full" style={{ width, height }} />
  );
};

export default LottiePlayer;
