import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function RedirectHandler() {
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");

    // Функция проверки безопасности URL
    const isSafeUrl = (link) => {
        if (!link) return false;
        // Запрещаем javascript: и символы < и >
        const forbiddenPatterns = ["javascript:", "<", ">"];
        return !forbiddenPatterns.some(pattern => link.toLowerCase().includes(pattern));
    };

    useEffect(() => {
        if (url && isSafeUrl(url)) {
            // Если это внешний URL (начинается с http или https), делаем прямой редирект
            if (url.startsWith("http://") || url.startsWith("https://")) {
                window.location.href = url;
            } else {
                // Внутренний редирект по сайту
                window.location.href = `${window.location.origin}${url}`;
            }
        }
    }, [url]);

    return (
        <>
            <Header />
            <div className="content-hor">
                <h1>Перенаправление...</h1>
                {url && isSafeUrl(url) ? (
                    <p>Если вы не были перенаправлены, нажмите <a href={url}>сюда</a>.</p>
                ) : (
                    <p>Некорректная или небезопасная ссылка для редиректа.</p>
                )}
            </div>
            <Footer />
        </>
    );
}
