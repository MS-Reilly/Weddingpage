import InfoPage from "../info/InfoPage";
import pageData from "./data/clima.json";
import averageData from "./data/average.json";
import detailsData from "./data/details.json";
import AverageAprilSection from "./organisms/AverageAprilSection";
import DetailsSection from "./organisms/DetailsSection";
import WeatherNowSection from "./organisms/WeatherNowSection";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function ClimaPage() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedPageData = getLocalizedData(pageData, language);
  const localizedAverageData = getLocalizedData(averageData, language);
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

      <WeatherNowSection />
      <AverageAprilSection
        eyebrow={localizedAverageData.eyebrow}
        title={localizedAverageData.title}
        description={localizedAverageData.description}
        stats={localizedAverageData.stats}
      />
    </>
  );
}
