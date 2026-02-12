import InfoPage from "../info/InfoPage";
import pageData from "./data/dietas.json";
import StorySection from "../home/organisms/StorySection";
import DietasNoticeSection from "./organisms/DietasNoticeSection";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function DietasPage() {
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
      <StorySection
        titleHighlight={localizedPageData.storySection.titleHighlight}
        titleSuffix={localizedPageData.storySection.titleSuffix}
        paragraphs={localizedPageData.storySection.paragraphs}
        imageAlt={localizedPageData.storySection.imageAlt}
      />
      <DietasNoticeSection
        eyebrow={localizedPageData.noticeSection.eyebrow}
        title={localizedPageData.noticeSection.title}
        description={localizedPageData.noticeSection.description}
      />
    </>
  );
}
