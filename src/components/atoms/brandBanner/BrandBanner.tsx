import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export interface BrandBannerProps {
  message: string | React.ReactNode;
  className?: string;
  /** Optional localStorage key to persist dismissal */
  storageKey?: string;
  /** Render a different dismiss label for a11y */
  dismissLabel?: string;
}

/**
 * BrandBanner – lightweight, dismissible top-of-section banner for upcoming / announcement notices.
 * Gradient uses brand palette; content kept simple (no complex layout) to keep it reusable.
 */
export function BrandBanner({
  message,
  className,
  storageKey,
  dismissLabel = "Dismiss",
}: BrandBannerProps) {
  const [open, setOpen] = useState(() => {
    if (storageKey && typeof window !== "undefined") {
      try {
        return localStorage.getItem(storageKey) !== "dismissed";
      } catch {
        return true;
      }
    }
    return true;
  });

  const dismiss = () => {
    setOpen(false);
    if (storageKey && typeof window !== "undefined") {
      try {
        localStorage.setItem(storageKey, "dismissed");
      } catch {
        /* ignore */
      }
    }
  };

  if (!open) return null;

  return (
    <div
      className={clsx(
        "flex items-center gap-x-4 rounded-md bg-linear-to-r from-brand-500 to-brand-600 px-4 py-2 sm:px-5 shadow-sm",
        "text-white",
        className
      )}
    >
      <div className="flex-1 text-xs sm:text-sm font-medium leading-5">
        {message}
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="-m-2 p-2 inline-flex rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        <span className="sr-only">{dismissLabel}</span>
        <XMarkIcon aria-hidden="true" className="size-4 sm:size-5" />
      </button>
    </div>
  );
}

export default BrandBanner;
