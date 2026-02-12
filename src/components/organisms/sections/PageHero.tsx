import { Button } from "@components/atoms/button";

export type PageHeroProps = {
  title: string;
  highlight?: string;
  subtitle?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
};

export default function PageHero({
  title,
  highlight,
  subtitle,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  backgroundImage,
}: PageHeroProps) {
  const hasPrimaryCta = primaryCtaLabel && primaryCtaHref;
  const hasSecondaryCta = secondaryCtaLabel && secondaryCtaHref;

  return (
    <section className="relative isolate overflow-hidden pt-14 bg-white dark:bg-gray-900">
      {backgroundImage ? (
        <>
          <img
            alt=""
            src={backgroundImage}
            className="absolute inset-0 -z-10 size-full object-cover not-dark:hidden"
          />
          <img
            alt=""
            src={backgroundImage}
            className="absolute inset-0 -z-10 size-full object-cover opacity-30 dark:hidden"
          />
        </>
      ) : (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-50 via-white to-brand-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl py-20 sm:py-28 lg:py-36 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance text-brand-950 dark:text-white">
            {title}{" "}
            {highlight ? (
              <span className="text-brand-500">{highlight}</span>
            ) : null}
          </h1>
          {subtitle ? (
            <p className="mt-6 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
              {subtitle}
            </p>
          ) : null}

          {hasPrimaryCta || hasSecondaryCta ? (
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              {hasPrimaryCta ? (
                <Button
                  size="lg"
                  variant="primary"
                  as="a"
                  href={primaryCtaHref}
                >
                  {primaryCtaLabel}
                </Button>
              ) : null}
              {hasSecondaryCta ? (
                <Button
                  size="lg"
                  variant="ghost"
                  as="a"
                  href={secondaryCtaHref}
                >
                  {secondaryCtaLabel}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-brand-50 to-brand-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-brand-500 to-brand-50 opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </section>
  );
}
