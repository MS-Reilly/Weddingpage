// src/components/atoms/MobileNavLink/MobileNavLink.tsx

import { Link } from "react-router-dom";
import type {
  MobileNavLinkProps,
  MobileNavLinkSize,
} from "./MobileNavLink.types";

/** Design tokens mapped to Tailwind classes */
const sizes: Record<MobileNavLinkSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

/**
 * A reusable link for mobile navigation, with an optional icon and size control.
 *
 * @param {MobileNavLinkProps} props The props for the component.
 * @param {string} props.href The destination URL.
 * @param {React.ComponentType} props.icon The icon component.
 * @param {React.ReactNode} props.children The text of the link.
 * @param {MobileNavLinkSize} props.size The size of the link.
 */
export default function MobileNavLink({
  href,
  icon: Icon,
  children,
  size = "md",
}: MobileNavLinkProps) {
  const baseClasses = `
    -mx-3 flex items-center gap-2 rounded-lg py-2 pl-9 pr-3 font-semibold leading-7 
    text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 
    hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200
    ${sizes[size]}`;

  const iconClasses = `h-5 w-5 ${
    Icon ? "text-brand-600 dark:text-brand-400" : ""
  }`;

  return (
    <Link to={href} className={baseClasses}>
      {Icon && <Icon className={iconClasses} aria-hidden="true" />}
      {children}
    </Link>
  );
}
