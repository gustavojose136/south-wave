import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) 
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) 
  .init({
    fallbackLng: 'pt',
    supportedLngs: ['en', 'pt', 'zh'],
    debug: true, 
    interpolation: {
      escapeValue: false, 
    },
    backend: {
      loadPath: '/locales/{{lng}}/common.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
