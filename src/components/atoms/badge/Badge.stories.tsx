import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "New",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Draft",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Completed",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Pending",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: "Failed",
    variant: "error",
  },
};

export const Info: Story = {
  args: {
    children: "Info",
    variant: "info",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    rounded: true,
  },
};
