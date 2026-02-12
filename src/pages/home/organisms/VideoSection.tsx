import { useEffect, useMemo, useRef } from "react";
import type { VideoSectionProps } from "./VideoSection.types";

export function VideoSection({
  videoSrc,
  heading,
  subheading,
  children,
  showControls = false,
  autoPlay = true,
  loop = true,
  muted = true,
  className = "",
  variant = "contained",
  values,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (prefersReduced) {
      v.removeAttribute("autoplay");
      v.pause();
    } else {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, [prefersReduced]);

  const containerClasses = {
    fullscreen: "relative w-full h-screen",
    contained: "relative w-full aspect-video max-h-[70vh]",
    background: "relative w-full min-h-screen",
  }[variant];

  const videoClasses = {
    fullscreen: "absolute inset-0 w-full h-full object-cover",
    contained: "absolute inset-0 w-full h-full object-cover",
    background: "absolute inset-0 w-full h-full object-cover opacity-50",
  }[variant];

  const contentClasses = {
    fullscreen: "absolute inset-0 flex items-center justify-center text-white",
    contained: "absolute inset-0 flex items-center justify-center text-white",
    background:
      "relative z-10 flex min-h-screen items-center justify-center text-white",
  }[variant];

  return (
    <section
      className={`relative isolate overflow-hidden ${className} ${containerClasses}`}
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          className={videoClasses}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={showControls}
          playsInline
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className={contentClasses}>
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-40 lg:py-48">
          <div className="max-w-3xl">
            {heading && (
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                {heading}
              </h1>
            )}
            {subheading && (
              <p className="mt-6 text-lg text-white/80">{subheading}</p>
            )}

            {values && values.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-3">
                {values.map((value) => (
                  <li
                    key={value}
                    className="inline-flex items-center rounded-full bg-brand-950/25 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur-sm"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            )}

            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
