import Layout from '@components/Layout/Layout';
import type { AppProps } from 'next/app';
import '../style.css'
 
export default function MyApp({ Component, pageProps }: AppProps) {
    // providers - context, themes, data
    // Layout
    // props adicionales 
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}