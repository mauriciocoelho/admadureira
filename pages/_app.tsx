import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AD Madureira</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
