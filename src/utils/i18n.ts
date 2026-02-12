import type { Language } from "@/store/features/languageSlice";

export type Localized<T> = {
  es: T;
  en: T;
};

export const getLocalizedData = <T>(
  data: Localized<T> | T,
  language: Language,
): T => {
  if (
    typeof data === "object" &&
    data !== null &&
    Object.prototype.hasOwnProperty.call(data, "es") &&
    Object.prototype.hasOwnProperty.call(data, "en")
  ) {
    return (data as Localized<T>)[language];
  }

  return data as T;
};
