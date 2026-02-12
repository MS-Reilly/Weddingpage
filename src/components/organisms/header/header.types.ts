// src/components/organisms/Header/header.types.ts
import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type FlyoutItem = {
  name: string;
  description?: string;
  href: string;
  icon: IconType;
};

export type CallToAction = {
  name: string;
  href: string;
  icon: IconType;
};

export type NavLinkItem = {
  href: string;
  children: string;
  icon?: IconType;
};

/** --- Header item discriminated union --- */
export type HeaderItem =
  | {
      id: number;
      type: "desktopFlyout";
      buttonText: string;
      items: FlyoutItem[];
      callsToAction: CallToAction[];
    }
  | {
      id: number;
      type: "navLink";
      link: NavLinkItem;
    };

export type HeaderProps = {
  data: HeaderItem[];
};
