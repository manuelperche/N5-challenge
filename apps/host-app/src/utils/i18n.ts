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
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
