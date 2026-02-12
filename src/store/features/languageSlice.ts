import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Language = "es" | "en";

const STORAGE_KEY = "language";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "es";
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : "es";
};

type LanguageState = {
  value: Language;
};

const initialState: LanguageState = {
  value: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.value = action.payload;
    },
    toggleLanguage: (state) => {
      state.value = state.value === "es" ? "en" : "es";
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export { STORAGE_KEY as LANGUAGE_STORAGE_KEY };
export default languageSlice.reducer;
