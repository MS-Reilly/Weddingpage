import React from "react";

export type LogoTheme = "light" | "dark" | "auto";
export type LogoKind = "horizontal" | "mark";

export interface LogoProps extends React.HTMLAttributes<SVGElement> {
  /** Which logo artwork to show */
  kind?: LogoKind;
  /** Theme for the artwork. `auto` renders light in normal mode and dark in `.dark` */
  theme?: LogoTheme;
  /** Accessible label. If not provided, we default to "Brand" */
  label?: string;
  /** Set a default class (size) if none given */
  className: string;
}
