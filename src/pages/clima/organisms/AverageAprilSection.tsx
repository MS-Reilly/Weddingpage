type AverageStat = {
  id: string;
  label: string;
  value: string;
};

type AverageAprilSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats: AverageStat[];
};

export default function AverageAprilSection({
  eyebrow,
  title,
  description,
  stats,
}: AverageAprilSectionProps) {
  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(255,240,245,0.9),_rgba(245,214,210,0.9)_35%,_rgba(216,169,155,0.95)_70%,_rgba(164,110,96,0.98)_100%)] py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-brand-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-brand-700">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-600">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-brand-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
