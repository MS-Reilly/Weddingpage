import { Button } from "../../atoms/button";
import { Modal as BaseModal } from "../../atoms/modal/Modal";
import { Dialog } from "@headlessui/react";
import { useModal } from "../../../hooks/useModal";
import type { ModalProps } from "./Modal.types";

export const Modal = ({
  buttonText = "Open",
  buttonVariant = "primary",
  buttonSize = "md",
  buttonClassName,
  title,
  children,
  className,
  image,
  imagePosition = "left",
  onModalClose,
  isOpen: externalIsOpen,
  onOpen: externalOnOpen,
  onClose: externalOnClose,
}: ModalProps) => {
  const internalModal = useModal();

  // Use external state if provided, otherwise use internal state
  const isOpen =
    externalIsOpen !== undefined ? externalIsOpen : internalModal.isOpen;
  const openModal = externalOnOpen || internalModal.openModal;
  const closeModal = externalOnClose || internalModal.closeModal;

  const handleClose = () => {
    closeModal();
    onModalClose?.();
  };

  return (
    <>
      <Button
        variant={buttonVariant}
        size={buttonSize}
        className={buttonClassName}
        onClick={openModal}
      >
        {buttonText}
      </Button>
      <BaseModal
        isOpen={isOpen}
        onClose={handleClose}
        className={`${className} overflow-hidden`}
      >
        <div className="flex flex-col gap-6">
          {/* Top image */}
          {image && imagePosition === "top" && (
            <div className="w-full">
              <img
                src={image}
                alt="Modal illustration"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Content wrapper for side images */}
          <div
            className={`flex ${
              imagePosition === "right"
                ? "flex-col sm:flex-row-reverse"
                : "flex-col sm:flex-row"
            } gap-6`}
          >
            {/* Left image */}
            {image && imagePosition === "left" && (
              <div className="w-full sm:w-1/2">
                <img
                  src={image}
                  alt="Modal illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}

            {/* Main content */}
            <div
              className={`w-full ${
                imagePosition === "left" || imagePosition === "right"
                  ? "sm:w-1/2"
                  : ""
              }`}
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
              <div className="w-full sm:w-1/2">
                <img
                  src={image}
                  alt="Modal illustration"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </BaseModal>
    </>
  );
};

export default Modal;
