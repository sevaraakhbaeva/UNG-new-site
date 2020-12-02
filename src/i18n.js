import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageEN from "./locate/en/translate.json";
import languageRU from "./locate/ru/translate.json";
import languageUZ from "./locate/uz/translate.json";

i18n.use(initReactI18next).init({
  resources: {
    en: languageEN,
    ru: languageRU,
    uz: languageUZ,
  },
  lng: "uz",
  fallbackLng: "uz",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default",
  },
});

export default i18n;
