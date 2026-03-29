"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import dressImage from "../assets/images/dressBlue.png";
import suitImage from "../assets/images/tux.webp";
import colorImage from "../assets/images/rose gold.webp";
import coatImg from "../assets/images/coat.webp";
import ImageLightbox from "@/components/atoms/lightbox/ImageLightbox";

export type DressGuideCard = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ariaLabel: string;
  imageAlt: string;
};

export type BentoSectionProps = {
  titleStart: string;
  titleHighlight: string;
  titleComment: string;
  men: DressGuideCard;
  reservedColors: DressGuideCard;
  extras: DressGuideCard;
  women: DressGuideCard;
};

type LightboxImage = {
  src: string;
  alt: string;
} | null;

export default function BentoSection({
  titleStart,
  titleHighlight,
  titleComment,
  men,
  reservedColors,
  extras,
  women,
}: BentoSectionProps) {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section className="floral-section bg-white/95 py-18 sm:py-24 dark:bg-gray-900/90">
      <div className="mx-auto max-w-2xl px-5 lg:max-w-7xl lg:px-6">
        <h1 className="max-w-7xl mx-auto text-4xl font-semibold tracking-tight text-brand-950 sm:text-6xl text-center">
          {titleStart} <span className="text-brand-500">{titleHighlight}</span>
        </h1>
        <p className="max-w-7xl mx-auto mt-8 text-lg tracking-tight text-brand-800 sm:text-xl text-center">
          {titleComment}
        </p>
        {/* Bento grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Tall left: Men */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-3xl bg-white dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                <p className="text-lg font-semibold tracking-tight text-brand-600 max-lg:text-center dark:text-white">
                  {men.title}
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  {men.description}
                </p>
              </div>

              <div className="flex-1 px-4 pb-4 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
                <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-900 shadow-2xl outline outline-white/10 dark:bg-gray-900/60">
                  <div className="aspect-[3/4] lg:aspect-square w-full max-w-sm mx-auto lg:max-w-md">
                    <img
                      alt={men.imageAlt}
                      src={suitImage}
                      className="w-full h-full object-cover cursor-pointer transition hover:opacity-90"
                      onClick={() => openLightbox(suitImage, men.imageAlt)}
                    />
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 sm:px-10">
                <Link
                  to={men.ctaHref}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-950 underline underline-offset-4 decoration-brand-950/40 hover:decoration-brand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-950"
                  aria-label={men.ariaLabel}
                >
                  {men.ctaLabel}
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-3xl shadow-sm outline outline-black/5 dark:outline-white/15" />
          </div>

          {/* Top middle: Reserved colors */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-3xl bg-white max-lg:rounded-t-3xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-lg font-semibold tracking-tight text-brand-600 max-lg:text-center dark:text-white">
                  {reservedColors.title}
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  {reservedColors.description}
                </p>
              </div>
              <div className="flex-1 px-4 pb-4 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
                <div className="h-full w-full overflow-hidden rounded-2xl">
                  <div className="aspect-[3/4] lg:aspect-[4/5] w-full max-w-sm mx-auto">
                    <img
                      alt={reservedColors.imageAlt}
                      src={colorImage}
                      className="w-full h-full object-cover cursor-pointer transition hover:opacity-90"
                      onClick={() =>
                        openLightbox(colorImage, reservedColors.imageAlt)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 sm:px-10">
                <Link
                  to={reservedColors.ctaHref}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-950 underline underline-offset-4 decoration-brand-950/40 hover:decoration-brand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-950"
                  aria-label={reservedColors.ariaLabel}
                >
                  {reservedColors.ctaLabel}
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-3xl shadow-sm outline outline-black/5 max-lg:rounded-t-3xl dark:outline-white/15" />
          </div>

          {/* Bottom middle: Extra notes */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-3xl bg-white dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="text-lg font-semibold tracking-tight text-brand-600 max-lg:text-center dark:text-white">
                  {extras.title}
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  {extras.description}
                </p>
              </div>
              <div className="flex-1 px-4 pb-4 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
                <div className="h-full w-full overflow-hidden rounded-2xl">
                  <div className="aspect-[3/4] lg:aspect-[4/5] w-full max-w-sm mx-auto">
                    <img
                      alt={extras.imageAlt}
                      src={coatImg}
                      className="w-full h-full object-cover cursor-pointer transition hover:opacity-90"
                      onClick={() => openLightbox(coatImg, extras.imageAlt)}
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 sm:px-10">
                <Link
                  to={extras.ctaHref}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-950 underline underline-offset-4 decoration-brand-950/40 hover:decoration-brand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-950"
                  aria-label={extras.ariaLabel}
                >
                  {extras.ctaLabel}
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-3xl shadow-sm outline outline-black/5 dark:outline-white/15" />
          </div>

          {/* Tall right: Women */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-3xl bg-white max-lg:rounded-b-3xl lg:rounded-r-3xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                <p className="text-lg font-semibold tracking-tight text-brand-600 max-lg:text-center dark:text-white">
                  {women.title}
                </p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600 max-lg:text-center dark:text-gray-400">
                  {women.description}
                </p>
              </div>
              <div className="flex-1 px-4 pb-4 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
                <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-900 shadow-2xl outline outline-white/10 dark:bg-gray-900/60">
                  <div className="aspect-[3/4] lg:aspect-square w-full max-w-sm mx-auto lg:max-w-md">
                    <img
                      alt={women.imageAlt}
                      src={dressImage}
                      className="w-full h-full object-cover cursor-pointer transition hover:opacity-90"
                      onClick={() => openLightbox(dressImage, women.imageAlt)}
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 sm:px-10">
                <Link
                  to={women.ctaHref}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-950 underline underline-offset-4 decoration-brand-950/40 hover:decoration-brand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-950"
                  aria-label={women.ariaLabel}
                >
                  {women.ctaLabel}
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-3xl shadow-sm outline outline-black/5 max-lg:rounded-b-3xl lg:rounded-r-3xl dark:outline-white/15" />
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        imageSrc={lightboxImage?.src || ""}
        imageAlt={lightboxImage?.alt || ""}
        isOpen={!!lightboxImage}
        onClose={closeLightbox}
      />
    </section>
  );
}
