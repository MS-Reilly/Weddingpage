import { ReactNode } from "react";

export interface VideoSectionProps {
  /** The video source URL */
  videoSrc: string;
  /** Optional heading text */
  heading?: string;
  /** Optional subheading text */
  subheading?: string;
  /** Optional additional content */
  children?: ReactNode;
  /** Whether to show video controls */
  showControls?: boolean;
  /** Whether to autoplay */
  autoPlay?: boolean;
  /** Whether to loop the video */
  loop?: boolean;
  /** Whether to mute the video */
  muted?: boolean;
  /** Additional className for the container */
  className?: string;
  /** Layout variant */
  variant?: "fullscreen" | "contained" | "background";
  /** Optional values to display as chips */
  values?: string[];
}
