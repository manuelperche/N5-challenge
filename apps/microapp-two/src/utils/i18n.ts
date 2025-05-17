import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "../translations/en.json";
import esTranslations from "../translations/es.json";

const LANGUAGE_KEY = "app-language";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    lng: localStorage.getItem(LANGUAGE_KEY) || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

// Listen for language changes from the host app
window.addEventListener("languageChanged", () => {
  const newLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
  i18n.changeLanguage(newLanguage);
});

// Also listen for storage events (in case the language is changed in another tab)
window.addEventListener("storage", (event) => {
  if (event.key === LANGUAGE_KEY) {
    const newLanguage = event.newValue || "en";
    i18n.changeLanguage(newLanguage);
  }
});

export default i18n; 