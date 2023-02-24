import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html>
            <Head>
                <meta name='description' content='Очен център Христови / Изработка на очила' />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
                <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Semi+Condensed:wght@400;700;900&display=swap" rel="stylesheet" />
                <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css' />
                <link rel="preload" href="/public/img/oferti/oferta_3.jpg" as="image" />
                <link rel="preload" href="/public/img/oferti/oferta_2.jpg" as="image" />

            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}