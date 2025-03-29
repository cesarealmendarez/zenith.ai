import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Playfair_Display } from "next/font/google"
import Head from "next/head";

const playfair_Display = Playfair_Display({
    subsets: [],
    weight: [],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Zenith Web Solutions</title>
            </Head>

            <style jsx global>{`
                html {
                    font-family: ${playfair_Display.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
