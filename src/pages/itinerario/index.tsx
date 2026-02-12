import InfoPage from "../info/InfoPage";
import pageData from "./data/itinerario.json";
import TimelineSection from "./organisms/TimelineSection";
import { VideoSection } from "./organisms/VideoSection";
import videoWeb from "./assets/Video.mp4";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function ItinerarioPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedPageData = getLocalizedData(pageData, language) as {
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    backgroundImage?: string;
    note?: string;
    video: {
      heading: string;
      subheading: string;
      ctaLabel: string;
      ctaHref: string;
    };
  };
  const backgroundImage = localizedPageData.backgroundImage
    ? new URL(localizedPageData.backgroundImage, import.meta.url).href
    : undefined;
  return (
    <>
      <InfoPage
        title={localizedPageData.title}
        description={localizedPageData.description}
        metaTitle={localizedPageData.metaTitle}
        metaDescription={localizedPageData.metaDescription}
        note={localizedPageData.note}
        backgroundImage={backgroundImage}
      />
      <TimelineSection />
      <div className="h-screen sm:h-auto">
        <VideoSection
          videoSrc={videoWeb}
          heading={localizedPageData.video.heading}
          variant="fullscreen"
          className="sm:!h-[600px] md:!h-[700px]"
        >
          <p className="mt-8 max-w-2xl text-base text-white/85 sm:text-lg">
            {localizedPageData.video.subheading}
          </p>
        </VideoSection>
      </div>
    </>
  );
}
