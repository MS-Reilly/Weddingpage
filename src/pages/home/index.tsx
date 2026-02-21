import PageMeta from "@components/atoms/helmet/PageMeta";
import HomeHero from "./organisms/HomeHero";
import StorySection from "./organisms/StorySection";
import BentoSection from "./organisms/BentoSection";
import HowItWorksSection from "./organisms/HowItWorksSection";
// import { VideoSection } from "./organisms/VideoSection";
import { Link } from "react-router-dom";
// import videoWeb from "./assets/VideoHome.mp4";
import img1 from "@assets/images/wedding/ImageHotel.webp";
import img2 from "@assets/images/wedding/Chapel.webp";
import img3 from "@assets/images/wedding/bellingham.webp";
import homeData from "./data/home.json";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function Home() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedHomeData = getLocalizedData(homeData, language);
  const itineraryImageMap = {
    hotel: img1,
    chapel: img2,
    castle: img3,
  };

  const itinerarySteps = localizedHomeData.itinerary.steps.map((step) => ({
    ...step,
    image: itineraryImageMap[step.imageKey as keyof typeof itineraryImageMap],
  }));

  return (
    <>
      <PageMeta
        title={localizedHomeData.meta.title}
        description={localizedHomeData.meta.description}
      />
      <HomeHero
        title={localizedHomeData.hero.title}
        highlight={localizedHomeData.hero.highlight}
        subtitle={localizedHomeData.hero.subtitle}
        primaryCtaLabel={localizedHomeData.hero.primaryCtaLabel}
        secondaryCtaLabel={localizedHomeData.hero.secondaryCtaLabel}
        secondaryHref={localizedHomeData.hero.secondaryHref}
      />

      <StorySection
        titleHighlight={localizedHomeData.story.titleHighlight}
        titleSuffix={localizedHomeData.story.titleSuffix}
        paragraphs={localizedHomeData.story.paragraphs}
        imageAlt={localizedHomeData.story.imageAlt}
      />
      <HowItWorksSection
        titleStart={localizedHomeData.itinerary.titleStart}
        titleHighlight={localizedHomeData.itinerary.titleHighlight}
        titleEnd={localizedHomeData.itinerary.titleEnd}
        steps={itinerarySteps}
        theme="default"
        ctaLabel={localizedHomeData.itinerary.ctaLabel}
        ctaHref={localizedHomeData.itinerary.ctaHref}
      />
      <BentoSection
        titleStart={localizedHomeData.dressGuide.titleStart}
        titleHighlight={localizedHomeData.dressGuide.titleHighlight}
        men={localizedHomeData.dressGuide.men}
        reservedColors={localizedHomeData.dressGuide.reservedColors}
        extras={localizedHomeData.dressGuide.extras}
        women={localizedHomeData.dressGuide.women}
      />
      {/* Commented out until video is hosted externally */}
      {/* <div className="h-screen sm:h-auto">
        <VideoSection
          videoSrc={videoWeb}
          heading={localizedHomeData.video.heading}
          subheading={localizedHomeData.video.subheading}
          variant="fullscreen"
          className="sm:!h-[600px] md:!h-[700px]"
        >
          <div className="mt-8">
            <Link
              to={localizedHomeData.video.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-white"
            >
              {localizedHomeData.video.ctaLabel}
            </Link>
          </div>
        </VideoSection>
      </div> */}
    </>
  );
}
