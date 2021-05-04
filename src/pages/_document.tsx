import Document, { Head, Html, Main, NextScript } from 'next/Document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;600&display=swap" rel="stylesheet" />

                    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}