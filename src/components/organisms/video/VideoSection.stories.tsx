import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoSection } from "./VideoSection";
import type { VideoSectionProps } from "./VideoSection.types";
import sampleVideo from "@assets/videos/weddingVideo.mp4";

const meta: Meta<VideoSectionProps> = {
  title: "Organisms/VideoSection",
  component: VideoSection,
  args: {
    videoSrc: sampleVideo,
    heading: "Recuerdos del lugar",
    subheading: "Un vistazo al castillo y la celebracion que compartiremos.",
    variant: "contained",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["fullscreen", "contained", "background"],
    },
    showControls: {
      control: "boolean",
    },
    showOverlay: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<VideoSectionProps>;

export const Contained: Story = {
  args: {
    variant: "contained",
  },
};

export const Fullscreen: Story = {
  args: {
    variant: "fullscreen",
    heading: "Nos vemos muy pronto",
    subheading: "Gracias por acompaniarnos en este dia especial",
  },
};

export const Background: Story = {
  args: {
    variant: "background",
    heading: "Celebramos juntos",
    subheading: "Un espacio para compartir, brindar y bailar",
    showOverlay: false,
  },
};

export const WithControls: Story = {
  args: {
    showControls: true,
    autoPlay: false,
  },
};

export const WithCustomContent: Story = {
  args: {
    heading: "Confirmacion rapida",
    children: (
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Confirmar asistencia
        </button>
        <button className="text-sm font-semibold leading-6 text-white">
          Ver itinerario <span aria-hidden="true">→</span>
        </button>
      </div>
    ),
  },
};
