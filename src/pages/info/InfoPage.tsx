import PageMeta from "@components/atoms/helmet/PageMeta";
import PageHero from "@components/organisms/sections/PageHero";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";
import infoPageData from "./data/infoPage.json";

export type InfoPageProps = {
  title: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  note?: string;
  backgroundImage?: string;
};

export default function InfoPage({
  title,
  description,
  metaTitle,
  metaDescription,
  note,
  backgroundImage,
}: InfoPageProps) {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedInfoPageData = getLocalizedData(infoPageData, language);

  return (
    <>
      <PageMeta
        title={
          metaTitle ?? `${localizedInfoPageData.metaTitlePrefix} | ${title}`
        }
        description={metaDescription ?? description}
      />
      <PageHero
        title={title}
        subtitle={description}
        backgroundImage={backgroundImage}
      />
      {note ? (
        <section className="floral-section -mt-12 pb-10">
          <div className="mx-auto w-full max-w-4xl px-6">
            <div className="rounded-3xl bg-white/90 p-6 text-center text-sm text-slate-600 shadow-sm ring-1 ring-black/5">
              {note}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
