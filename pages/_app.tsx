import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../src/components/NavBar/NavBar";
import "../src/index.css";
import "../src/components/NavBar/Nav.css";
import "../src/components/inicio/inicio.css";
import "../src/components/Library/library.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bibliorathum</title>
        <meta
          name="description"
          content="Bibliorathum, una biblioteca antigua para recorrer conocimiento moderno."
        />
        <meta name="theme-color" content="#1d130c" />
        <link rel="icon" type="image/png" href="/logo-biblio.png" />
        <link rel="apple-touch-icon" href="/logo-biblio.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
