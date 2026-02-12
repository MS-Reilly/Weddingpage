import InfoPage from "../info/InfoPage";
import pageData from "./data/dress-code.json";
import detailsData from "./data/details.json";
import DetailsSection from "./organisms/DetailsSection";
import BentoSection from "../home/organisms/BentoSection";
import DressCodeNoticeSection from "./organisms/DressCodeNoticeSection";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";
import imgHotel from "@assets/images/wedding/ImageHotel.webp";
import imgChapel from "@assets/images/wedding/Chapel.webp";
import imgBellingham from "@assets/images/wedding/bellingham.webp";

export default function DressCodePage() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedPageData = getLocalizedData(pageData, language) as {
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    note?: string;
    backgroundImage?: string;
    dressGuide: {
      titleStart: string;
      titleHighlight: string;
      men: {
        title: string;
        description: string;
        ctaLabel: string;
        ctaHref: string;
        ariaLabel: string;
        imageAlt: string;
      };
      reservedColors: {
        title: string;
        description: string;
        ctaLabel: string;
        ctaHref: string;
        ariaLabel: string;
        imageAlt: string;
      };
      extras: {
        title: string;
        description: string;
        ctaLabel: string;
        ctaHref: string;
        ariaLabel: string;
        imageAlt: string;
      };
      women: {
        title: string;
        description: string;
        ctaLabel: string;
        ctaHref: string;
        ariaLabel: string;
        imageAlt: string;
      };
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
        backgroundImage={backgroundImage}
      />
      <BentoSection
        titleStart={localizedPageData.dressGuide.titleStart}
        titleHighlight={localizedPageData.dressGuide.titleHighlight}
        men={localizedPageData.dressGuide.men}
        reservedColors={localizedPageData.dressGuide.reservedColors}
        extras={localizedPageData.dressGuide.extras}
        women={localizedPageData.dressGuide.women}
      />
      <DressCodeNoticeSection
        eyebrow={localizedPageData.notice.eyebrow}
        title={localizedPageData.notice.title}
        description={localizedPageData.notice.description}
        imageSrc={imageMap[localizedPageData.notice.imageKey]}
        imageAlt={localizedPageData.notice.imageAlt}
      />
    </>
  );
}
