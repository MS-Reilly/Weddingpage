import { ButtonAsButton } from "../../atoms/button/Button.types";
import { ReactNode } from "react";

export interface ModalProps {
  /** Text for the trigger button */
  buttonText?: string;
  /** Variant for the trigger button */
  buttonVariant?: ButtonAsButton["variant"];
  /** Size for the trigger button */
  buttonSize?: ButtonAsButton["size"];
  /** Additional class names for the trigger button */
  buttonClassName?: string;
  /** Modal title (optional) */
  title?: string;
  /** Modal content */
  children?: ReactNode;
  /** Additional class names for the modal content */
  className?: string;
  /** Optional image to display in the modal */
  image?: string;
  /** Position of the image relative to content */
  imagePosition?: "left" | "right" | "top";
  /** Callback when modal is closed */
  onModalClose?: () => void;
  /** External control for modal state */
  isOpen?: boolean;
  /** External control for opening modal */
  onOpen?: () => void;
  /** External control for closing modal */
  onClose?: () => void;
}
