// Utility for combining CSS class names
import { classNames } from "@/utils/classNames";

// Type definition for each step in the How It Works section
// Modify this to add more properties to each step
export type Step = {
  image: string; // Path to the image file
  title: string; // Title of the step
  time?: string; // Time label
  text: string; // Description text for the step
};

// Props interface for the HowItWorksSection component
// Add new props here if you need to extend the component's functionality
export type HowItWorksSectionProps = {
  titleStart?: string; // First part of the section title
  titleHighlight?: string; // Middle (highlighted) part of the section title
  titleEnd?: string; // Last part of the section title
  steps: Step[]; // Array of steps to display
  theme?: "default"; // Theme color scheme
  className?: string; // Additional CSS classes
  ctaLabel?: string; // CTA label
  ctaHref?: string; // CTA link
};

// Gradient color definitions for different themes
// Modify these values to change the background gradients
const themeStyles = {
  default: "from-brand-500 to-brand-200", // Default theme colors
};

const themeStylesText = {
  default: "text-brand-600", // Default theme colors
};

export default function HowItWorksSection({
  titleStart = "",
  titleHighlight = "",
  titleEnd = "",
  steps,
  theme = "default",
  className = "",
  ctaLabel,
  ctaHref = "#",
}: HowItWorksSectionProps) {
  return (
    // Main section container with theme-based gradient background
    // Modify py-14/py-20 to adjust vertical padding
    <section
      className={classNames(
        "floral-section-gray bg-gradient-to-r",
        themeStyles[theme],
        "py-12 sm:py-16 dark:bg-gray-900",
        className,
      )}
    >
      {/* Section title with optional highlighted middle text */}
      {/* Adjust text-4xl/text-6xl to change title size */}
      <h1 className="max-w-7xl mx-auto text-6xl mb-10 font-semibold tracking-tight text-white md:text-8xl lg:text-7xl text-center">
        {titleStart}{" "}
        {titleHighlight && (
          <span className={classNames(themeStylesText[theme])}>
            {titleHighlight}
          </span>
        )}
        {titleEnd && " " + titleEnd}
      </h1>

      {/* Grid container for steps */}
      {/* Modify gap-10 to adjust spacing between steps */}
      {/* Modify grid-cols-2/grid-cols-3 to change layout breakpoints */}
      <div className="max-w-8xl mx-auto mt-8 grid gap-6 lg:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={classNames(
              "text-center px-6 md:px-4 mb-6",
              i < steps.length - 1 &&
                "relative after:mx-auto after:mt-6 after:block after:h-8 after:w-px after:border-l-2 after:border-dashed after:border-white md:after:h-12 lg:after:hidden",
            )}
          >
            {/* Container for the image box and connector lines */}
            {/* Modify h-44 to adjust the height of the video container */}
            <div className="relative mb-8 h-44 w-full md:h-60 lg:h-56">
              {/* Image container box */}
              {/* Modify h-44/w-44 to change image box size */}
              {/* Modify p-4 to adjust padding around the image */}
              <div className="absolute left-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-1.5 shadow-xl md:h-56 md:w-56 lg:h-56 lg:w-56">
                <img
                  src={step.image}
                  alt={step.title}
                  className="mx-auto h-full w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>

              {/* Dashed connector lines between steps */}
              {/* Only show between boxes (not after the last box) */}
              {/* hidden md:block controls responsive visibility */}
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 top-1/2 z-0 hidden lg:block h-[2px] w-[calc(100%+1.5rem)] -translate-y-1/2 border-t-2 border-dashed border-white" />
              )}
            </div>

            {/* Step title and description */}
            {/* Modify text-lg to adjust title size */}
            <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-3xl">
              {step.title}
            </h2>
            {step.time && (
              <p className="mt-2 text-xl font-semibold font-imperial text-[color:var(--color-gold-100)] md:text-2xl lg:text-xl">
                {step.time}
              </p>
            )}
          </div>
        ))}
      </div>

      {ctaLabel && (
        <div className="mt-6 flex justify-center">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-2 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-white"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </section>
  );
}
