type DressCodeNoticeSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function DressCodeNoticeSection({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: DressCodeNoticeSectionProps) {
  return (
    <section className="floral-section-gray bg-gradient-to-br from-brand-700 via-brand-600 to-brand-300 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex-1 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/90">
            {description}
          </p>
        </div>

        <div className="flex-1">
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.6)]">
            <img
              src={new URL(imageSrc, import.meta.url).href}
              alt={imageAlt}
              className="h-80 w-full object-cover sm:h-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
