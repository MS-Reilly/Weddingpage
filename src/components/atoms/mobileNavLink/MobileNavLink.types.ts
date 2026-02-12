// src/components/atoms/MobileNavLink/MobileNavLink.types.ts
import type { ReactNode } from "react";

export type MobileNavLinkSize = "sm" | "md" | "lg";

export type MobileNavLinkProps = {
  /** The destination URL for the link. */
  href: string;
  /** The icon component to display next to the text. Optional. */
  icon?: React.ComponentType<{ className?: string }>;
  /** The text content of the link. */
  children: ReactNode;
  /** The size of the link. Defaults to 'md'. */
  size?: MobileNavLinkSize;
};
