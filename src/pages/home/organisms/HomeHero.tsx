import heroImage from "../assets/images/Hero.webp";
import ImageCarouselStack from "@components/atoms/ImageCarouselStack/ImageCarouselStack";
import { Button } from "@components/atoms/button";
import { useDispatch } from "react-redux";
import { openRsvp } from "@/store/features/uiSlice";

import Img1 from "../assets/images/Img1.webp";
import Img2 from "../assets/images/Img2.webp";
import Img3 from "../assets/images/Img3.webp";
import Img4 from "../assets/images/Img4.webp";
import Img5 from "../assets/images/Img5.webp";

const images = [Img1, Img2, Img3, Img4, Img5];

export type HomeHeroProps = {
  title: string;
  highlight: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryHref: string;
};

export default function HomeHero({
  title,
  highlight,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  secondaryHref,
}: HomeHeroProps) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <div className="relative isolate overflow-hidden pt-14">
        {/* background image */}
        <img
          alt=""
          src={heroImage}
          className="absolute inset-0 -z-10 size-full object-cover not-dark:hidden"
        />
        <img
          alt=""
          src={heroImage}
          className="absolute inset-0 -z-10 size-full object-cover opacity-30 dark:hidden"
        />

        {/* content container */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Make hero shorter by reducing vertical padding */}
          <div className="mx-auto max-w-7xl py-20 sm:py-28 lg:py-36 grid lg:grid-cols-2 items-center gap-12">
            {/* TEXT (left) */}
            <div className="text-center lg:text-left">
              <h1 className="text-8xl sm:text-7xl lg:text-9xl font-semibold tracking-tight text-balance text-brand-950 dark:text-white">
                {title} <span className="text-brand-500">{highlight}</span>{" "}
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
                {subtitle}
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => dispatch(openRsvp())}
                >
                  {primaryCtaLabel}
                </Button>
                <Button size="lg" variant="ghost" as="a" href={secondaryHref}>
                  {secondaryCtaLabel}
                </Button>
              </div>
            </div>

            {/* IMAGES (right) — hidden on md and smaller; scaled down to reduce visual height */}
            <div className="hidden lg:flex justify-end">
              <div className="origin-right scale-90 xl:scale-95 2xl:scale-100">
                {/* Optional: nudge up to align vertically with the heading */}
                <div className="-mt-6">
                  <ImageCarouselStack images={images} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* decorative shapes (keep or remove as you like) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-brand-50 to-brand-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-brand-500 to-brand-50 opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
