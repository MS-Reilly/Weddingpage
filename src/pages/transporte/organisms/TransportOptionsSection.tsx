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
  buttons: {
    dublin: {
      text: string;
      url: string;
    };
    belfast: {
      text: string;
      url: string;
    };
  };
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
              <div className="lg:w-1/2 lg:h-full">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={card.from}
                    className="h-64 lg:h-full w-full object-cover"
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
                <div>
                  <ul className="mt-6 space-y-2 text-sm text-slate-700">
                    {card.prices.map((price) => (
                      <li key={price} className="flex items-center gap-2">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {price}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={card.buttons.dublin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                      </svg>
                      {card.buttons.dublin.text}
                    </a>
                    <a
                      href={card.buttons.belfast.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                      </svg>
                      {card.buttons.belfast.text}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
