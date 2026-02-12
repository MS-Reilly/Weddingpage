import type { BadgeProps } from "./Badge.types";

export const Badge = ({
  children,
  variant = "primary",
  size = "md",
  rounded = false,
  className = "",
}) => {
  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3 py-1",
  };

  const variantStyles = {
    primary:
      "bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-100",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100",
    success:
      "bg-success-100 text-success-800 dark:bg-success-800 dark:text-success-100",
    warning:
      "bg-warning-100 text-warning-800 dark:bg-warning-800 dark:text-warning-100",
    error: "bg-error-100 text-error-800 dark:bg-error-800 dark:text-error-100",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100",
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center font-medium
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${rounded ? "rounded-full" : "rounded-md"}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
