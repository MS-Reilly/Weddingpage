import InfoPage from "../info/InfoPage";
import pageDataJson from "./data/regalos.json";
import giftsDataJson from "./data/gifts.json";
import GiftGrid from "./organisms/GiftGrid";
import GiftsNoticeSection from "./organisms/GiftsNoticeSection";
import chapelImage from "@assets/images/wedding/Chapel.webp";
import hotelImage from "@assets/images/wedding/ImageHotel.webp";
import castleImage from "@assets/images/wedding/bellingham.webp";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

type PageData = {
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  note?: string;
  backgroundImage?: string;
};

type GiftItemData = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageKey: "chapel" | "hotel" | "castle";
  ctaLabel: string;
  ctaHref: string;
};

type GiftsData = {
  sectionTitle: string;
  items: GiftItemData[];
};

export default function RegalosPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const pageData = getLocalizedData(pageDataJson, language) as PageData;
  const giftsData = getLocalizedData(giftsDataJson, language) as GiftsData;
  const backgroundImage = pageData.backgroundImage
    ? new URL(pageData.backgroundImage, import.meta.url).href
    : undefined;
  const giftImageMap = {
    chapel: chapelImage,
    hotel: hotelImage,
    castle: castleImage,
  };

  const giftItems = giftsData.items.map((item) => ({
    ...item,
    image: giftImageMap[item.imageKey as keyof typeof giftImageMap],
  }));

  return (
    <>
      <InfoPage
        title={pageData.title}
        description={pageData.description}
        metaTitle={pageData.metaTitle}
        metaDescription={pageData.metaDescription}
        backgroundImage={backgroundImage}
      />

      <GiftGrid title={giftsData.sectionTitle} items={giftItems} />
      <GiftsNoticeSection
        eyebrow={pageData.noticeSection.eyebrow}
        title={pageData.noticeSection.title}
        description={pageData.noticeSection.description}
      />
    </>
  );
}
