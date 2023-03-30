import LayoutContainer from "@/components/layout/LayoutContainer/LayoutContainer";
import "../styles/globals.css";
import "../styles/Home.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <LayoutContainer>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </LayoutContainer>
  );
}
