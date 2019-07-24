import { app, remote } from 'electron';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { resources } from './config';

const detectedLang = (app || remote.app).getLocale();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: detectedLang,
    fallbackLng: 'en-US',
    debug: process.env.NODE_ENV !== 'production',
    whitelist: ['en', 'en-US'],
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
