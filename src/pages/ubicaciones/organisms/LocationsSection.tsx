import { IconsGoogleMaps } from "@/assets/svgs/icons";
import locationsData from "../data/locations.json";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

interface LocationCard {
  name: string;
  address: string;
  mapsQuery: string;
  note?: string;
  image: string;
}

export default function LocationsSection() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedLocationsData = getLocalizedData(locationsData, language) as {
    title: string;
    subtitle: string;
    cardLabel: string;
    mapsCta: string;
    cards: LocationCard[];
  };
  const cards = localizedLocationsData.cards;
  const locationImages = import.meta.glob("../assets/*", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  return (
    <section className="floral-section-light mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
          {localizedLocationsData.title}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          {localizedLocationsData.subtitle}
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {cards.map((card) => {
          const imageUrl = card.image
            ? locationImages[`../assets/${card.image}`]
            : undefined;
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            card.mapsQuery,
          )}`;

          return (
            <article
              key={card.name}
              className="overflow-hidden rounded-2xl border border-brand-100 bg-white/95 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.45)] backdrop-blur"
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={card.name}
                  className="h-44 w-full object-cover"
                />
              )}
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
                  {localizedLocationsData.cardLabel}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  {card.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.address}
                </p>
                <div className="mt-5">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 transition hover:border-brand-300 hover:bg-brand-50"
                  >
                    <IconsGoogleMaps className="h-4 w-4" aria-hidden="true" />
                    {localizedLocationsData.mapsCta}
                  </a>
                </div>
                {card.note && (
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
                    {card.note}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
