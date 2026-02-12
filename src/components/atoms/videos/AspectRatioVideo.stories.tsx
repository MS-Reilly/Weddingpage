import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatioVideo } from "./AspectRatioVideo";

const meta: Meta<typeof AspectRatioVideo> = {
  title: "Atoms/Videos/AspectRatioVideo",
  component: AspectRatioVideo,
  tags: ["autodocs"],
  args: {
    src: new URL("../../../assets/videos/weddingVideo.mp4", import.meta.url)
      .href,
    poster: new URL(
      "../../../assets/images/wedding/bellingham.webp",
      import.meta.url,
    ).href,
    controls: true,
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatioVideo>;

export const Default: Story = {};

export const CeremonyVideo: Story = {
  args: {
    src: new URL("../../../assets/videos/weddingVideo.mp4", import.meta.url)
      .href,
    poster: new URL(
      "../../../assets/images/wedding/Chapel.webp",
      import.meta.url,
    ).href,
    controls: true,
  },
};

export const ReceptionVideo: Story = {
  args: {
    src: new URL("../../../assets/videos/weddingVideo.mp4", import.meta.url)
      .href,
    poster: new URL(
      "../../../assets/images/wedding/ImageHotel.webp",
      import.meta.url,
    ).href,
    controls: true,
  },
};

export const AutoplayMuted: Story = {
  args: {
    src: new URL("../../../assets/videos/weddingVideo.mp4", import.meta.url)
      .href,
    poster: new URL(
      "../../../assets/images/wedding/bellingham.webp",
      import.meta.url,
    ).href,
    autoPlay: true,
    muted: true,
    loop: true,
  },
};

export const AspectRatio21By9: Story = {
  args: {
    src: new URL("../../../assets/videos/weddingVideo.mp4", import.meta.url)
      .href,
    poster: new URL(
      "../../../assets/images/wedding/Chapel.webp",
      import.meta.url,
    ).href,
    aspectRatio: "21:9",
    controls: true,
  },
};

export const AspectRatio4By3: Story = {
  args: {
    src: new URL("../../../assets/videos/weddingVideo.mp4", import.meta.url)
      .href,
    poster: new URL(
      "../../../assets/images/wedding/ImageHotel.webp",
      import.meta.url,
    ).href,
    aspectRatio: "4:3",
    controls: true,
  },
};

export const AspectRatio1By1: Story = {
  args: {
    src: new URL("../../../assets/videos/weddingVideo.mp4", import.meta.url)
      .href,
    poster: new URL(
      "../../../assets/images/wedding/bellingham.webp",
      import.meta.url,
    ).href,
    aspectRatio: "1:1",
    controls: true,
  },
};
