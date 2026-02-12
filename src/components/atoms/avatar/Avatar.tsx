import { useState } from "react";
import type { AvatarProps } from "./Avatar.types";

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = "md",
  fallback,
  showStatus,
  isOnline,
  className = "",
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative inline-block ${sizeClasses[size]} ${className}`}>
      {hasError && fallback ? (
        <div className="h-full w-full rounded-full overflow-hidden">
          {fallback}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={handleError}
          className="h-full w-full object-cover rounded-full"
        />
      )}

      {showStatus && (
        <span
          data-testid="status-indicator"
          className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-gray-900 ${
            isOnline ? "bg-green-400" : "bg-gray-400"
          }`}
        />
      )}
    </div>
  );
};
