import { ReactNode } from "react";

export interface BadgeProps {
  /**
   * The content to be displayed inside the badge
   */
  children: ReactNode;

  /**
   * The variant of the badge
   */
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";

  /**
   * The size of the badge
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the badge should be rounded
   */
  rounded?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}
