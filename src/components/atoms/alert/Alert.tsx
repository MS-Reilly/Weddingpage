import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import type { AlertProps, AlertVariant } from "./Alert.types";

const containerByVariant: Record<AlertVariant, string> = {
  success:
    "border-success-500 bg-success-50 dark:border-success-500/30 dark:bg-success-500/15",
  error:
    "border-error-500 bg-error-50 dark:border-error-500/30 dark:bg-error-500/15",
  warning:
    "border-warning-500 bg-warning-50 dark:border-warning-500/30 dark:bg-warning-500/15",
  info: "border-blue-light-500 bg-blue-light-50 dark:border-blue-light-500/30 dark:bg-blue-light-500/15",
};

const iconColorByVariant: Record<AlertVariant, string> = {
  success: "text-success-500",
  error: "text-error-500",
  warning: "text-warning-500",
  info: "text-blue-light-500",
};

function IconCircleCheck() {
  return (
    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.7 12A8.3 8.3 0 1 1 12 20.3 8.31 8.31 0 0 1 3.7 12ZM12 1.9A10.1 10.1 0 1 0 22.1 12 10.11 10.11 0 0 0 12 1.9Zm3.62 8.84a.9.9 0 0 0-1.27-1.27l-3.16 3.16-1.54-1.54a.9.9 0 1 0-1.27 1.27l2.17 2.17c.35.35.92.35 1.27 0l3.8-3.8Z"
      />
    </svg>
  );
}
function IconCircleInfo() {
  return (
    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.85A10.15 10.15 0 1 0 22.15 12 10.16 10.16 0 0 0 12 1.85Zm1 14.63a1 1 0 1 1-2 0v-5a1 1 0 0 1 2 0v5Zm-1-9.96a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 12 6.52Z"
      />
    </svg>
  );
}
function IconCircleWarning() {
  return (
    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.85A10.15 10.15 0 1 0 22.15 12 10.16 10.16 0 0 0 12 1.85ZM11 7.53a1 1 0 0 1 2 0v6.68a1 1 0 0 1-2 0V7.53Zm1 9.95a1 1 0 1 0 0-2h-.01a1 1 0 1 0 .01 2Z"
      />
    </svg>
  );
}
function IconCircleError() {
  return (
    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.85A10.15 10.15 0 1 0 22.15 12 10.16 10.16 0 0 0 12 1.85Zm2.83 6.76a.9.9 0 1 0-1.27-1.27L12 8.9 10.44 7.34a.9.9 0 1 0-1.27 1.27L10.73 10l-1.56 1.56a.9.9 0 1 0 1.27 1.27L12 11.27l1.56 1.56a.9.9 0 1 0 1.27-1.27L13.27 10l1.56-1.39Z"
      />
    </svg>
  );
}

const iconByVariant: Record<AlertVariant, React.ReactElement> = {
  success: <IconCircleCheck />,
  error: <IconCircleError />,
  warning: <IconCircleWarning />,
  info: <IconCircleInfo />,
};

const liveByVariant: Record<AlertVariant, React.AriaAttributes["aria-live"]> = {
  error: "assertive",
  warning: "assertive",
  success: "polite",
  info: "polite",
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  {
    variant,
    title,
    message,
    showLink = false,
    linkHref = "#",
    linkText = "Learn more",
    external,
    role,
    "aria-live": ariaLive,
    className,
    ...rest
  },
  ref
) {
  const container = containerByVariant[variant];
  const iconColor = iconColorByVariant[variant];
  const icon = iconByVariant[variant];

  const resolvedRole = role ?? "alert";
  const resolvedLive = ariaLive ?? liveByVariant[variant];

  const isExternal = external ?? /^(?:[a-z]+:)?\/\//i.test(linkHref);

  return (
    <div
      ref={ref}
      role={resolvedRole}
      aria-live={resolvedLive}
      className={`rounded-xl border p-4 ${container} ${className ?? ""}`}
      {...rest}
    >
      <div className="flex items-start gap-3">
        <div className={`-mt-0.5 ${iconColor}`}>{icon}</div>

        <div>
          <h4 className="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">
            {title}
          </h4>

          <p className="text-sm text-gray-600 dark:text-gray-300">{message}</p>

          {showLink &&
            (isExternal ? (
              <a
                href={linkHref}
                target="_blank"
                rel="noopener"
                className="inline-block mt-3 text-sm font-medium text-gray-600 underline dark:text-gray-300"
              >
                {linkText}
              </a>
            ) : (
              <Link
                to={linkHref}
                className="inline-block mt-3 text-sm font-medium text-gray-600 underline dark:text-gray-300"
              >
                {linkText}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
});

export default Alert;
