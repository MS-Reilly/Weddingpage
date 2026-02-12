// src/components/molecules/DesktopNavLinks/DesktopNavLinks.types.ts

import type { NavLinkProps } from "../../atoms/navLink";

// Define a type for a navigation item, using the NavLink props
export type NavItem = Pick<NavLinkProps, "href" | "icon" | "children">;

export type DesktopNavLinksProps = {
  /** The list of navigation items to display. */
  navigation: NavItem[];
};
