import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Playfair_Display, Montserrat, Space_Grotesk, Cinzel } from "@next/font/google"

const playfair_Display = Playfair_Display({
    subsets: [],
    weight: []
})

// const montserrat = Montserrat({
//     subsets: [],
//     weight: []
// })

const cinzel = Cinzel({
    subsets: [],
    weight: []
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${playfair_Display.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}
