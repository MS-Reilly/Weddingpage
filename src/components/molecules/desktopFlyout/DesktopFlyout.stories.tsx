// src/components/molecules/DesktopFlyout/DesktopFlyout.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { IconsDelay, IconsMedicalTeam } from "../../../assets/svgs/icons";
import DesktopFlyout from "./DesktopFlyout";
import type { DesktopFlyoutProps } from "./DesktopFlyout.types";
import { userEvent, within } from "storybook/test";

const meta: Meta<DesktopFlyoutProps> = {
  title: "Molecules/DesktopFlyout",
  component: DesktopFlyout,
  args: {
    buttonText: "Itinerario",
    items: [
      {
        name: "Ceremonia",
        description: "Horario de la ceremonia religiosa",
        href: "/itinerario",
        icon: IconsDelay,
      },
      {
        name: "Recepcion",
        description: "Cena y celebracion en Bellingham",
        href: "/itinerario",
        icon: IconsDelay,
      },
      {
        name: "Transporte",
        description: "Buses y traslados del dia",
        href: "/transporte",
        icon: IconsDelay,
      },
      {
        name: "Ubicaciones",
        description: "Mapa de iglesia y recepcion",
        href: "/ubicaciones",
        icon: IconsDelay,
      },
      {
        name: "Dress code",
        description: "Guia de vestimenta para invitados",
        href: "/dress-code",
        icon: IconsDelay,
      },
    ],
    callsToAction: [
      { name: "FAQ", href: "/faq", icon: IconsMedicalTeam },
      { name: "Contacto", href: "/contacto", icon: IconsDelay },
    ],
  },
};
export default meta;

type Story = StoryObj<DesktopFlyoutProps>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    // Get the canvas element from Storybook
    const canvas = within(canvasElement);
    // Find the button by its text and simulate a click
    const button = canvas.getByRole("button", { name: "Itinerario" });
    await userEvent.click(button);
  },
};
