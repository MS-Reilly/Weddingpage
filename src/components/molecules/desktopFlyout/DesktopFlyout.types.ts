// src/components/molecules/DesktopFlyout/DesktopFlyout.types.ts
import type { ReactNode } from "react";
import type { NavLinkProps } from "../../atoms/navLinkavLink";

// Type for a list item within the flyout panel
export type FlyoutItem = {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Type for a call-to-action link within the flyout panel
export type CallToAction = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type DesktopFlyoutProps = {
  /** The text to display on the popover button. */
  buttonText: string;
  /** The list of main items to display in the flyout. */
  items: FlyoutItem[];
  /** The list of call-to-action links to display in the flyout. */
  callsToAction: CallToAction[];
};
