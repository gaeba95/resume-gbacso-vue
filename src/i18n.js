// i18n.js
import { createI18n } from 'vue-i18n';
import fr_loc from "./locales/fr.json";
import en_loc from "./locales/en.json";

// This will be auto-populated by unplugin-vue-i18n from `src/locales/*.json`
export default createI18n({
  legacy: false,
  locale: 'en',              // default locale
  fallbackLocale: 'en',
  messages: {
    fr: fr_loc,
    en: en_loc,
    }
});