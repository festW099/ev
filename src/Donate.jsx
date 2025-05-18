import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Donate() {
    return (
        <>
            <Header />
            <div id="content">
                <div className="center-hor">
                    <h1>Вы можете купить донат через:</h1>
                    <ul>
                        <li>
                            <h2>
                                <a href="https://discord.gg/Df8WPMz7fc" target="_blank" rel="noopener noreferrer">
                                    Криптовалюту(или переводом)
                                </a>
                            </h2>
                        </li>
                        <li>
                            <h2>
                                <a href="https://shop.ender-vanilla.ru/" target="_blank" rel="noopener noreferrer">
                                    Через сайт
                                </a>
                            </h2>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}
