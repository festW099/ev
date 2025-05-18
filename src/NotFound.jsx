import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="center-hor">
                <h1>404 — Страница не найдена</h1>
                <p>Такой страницы не существует.</p>
                <a href="/">На главную</a>
            </div>
            <Footer />
        </>
    );
}
