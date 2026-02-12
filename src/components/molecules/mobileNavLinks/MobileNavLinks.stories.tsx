// src/components/molecules/MobileNavLinks/MobileNavLinks.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { IconsCalendar } from "../../../assets/svgs/icons";
import MobileNavLinks from "./MobileNavLinks";
import type { MobileNavLinksProps } from "./MobileNavLinks.types";

const meta: Meta<MobileNavLinksProps> = {
  title: "Molecules/MobileNavLinks",
  component: MobileNavLinks,
  parameters: {
    // This decorator centers the component in Storybook
    layout: "centered",
  },
  args: {
    navigation: [
      { href: "/", icon: IconsCalendar, children: "Inicio" },
      { href: "/itinerario", icon: IconsCalendar, children: "Itinerario" },
      { href: "/viaje", icon: IconsCalendar, children: "Viaje" },
      { href: "/contacto", children: "Contacto" },
    ],
  },
};
export default meta;

type Story = StoryObj<MobileNavLinksProps>;

export const Default: Story = {};
