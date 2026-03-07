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
import suitImage from "../home/assets/images/tux.webp";
import colorImage from "../home/assets/images/rose gold.webp";
import roseImg from "./assets/rose gold.webp";
import whiteImg from "./assets/white.jpg";
import scarfImage from "../home/assets/images/coat.webp";
import suitPieceImage from "./assets/tuxPieces.jpg";
import suitJacketImage from "./assets/jacket.jpg";
import suitVestImage from "./assets/vest.jpg";
import suitPantsImage from "./assets/tuxPiecesBlue.jpg";
import suitBowImage from "./assets/bow.jpg";
import suitShoesImage from "./assets/shoes.jpg";
import suitSocksImage from "./assets/socks.webp";
import suitShirtImage from "./assets/shirt.jpg";
import dressBlue from "./assets/dressBlue.png";
import dressCoats from "./assets/dresscoats.png";
import dressMaterial from "./assets/dressMaterial.png";
import dressNecklase from "./assets/dressNecklase.png";
import dressPink from "./assets/dressPink.png";
import dressShirt from "./assets/dressShirt.png";
import dressShoes from "./assets/dressShoes.png";
import dressTwo from "./assets/twoDress.png";
import dressNotAllowed from "./assets/notAllowedDress.png";

const imageMap = {
  dress: dressImage,
  suit: suitImage,
  suitPiece: suitPieceImage,
  suitJacket: suitJacketImage,
  suitVest: suitVestImage,
  suitPants: suitPantsImage,
  suitBow: suitBowImage,
  suitShoes: suitShoesImage,
  suitSocks: suitSocksImage,
  suitShirt: suitShirtImage,

  dressBlue: dressBlue,
  dressCoats: dressCoats,
  dressMaterial: dressMaterial,
  dressNecklase: dressNecklase,
  dressPink: dressPink,
  dressShirts: dressShirt,
  dressShoes: dressShoes,
  dressTwo: dressTwo,
  dressNotAllowed: dressNotAllowed,

  colors: colorImage,
  roseColor: roseImg,
  whiteColor: whiteImg,
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

  const pageImages = import.meta.glob("./assets/*", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const backgroundImage = useMemo(() => {
    if (!sectionData?.backgroundImage) return undefined;
    return pageImages[sectionData.backgroundImage];
  }, [sectionData, pageImages]);

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
