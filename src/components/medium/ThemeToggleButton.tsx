import {useTranslation} from "react-i18next";
import React from "react";
import {useTheme} from "../../ThemeContext";
import ToggleButton from "../low/ToggleButton";

function ThemeToggleButton() {
    const {darkMode, toggleTheme} = useTheme();
    const {t} = useTranslation();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center border border-gray-300 rounded px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100"
        >
            <ToggleButton isActive={!darkMode} onClick={toggleTheme} label={t('theme-light-mode')}/>
            <ToggleButton isActive={darkMode} onClick={toggleTheme} label={t('theme-dark-mode')}/>
        </button>
    );
}

export default ThemeToggleButton;