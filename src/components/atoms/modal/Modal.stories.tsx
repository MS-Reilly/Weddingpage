import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import type { ModalProps } from "./Modal";
import weddingImage from "@assets/images/wedding/bellingham.webp";

const meta: Meta<ModalProps> = {
  title: "Atoms/Modal",
  component: Modal,
  argTypes: {
    isOpen: { control: "boolean" },
    onClose: { action: "closed" },
    imagePosition: {
      control: "radio",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

// Base Modal
export const Default: Story = {
  args: {
    isOpen: true,
    title: "Example Modal",
    children: (
      <div className="prose dark:prose-invert">
        <p>This is a basic modal with just content.</p>
      </div>
    ),
  },
};

// Modal with Image on Left
export const WithLeftImage: Story = {
  args: {
    isOpen: true,
    title: "RSVP con foto",
    image: {
      src: weddingImage,
      alt: "Bellingham Castle",
    },
    imagePosition: "left",
    children: (
      <div className="prose dark:prose-invert">
        <p>Usa el espacio para un mensaje breve de bienvenida.</p>
      </div>
    ),
  },
};

// Modal with Image on Right
export const WithRightImage: Story = {
  args: {
    isOpen: true,
    title: "Detalles del evento",
    image: {
      src: weddingImage,
      alt: "Bellingham Castle",
    },
    imagePosition: "right",
    children: (
      <div className="prose dark:prose-invert">
        <p>Agrega notas sobre el itinerario o la ceremonia.</p>
      </div>
    ),
  },
};

// Modal with Form Content
export const WithForm: Story = {
  args: {
    isOpen: true,
    title: "Confirmar asistencia",
    children: (
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 dark:bg-gray-800 dark:border-gray-600"
            placeholder="correo@ejemplo.com"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-brand-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          Enviar
        </button>
      </form>
    ),
  },
};
