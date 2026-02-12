// src/components/molecules/MobileNavLinks/MobileNavLinks.types.ts
import type { ReactNode } from "react";
import type { MobileNavLinkProps } from "../../atoms/mobileNavLink";

// Define a type for a navigation item, using the MobileNavLink props
export type NavItem = Pick<MobileNavLinkProps, "href" | "icon" | "children">;

export type MobileNavLinksProps = {
  /** The list of navigation items to display. */
  navigation: NavItem[];
};
