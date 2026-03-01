type DressCodePinkSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function DressCodePinkSection({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: DressCodePinkSectionProps) {
  return (
    <section className="floral-section-gray bg-gradient-to-r from-brand-500 to-brand-200 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex-1 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/95">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
