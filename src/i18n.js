import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'
import enLanguage from './i18n/locales/en/translation.json'

use(initReactI18next).init({
  debug: true,
  appendNamespaceToMissingKey: true,
  lng: 'en-US',
  fallbackLng: 'en-US',
  resources: {
    en: {
      translation: enLanguage,
      code: 'en-US',
      name: 'English',
    },
  },
  react: {},
  interpolation: {},
})
