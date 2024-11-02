import React from 'react';
import {useTranslation} from "react-i18next";

interface MainProps {
    day: string;
}

function DayOfWeek(props: MainProps) {
    const [t, i18n] = useTranslation();

    return (
        <main className="flex-grow bg-gray-100 p-8">
            <p className="text-xl">
                {t(props.day)}
            </p>
        </main>
    );
}

export default DayOfWeek;
