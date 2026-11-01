import type { GpxPoint } from "@/app/utils/constants/types/gpx";

export type GPXViewerProps = {
  points: GpxPoint[];

  currentIndex: number;
  setCurrentIndex: (index: number) => void;

  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;

  speed: number;
  setSpeed: (value: number) => void;
  onReset: () => void;
};
