"use client";

import { Link } from "react-router-dom";
import dressImage from "../assets/images/dress.webp";
import suitImage from "../assets/images/suit.webp";
import colorImage from "../assets/images/rose gold.webp";
import scarfImage from "../assets/images/Scarf.webp";

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
  men: DressGuideCard;
  reservedColors: DressGuideCard;
  extras: DressGuideCard;
  women: DressGuideCard;
};

export default function BentoSection({
  titleStart,
  titleHighlight,
  men,
  reservedColors,
  extras,
  women,
}: BentoSectionProps) {
  return (
    <section className="floral-section bg-white/95 py-18 sm:py-24 dark:bg-gray-900/90">
      <div className="mx-auto max-w-2xl px-5 lg:max-w-7xl lg:px-6">
        <h1 className="max-w-7xl mx-auto text-4xl font-semibold tracking-tight text-brand-950 sm:text-6xl text-center">
          {titleStart} <span className="text-brand-500">{titleHighlight}</span>
        </h1>
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

              <div className="relative w-full grow min-h-[300px] sm:min-h-[400px]">
                <div className="absolute inset-x-8 top-8 bottom-8 overflow-hidden rounded-2xl bg-gray-900 shadow-2xl outline outline-white/10 dark:bg-gray-900/60">
                  <img
                    alt={men.imageAlt}
                    src={suitImage}
                    className="w-full h-full object-cover"
                  />
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
              <div className="flex flex-1 items-center justify-center px-8 pb-8 sm:px-10">
                <img
                  alt={reservedColors.imageAlt}
                  src={colorImage}
                  className="w-full h-full rounded-2xl object-cover"
                />
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
              <div className="flex flex-1 items-center justify-center px-8 pb-8 sm:px-10">
                <img
                  alt={extras.imageAlt}
                  src={scarfImage}
                  className="w-full h-full rounded-2xl object-cover"
                />
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
              <div className="relative w-full grow min-h-[300px] sm:min-h-[400px]">
                <div className="absolute top-8 right-8 bottom-8 left-8 overflow-hidden rounded-2xl bg-gray-900 shadow-2xl outline outline-white/10 dark:bg-gray-900/60">
                  <img
                    alt={women.imageAlt}
                    src={dressImage}
                    className="w-full h-full object-cover"
                  />
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
    </section>
  );
}
