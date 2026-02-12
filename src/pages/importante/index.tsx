import InfoPage from "../info/InfoPage";
import pageData from "./data/importante.json";
import ImportantRulesSection from "./organisms/ImportantRulesSection";
import ImportantNoticeSection from "./organisms/ImportantNoticeSection";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function ImportantePage() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedPageData = getLocalizedData(pageData, language);
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
      <ImportantRulesSection
        title={localizedPageData.rulesSection.title}
        subtitle={localizedPageData.rulesSection.subtitle}
        rules={localizedPageData.rulesSection.rules}
      />
      <ImportantNoticeSection
        eyebrow={localizedPageData.noticeSection.eyebrow}
        title={localizedPageData.noticeSection.title}
        description={localizedPageData.noticeSection.description}
      />
    </>
  );
}
