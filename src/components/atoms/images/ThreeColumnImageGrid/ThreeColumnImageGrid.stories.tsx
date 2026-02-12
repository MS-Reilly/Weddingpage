import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThreeColumnImageGrid } from "./ThreeColumnImageGrid";

const meta: Meta<typeof ThreeColumnImageGrid> = {
  title: "Atoms/Images/ThreeColumnImageGrid",
  component: ThreeColumnImageGrid,
  tags: ["autodocs"],
  args: {
    images: [
      { src: "https://via.placeholder.com/400x300", alt: "Image 1" },
      { src: "https://via.placeholder.com/400x300", alt: "Image 2" },
      { src: "https://via.placeholder.com/400x300", alt: "Image 3" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ThreeColumnImageGrid>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    className: "gap-8",
  },
};
