import { Link } from "react-router-dom";
import { Error404Icon } from "@assets/svgs/icons";
import { LogoHorizontal } from "@assets/svgs/logos";

export type NotFoundPanelProps = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  footerSuffix: string;
};

export default function NotFoundPanel({
  heading,
  body,
  ctaLabel,
  ctaHref,
  footerSuffix,
}: NotFoundPanelProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
      <div className="mx-auto w-full text-center max-w-xs sm:max-w-md lg:max-w-xl">
        <LogoHorizontal className="mx-auto mb-6 w-32 sm:w-44 md:w-56 lg:w-64 opacity-80" />

        <h1 className="mb-6 font-bold text-brand-500 text-2xl sm:text-3xl md:text-4xl">
          {heading}
        </h1>

        <div className="flex justify-center">
          <Error404Icon className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72" />
        </div>

        <p className="mt-10 mb-6 text-sm sm:text-base text-gray-700 dark:text-gray-400">
          {body}
        </p>

        <Link
          to={ctaHref}
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03] dark:hover:text-gray-100"
        >
          {ctaLabel}
        </Link>
      </div>

      <p className="absolute text-xs sm:text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
        &copy; {new Date().getFullYear()} – {footerSuffix}
      </p>
    </div>
  );
}
