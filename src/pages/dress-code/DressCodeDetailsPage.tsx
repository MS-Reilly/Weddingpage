import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import InfoPage from "../info/InfoPage";
import pageData from "./data/dress-code-details.json";
import DressCodeExamplesSection from "./organisms/DressCodeExamplesSection";
import DressCodePinkSection from "./organisms/DressCodePinkSection";
import NotFound from "../OtherPage/NotFound";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";
import dressImage from "../home/assets/images/dress.webp";
import suitImage from "../home/assets/images/suit.webp";
import colorImage from "../home/assets/images/rose gold.webp";
import scarfImage from "../home/assets/images/Scarf.webp";

const imageMap = {
  dress: dressImage,
  suit: suitImage,
  colors: colorImage,
  scarf: scarfImage,
};

export default function DressCodeDetailsPage() {
  const { section } = useParams();
  const language = useSelector((state: RootState) => state.language.value);
  const localizedData = getLocalizedData(pageData, language) as {
    sections: Record<
      string,
      {
        title: string;
        description: string;
        metaTitle: string;
        metaDescription: string;
        backgroundImage?: string;
        sectionTitle: string;
        sectionSubtitle?: string;
        cards: Array<{
          id: string;
          title: string;
          description: string;
          imageKey: keyof typeof imageMap;
          imageAlt: string;
        }>;
        pinkSection: {
          eyebrow: string;
          title: string;
          description: string;
          imageKey: keyof typeof imageMap;
          imageAlt: string;
        };
      }
    >;
  };

  const sectionKey = section ?? "";
  const sectionData = localizedData.sections[sectionKey];
  const backLabel =
    language === "es" ? "Volver a dress code" : "Back to dress code";

  const backgroundImage = useMemo(() => {
    if (!sectionData?.backgroundImage) return undefined;
    return new URL(sectionData.backgroundImage, import.meta.url).href;
  }, [sectionData]);

  if (!sectionData) {
    return <NotFound />;
  }

  return (
    <>
      <InfoPage
        title={sectionData.title}
        description={sectionData.description}
        metaTitle={sectionData.metaTitle}
        metaDescription={sectionData.metaDescription}
        backgroundImage={backgroundImage}
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <Link
          to="/dress-code"
          className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 transition hover:border-brand-300 hover:bg-brand-50"
        >
          {backLabel}
        </Link>
      </div>
      <DressCodeExamplesSection
        sectionTitle={sectionData.sectionTitle}
        sectionSubtitle={sectionData.sectionSubtitle}
        items={sectionData.cards.map((card) => ({
          ...card,
          imageSrc: imageMap[card.imageKey],
        }))}
      />
      <DressCodePinkSection
        eyebrow={sectionData.pinkSection.eyebrow}
        title={sectionData.pinkSection.title}
        description={sectionData.pinkSection.description}
        imageSrc={imageMap[sectionData.pinkSection.imageKey]}
        imageAlt={sectionData.pinkSection.imageAlt}
      />
    </>
  );
}
