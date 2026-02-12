export type GiftItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
};

export type GiftGridProps = {
  title: string;
  items: GiftItem[];
};

export default function GiftGrid({ title, items }: GiftGridProps) {
  return (
    <section className="floral-section bg-white/95 py-16 sm:py-20 dark:bg-gray-900/90">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-brand-700 sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 dark:bg-gray-900/80"
            >
              <div className="relative h-48 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-brand-950 dark:text-white">
                    {item.name}
                  </h3>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-white/10 dark:text-white">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
                <div className="mt-6">
                  <a
                    href={item.ctaHref}
                    className="inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-500"
                  >
                    {item.ctaLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
