import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from './ThemeContext';
import {useTranslation} from "react-i18next";
import i18next from "i18next";

interface LangArgs {
    language: string
}

const Header: React.FC = () => {
    const {darkMode, toggleTheme} = useTheme();  // Используем контекст темы
    // const {t, i18n} = useTranslation();  // Хук для работы с переводами

    const toggleLanguage = async () => {
        const newLanguage = i18next.language === 'en' ? 'ru' : 'en';
        await i18next.changeLanguage(newLanguage);
    };

    return (
        <header className="bg-blue-500 text-white py-4 px-8 dark:bg-gray-800 dark:text-gray-100">
            <nav className="flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:underline dark:text-gray-100">Main1</Link>
                    </li>
                    <li>
                        <Link to="/main2" className="text-white hover:underline dark:text-gray-100">Main2</Link>
                    </li>
                </ul>
                <button
                    onClick={toggleTheme}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded dark:bg-gray-600 dark:text-gray-100"
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </nav>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-gray-600 dark:hover:bg-gray-500"
                onClick={toggleLanguage}  // Обработчик смены языка
            >
                {i18next.t('switch')}
            </button>
        </header>
    );
};

export default Header;
