import type { Meta, StoryObj } from "@storybook/react";
import ImageCarouselStack from "./ImageCarouselStack";
import type { ImageCarouselStackProps } from "./ImageCarouselStack.types";

const meta: Meta<typeof ImageCarouselStack> = {
  title: "atoms/ImageCarouselStack",
  component: ImageCarouselStack,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    images: {
      control: { type: "object" },
      description: "Array of image URLs shown in the three column layout",
    },
  },
};
export default meta;

type Story = StoryObj<typeof ImageCarouselStack>;

const sampleImages: string[] = [
  "https://picsum.photos/id/1011/400/600",
  "https://picsum.photos/id/1012/400/600",
  "https://picsum.photos/id/1013/400/600",
  "https://picsum.photos/id/1014/400/600",
  "https://picsum.photos/id/1015/400/600",
];

export const Default: Story = {
  args: {
    images: sampleImages,
  } as ImageCarouselStackProps,
};

export const FewImages: Story = {
  args: {
    images: sampleImages.slice(0, 3),
  } as ImageCarouselStackProps,
};

export const Empty: Story = {
  args: {
    images: [],
  } as ImageCarouselStackProps,
};
