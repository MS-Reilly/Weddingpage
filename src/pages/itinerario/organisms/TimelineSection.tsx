import timelineData from "../data/timeline.json";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  image: string;
}

export default function TimelineSection() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedTimelineData = getLocalizedData(timelineData, language) as {
    title: string;
    subtitle: string;
    items: TimelineItem[];
  };
  const items = localizedTimelineData.items;
  const timelineImages = import.meta.glob("../assets/*", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  return (
    <section className="floral-section-light relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative z-10 mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
          {localizedTimelineData.title}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {localizedTimelineData.subtitle}
        </h2>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-28 hidden h-[calc(100%-7rem)] w-px -translate-x-1/2 bg-brand-200/70 lg:block" />

      <div className="relative z-10 space-y-12 lg:space-y-16">
        {items.map((item, index) => {
          const imageUrl = item.image
            ? timelineImages[`../assets/${item.image}`]
            : undefined;
          const isLeft = index % 2 === 0;

          return (
            <div key={`${item.time}-${item.title}`} className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
                <div
                  className={
                    isLeft
                      ? "lg:col-start-1 lg:pr-12"
                      : "lg:col-start-2 lg:pl-12"
                  }
                >
                  <div className="w-full rounded-2xl border border-brand-100 bg-white/90 p-5 shadow-[0_25px_50px_-25px_rgba(15,23,42,0.45)] backdrop-blur">
                    <div className="overflow-hidden rounded-xl">
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={item.title}
                          className="h-44 w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="mt-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
                        {item.time}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-7 hidden -translate-x-1/2 lg:block">
                <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-brand-500 shadow-[0_0_0_6px_rgba(234,179,8,0.2)]" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
