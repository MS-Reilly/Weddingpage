// src/components/molecules/MobileNavLinks/MobileNavLinks.tsx

import { MobileNavLink } from "../../atoms/mobileNavLink";
import { Button } from "../../atoms/button";
import type { MobileNavLinksProps } from "./MobileNavLinks.types";

/**
 * A molecule component that displays a list of mobile navigation links and action buttons.
 *
 * @param {MobileNavLinksProps} props The props for the component.
 * @param {Array<NavItem>} props.navigation An array of navigation item objects.
 */
export default function MobileNavLinks({ navigation }: MobileNavLinksProps) {
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-800">
        {/* Navigation Links Section */}
        <div className="space-y-2 py-6">
          {navigation.map((item, index) => (
            <MobileNavLink key={index} {...item}>
              {item.children}
            </MobileNavLink>
          ))}
        </div>
        {/* Sign-in/Sign-up Buttons Section */}
        <div className="py-6">
          <Button variant="secondary" className="w-full">
            Sign In
          </Button>
          <div className="mt-4">
            <Button variant="primary" className="w-full">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
