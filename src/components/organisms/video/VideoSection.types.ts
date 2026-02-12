import { type ReactNode } from "react";

export interface VideoSectionProps {
  /** The video source URL */
  videoSrc: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Optional heading text */
  heading?: string;
  /** Optional subheading text */
  subheading?: string;
  /** Optional additional content */
  children?: ReactNode;
  /** Whether to show controls (default: false) */
  showControls?: boolean;
  /** Whether to autoplay (default: true) */
  autoPlay?: boolean;
  /** Whether to loop (default: true) */
  loop?: boolean;
  /** Whether to mute (default: true) */
  muted?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
  /** Layout variant */
  variant?: "fullscreen" | "contained" | "background";
  /** Whether to show overlay gradient (default: true) */
  showOverlay?: boolean;
}
