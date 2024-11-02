import {useTranslation} from "react-i18next";
import React from "react";
import ToggleButton from "../low/ToggleButton";

function LanguageToggleButton(){
    const { i18n, t } = useTranslation();

    const changeLanguage = async (language: string) => {
        if (i18n.language !== language) {
            await i18n.changeLanguage(language);
        }
    };

    return (
        <div className="flex items-center border border-gray-300 rounded px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100">
            <ToggleButton
                isActive={i18n.language === 'en'}
                onClick={() => changeLanguage('en')}
                label={t('language-en')}
            />
            <ToggleButton
                isActive={i18n.language === 'ru'}
                onClick={() => changeLanguage('ru')}
                label={t('language-ru')}
            />
        </div>
    );
}

export default LanguageToggleButton;