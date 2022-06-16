import "../styles/globals.css";
import type { AppProps } from "next/app";
import CommentsProvider from "../src/contexts/CommentsContext";
import VideosProvider from "../src/contexts/VideosContext";
function App({ Component, pageProps }: AppProps) {
  return (
    <VideosProvider>
      <CommentsProvider>
        <Component {...pageProps} />
      </CommentsProvider>
    </VideosProvider>
  );
}

export default App;
