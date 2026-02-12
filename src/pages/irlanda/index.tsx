import InfoPage from "../info/InfoPage";
import pageData from "./data/irlanda.json";
import detailsData from "./data/details.json";
import DetailsSection from "./organisms/DetailsSection";
import IrlandaHighlightsSection from "./organisms/IrlandaHighlightsSection";
import { VideoSection } from "./organisms/VideoSection";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";
import imgHotel from "@assets/images/wedding/ImageHotel.webp";
import imgChapel from "@assets/images/wedding/Chapel.webp";
import imgBellingham from "@assets/images/wedding/bellingham.webp";
import videoWeb from "@assets/videos/Video2.mp4";

export default function IrlandaPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedPageData = getLocalizedData(pageData, language) as {
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    note?: string;
    backgroundImage?: string;
    highlights: {
      sectionTitle: string;
      sectionSubtitle?: string;
      locationLabel: string;
      items: Array<{
        id: string;
        title: string;
        location: string;
        description: string;
        categoryLabel: string;
        imageKey: "hotel" | "chapel" | "bellingham";
        imageAlt: string;
      }>;
    };
    video: {
      heading: string;
      subheading: string;
      message: string;
    };
  };
  const localizedDetailsData = getLocalizedData(detailsData, language);
  const imageMap = {
    hotel: imgHotel,
    chapel: imgChapel,
    bellingham: imgBellingham,
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
        backgroundImage={backgroundImage}
      />
      <IrlandaHighlightsSection
        sectionTitle={localizedPageData.highlights.sectionTitle}
        sectionSubtitle={localizedPageData.highlights.sectionSubtitle}
        locationLabel={localizedPageData.highlights.locationLabel}
        items={localizedPageData.highlights.items.map((item) => ({
          ...item,
          imageSrc: imageMap[item.imageKey],
        }))}
      />

      <div className="h-screen sm:h-auto">
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
      </div>
    </>
  );
}
