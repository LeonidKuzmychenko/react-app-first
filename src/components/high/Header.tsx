import React from 'react';
import NavLinks from "../medium/NavLinks";
import ThemeToggleButton from "../medium/ThemeToggleButton";
import LanguageToggleButton from "../medium/LanguageToggleButton";

function Header() {
    return (
        <header className="bg-blue-500 text-white py-4 px-8 dark:bg-gray-800 dark:text-gray-100">
            <nav className="flex justify-between items-center">
                <NavLinks/>
                <div className="flex space-x-4">
                    <ThemeToggleButton/>
                    <LanguageToggleButton/>
                </div>
            </nav>
        </header>
    );
}

export default Header;
