import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import {
  LANGUAGE_STORAGE_KEY,
  setLanguage,
  type Language,
} from "@/store/features/languageSlice";

const isLanguage = (value: string | null): value is Language =>
  value === "es" || value === "en";

export default function LanguageBootstrap() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isLanguage(stored)) {
      if (stored !== language) {
        dispatch(setLanguage(stored));
      }
    } else {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }

    setIsInitialized(true);
  }, [dispatch]);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [isInitialized, language]);

  return null;
}
