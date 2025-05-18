import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function RedirectHandler() {
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");

    useEffect(() => {
        if (url) {
            // Если указана внешняя ссылка (начинается с http или https), переход сразу
            if (url.startsWith("http://") || url.startsWith("https://")) {
                window.location.href = url;
            } else {
                // Иначе — редирект внутри сайта
                window.location.href = `${window.location.origin}${url}`;
            }
        }
    }, [url]);

    return (
        <>
            <Header />
            <div className="content-hor">
                <h1>Перенаправление...</h1>
                <p>Если вы не были перенаправлены, нажмите <a href={url}>сюда</a>.</p>
            </div>
            <Footer />
        </>
    );
}
