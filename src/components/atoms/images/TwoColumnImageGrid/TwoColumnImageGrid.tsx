import { TwoColumnImageGridProps } from "./TwoColumnImageGrid.types";

export const TwoColumnImageGrid = ({
  images,
  className = "",
}: TwoColumnImageGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${className}`}
      data-testid="two-column-grid"
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-full border border-gray-200 rounded-xl dark:border-gray-800"
        />
      ))}
    </div>
  );
};
