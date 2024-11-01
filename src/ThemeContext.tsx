import React, { createContext, useContext, useEffect, useState } from 'react';

// Интерфейс контекста
interface ThemeContextType {
    darkMode: boolean;
    toggleTheme: () => void;
}

// Создание контекста с типизацией
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProps {
    children: React.ReactNode;
}

// Провайдер темы
function ThemeProvider({ children }: ThemeProps) {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        // Сохранение темы в localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    useEffect(() => {
        // Изменение класса для темы и сохранение в localStorage
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
