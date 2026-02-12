import type { Meta, StoryObj } from "@storybook/react-vite";
import { TwoColumnImageGrid } from "./TwoColumnImageGrid";

const meta: Meta<typeof TwoColumnImageGrid> = {
  title: "Atoms/Images/TwoColumnImageGrid",
  component: TwoColumnImageGrid,
  tags: ["autodocs"],
  args: {
    images: [
      { src: "https://via.placeholder.com/400x300", alt: "Image 1" },
      { src: "https://via.placeholder.com/400x300", alt: "Image 2" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof TwoColumnImageGrid>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    className: "gap-8",
  },
};
