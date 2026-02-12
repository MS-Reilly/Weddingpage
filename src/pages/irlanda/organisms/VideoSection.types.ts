export interface VideoSectionProps {
  videoSrc: string;
  heading?: string;
  subheading?: string;
  children?: React.ReactNode;
  showControls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  variant?: "fullscreen" | "contained" | "background";
  values?: string[];
}
