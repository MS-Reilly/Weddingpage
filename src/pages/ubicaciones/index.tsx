import InfoPage from "../info/InfoPage";
import pageData from "./data/ubicaciones.json";
import LocationsSection from "./organisms/LocationsSection";
// import { VideoSection } from "./organisms/VideoSection";
// import videoWeb from "./assets/Video.mp4";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function UbicacionesPage() {
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
      message: string;
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
      <LocationsSection />
      {/* Commented out until video is hosted externally */}
      {/* Commented out until video is hosted externally */}
      {/* <div className="h-screen sm:h-auto">
        <VideoSection
          videoSrc={videoWeb}
          heading={localizedPageData.video.heading}
          subheading={localizedPageData.video.subheading}
          variant="fullscreen"
          className="sm:!h-[600px] md:!h-[700px]"
        >
          <p className="mt-8 max-w-2xl text-base text-white/85 sm:text-lg">
            {localizedPageData.video.message}
          </p>
        </VideoSection>
      </div> */}
    </>
  );
}
