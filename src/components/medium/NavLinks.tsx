import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {DaysOfWeek} from "../../enums/daysOfWeek";

function NavLinks() {
    const [t, i18n] = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const path = event.target.value;
        if (path && path !== location.pathname) navigate(path);
    };

    const daysList = Object.values(DaysOfWeek);

    return (
        <div className="my-4">
            <select
                onChange={handleNavigationChange}
                value={location.pathname === "/" ? "/monday" : location.pathname}  // Устанавливаем "/monday" как значение для "/"
                className="px-4 py-2 border rounded text-gray-800 dark:bg-gray-600 dark:text-gray-100"
            >
                {daysList.map((day) => (
                    <option key={day} value={`/${day}`}>
                        {t(day)}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default NavLinks;
