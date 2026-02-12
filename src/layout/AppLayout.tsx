import { Outlet } from "react-router-dom";
import Header from "./../components/organisms/header/Header";
import { headerData } from "./../components/organisms/header/header.data.ts";
import Footer from "../components/organisms/footer/Footer";
import RsvpModal from "../components/organisms/rsvp/RsvpModal";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedHeaderData = getLocalizedData(headerData, language);

  return (
    <div className="min-h-screen xl:flex flex-col gap-0">
      <Header data={localizedHeaderData} />

      <div className="mx-auto max-w-10xl w-full flex-1 relative">
        <Outlet />
      </div>

      {children}

      <Footer />

      <RsvpModal />
    </div>
  );
};

export default AppLayout;
