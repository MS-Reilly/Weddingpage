type NewryHighlightItem = {
  id: string;
  title: string;
  location: string;
  description: string;
  categoryLabel: string;
  imageSrc: string;
  imageAlt: string;
};

type NewryHighlightsSectionProps = {
  sectionTitle: string;
  sectionSubtitle?: string;
  locationLabel: string;
  items: NewryHighlightItem[];
};

export default function NewryHighlightsSection({
  sectionTitle,
  sectionSubtitle,
  locationLabel,
  items,
}: NewryHighlightsSectionProps) {
  return (
    <section className="floral-section-light mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
          {sectionTitle}
        </p>
        {sectionSubtitle ? (
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {sectionSubtitle}
          </h2>
        ) : null}
      </div>

      <div className="space-y-10">
        {items.map((item, index) => (
          <article
            key={item.id}
            className={`flex flex-col gap-6 rounded-3xl border border-brand-100 bg-white/95 p-6 shadow-[0_22px_50px_-30px_rgba(15,23,42,0.45)] backdrop-blur md:items-center md:gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden rounded-2xl border border-brand-100 bg-slate-50">
                <img
                  src={new URL(item.imageSrc, import.meta.url).href}
                  alt={item.imageAlt}
                  className="h-56 w-full object-cover sm:h-64"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                {item.categoryLabel}
              </span>
              <h3 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                {locationLabel}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                {item.location}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
