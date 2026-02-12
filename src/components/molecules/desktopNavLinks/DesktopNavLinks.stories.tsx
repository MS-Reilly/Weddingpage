// src/components/molecules/DesktopNavLinks/DesktopNavLinks.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { IconsDelay } from "../../../assets/svgs/icons";
import DesktopNavLinks from "./DesktopNavLinks";
import type { DesktopNavLinksProps } from "./DesktopNavLinks.types";

const meta: Meta<DesktopNavLinksProps> = {
  title: "Molecules/DesktopNavLinks",
  component: DesktopNavLinks,
  args: {
    navigation: [
      { href: "/", icon: IconsDelay, children: "Inicio" },
      { href: "/itinerario", icon: IconsDelay, children: "Itinerario" },
      { href: "/viaje", icon: IconsDelay, children: "Viaje" },
      { href: "/regalos", children: "Mesa de regalos" },
      { href: "/contacto", children: "Contacto" },
    ],
  },
};
export default meta;

type Story = StoryObj<DesktopNavLinksProps>;

export const Default: Story = {};
