export * from './lib';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    debug: true,
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'ar',
    detection: {
      order: [
        'cookie',
        'htmlTag',
        'path',
        'querystring',
        'localStorage',
        'subdomain'
      ],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    }
    // resources: {
    // 	en: {
    // 		translation: {
    // 			common: {
    // 				arabic: 'Arabic',
    // 			},
    // 		},
    // 	},
    // 	ar: {
    // 		translation: {
    // 			common: {
    // 				arabic: 'عربي',
    // 			},
    // 		},
    // 	},
    // },
  });

export { LanguageProvider, useLanguageContext } from './lib';

export default i18n;
