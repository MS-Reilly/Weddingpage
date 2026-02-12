// src/components/atoms/NavLink/NavLink.types.ts
import type { ReactNode } from "react";

export type NavLinkSize = "sm" | "md" | "lg";

export type NavLinkProps = {
  /** The destination URL for the link. Optional. */
  href?: string;
  /** The icon component to display next to the text. Optional. */
  icon?: React.ComponentType<{ className?: string }>;
  /** The text content of the link. */
  children: ReactNode;
  /** The size of the link. Defaults to 'md'. */
  size?: NavLinkSize;
  /** The element to render as. Defaults to 'a' if href is present, 'span' otherwise. */
  as?: "a" | "span";
};
