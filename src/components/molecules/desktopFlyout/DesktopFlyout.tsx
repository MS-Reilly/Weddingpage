// src/components/molecules/DesktopFlyout/DesktopFlyout.tsx
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import type { DesktopFlyoutProps } from "./DesktopFlyout.types";

export default function DesktopFlyout({
  buttonText,
  items,
  callsToAction,
}: DesktopFlyoutProps) {
  return (
    <Popover className="relative z-[60]">
      <PopoverButton
        type="button"
        className="inline-flex items-center gap-x-1 text-base font-regular text-brand-950"
      >
        <span>{buttonText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-[60] mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4
                   transition data-[closed]:translate-y-1 data-[closed]:opacity-0
                   data-[enter]:duration-200 data-[enter]:ease-out
                   data-[leave]:duration-150 data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          {/* Main items */}
          <div className="p-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-brand-500 group-hover:text-brand-600 dark:text-brand-300 dark:group-hover:text-white"
                  />
                </div>
                <div>
                  <a
                    href={item.href}
                    className="font-semibold text-brand-950 dark:text-white"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* CTAs */}
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:divide-white/10 dark:bg-gray-700/50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-brand-950 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700/50"
              >
                <item.icon
                  aria-hidden="true"
                  className="size-5 flex-none text-brand-500 dark:text-brand-300"
                />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
