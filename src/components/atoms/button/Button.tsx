import React, { forwardRef } from "react";
import type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
  ButtonAsLink,
} from "./Button.types";

/* class join helper */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Design tokens mapped to Tailwind classes */
const base =
  "relative inline-flex items-center justify-center gap-2 rounded-md font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed";

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm px-3 py-2",
  md: "text-sm px-4 py-2.5",
  lg: "text-base px-5 py-3",
};

const iconSizes: Record<ButtonSize, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-11",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500 disabled:bg-brand-300",
  secondary:
    "bg-brand-950 text-white border border-gray-200 hover:bg-brand-600 focus-visible:ring-brand-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-white/5",
  outline:
    "bg-transparent text-brand-950 border border-gray-300 hover:bg-gray-50 focus-visible:ring-brand-500 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-white/5",
  ghost:
    "bg-transparent text-brand-950 hover:bg-gray-100 focus-visible:ring-brand-500 dark:text-gray-300 dark:hover:bg-white/5",
  danger:
    "bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500 disabled:bg-error-300",
};

const spinner =
  "animate-spin h-4 w-4 rounded-full border-2 border-white/40 border-t-white";

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    children,
    size = "md",
    variant = "primary",
    startIcon,
    endIcon,
    isLoading = false,
    fullWidth = false,
    iconOnly = false,
    className,
    as = "button",
    ...rest
  },
  ref
) {
  const classNames = cx(
    base,
    variants[variant],
    iconOnly ? iconSizes[size] : sizes[size],
    fullWidth && "w-full",
    isLoading && "aria-busy:opacity-90 aria-busy:cursor-progress",
    className
  );

  const content = (
    <>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className={spinner} aria-hidden="true" />
        </span>
      )}
      <span
        className={cx(
          "inline-flex items-center gap-2",
          isLoading && "opacity-0"
        )}
      >
        {startIcon && <span className="flex items-center">{startIcon}</span>}
        {!iconOnly && children}
        {endIcon && <span className="flex items-center">{endIcon}</span>}
      </span>
    </>
  );

  if (as === "a") {
    const { href, target, rel, ...anchorRest } = rest as ButtonAsLink;
    const safeRel = target === "_blank" ? rel ?? "noopener" : rel;

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={safeRel}
        className={classNames}
        aria-busy={isLoading || undefined}
        aria-label={
          iconOnly && !children ? anchorRest["aria-label"] : undefined
        }
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={
        (rest as React.ButtonHTMLAttributes<HTMLButtonElement>).type || "button"
      }
      className={classNames}
      disabled={
        (rest as React.ButtonHTMLAttributes<HTMLButtonElement>).disabled ||
        isLoading
      }
      aria-busy={isLoading || undefined}
      aria-label={
        iconOnly && !children ? (rest as any)["aria-label"] : undefined
      }
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

export default Button;
export type { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";
