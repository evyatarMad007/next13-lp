import LayoutContainer from "@/components/layout/LayoutContainer/LayoutContainer";
import "../styles/globals.css";
import "../styles/Home.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutContainer>
      <Component {...pageProps} />
    </LayoutContainer>
  );
}
