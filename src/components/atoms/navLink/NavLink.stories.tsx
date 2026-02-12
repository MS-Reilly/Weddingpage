// src/components/atoms/NavLink/NavLink.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Error404Icon, IconsCalendar } from "../../../assets/svgs/icons";
import NavLink from "./NavLink";
import type { NavLinkProps } from "./NavLink.types";

const meta: Meta<NavLinkProps> = {
  title: "Atoms/NavLink",
  component: NavLink,
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
    href: {
      control: "text",
      description: "The URL to navigate to. Omit for static text.",
    },
    icon: {
      control: false,
    },
  },
};
export default meta;

type Story = StoryObj<NavLinkProps>;

export const Default: Story = {};

export const DefaultNoIcon: Story = {
  args: {
    icon: undefined,
    children: "Mesa de regalos",
    href: "/regalos",
  },
};

export const StaticText: Story = {
  args: {
    href: undefined,
    children: "Invitados",
    icon: IconsCalendar,
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
