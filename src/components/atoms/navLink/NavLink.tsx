// src/components/atoms/NavLink/NavLink.tsx

import { Link } from "react-router-dom";
import type { NavLinkProps, NavLinkSize } from "./NavLink.types";

/** Design tokens mapped to Tailwind classes */
const sizes: Record<NavLinkSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

/**
 * A reusable link for top-level navigation with an icon and text. Can also render as a static element.
 *
 * @param {NavLinkProps} props The props for the component.
 * @param {string} props.href The destination URL.
 * @param {React.ComponentType} props.icon The icon component.
 * @param {React.ReactNode} props.children The text of the link.
 * @param {NavLinkSize} props.size The size of the text.
 */
export default function NavLink({
  href,
  icon: Icon,
  children,
  size = "md",
  as,
}: NavLinkProps) {
  const baseClasses = `font-regular hover:text-brand-600 hover:font-medium leading-6 text-brand-950 dark:text-white inline-flex items-center gap-2 transition-colors duration-200 ${sizes[size]}`;

  const iconClasses = "h-5 w-5 text-indigo-600 dark:text-indigo-400";

  // If no href is provided, render as a static span
  if (!href) {
    return (
      <span className={baseClasses}>
        {Icon && <Icon className={iconClasses} />}
        {children}
      </span>
    );
  }

  return (
    <Link to={href} className={baseClasses}>
      {Icon && <Icon className={iconClasses} />}
      {children}
    </Link>
  );
}
