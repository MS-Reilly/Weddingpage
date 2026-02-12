import InfoPage from "../../info/InfoPage";
import pageData from "./data/hoteles.json";
import detailsData from "./data/details.json";
import DetailsSection from "./organisms/DetailsSection";
import HotelCardsSection from "./organisms/HotelCardsSection";
import HotelNoticeSection from "./organisms/HotelNoticeSection";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";
import imgHotel from "@assets/images/wedding/ImageHotel.webp";
import imgChapel from "@assets/images/wedding/Chapel.webp";
import imgBellingham from "@assets/images/wedding/bellingham.webp";

export default function ViajeHotelesPage() {
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
        imageKey: "hotel" | "chapel" | "bellingham";
        imageAlt: string;
        badgeLabel?: string;
        distanceLabel?: string;
        ctaLabel: string;
        ctaHref: string;
      }>;
    };
    notice: {
      eyebrow: string;
      title: string;
      description: string;
      imageKey: "hotel" | "chapel" | "bellingham";
      imageAlt: string;
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
        note={localizedPageData.note}
        backgroundImage={backgroundImage}
      />
      <HotelCardsSection
        sectionTitle={localizedPageData.cards.sectionTitle}
        sectionSubtitle={localizedPageData.cards.sectionSubtitle}
        items={localizedPageData.cards.items.map((item) => ({
          ...item,
          imageSrc: imageMap[item.imageKey],
        }))}
      />
      <HotelNoticeSection
        eyebrow={localizedPageData.notice.eyebrow}
        title={localizedPageData.notice.title}
        description={localizedPageData.notice.description}
        imageSrc={imageMap[localizedPageData.notice.imageKey]}
        imageAlt={localizedPageData.notice.imageAlt}
      />
    </>
  );
}
