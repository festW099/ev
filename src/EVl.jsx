import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
    return (
        <>
            <Header />

            <main className="center-hor p-4">
                <h1 className="text-3xl font-bold mb-4">
                    Добро пожаловать на сервер Ender Vanilla!
                </h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Почему стоит выбрать наш лаунчер — EVL?</h2>
                    <ul className="list-disc list-inside space-y-2 text-base">
                        <li>
                            <strong>Безопасность и чистота:</strong> никакой рекламы, встроенного шпионажа или сторонних загрузчиков.
                        </li>
                        <li>
                            <strong>Автоматическое подключение:</strong> при запуске ты сразу попадаешь на сервер, без лишних настроек.
                        </li>
                        <li>
                            <strong>Поддержка модов и ресурс паков:</strong> всё нужное для игры уже готово — ты просто играешь.
                        </li>
                        <li>
                            <strong>Обновления в один клик:</strong> не нужно следить за версиями — мы всё делаем за тебя.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Что делает нас лучше других?</h2>
                    <p className="text-base">
                        Большинство лаунчеров перегружены лишним — мы сосредоточились на главном: стабильной и уютной игре без вайпов,
                        с душевным комьюнити и удобным доступом для всех. EVL — это не просто лаунчер, а часть опыта на Ender Vanilla.
                    </p>
                </section>
            </main>

            <Footer />
        </>
    );
}
