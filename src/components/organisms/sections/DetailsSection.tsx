export type DetailsItem = {
  id: string;
  text: string;
};

export type DetailsSectionProps = {
  title?: string;
  items: DetailsItem[];
  listLabel?: string;
  emptyMessage?: string;
};

export default function DetailsSection({
  title,
  items,
  listLabel,
  emptyMessage,
}: DetailsSectionProps) {
  const hasItems = items.length > 0;
  const ariaLabel = listLabel ?? title ?? "Detalles";

  return (
    <section className="floral-section py-12 sm:py-16">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-black/5">
          {title ? (
            <h2 className="text-2xl font-semibold text-brand-700 sm:text-3xl">
              {title}
            </h2>
          ) : null}
          {hasItems ? (
            <ul
              aria-label={ariaLabel}
              className={
                title
                  ? "mt-6 space-y-3 text-slate-700"
                  : "space-y-3 text-slate-700"
              }
            >
              {items.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-slate-700">
              {emptyMessage ?? "Pronto compartiremos más información."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
