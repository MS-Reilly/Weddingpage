import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnalyticsProvider } from "./providers/AnalyticsProvider";
import { ReduxProvider } from "./providers/ReduxProvider";
import ScrollToTop from "@components/atoms/scroll/ScrollToTop";
import LanguageBootstrap from "./providers/LanguageBootstrap";

import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ItinerarioPage from "./pages/itinerario";
import TransportePage from "./pages/transporte";
import UbicacionesPage from "./pages/ubicaciones";
import ViajePage from "./pages/viaje";
import ViajeVuelosPage from "./pages/viaje/vuelos";
import ViajeHotelesPage from "./pages/viaje/hoteles";
import NewryPage from "./pages/newry";
import IrlandaPage from "./pages/irlanda";
import FaqPage from "./pages/faq";
import DressCodePage from "./pages/dress-code";
import DressCodeDetailsPage from "./pages/dress-code/DressCodeDetailsPage";
import ClimaPage from "./pages/clima";
import DietasPage from "./pages/dietas";
import ImportantePage from "./pages/importante";
import RegalosPage from "./pages/regalos";

export default function App() {
  return (
    <ReduxProvider>
      <LanguageBootstrap />
      <Router>
        <AnalyticsProvider>
          <ScrollToTop />
          <AppLayout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="contacto" element={<Contact />} />
              <Route path="itinerario" element={<ItinerarioPage />} />
              <Route path="transporte" element={<TransportePage />} />
              <Route path="ubicaciones" element={<UbicacionesPage />} />
              <Route path="viaje" element={<ViajePage />} />
              <Route path="viaje/vuelos" element={<ViajeVuelosPage />} />
              <Route path="viaje/hoteles" element={<ViajeHotelesPage />} />
              <Route path="newry" element={<NewryPage />} />
              <Route path="irlanda" element={<IrlandaPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="dress-code" element={<DressCodePage />} />
              <Route
                path="dress-code/:section"
                element={<DressCodeDetailsPage />}
              />
              <Route path="clima" element={<ClimaPage />} />
              <Route path="dietas" element={<DietasPage />} />
              <Route path="importante" element={<ImportantePage />} />
              <Route path="regalos" element={<RegalosPage />} />

              {/* Fallback Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </AnalyticsProvider>
      </Router>
    </ReduxProvider>
  );
}
