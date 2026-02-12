export interface AspectRatioVideoProps {
  src: string;
  aspectRatio?: "16:9" | "21:9" | "4:3" | "1:1";
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  playbackRate?: number;
  preload?: "auto" | "metadata" | "none";
  playsInline?: boolean;
}

export type AspectRatioType = "16:9" | "21:9" | "4:3" | "1:1";
