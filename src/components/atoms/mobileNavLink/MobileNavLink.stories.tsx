// src/components/atoms/MobileNavLink/MobileNavLink.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Error404Icon } from "../../../assets/svgs/icons";
import MobileNavLink from "./MobileNavLink";
import type { MobileNavLinkProps } from "./MobileNavLink.types";

const meta: Meta<MobileNavLinkProps> = {
  title: "Atoms/MobileNavLink",
  component: MobileNavLink,
  args: {
    href: "/itinerario",
    icon: Error404Icon,
    children: "Itinerario",
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    icon: {
      control: false,
    },
  },
};
export default meta;

type Story = StoryObj<MobileNavLinkProps>;

export const Default: Story = {};

export const DefaultNoIcon: Story = {
  args: {
    icon: undefined,
    children: "Mesa de regalos",
    href: "/regalos",
  },
};

export const Small: Story = {
  args: {
    children: "Viaje",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Contacto",
    size: "lg",
  },
};
