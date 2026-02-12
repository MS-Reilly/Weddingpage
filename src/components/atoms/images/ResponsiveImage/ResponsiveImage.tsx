import { ResponsiveImageProps } from "./ResponsiveImage.types";

export const ResponsiveImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  objectFit = "cover",
}: ResponsiveImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`w-full ${className}`}
      style={{ objectFit }}
      loading={priority ? "eager" : "lazy"}
    />
  );
};
