import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            regButtonText: 'Registration',
            linkToHome: 'Home',
            changeLanguageButtonRU: 'RU',
            changeLanguageButtonEN: 'EN',
            text: "text in english"


        }
    },
    ru: {
        translation: {
            regButtonText: 'Регистрация',
            linkToHome: 'Домой',
            changeLanguageButtonRU: 'РУ',
            changeLanguageButtonEN: 'АНГЛ',
            text: "текст на русском"

        }
    }
}

i18next.use(initReactI18next).init({
    resources,
    lng: 'en'
});

export default i18n