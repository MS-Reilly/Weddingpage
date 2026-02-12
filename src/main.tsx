import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/atoms/helmet/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { initAnalytics } from "./utils/analytics";

// Initialize analytics BEFORE rendering the app to ensure autocapture hooks early
initAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <App />
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>
);
