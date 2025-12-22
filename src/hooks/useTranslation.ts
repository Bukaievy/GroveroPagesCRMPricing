import { useParams } from "react-router-dom";
import nlTranslations from "@/locales/nl.json";
import enTranslations from "@/locales/en.json";

type Translations = typeof nlTranslations;

export const useTranslation = () => {
  const { lang } = useParams<{ lang: string }>();
  const locale = lang === "en" ? "en" : "nl";
  
  const translations: Translations = locale === "en" ? enTranslations : nlTranslations;
  
  return {
    t: translations,
    locale,
    isEnglish: locale === "en",
    isDutch: locale === "nl",
  };
};
