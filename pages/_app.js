import { FavoriteProvider } from "../contexts/favorite";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FavoriteProvider>
      <Component {...pageProps} />
    </FavoriteProvider>
  );
}

export default MyApp;
