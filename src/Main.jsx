// Main.jsx
import React, { useEffect } from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import '../src/css/main.css';

function Main() {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in, .slide-up');
        elements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, []);

    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <div className="center-hor glass-container">
                    <h1 className="fade-in">Ender vanilla - Безвайповая ламповая ванилла с элементами роле плэя</h1>
                    <p className="slide-up delay-1"><b>Наша главная цель</b> - дать игрокам <em>хорошее настроение</em> и <em>возможность найти друзей</em></p>

                    <h3 className="margin-b slide-up delay-2">Причины играть на Ender vanilla:</h3>
                    <ul className="features-list slide-up delay-3">
                        <li><span>✦</span> Нет вайпов</li>
                        <li><span>✦</span> Честное комьюнити</li>
                        <li><span>✦</span> Бесплатная проходка</li>
                        <li><span>✦</span> Настоящая Ванилла с улучшенным игровым процессом</li>
                        <li><span>✦</span> Нам уже 2 года и мы не закроемся!</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Main;