import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <div className="center-hor">
                <h1>Добро пожаловать на сервер Ender Vanilla!</h1>
            </div>
            <Footer />
        </>
    );
}
