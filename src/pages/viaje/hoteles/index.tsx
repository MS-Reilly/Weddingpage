import InfoPage from "../../info/InfoPage";
import pageData from "./data/hoteles.json";
import detailsData from "./data/details.json";
import DetailsSection from "./organisms/DetailsSection";
import HotelCardsSection from "./organisms/HotelCardsSection";
import HotelNoticeSection from "./organisms/HotelNoticeSection";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";
import imgHotel from "./assets/carrickdale.webp";
import imgChapel from "./assets/canalCourt.jpg";
import imgBellingham from "./assets/airbnb.jpg";
import imgRoom from "./assets/roomCastle.jpg";

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
      pricing: {
        title: string;
        options: Array<{ guests: string; price: string }>;
      };
      deadline: string;
      paymentInstructions: string;
      paymentMethods: Array<{
        name: string;
        fields: Array<{ label: string; value: string }>;
      }>;
      reference: {
        label: string;
        format: string;
        exampleLabel: string;
        example: string;
      };
      imageKey: "hotel" | "chapel" | "bellingham" | "room";
      imageAlt: string;
    };
  };
  const localizedDetailsData = getLocalizedData(detailsData, language);
  const imageMap = {
    hotel: imgHotel,
    chapel: imgChapel,
    bellingham: imgBellingham,
    room: imgRoom,
  };
  const pageImages = import.meta.glob("./assets/*", {
    eager: true,
    as: "url",
  }) as Record<string, string>;
  const backgroundImage = localizedPageData.backgroundImage
    ? pageImages[localizedPageData.backgroundImage]
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
        pricing={localizedPageData.notice.pricing}
        deadline={localizedPageData.notice.deadline}
        paymentInstructions={localizedPageData.notice.paymentInstructions}
        paymentMethods={localizedPageData.notice.paymentMethods}
        reference={localizedPageData.notice.reference}
        imageSrc={imageMap[localizedPageData.notice.imageKey]}
        imageAlt={localizedPageData.notice.imageAlt}
      />
    </>
  );
}
