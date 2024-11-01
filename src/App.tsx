import React from 'react';
import './App.css';
import Header from "./Header";
import Main2 from "./Main2";
import Footer from "./Footer";
import Main1 from "./Main1";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useTranslation} from 'react-i18next';

function App() {
    const {t, i18n} = useTranslation();  // Хук для работы с переводами

    return (
        <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={
                        <Main1>
                            <p className="text-xl">
                                {t('welcome')}
                            </p>
                        </Main1>
                    }/>
                    <Route path="/main2" element={
                        <Main2>
                            <p className="text-xl">
                                {t('welcome')} page2
                            </p>
                        </Main2>
                    }/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
