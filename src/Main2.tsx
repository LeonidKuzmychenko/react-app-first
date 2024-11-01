import React from 'react';

interface MainProps {
    children: React.ReactNode;
}

function Main2({children}:MainProps) {
    return(
        <main className="flex-grow bg-gray-100 p-8">
            {children}
        </main>
    );
}

export default Main2;
