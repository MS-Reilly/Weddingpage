import { ReactNode } from "react";

export interface AvatarProps {
  /**
   * The source URL for the avatar image
   */
  src?: string;

  /**
   * Alt text for the avatar image
   */
  alt?: string;

  /**
   * The size of the avatar
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Optional fallback content when image fails to load
   */
  fallback?: ReactNode;

  /**
   * Optional border color
   */
  borderColor?: string;

  /**
   * Whether to show online/offline status
   */
  showStatus?: boolean;

  /**
   * Online status of the user
   */
  isOnline?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}
