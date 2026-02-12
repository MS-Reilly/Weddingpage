import PageMeta from "@components/atoms/helmet/PageMeta";
import NotFoundPanel from "./organisms/NotFoundPanel";
import notFoundData from "./data/notFound.json";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function NotFound() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedNotFoundData = getLocalizedData(notFoundData, language);

  return (
    <>
      <PageMeta
        title={localizedNotFoundData.meta.title}
        description={localizedNotFoundData.meta.description}
      />
      <NotFoundPanel
        heading={localizedNotFoundData.heading}
        body={localizedNotFoundData.body}
        ctaLabel={localizedNotFoundData.ctaLabel}
        ctaHref={localizedNotFoundData.ctaHref}
        footerSuffix={localizedNotFoundData.footerSuffix}
      />
    </>
  );
}
