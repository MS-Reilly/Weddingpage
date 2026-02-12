import { ThreeColumnImageGridProps } from "./ThreeColumnImageGrid.types";

export const ThreeColumnImageGrid = ({
  images,
  className = "",
}: ThreeColumnImageGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 ${className}`}
      data-testid="three-column-grid"
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
