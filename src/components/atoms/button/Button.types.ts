import React from "react";

/** Public enums */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

/** Props shared by both <button> and <a> render modes */
export type CommonButtonProps = {
  children?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean; // square icon button
  className?: string;
};

/** Render as native button */
export type ButtonAsButton = CommonButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    as?: "button";
  };

/** Render as anchor link */
export type ButtonAsLink = CommonButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    as: "a";
    href: string;
  };

/** Union of both modes */
export type ButtonProps = ButtonAsButton | ButtonAsLink;
