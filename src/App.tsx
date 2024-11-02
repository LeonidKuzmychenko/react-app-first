import React from 'react';
import './styles/App.css';
import DayOfWeek from "./pages/DayOfWeek";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/high/Header";
import Footer from "./components/high/Footer";
import {DaysOfWeek} from "./enums/daysOfWeek";

function App() {
    const daysList = Object.values(DaysOfWeek);
    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<DayOfWeek day="monday" />} />
                    {daysList.map((day) => (
                        <Route key={day} path={`/${day}`} element={<DayOfWeek day={day} />} />
                    ))}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;