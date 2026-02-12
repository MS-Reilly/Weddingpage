import { VideoSectionProps } from "./VideoSection.types";
import { trackVideoInteraction } from "../../../utils/analytics";
import { useEffect, useRef } from "react";

export function VideoSection({
  videoSrc,
  alt = "Background video",
  heading,
  subheading,
  children,
  showControls = false,
  autoPlay = true,
  loop = true,
  muted = true,
  className = "",
  variant = "contained",
  showOverlay = true,
}: VideoSectionProps) {
  const containerClasses = {
    fullscreen: "relative w-full h-screen",
    contained:
      "relative w-full h-screen sm:h-[500px] md:h-[600px] lg:h-[700px]",
    background: "relative w-full min-h-screen",
  }[variant as keyof typeof containerClasses];

  const videoClasses = {
    fullscreen: "absolute inset-0 w-full h-full object-cover",
    contained: "absolute inset-0 w-full h-full object-cover",
    background: "absolute inset-0 w-full h-full object-cover opacity-50",
  }[variant as keyof typeof videoClasses];

  const overlayClasses = showOverlay
    ? "absolute inset-0 bg-gradient-to-r from-gray-900/75 to-gray-900/25"
    : "";

  const contentClasses = {
    fullscreen: "absolute inset-0 flex items-center justify-center text-white",
    contained: "absolute inset-0 flex items-center justify-center text-white",
    background:
      "relative z-10 flex min-h-screen items-center justify-center text-white",
  }[variant as keyof typeof contentClasses];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => trackVideoInteraction("play", videoSrc);
    const handlePause = () => trackVideoInteraction("pause", videoSrc);
    const handleEnded = () => trackVideoInteraction("end", videoSrc);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, [videoSrc]);

  return (
    <section className={`${containerClasses} ${className}`}>
      <video
        ref={videoRef}
        className={videoClasses}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={showControls}
        playsInline
        aria-label={alt}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showOverlay && <div className={overlayClasses} aria-hidden="true" />}

      <div className={contentClasses}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {heading && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {subheading}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
