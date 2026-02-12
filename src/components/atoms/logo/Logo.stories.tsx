import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";
import type { LogoProps } from "./Logo.types";

const meta: Meta<LogoProps> = {
  title: "Atoms/Logo",
  component: Logo,
  args: { kind: "horizontal", theme: "auto", label: "Brand" },
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<LogoProps>;

export const HorizontalAuto: Story = {
  args: { kind: "horizontal", theme: "auto" },
};

export const HorizontalLight: Story = {
  args: { kind: "horizontal", theme: "light" },
};

export const HorizontalDark: Story = {
  args: { kind: "horizontal", theme: "dark" },
  decorators: [
    (Story) => (
      <div className="p-6 rounded-lg bg-gray-900">
        <Story />
      </div>
    ),
  ],
};

export const MarkAuto: Story = {
  args: { kind: "mark", theme: "auto", className: "h-12 w-auto" },
};

export const MarkLight: Story = {
  args: { kind: "mark", theme: "light", className: "h-12 w-auto" },
};

export const MarkDark: Story = {
  args: { kind: "mark", theme: "dark", className: "h-12 w-auto" },
  decorators: [
    (Story) => (
      <div className="p-6 rounded-lg bg-gray-900">
        <Story />
      </div>
    ),
  ],
};
