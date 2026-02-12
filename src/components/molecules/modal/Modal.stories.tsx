import type { Meta, StoryObj } from "@storybook/react-vite";
import Modal from "./Modal";
import type { ModalProps } from "./Modal.types";

const meta: Meta<ModalProps> = {
  title: "Molecules/Modal",
  component: Modal,
  args: {
    buttonProps: {
      children: "Open Modal",
      variant: "primary",
    },
    title: "Example Modal",
    children: (
      <div className="p-6">
        <p>This is an example modal content.</p>
      </div>
    ),
  },
  argTypes: {
    buttonProps: {
      control: "object",
    },
    image: {
      control: "object",
    },
    imagePosition: {
      control: "select",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

export const Default: Story = {};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
  },
};

export const WithImage: Story = {
  args: {
    image: {
      src: "https://picsum.photos/400/300",
      alt: "Example image",
    },
    imagePosition: "right",
  },
};

export const ImageOnLeft: Story = {
  args: {
    image: {
      src: "https://picsum.photos/400/300",
      alt: "Example image",
    },
    imagePosition: "left",
  },
};

export const CustomButton: Story = {
  args: {
    buttonProps: {
      children: "Custom Button",
      variant: "outline",
      size: "lg",
      startIcon: <span>★</span>,
    },
  },
};
