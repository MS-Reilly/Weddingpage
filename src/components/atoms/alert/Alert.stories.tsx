import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";
import type { AlertProps } from "./Alert.types";

const meta: Meta<AlertProps> = {
  title: "Atoms/Alert",
  component: Alert,

  args: {
    title: "Heads up",
    message: "This is an example alert. Everything is working as expected.",
    variant: "info",
    showLink: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
  },
};
export default meta;

type Story = StoryObj<AlertProps>;

export const Info: Story = {};
export const Success: Story = {
  args: {
    variant: "success",
    title: "Saved",
    message: "Your changes were saved.",
  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Check again",
    message: "Please review the highlighted fields.",
  },
};
export const Error: Story = {
  args: {
    variant: "error",
    title: "Something went wrong",
    message: "We couldn’t complete your request.",
  },
};
export const WithInternalLink: Story = {
  args: {
    showLink: true,
    linkHref: "/learn-more",
    linkText: "Learn more",
  },
};
export const WithExternalLink: Story = {
  args: {
    showLink: true,
    linkHref: "https://example.com/docs",
    linkText: "Open docs",
    external: true,
  },
};
