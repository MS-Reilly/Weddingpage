import React from "react";

export type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: AlertVariant;
  title: string;
  message: string;
  /** Show a link under the message */
  showLink?: boolean;
  /** Link target (internal with <Link> or external with <a>) */
  linkHref?: string;
  /** Text for the link */
  linkText?: string;
  /** If true, forces external <a> even if linkHref looks internal */
  external?: boolean;
  /** Override ARIA role. Defaults to "alert". */
  role?: React.AriaRole;
  /** Override aria-live politeness. Defaults based on variant. */
  "aria-live"?: React.AriaAttributes["aria-live"];
}
