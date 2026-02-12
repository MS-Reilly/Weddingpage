import transportData from "../data/transportOptions.json";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

interface TransportCard {
  from: string;
  title: string;
  description: string;
  prices: string[];
  image: string;
}

export default function TransportOptionsSection() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedTransportData = getLocalizedData(transportData, language) as {
    title: string;
    subtitle: string;
    cards: TransportCard[];
    map: {
      title: string;
      introTitle: string;
      intro: string;
      description: string;
      embedUrl: string;
    };
  };
  const cards = localizedTransportData.cards;
  const transportImages = import.meta.glob("../assets/*", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  return (
    <section className="floral-section-light mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
          {localizedTransportData.title}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {localizedTransportData.subtitle}
        </h2>
      </div>

      <div className="rounded-2xl border border-brand-100 bg-white/95 p-6 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
              {localizedTransportData.map.title}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">
              {localizedTransportData.map.introTitle}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {localizedTransportData.map.intro}
            </p>
            <p className="mt-4 text-sm text-slate-600">
              {localizedTransportData.map.description}
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-brand-100">
            <iframe
              title={localizedTransportData.map.title}
              src={localizedTransportData.map.embedUrl}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-10">
        {cards.map((card, index) => {
          const imageUrl = card.image
            ? transportImages[`../assets/${card.image}`]
            : undefined;
          const isEven = index % 2 === 0;

          return (
            <article
              key={`${card.from}-${card.title}`}
              className={`overflow-hidden rounded-2xl border border-brand-100 bg-white/95 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.45)] backdrop-blur lg:flex ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="lg:w-1/2">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={card.from}
                    className="h-64 w-full object-cover"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
                    {card.from}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {card.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  {card.prices.map((price) => (
                    <li key={price} className="flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
                      {price}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
