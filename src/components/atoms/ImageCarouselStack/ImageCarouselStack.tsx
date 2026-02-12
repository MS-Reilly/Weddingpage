"use client";

import React, { useMemo, memo } from "react";
import type { ImageCarouselStackProps } from "./ImageCarouselStack.types";

const ImageCarouselStack: React.FC<ImageCarouselStackProps> = ({ images }) => {
  const safeImages = images ?? [];

  // Always call hooks before any return
  const { col1, col2, col3 } = useMemo(() => {
    const i = safeImages;
    return {
      col1: i[0] ? [i[0]] : [],
      col2: i.slice(1, 3),
      col3: i.slice(3, 5),
    };
  }, [safeImages]);

  if (safeImages.length === 0) return null;

  const renderImage = (src: string, index: number) => (
    <div key={src || index} className="relative">
      <img
        alt={`carousel-img-${index}`}
        src={src}
        className="shadow-xl shadow-brand-600/50 aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover dark:bg-gray-700/5"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
    </div>
  );

  return (
    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
      {/* Right Column */}
      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
        {col1.map(renderImage)}
      </div>

      {/* Middle Column */}
      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        {col2.map(renderImage)}
      </div>

      {/* Left Column */}
      <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
        {col3.map(renderImage)}
      </div>
    </div>
  );
};

export default memo(ImageCarouselStack);
