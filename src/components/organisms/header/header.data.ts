import {
  IconsPhone,
  IconsItinerary,
  IconsBus,
  IconsMaps,
  IconsFlight,
  IconsHotel,
  IconsIreland,
  IconsVillage,
  IconsDress,
  IconsWeather,
  IconsNutrition,
  IconsExclamation,
} from "../../../assets/svgs/icons";
import type { HeaderItem } from "./header.types";

export const headerData: { es: HeaderItem[]; en: HeaderItem[] } = {
  es: [
    {
      id: 1,
      type: "desktopFlyout",
      buttonText: "Itinerario",
      items: [
        {
          name: "Itinerario del dia",
          description: "Horarios de ceremonia y celebracion",
          href: "/itinerario",
          icon: IconsItinerary,
        },
        {
          name: "Transporte",
          description: "Buses y traslados del dia",
          href: "/transporte",
          icon: IconsBus,
        },
        {
          name: "Ubicaciones",
          description: "Mapa de iglesia y recepcion",
          href: "/ubicaciones",
          icon: IconsMaps,
        },
      ],
      callsToAction: [],
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
          icon: IconsFlight,
        },
        {
          name: "Hoteles",
          description: "Recomendaciones de alojamiento",
          href: "/viaje/hoteles",
          icon: IconsHotel,
        },
        {
          name: "Que hacer en Newry",
          description: "Planes cerca del hotel",
          href: "/newry",
          icon: IconsVillage,
        },
        {
          name: "Que hacer en Irlanda",
          description: "Ideas para tu viaje",
          href: "/irlanda",
          icon: IconsIreland,
        },
      ],
      callsToAction: [],
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
          icon: IconsDress,
        },
        {
          name: "Clima en Irlanda",
          description: "Que llevar y como vestirse",
          href: "/clima",
          icon: IconsWeather,
        },
        {
          name: "Dietas y alergias",
          description: "Haznos saber tus requisitos",
          href: "/dietas",
          icon: IconsNutrition,
        },
        {
          name: "Importante",
          description: "Que no traer y normas del evento",
          href: "/importante",
          icon: IconsExclamation,
        },
        {
          name: "Contacto",
          description: "Escribenos si necesitas ayuda",
          href: "/contacto",
          icon: IconsPhone,
        },
      ],
      callsToAction: [],
    },
    {
      id: 4,
      type: "navLink",
      link: {
        href: "/regalos",
        children: "Mesa de regalos",
      },
    },
  ],
  en: [
    {
      id: 1,
      type: "desktopFlyout",
      buttonText: "Itinerary",
      items: [
        {
          name: "Day itinerary",
          description: "Ceremony and celebration schedule",
          href: "/itinerario",
          icon: IconsItinerary,
        },
        {
          name: "Transport",
          description: "Buses and transfers for the day",
          href: "/transporte",
          icon: IconsBus,
        },
        {
          name: "Locations",
          description: "Church and reception map",
          href: "/ubicaciones",
          icon: IconsMaps,
        },
      ],
      callsToAction: [],
    },
    {
      id: 2,
      type: "desktopFlyout",
      buttonText: "Travel",
      items: [
        {
          name: "Flights and airports",
          description: "Options for getting to Ireland",
          href: "/viaje/vuelos",
          icon: IconsFlight,
        },
        {
          name: "Hotels",
          description: "Accommodation recommendations",
          href: "/viaje/hoteles",
          icon: IconsHotel,
        },
        {
          name: "What to do in Newry",
          description: "Plans near the hotel",
          href: "/newry",
          icon: IconsVillage,
        },
        {
          name: "What to do in Ireland",
          description: "Ideas for your trip",
          href: "/irlanda",
          icon: IconsIreland,
        },
      ],
      callsToAction: [],
    },
    {
      id: 3,
      type: "desktopFlyout",
      buttonText: "Guide",
      items: [
        {
          name: "Dress code",
          description: "Men, women, bridesmaids, and groomsmen",
          href: "/dress-code",
          icon: IconsDress,
        },
        {
          name: "Weather in Ireland",
          description: "What to pack and how to dress",
          href: "/clima",
          icon: IconsWeather,
        },
        {
          name: "Diets and allergies",
          description: "Let us know your requirements",
          href: "/dietas",
          icon: IconsNutrition,
        },
        {
          name: "Important",
          description: "What not to bring and event rules",
          href: "/importante",
          icon: IconsExclamation,
        },
        {
          name: "Contact",
          description: "Write to us if you need help",
          href: "/contacto",
          icon: IconsPhone,
        },
      ],
      callsToAction: [],
    },
    {
      id: 4,
      type: "navLink",
      link: {
        href: "/regalos",
        children: "Gift table",
      },
    },
  ],
};
