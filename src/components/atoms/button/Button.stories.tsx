import type { Meta, StoryObj } from "@storybook/react";
import "./../../../index.css";
import Button from "./Button";
import type { ButtonProps } from "./Button.types";

const meta: Meta<ButtonProps> = {
  title: "Atoms/Button",
  component: Button,
  args: { children: "Button", size: "md", variant: "primary" },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    isLoading: { control: "boolean" },
    fullWidth: { control: "boolean" },
    iconOnly: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Danger: Story = { args: { variant: "danger" } };
export const Loading: Story = { args: { isLoading: true } };
export const FullWidth: Story = { args: { fullWidth: true } };
export const IconOnly: Story = {
  args: {
    iconOnly: true,
    startIcon: <span>★</span>,
    "aria-label": "Star",
  } as any,
};
export const AsLink: Story = {
  args: { as: "a", href: "/docs", children: "Go to docs" },
};
