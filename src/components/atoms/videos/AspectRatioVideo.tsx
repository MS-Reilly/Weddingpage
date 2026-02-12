import React from "react";
import { AspectRatioVideoProps } from "./AspectRatioVideo.types";

export const AspectRatioVideo: React.FC<AspectRatioVideoProps> = ({
  src,
  aspectRatio = "16:9",
  poster,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = false,
  className = "",
  playbackRate = 1,
  preload = "auto",
  playsInline = false,
}) => {
  const aspectRatioClasses = {
    "21:9": "aspect-w-21 aspect-h-9",
    "16:9": "aspect-w-16 aspect-h-9",
    "4:3": "aspect-w-4 aspect-h-3",
    "1:1": "aspect-w-1 aspect-h-1",
  };

  return (
    <div
      data-testid="video-container"
      className={`relative w-full ${aspectRatioClasses[aspectRatio]} ${className}`}
    >
      <video
        data-testid="aspect-ratio-video"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        preload={preload}
        playsInline={playsInline}
      />
    </div>
  );
};
