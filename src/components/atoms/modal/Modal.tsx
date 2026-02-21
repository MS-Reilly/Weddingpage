import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CircleX } from "../../../assets/svgs/icons";

export interface ModalProps {
  /**
   * Controls whether the modal is displayed
   */
  isOpen: boolean;
  /**
   * Callback when the modal is closed
   */
  onClose: () => void;
  /**
   * The title of the modal
   */
  title?: string;
  /**
   * The content of the modal
   */
  children: ReactNode;
  /**
   * Optional image to display in the modal
   */
  image?: {
    src: string;
    alt?: string;
  };
  /**
   * Position of the image relative to content
   * - top: Image appears above content
   * - bottom: Image appears below content
   * - left: Image appears to the left of content
   * - right: Image appears to the right of content
   */
  imagePosition?: "top" | "bottom" | "left" | "right";
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  image,
  imagePosition = "left",
  className = "",
}: ModalProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[200]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-[200] w-screen overflow-y-auto">
          <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative transform overflow-hidden sm:rounded-lg rounded-t-2xl bg-white dark:bg-gray-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all w-full sm:my-8 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl sm:p-6 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto ${className}`}
              >
                {/* Close button */}
                <div className="absolute right-0 top-0 pr-3 pt-3 sm:pr-4 sm:pt-4 z-10">
                  <button
                    type="button"
                    className="rounded-full bg-white/80 dark:bg-gray-800/80 p-2 text-gray-400 hover:text-gray-500 hover:bg-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <CircleX
                      className="h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col gap-6 ${
                    image &&
                    (imagePosition === "left" || imagePosition === "right")
                      ? "sm:flex-row sm:gap-8"
                      : ""
                  }`}
                >
                  {/* Top image */}
                  {image && imagePosition === "top" && (
                    <div className="flex-none">
                      <img
                        src={image.src}
                        alt={image.alt || "Modal illustration"}
                        className="w-full h-full object-cover rounded-lg max-h-[300px]"
                      />
                    </div>
                  )}

                  {/* Left image */}
                  {image && imagePosition === "left" && (
                    <div className="flex-none order-2 sm:order-1 sm:w-1/2">
                      <img
                        src={image.src}
                        alt={image.alt || "Modal illustration"}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Main content */}
                  <div
                    className={`flex-1 order-1 sm:order-2 ${
                      image &&
                      (imagePosition === "left" || imagePosition === "right")
                        ? "sm:w-1/2"
                        : "w-full"
                    } px-4 py-5 sm:p-6`}
                  >
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-gray-900 dark:text-white mb-4"
                      >
                        {title}
                      </Dialog.Title>
                    )}
                    {children}
                  </div>

                  {/* Right image */}
                  {image && imagePosition === "right" && (
                    <div className="flex-none order-2 sm:order-3 sm:w-1/2">
                      <img
                        src={image.src}
                        alt={image.alt || "Modal illustration"}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Bottom image */}
                  {image && imagePosition === "bottom" && (
                    <div className="flex-none">
                      <img
                        src={image.src}
                        alt={image.alt || "Modal illustration"}
                        className="w-full h-full object-cover rounded-lg max-h-[300px]"
                      />
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
