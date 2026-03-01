import InfoPage from "../info/InfoPage";
import pageData from "./data/viaje.json";
import detailsData from "./data/details.json";
import DetailsSection from "./organisms/DetailsSection";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function ViajePage() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedPageData = getLocalizedData(pageData, language);
  const localizedDetailsData = getLocalizedData(detailsData, language);
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
      <DetailsSection
        title={localizedDetailsData.detailsTitle}
        items={localizedDetailsData.details}
      />
    </>
  );
}
