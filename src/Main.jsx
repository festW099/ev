// Main.jsx
import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Main() {
    return (
        <div className="App">
            <Header />
            <main>
                <div className="center-hor">
                    <h1>Ender vanilla - Без вайповая ламповая ванилла с элементами роле плэя</h1>
                    <p><b>Наша главаная цель</b> дать игрокам <em>хорошее настроение</em> и <em>возможность найти друзей</em></p>

                    <h3 className="margin-b">Причины играть на Ender vanilla:</h3>
                    <ul>
                        <li>Нет вайпов</li>
                        <li>Честное комьюнити</li>
                        <li>Бесплатная проходка</li>
                        <li>Настоящая Ванилла с улучшенным игровым процессом</li>
                        <li>Нам уже 2 года и мы не закроемся!</li>
                    </ul>

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Main; // Экспортируем компонент по умолчанию