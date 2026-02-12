import PageMeta from "@components/atoms/helmet/PageMeta";
import PageHero from "@components/organisms/sections/PageHero";
import ContactHero from "./organisms/ContactHero";
import contactData from "./data/contact.json";
import heroContact from "./assets/images/hero_contact.webp";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { getLocalizedData } from "@/utils/i18n";

export default function Contact() {
  const language = useSelector((state: RootState) => state.language.value);
  const localizedContactData = getLocalizedData(contactData, language);

  return (
    <>
      <PageMeta
        title={localizedContactData.meta.title}
        description={localizedContactData.meta.description}
      />
      <PageHero
        title={localizedContactData.hero.title}
        subtitle={localizedContactData.hero.subtitle}
        backgroundImage={heroContact}
      />
      <ContactHero content={localizedContactData} />
    </>
  );
}
