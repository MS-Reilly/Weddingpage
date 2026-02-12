import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/uiSlice";
import languageReducer from "./features/languageSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
