import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем локальные файлы с переводами
import enTranslations from '../locales/en/common.json';
import ruTranslations from '../locales/ru/common.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            ru: { translation: ruTranslations },
        },
        fallbackLng: 'en', // язык по умолчанию
        supportedLngs: ['en', 'ru'], // поддерживаемые языки
        interpolation: {
            escapeValue: false, // отключает экранирование
        },
    });

export default i18n;
