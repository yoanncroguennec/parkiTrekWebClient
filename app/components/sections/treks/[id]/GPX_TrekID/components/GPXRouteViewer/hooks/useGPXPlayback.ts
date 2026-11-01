import { useEffect } from "react";

type Props = {
  pointCount: number;
  isPlaying: boolean;
  speed: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

export function useGPXPlayback({
  pointCount,
  isPlaying,
  speed,
  setCurrentIndex,
}: Props) {
  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    if (pointCount <= 1) {
      return;
    }

    const interval = 1000 / speed;

    const timer = window.setInterval(() => {
      setCurrentIndex((previousIndex) => {
        const nextIndex = previousIndex + 1;

        if (nextIndex >= pointCount) {
          return 0;
        }

        return nextIndex;
      });
    }, interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPlaying, speed, pointCount, setCurrentIndex]);
}
