// src/components/molecules/DesktopNavLinks/DesktopNavLinks.tsx

import { NavLink } from "../../atoms/navLink";
import type { DesktopNavLinksProps } from "./DesktopNavLinks.types";

/**
 * A molecule component that displays a list of desktop navigation links.
 *
 * @param {DesktopNavLinksProps} props The props for the component.
 * @param {Array<NavItem>} props.navigation An array of navigation item objects.
 */
export default function DesktopNavLinks({ navigation }: DesktopNavLinksProps) {
  return (
    <div className="hidden gap-10 lg:flex lg:gap-x-12">
      {navigation.map((item, index) => (
        <NavLink key={index} {...item}>
          {item.children}
        </NavLink>
      ))}
    </div>
  );
}
