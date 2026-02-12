type GiftsNoticeSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function GiftsNoticeSection({
  eyebrow,
  title,
  description,
}: GiftsNoticeSectionProps) {
  return (
    <section className="floral-section-gray bg-gradient-to-r from-brand-500 to-brand-200 py-16">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/50 bg-white/85 p-8 text-center shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-brand-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-brand-700">{description}</p>
        </div>
      </div>
    </section>
  );
}
