import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

interface TranslationResources {
  [key: string]: {
    translation: {
      [key: string]: string;
    };
  };
}

// Placeholder for translations
const resources: TranslationResources = {
  en: {
    translation: {
      greeting: "Host Application",
      microappOneTitle: "Content from Microapp One:",
      microappTwoTitle: "Content from Microapp Two:",
      loadingButton: "Loading Button...",
      loadingCard: "Loading Card...",
      languageSwitcher: "Switch Language:",
    },
  },
  es: {
    translation: {
      greeting: "Aplicación Host",
      microappOneTitle: "Contenido de Microapp Uno:",
      microappTwoTitle: "Contenido de Microapp Dos:",
      loadingButton: "Cargando Botón...",
      loadingCard: "Cargando Tarjeta...",
      languageSwitcher: "Cambiar Idioma:",
    },
  },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Use en if detected lng is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
