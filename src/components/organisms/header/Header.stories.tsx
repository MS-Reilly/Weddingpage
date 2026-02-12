import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import type { HeaderItem } from "./header.types";
import { IconsDelay } from "../../../assets/svgs/icons";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { MemoryRouter } from "react-router-dom";

// A simple router + Redux decorator so <Link> and useDispatch work in Storybook
const withProviders = (Story: React.FC) => (
  <ReduxProvider>
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  </ReduxProvider>
);

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  decorators: [withProviders],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

// Example data for stories
const storyData: HeaderItem[] = [
  {
    id: 1,
    type: "desktopFlyout",
    buttonText: "Itinerario",
    items: [
      {
        name: "Itinerario del dia",
        description: "Horarios de ceremonia y celebracion",
        href: "/itinerario",
        icon: IconsDelay,
      },
      {
        name: "Transporte",
        description: "Buses y traslados del dia",
        href: "/transporte",
        icon: IconsDelay,
      },
    ],
    callsToAction: [{ name: "Contacto", href: "/contacto", icon: IconsDelay }],
  },
  {
    id: 2,
    type: "desktopFlyout",
    buttonText: "Viaje",
    items: [
      {
        name: "Vuelos y aeropuertos",
        description: "Opciones para llegar a Irlanda",
        href: "/viaje/vuelos",
        icon: IconsDelay,
      },
      {
        name: "Hoteles",
        description: "Recomendaciones de alojamiento",
        href: "/viaje/hoteles",
        icon: IconsDelay,
      },
    ],
    callsToAction: [{ name: "FAQ", href: "/faq", icon: IconsDelay }],
  },
  {
    id: 3,
    type: "desktopFlyout",
    buttonText: "Guia",
    items: [
      {
        name: "Dress code",
        description: "Hombres, mujeres, damas y padrinos",
        href: "/dress-code",
        icon: IconsDelay,
      },
      {
        name: "Dietas y alergias",
        description: "Haznos saber tus requisitos",
        href: "/dietas",
        icon: IconsDelay,
      },
    ],
    callsToAction: [],
  },
  {
    id: 4,
    type: "navLink",
    link: { href: "/regalos", children: "Mesa de regalos" },
  },
];

export const Default: Story = {
  args: { data: storyData },
};

export const OnlyLinks: Story = {
  args: {
    data: [
      {
        id: 10,
        type: "navLink",
        link: { href: "/itinerario", children: "Itinerario" },
      },
      {
        id: 11,
        type: "navLink",
        link: { href: "/viaje", children: "Viaje" },
      },
      {
        id: 12,
        type: "navLink",
        link: { href: "/regalos", children: "Mesa de regalos" },
      },
    ],
  },
};

export const OnlyFlyouts: Story = {
  args: {
    data: [
      {
        id: 21,
        type: "desktopFlyout",
        buttonText: "Itinerario",
        items: [
          {
            name: "Ubicaciones",
            description: "Mapa de iglesia y recepcion",
            href: "/ubicaciones",
            icon: IconsDelay,
          },
        ],
        callsToAction: [
          { name: "Contacto", href: "/contacto", icon: IconsDelay },
        ],
      },
      {
        id: 22,
        type: "desktopFlyout",
        buttonText: "Guia",
        items: [
          {
            name: "Clima en Irlanda",
            description: "Que llevar y como vestirse",
            href: "/clima",
            icon: IconsDelay,
          },
        ],
        callsToAction: [{ name: "FAQ", href: "/faq", icon: IconsDelay }],
      },
    ],
  },
};
