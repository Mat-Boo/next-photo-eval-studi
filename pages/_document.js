import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
    <Html lang='fr'>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
    </Html>
    )
}
}

