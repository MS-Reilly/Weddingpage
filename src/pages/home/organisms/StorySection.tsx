import img6 from "../assets/images/img6.webp";

export type StorySectionProps = {
  titleHighlight: string;
  titleSuffix: string;
  paragraphs: string[];
  imageAlt: string;
};

export default function StorySection({
  titleHighlight,
  titleSuffix,
  paragraphs,
  imageAlt,
}: StorySectionProps) {
  return (
    <section className="floral-section bg-white/95 py-24 sm:py-32 dark:bg-gray-900/90">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-brand-950 sm:text-5xl dark:text-white">
              <span className="text-brand-500">{titleHighlight}</span>
              {titleSuffix}
            </h2>
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${paragraph.slice(0, 12)}-${index}`}
                className={
                  index === 0
                    ? "mt-6 text-base/7 text-gray-600 dark:text-gray-300"
                    : "mt-4 text-base/7 text-gray-600 dark:text-gray-300"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={img6}
                alt={imageAlt}
                className="w-full rounded-3xl object-cover shadow-theme-lg"
              />
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-100/70 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
