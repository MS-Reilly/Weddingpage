import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResponsiveImage } from "./ResponsiveImage";

const meta: Meta<typeof ResponsiveImage> = {
  title: "Atoms/Images/ResponsiveImage",
  component: ResponsiveImage,
  tags: ["autodocs"],
  args: {
    src: "https://via.placeholder.com/400x300",
    alt: "Example image",
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveImage>;

export const Default: Story = {};

export const WithCustomSize: Story = {
  args: {
    width: 200,
    height: 150,
  },
};

export const WithObjectFit: Story = {
  args: {
    objectFit: "cover",
    width: 300,
    height: 200,
  },
};
