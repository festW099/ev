// src/components/Footer.jsx
import React from 'react';
import './footer.css'; // Подключаем стили
// import Button from '@mui/material/Button';

// const startCockroachAnimation = () => {
//     setIsRunning(true);
//     const animate = () => {
//         setPosition({
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//         });
//
//         setTimeout(animate, Math.random() * 3000 + 1000); // случайные интервалы
//     };
//     animate();

function Footer() {
    return (
        <footer className="footer">
            <p>Контактная информация:</p>
            <div className="social-icons" id="socseti">
                <a href="https://t.me/ender-vanilla"><img src="img/telegram.webp" alt="Telegram"/></a>
                <a href="https://vk.com/ender_vanilla"><img src="img/vk.webp" alt="ВКонтакте"/></a>
                <a href="https://discord.gg/Fh9mVnRy24"><img src="img/discord.svg" alt="Discord"/></a>
                <a href="https://hotmc.ru/minecraft-server-257605"><img src="img/Hotmc.ico" alt="Hotmc"/></a>
                <a href="https://www.youtube.com/@mirik9724"><img src="img/Youtube.webp" alt="Youtube"/></a>
            </div>
            <p>Email: mirik123465.bisnes@gmail.com</p>
            <p>Не связано с Mojang, Microsoft или Minecraft.</p>
            <p>&copy; 2023 – 2025 Все права защищены<a href={"/secret-section"}>.</a></p>
        </footer>
    );
}

export default Footer;