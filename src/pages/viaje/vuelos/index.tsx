import InfoPage from "../../info/InfoPage";
import pageData from "./data/vuelos.json";
import detailsData from "./data/details.json";
import DetailsSection from "./organisms/DetailsSection";
import AirportCardsSection from "./organisms/AirportCardsSection";
import FlightRecommendationsSection from "./organisms/FlightRecommendationsSection";
import recommendationImage from "@assets/images/wedding/ImageHotel.webp";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function ViajeVuelosPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedPageData = getLocalizedData(pageData, language) as {
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    note?: string;
    backgroundImage?: string;
    cards: {
      sectionTitle: string;
      sectionSubtitle?: string;
      items: Array<{
        id: string;
        title: string;
        description: string;
        imageSrc: string;
        imageAlt: string;
        ctaLabel: string;
        ctaHref: string;
      }>;
    };
    recommendations: {
      eyebrow: string;
      titleStart: string;
      titleHighlight: string;
      titleEnd?: string;
      description: string;
      points: string[];
      imageAlt: string;
    };
    search: {
      title: string;
      description: string;
      links: Array<{
        id: string;
        label: string;
        href: string;
      }>;
    };
  };
  const localizedDetailsData = getLocalizedData(detailsData, language);
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
      <AirportCardsSection
        sectionTitle={localizedPageData.cards.sectionTitle}
        sectionSubtitle={localizedPageData.cards.sectionSubtitle}
        items={localizedPageData.cards.items}
      />
      <FlightRecommendationsSection
        eyebrow={localizedPageData.recommendations.eyebrow}
        titleStart={localizedPageData.recommendations.titleStart}
        titleHighlight={localizedPageData.recommendations.titleHighlight}
        titleEnd={localizedPageData.recommendations.titleEnd}
        description={localizedPageData.recommendations.description}
        points={localizedPageData.recommendations.points}
        imageSrc={recommendationImage}
        imageAlt={localizedPageData.recommendations.imageAlt}
      />
    </>
  );
}
