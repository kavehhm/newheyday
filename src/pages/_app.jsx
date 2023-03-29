import 'focus-visible'
import '@/styles/tailwind.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
      <link rel="icon" href="/heylogo.png" />
        <link rel="manifest" href="/heylogo.png" />
        <link rel="apple-touch-icon" href="/heylogo.png" />
        </Head>    
    <Component {...pageProps} />
    
    </>
    )
}

//src\images\heylogo.png