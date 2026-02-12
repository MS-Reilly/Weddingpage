type DressCodeExample = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

type DressCodeExamplesSectionProps = {
  sectionTitle: string;
  sectionSubtitle?: string;
  items: DressCodeExample[];
};

export default function DressCodeExamplesSection({
  sectionTitle,
  sectionSubtitle,
  items,
}: DressCodeExamplesSectionProps) {
  return (
    <section className="floral-section-light mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
          {sectionTitle}
        </p>
        {sectionSubtitle ? (
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {sectionSubtitle}
          </h2>
        ) : null}
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex h-full flex-col gap-4 rounded-3xl border border-brand-100 bg-white/95 p-6 shadow-[0_22px_50px_-30px_rgba(15,23,42,0.5)] backdrop-blur"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <div className="mt-4 overflow-hidden rounded-2xl border border-brand-100 bg-slate-50">
                <img
                  src={new URL(item.imageSrc, import.meta.url).href}
                  alt={item.imageAlt}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
